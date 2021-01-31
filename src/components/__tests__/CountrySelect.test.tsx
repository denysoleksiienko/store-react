import renderer from 'react-test-renderer';
import { Typeahead } from 'react-bootstrap-typeahead';

const props = {
  id: 'basic-typeahead-single',
  placeholder: 'Select Country',
  onChange: jest.fn(),
  options: [{ label: 'Austria', value: 'AT' }],
  selected: [{ label: 'Austria', value: 'AT' }],
  isValid: true,
  isInvalid: false,
};

describe('Button component', () => {
  it('should match snapshot', () => {
    const wrapper = renderer.create(<Typeahead {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
