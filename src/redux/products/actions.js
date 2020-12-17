export const requestProducts = () => {
  return { type: 'REQUESTED_PRODUCTS' };
};

export const requestProductsSuccess = (data) => {
  return { type: 'REQUESTED_PRODUCTS_SUCCEEDED', products: data };
};

export const requestProductsError = () => {
  return { type: 'REQUESTED_PRODUCTS_FAILED' };
};

export const fetchProducts = () => {
  return { type: 'FETCHED_PRODUCTS' };
};
