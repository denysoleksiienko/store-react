import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { CreditCard } from '../CreditCard';

const setUp = () => shallow(<CreditCard />);

describe('credit card', () => {
  let component: any;

  beforeEach(() => {
    component = setUp();
  });

  it('should be defined', () => {
    const wrapper = shallow(<CreditCard />);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const component = renderer.create(<CreditCard />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should have credit number input', () => {
    const inputNumber = component.find('#cardNumber');
    expect(inputNumber.number()).toBe(Number('4242424242424242'));
  });
});
