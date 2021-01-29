import renderer from 'react-test-renderer';

import { FinishOrders } from '../FinishOrders';

const props = {
  user: {
    email: 'google@gmail.com',
  },
};

describe('FinishOrders component', () => {
  it('should match snapshot', () => {
    const wrapper = renderer.create(<FinishOrders {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
