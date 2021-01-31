import renderer from 'react-test-renderer';

import { Breadcrumbs } from '../Breadcrumbs';
import { BreadcrumbWrap, NavLinkStyled } from 'styled/Breadcrumbs';

describe('Breadcrumbs component', () => {
  it('should match snapshot', () => {
    const wrapper = renderer.create(<Breadcrumbs />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
