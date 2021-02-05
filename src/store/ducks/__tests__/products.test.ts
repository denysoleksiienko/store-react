import {
  reducer,
  initialState,
  REQUESTED_PRODUCTS,
  REQUESTED_PRODUCTS_SUCCEEDED,
  REQUESTED_PRODUCTS_FAILED,
} from '../products';

describe('products reducer', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should create REQUESTED_PRODUCTS', () => {
    const action = {
      type: REQUESTED_PRODUCTS,
      products: [],
      error: false,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ products: [], error: false });
  });

  it('should create REQUESTED_PRODUCTS_SUCCEEDED when fetching products has been done', () => {
    const action = {
      type: REQUESTED_PRODUCTS_SUCCEEDED,
      products: [{ id: 1, title: 'Bag', price: 10, color: 'black', img: 'http://img.jpg', qty: 1 }],
      error: false,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      products: [{ id: 1, title: 'Bag', price: 10, color: 'black', img: 'http://img.jpg', qty: 1 }],
      error: false,
    });
  });

  it('should create REQUESTED_PRODUCTS_FAILED when fetching products has been fail', () => {
    const action = {
      type: REQUESTED_PRODUCTS_FAILED,
      products: [],
      error: true,
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({ products: [], error: true });
  });
});
