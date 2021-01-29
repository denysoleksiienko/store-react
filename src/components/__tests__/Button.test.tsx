import renderer from 'react-test-renderer';

import { Button } from '../Button';

const props = {
  title: 'Continue',
  type: 'submit',
};

describe('Button component', () => {
  it('should match snapshot', () => {
    const wrapper = renderer.create(<Button {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
