import {
  SET_NAME,
  SET_PHONE,
  SET_EMAIL,
  SET_ADDRESS,
  SET_OPTIONAL,
  SET_CITY,
  SET_COUNTRY,
  SET_ZIP,
} from './actionTypes';

export const setName = (value) => ({ type: SET_NAME, payload: value });
export const setPhone = (value) => ({ type: SET_PHONE, payload: value });
export const setEmail = (value) => ({ type: SET_EMAIL, payload: value });
export const setAddress = (value) => ({ type: SET_ADDRESS, payload: value });
export const setOptional = (value) => ({ type: SET_OPTIONAL, payload: value });
export const setCity = (value) => ({ type: SET_CITY, payload: value });
export const setCountry = (value) => ({ type: SET_COUNTRY, payload: value });
export const setZip = (value) => ({ type: SET_ZIP, payload: value });
