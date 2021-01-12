import {
  SET_NAME,
  SET_PHONE,
  SET_EMAIL,
  SET_ADDRESS,
  SET_OPTIONAL,
  SET_CITY,
  SET_COUNTRY,
  SET_ZIP,
} from 'store/ducks/user';
import { ICountries } from 'interfaces/Countries';

interface actionType1 {
  type: typeof SET_NAME;
  payload: string;
}

interface actionType2 {
  type: typeof SET_PHONE;
  payload: string;
}

interface actionType3 {
  type: typeof SET_EMAIL;
  payload: string;
}

interface actionType4 {
  type: typeof SET_ADDRESS;
  payload: string;
}

interface actionType5 {
  type: typeof SET_OPTIONAL;
  payload: string;
}

interface actionType6 {
  type: typeof SET_CITY;
  payload: string;
}

interface actionType7 {
  type: typeof SET_COUNTRY;
  payload: ICountries[];
}

interface actionType8 {
  type: typeof SET_ZIP;
  payload: string;
}

export type actionTypes =
  | actionType1
  | actionType2
  | actionType3
  | actionType4
  | actionType5
  | actionType6
  | actionType7
  | actionType8;
