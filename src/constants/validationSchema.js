import * as Yup from 'yup';

export const VALIDATION_SHIPPING = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, '*Please enter valid name')
    .max(40)
    .required('*Please, enter recipient full name'),
  phone: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, '*Phone number is not valid')
    .required('*Please, enter phone number'),
  address: Yup.string().required('*Required'),
  optional: Yup.string().required('*Required'),
  city: Yup.string().required('*Required'),
  country: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required('Required'),
      value: Yup.string().required('Required'),
    })
  ),
  zip: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits')
    .required('*Required'),
});

export const VALIDATION_BILLING = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, '*Please enter valid name')
    .max(40)
    .required('*Please, enter billing full name'),
  email: Yup.string().email('Invalid email').required('*Required'),
  address: Yup.string().required('*Required'),
  optional: Yup.string().required('*Required'),
  city: Yup.string().required('*Required'),
  country: Yup.array().of(
    Yup.object().shape({
      label: Yup.string().required('Required'),
      value: Yup.string().required('Required'),
    })
  ),
  zip: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits')
    .required('*Required'),
});

export const VALIDATION_PAYMENT = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, '*Please enter valid name')
    .max(40)
    .required('*Please, enter your full name as it appears on your card'),
  credit: Yup.number().required('*Required'),
  date: Yup.number().required('*Please enter cvv code'),
  code: Yup.string()
    .matches(/^\d{3}$/, '*Please enter valid cvv code')
    .min(3)
    .max(3)
    .required('*Please enter cvv code'),
});
