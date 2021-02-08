import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { Payment } from '../Payment';

describe('testing Payment', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Payment />
      </MemoryRouter>
    );
  });

  xit('render Payment title', () => {
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('render Cardholder Name label', () => {
    expect(screen.getByText('Cardholder Name')).toBeInTheDocument();
  });

  it('render Pay Securely button', () => {
    expect(screen.getByText('Pay Securely')).toBeInTheDocument();
  });

  it('should required input fields', () => {
    expect(getByTestId(document.documentElement, 'name')).toBeRequired();
  });

  it('should match snapshot', () => {
    const component = renderer
      .create(
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <Payment />
        </MemoryRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
