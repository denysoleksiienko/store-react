import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

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
  });

  it('should be defined', () => {
    const wrapper = component.find(Col);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = renderer.create(<FinishOrders {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
