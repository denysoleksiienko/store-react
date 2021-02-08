import { shallow } from 'enzyme';
import { getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { CreditCard } from '../CreditCard';

describe('credit card', () => {
  beforeEach(() => {
    render(<CreditCard />);
  });

  it('should be defined', () => {
    const wrapper = shallow(<CreditCard />);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const component = renderer.create(<CreditCard />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('render credit card labels', () => {
    expect(screen.getByText('Card Number')).toBeInTheDocument();
    expect(screen.getByText('Expiry Date')).toBeInTheDocument();
    expect(screen.getByText('Security Code')).toBeInTheDocument();
  });
});
