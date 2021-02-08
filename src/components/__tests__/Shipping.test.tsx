import React from 'react';
import { getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import { Shipping } from 'components';

const props = {
  user: {
    name: 'Denis A.',
    phone: '+10950000000',
    address: 'Klochkovskaya',
    optional: '1/5',
    city: 'KH',
    country: [{ label: 'Ukraine', value: 'UA' }],
    zip: '61000',
  },
  setName: jest.fn(),
  setPhone: jest.fn(),
  setAddress: jest.fn(),
  setOptional: jest.fn(),
  setCity: jest.fn(),
  setCountry: jest.fn(),
  setZip: jest.fn(),
  fetchCity: jest.fn(),
};

const mockStore = configureMockStore();

describe('testing Shipping', () => {
  const store = mockStore({
    orders: { products: [], error: false },
    user: { name: '', phone: '', email: '', address: '', optional: '', city: '', country: [], zip: '' },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/shipping']} initialIndex={0}>
          <Shipping {...props} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('render Shipping Info title', () => {
    expect(screen.getByText('Shipping Info')).toBeInTheDocument();
  });

  it('render Recipient and Address labels', () => {
    expect(screen.getByText('Recipient')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
  });

  it('render Continue button', () => {
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('render Shipping form', () => {
    expect(getByTestId(document.documentElement, 'form-shipping')).toBeInTheDocument();
  });

  it('render navigation', () => {
    expect(getByLabelText(document.documentElement, 'breadcrumb')).toBeInTheDocument();
  });

  it('should required input fields', () => {
    expect(getByTestId(document.documentElement, 'name')).toBeRequired();
    expect(getByTestId(document.documentElement, 'phone')).toBeRequired();
    expect(getByTestId(document.documentElement, 'address')).toBeRequired();
    expect(getByTestId(document.documentElement, 'optional')).toBeRequired();
    expect(getByTestId(document.documentElement, 'city')).toBeRequired();
    expect(getByTestId(document.documentElement, 'zip')).toBeRequired();
  });

  it('render SVG icon location', () => {
    expect(getByTestId(document.documentElement, 'icon-location')).toBeInTheDocument();
  });

  it('should valid input fields', () => {
    expect(getByTestId(document.documentElement, 'name')).not.toBeValid();
    expect(getByTestId(document.documentElement, 'phone')).not.toBeValid();
    expect(getByTestId(document.documentElement, 'address')).not.toBeValid();
    expect(getByTestId(document.documentElement, 'optional')).not.toBeValid();
    expect(getByTestId(document.documentElement, 'city')).not.toBeValid();
    expect(getByTestId(document.documentElement, 'zip')).not.toBeValid();
  });

  it('should match snapshot', () => {
    const wrapper = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <Shipping {...props} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
