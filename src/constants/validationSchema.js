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
  credit: Yup.string()
    .matches(/^[0-9]+$/, '*Please, enter a valid credit card number')
    .min(16, 'Must be 16 digits')
    .max(16, 'Must be 16 digits')
    .required('*Please, enter credit card number'),
  date: Yup.string()
    .matches(/^\d{4}$/, '*Please enter valid date')
    .min(4, 'Must be 4 digits')
    .max(4, 'Must be 4 digits')
    .required('*Please enter expire date'),
  code: Yup.string()
    .matches(/^\d{3}$/, '*Please enter valid cvv code')
    .min(3)
    .max(3)
    .required('*Please, enter cvv code'),
});
