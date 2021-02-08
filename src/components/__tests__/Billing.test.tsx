import React from 'react';
import { getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import { Billing } from 'components';

const props = {
  user: {
    name: 'Denis A.',
    email: 'test_mail@mail.com',
    address: 'Klochkovskaya',
    optional: '1/5',
    city: 'KH',
    country: [{ label: 'Ukraine', value: 'UA' }],
    zip: '61000',
  },
  setName: jest.fn(),
  setEmail: jest.fn(),
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
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Billing {...props} />
        </MemoryRouter>
      </Provider>
    );
  });

  it('render Billing Information title', () => {
    expect(screen.getByText('Billing Information')).toBeInTheDocument();
  });

  it('render Billing Contact and Billing Address labels', () => {
    expect(screen.getByText('Billing Contact')).toBeInTheDocument();
    expect(screen.getByText('Billing Address')).toBeInTheDocument();
  });

  it('render Continue button', () => {
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('render Billing form', () => {
    expect(getByTestId(document.documentElement, 'form-billing')).toBeInTheDocument();
  });

  it('render navigation', () => {
    expect(getByLabelText(document.documentElement, 'breadcrumb')).toBeInTheDocument();
  });

  it('should required input fields', () => {
    expect(getByTestId(document.documentElement, 'name')).toBeRequired();
    expect(getByTestId(document.documentElement, 'email')).toBeRequired();
    expect(getByTestId(document.documentElement, 'address')).toBeRequired();
    expect(getByTestId(document.documentElement, 'optional')).toBeRequired();
    expect(getByTestId(document.documentElement, 'city')).toBeRequired();
    expect(getByTestId(document.documentElement, 'zip')).toBeRequired();
  });

  xit('should valid input fields', () => {
    expect(getByTestId(document.documentElement, 'name')).not.toBeValid();
    expect(getByTestId(document.documentElement, 'email')).not.toBeValid();
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
            <Billing {...props} />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
