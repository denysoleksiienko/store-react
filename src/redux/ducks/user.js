const SET_NAME = 'SET_NAME';
const SET_PHONE = 'SET_PHONE';
const SET_EMAIL = 'ESET_EMAILMAIL';
const SET_ADDRESS = 'SET_ADDRESS';
const SET_OPTIONAL = 'SET_OPTIONAL';
const SET_CITY = 'SET_CITY';
const SET_COUNTRY = 'SET_COUNTRY';
const SET_ZIP = 'SET_ZIP';

export const setName = (value) => ({ type: SET_NAME, payload: value });
export const setPhone = (value) => ({ type: SET_PHONE, payload: value });
export const setEmail = (value) => ({ type: SET_EMAIL, payload: value });
export const setAddress = (value) => ({ type: SET_ADDRESS, payload: value });
export const setOptional = (value) => ({ type: SET_OPTIONAL, payload: value });
export const setCity = (value) => ({ type: SET_CITY, payload: value });
export const setCountry = (value) => ({ type: SET_COUNTRY, payload: value });
export const setZip = (value) => ({ type: SET_ZIP, payload: value });

const initialState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  optional: '',
  city: '',
  country: null,
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
