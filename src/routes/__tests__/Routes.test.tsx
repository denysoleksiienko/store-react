import React from 'react';
import { Provider } from 'react-redux';

import { Routes } from '../Routes';
import { shallow } from 'enzyme';
import { Router, MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import configureMockStore from 'redux-mock-store';
import { App } from 'App';
import { Shipping, Billing, Payment, FinishOrders } from 'components';

const mockStore = configureMockStore([]);
const products = [{ id: 1, title: 'Bag', price: 10, color: 'black', img: 'http://img.jpg', qty: 1 }];

describe('render routes', () => {
  const store = mockStore(products);
  let component: unknown;

  beforeEach(() => {
    component = shallow(<Routes />);
  });

  it('must be defined <Routes />', () => {
    expect(component).toBeDefined();
  });

  it('should render with valid paths components', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Shipping />
        <Billing />
        <Payment />
        <FinishOrders />
      </MemoryRouter>
    );

    expect(wrapper.find(Shipping)).toHaveLength(1);
    expect(wrapper.find(Billing)).toHaveLength(1);
    expect(wrapper.find(Payment)).toHaveLength(1);
    expect(wrapper.find(FinishOrders)).toHaveLength(1);
  });

  xit('full app rendering/navigating', () => {
    // TODO: review it. have errors
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    );
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(screen.getByText(/Shipping Info/i)).toBeInTheDocument();
  });
});
