import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Typeahead } from 'react-bootstrap-typeahead';

import { CountrySelect } from '../CountrySelect';

const props = {
  id: 'basic-typeahead-single',
  placeholder: 'Select Country',
  onChange: jest.fn(),
  options: [{ label: 'Austria', value: 'AT' }],
  selected: [{ label: 'Austria', value: 'AT' }],
  isValid: true,
  isInvalid: false,
};

describe('CountrySelect component', () => {
  it('should be defined CountrySelect', () => {
    const wrapper = shallow(<CountrySelect {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should be defined Typeahead', () => {
    const wrapper = shallow(<Typeahead {...props} />);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = renderer.create(<CountrySelect {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
