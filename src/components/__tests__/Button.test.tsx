import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Button } from '../Button';

const props = {
  title: 'Continue',
  type: 'submit',
};

describe('Button component', () => {
  it('should be defined', () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = renderer.create(<Button {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
