import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, '*Names must have at least 3 characters').required('*Please, enter recipient full name'),
  phone: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, '*Phone number is not valid')
    .required('*Please, enter phone number'),
  email: Yup.string().email('*Email is not valid').required('*Please, enter email address'),
  address: Yup.string().required('Required'),
  optional: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
});
