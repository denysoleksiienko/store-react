import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Breadcrumbs } from '../Breadcrumbs';
import { BreadcrumbWrap, NavLinkStyled } from 'styled/Breadcrumbs';

describe('Breadcrumbs component', () => {
  it('should be defined', () => {
    const wrapper = shallow(<Breadcrumbs />);
    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = renderer.create(<Breadcrumbs />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
