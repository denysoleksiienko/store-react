import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { OrderCost } from '../OrderCost';
import { IOrderCost } from 'interfaces/Orders';
import { SummaryCost } from 'styled';

const props = {
  subtotal: 10,
};

const setUp = (props: IOrderCost) => shallow(<OrderCost {...props} />);

describe('OrderCost component', () => {
  let component: any;

  beforeEach(() => {
    component = setUp(props);
  });

  it('should be defined', () => {
    const wrapper = component.find(SummaryCost);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = renderer.create(<OrderCost {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
