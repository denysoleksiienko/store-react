import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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
  it('should be defined', () => {
    const wrapper = shallow(<Typeahead {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = renderer.create(<Typeahead {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
