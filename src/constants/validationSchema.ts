import * as Yup from 'yup';

export const VALIDATION_SHIPPING = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, '*Please enter valid name')
    .max(40)
    .required('*Please, enter recipient full name'),
  phone: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, '*Phone number is not valid')
    .required('*Please, enter phone number'),
  address: Yup.string().required('*Please, enter shipping address'),
  optional: Yup.string().required('*Please, enter optional address'),
  city: Yup.string().required('*Please, enter city'),
  country: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required('Required'),
      value: Yup.string().required('Required'),
    })
  ),
  zip: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be min 5 digits')
    .max(10)
    .required('*Please, enter zip code'),
});

export const VALIDATION_BILLING = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, '*Please enter valid name')
    .max(40)
    .required('*Please, enter billing full name'),
  email: Yup.string().email('Invalid email').required('*Required'),
  address: Yup.string().required('*Please, enter shipping address'),
  optional: Yup.string().required('*Please, enter optional address'),
  city: Yup.string().required('*Please, enter city'),
  country: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required('*Required'),
      value: Yup.string().required('*Required'),
    })
  ),
  zip: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be min 5 digits')
    .max(10)
    .required('*Please, enter zip code'),
});

export const VALIDATION_PAYMENT = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, '*Please, enter valid name')
    .max(40)
    .required('*Please, enter your full name as it appears on your card'),
  cardNumber: Yup.string()
    .matches(/^[0-9 ]+$/, '*Please, enter valid number')
    .min(19, '*Credit number must be 16 digits')
    .max(19)
    .required('*Please, enter credit number'),
  expiryDate: Yup.string()
    .matches(/^[0-9 ]+\//gi, '*Please, enter valid date')
    .min(7, '*Date must be 4 digits')
    .max(7)
    .required('*Please, enter expiry date'),
  cvc: Yup.string()
    .matches(/^[0-9]+$/, '*Please, enter valid cvc')
    .min(3, '*Cvc code must be 3 digits')
    .max(3)
    .required('*Please, enter cvc code'),
});
