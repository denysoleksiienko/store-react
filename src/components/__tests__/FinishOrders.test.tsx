import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { getByTestId, render, screen } from '@testing-library/react';

import { FinishOrders } from '../FinishOrders';
import { IFinishOrder } from 'interfaces/Orders';
import Col from 'react-bootstrap/Col';

const props = {
  user: {
    email: 'google@gmail.com',
  },
};

const setUp = (props: IFinishOrder) => shallow(<FinishOrders {...props} />);

describe('FinishOrders component', () => {
  let component: any;

  beforeEach(() => {
    component = setUp(props);

    render(<FinishOrders {...props} />);
  });

  it('should be defined', () => {
    const wrapper = component.find(Col);
    expect(wrapper).toBeDefined();
  });

  it('render title', () => {
    expect(screen.getByText('Thank you for your order!')).toBeInTheDocument();
  });

  it('render order information', () => {
    expect(getByTestId(document.documentElement, 'order-num')).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'order-email')).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'order-delivery')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const wrapper = renderer.create(<FinishOrders {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
