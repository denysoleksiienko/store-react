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

const initialState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  optional: '',
  city: '',
  country: '',
  zip: '',
};

export const reducer = (state = initialState, action) => {
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
