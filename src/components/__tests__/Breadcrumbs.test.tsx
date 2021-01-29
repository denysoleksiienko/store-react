import renderer from 'react-test-renderer';

import { Breadcrumbs } from '../Breadcrumbs';

describe('Breadcrumbs component', () => {
  it('should match snapshot', () => {
    const wrapper = renderer.create(<Breadcrumbs />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
