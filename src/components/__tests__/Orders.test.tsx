import React from 'react';
import { getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { Orders } from 'components';
import { SummaryTitle, SummaryWrap, SummaryList } from 'styled';

const props = {
  orders: [],
  fetchProducts: jest.fn(),
};

const mockStore = configureMockStore();

describe('render Orders', () => {
  const store = mockStore({
    orders: {
      products: [
        {
          id: 1,
          img: '/img-bag.png',
          title: 'Bag',
          color: 'black',
          qty: 1,
          price: 50,
        },
      ],
      error: false,
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Orders {...props} />
      </Provider>
    );
  });

  it('render Order Summary title', () => {
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
  });

  it('render wrapper and list', () => {
    expect(getByTestId(document.documentElement, 'summ-wrap')).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'summ-list')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <Orders {...props} />
        </Provider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
