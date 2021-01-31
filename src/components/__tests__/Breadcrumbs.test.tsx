import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, ShallowWrapper } from 'enzyme';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Breadcrumbs } from '../Breadcrumbs';
import { BreadcrumbWrap } from 'styled/Breadcrumbs';

const setUp = () => shallow(<Breadcrumbs />);

describe('Breadcrumbs component', () => {
  let component: any[] | ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = setUp();
  });

  it('should be defined', () => {
    const wrapper = shallow(<Breadcrumbs />);
    expect(wrapper).toBeDefined();
  });

  it('should contain wrapper with styled component', () => {
    const wrapper = component.find(BreadcrumbWrap);
    expect(wrapper.length).toBe(1);
  });

  it('should contain three links', () => {
    const links = component.find(Breadcrumb.Item);

    expect(links.length).toBe(3);
  });

  it('should match snapshot', () => {
    const wrapper = renderer
      .create(
        <Router>
          <Breadcrumbs />
        </Router>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
