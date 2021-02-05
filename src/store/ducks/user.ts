import { call, put, takeEvery } from 'redux-saga/effects';
import { getGeolocation } from 'helpers/getGeolocation';

import { ICountries } from 'interfaces/Countries';

export const SET_NAME: string = 'SET_NAME';
export const SET_PHONE: string = 'SET_PHONE';
export const SET_EMAIL: string = 'ESET_EMAILMAIL';
export const SET_ADDRESS: string = 'SET_ADDRESS';
export const SET_OPTIONAL: string = 'SET_OPTIONAL';
export const SET_CITY: string = 'SET_CITY';
export const SET_COUNTRY: string = 'SET_COUNTRY';
export const SET_ZIP: string = 'SET_ZIP';
const FETCHED_SET_CITY: string = 'FETCHED_SET_CITY';

export interface IUserState {
  name: string;
  phone: string;
  email: string;
  address: string;
  optional: string;
  city: string;
  country: ICountries[];
  zip: string;
}

export const initialState: IUserState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  optional: '',
  city: '',
  country: [],
  zip: '',
};

export const reducer = (state = initialState, action: any): IUserState => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_OPTIONAL:
      return {
        ...state,
        optional: action.payload,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_ZIP:
      return {
        ...state,
        zip: action.payload,
      };
    default:
      return state;
  }
};

export const setName = (value: string) => ({ type: SET_NAME, payload: value });
export const setPhone = (value: string) => ({ type: SET_PHONE, payload: value });
export const setEmail = (value: string) => ({ type: SET_EMAIL, payload: value });
export const setAddress = (value: string) => ({ type: SET_ADDRESS, payload: value });
export const setOptional = (value: string) => ({ type: SET_OPTIONAL, payload: value });
export const setCity = (value: string) => ({ type: SET_CITY, payload: value });
export const setCountry = (value: ICountries[]) => ({ type: SET_COUNTRY, payload: value });
export const setZip = (value: string) => ({ type: SET_ZIP, payload: value });
export const fetchCity = () => ({ type: FETCHED_SET_CITY });

function* fetchCityAsync() {
  const city: [] = yield call(() => getGeolocation.results.map(({ components }: any) => components.city));
  yield put(setCity(city.join('')));
}

function* watchFetchCity() {
  yield takeEvery(FETCHED_SET_CITY, fetchCityAsync);
}

export default watchFetchCity;
