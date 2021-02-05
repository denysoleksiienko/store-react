import {
  SET_NAME,
  SET_PHONE,
  SET_EMAIL,
  SET_ADDRESS,
  SET_OPTIONAL,
  SET_CITY,
  SET_COUNTRY,
  SET_ZIP,
  initialState,
  reducer,
} from '../user';

describe('user reducer', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should set user name', () => {
    const action = {
      type: SET_NAME,
      payload: 'Denis',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, name: 'Denis' });
  });

  it('should set user phone', () => {
    const action = {
      type: SET_PHONE,
      payload: '0123456789',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, phone: '0123456789' });
  });

  it('should set user email', () => {
    const action = {
      type: SET_EMAIL,
      payload: 'mail@mail.com',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, email: 'mail@mail.com' });
  });

  it('should set user address', () => {
    const action = {
      type: SET_ADDRESS,
      payload: 'st. STREET, 10',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, address: 'st. STREET, 10' });
  });

  it('should set user optional', () => {
    const action = {
      type: SET_OPTIONAL,
      payload: 'apt. 500',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, optional: 'apt. 500' });
  });

  it('should set user city', () => {
    const action = {
      type: SET_CITY,
      payload: 'Kharkiv',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, city: 'Kharkiv' });
  });

  it('should set user country', () => {
    const action = {
      type: SET_COUNTRY,
      payload: [{ label: 'Ukraine', value: 'UA' }],
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, country: [{ label: 'Ukraine', value: 'UA' }] });
  });

  it('should set user zipe code', () => {
    const action = {
      type: SET_ZIP,
      payload: '61000',
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, zip: '61000' });
  });
});
