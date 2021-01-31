import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { OrderItem } from '../OrderItem';
import { IOrderItem } from 'interfaces/Orders';
import { ProductInfo, SummaryItem } from 'styled';

const props = {
  img: 'https://via.placeholder.com/50',
  title: 'Bag',
  color: 'Black',
  qty: 1,
  price: 20,
};

const setUp = (props: IOrderItem) => shallow(<OrderItem {...props} />);

describe('OrderCost component', () => {
  let component: any;

  beforeEach(() => {
    component = setUp(props);
  });

  it('should be defined SummaryItem', () => {
    const wrapper = component.find(SummaryItem);
    expect(wrapper).toBeDefined();
  });

  it('should be defined ProductInfo', () => {
    const wrapper = component.find(ProductInfo);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = renderer.create(<OrderItem {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
