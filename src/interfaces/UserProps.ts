import { ICountries } from 'interfaces/Countries';

export interface IUserProps {
  readonly user: {
    name: string;
    phone: string;
    email: string;
    address: string;
    optional: string;
    city: string;
    country: ICountries[];
    zip: string;
  };
  setName: Function;
  setPhone: Function;
  setEmail: Function;
  setAddress: Function;
  setOptional: Function;
  setCity: Function;
  setCountry: Function;
  setZip: Function;
  fetchCity: Function;
}
