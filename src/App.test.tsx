import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { App } from 'App';

const mockStore = configureMockStore();

xdescribe('testing App', () => {
  const store = mockStore({
    orders: { products: [], error: false },
    user: { name: '', phone: '', email: '', address: '', optional: '', city: '', country: [], zip: '' },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });
});
