import { ICountries } from './Countries';

export interface IUserFormValues {
  name: string;
  phone: string;
  email: string;
  address: string;
  optional: string;
  city: string;
  country: ICountries[];
  zip: string;
}

export interface IPaymentFormValues {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}
