import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BreadcrumbWrap, NavLinkStyled } from 'styled/Breadcrumbs';

export const Breadcrumbs = () => (
  <BreadcrumbWrap>
    <Breadcrumb.Item linkAs={NavLinkStyled} linkProps={{ to: '/', exact: true }}>
      Shipping
    </Breadcrumb.Item>
    <Breadcrumb.Item linkAs={NavLinkStyled} linkProps={{ to: '/billing' }}>
      Billing
    </Breadcrumb.Item>
    <Breadcrumb.Item linkAs={NavLinkStyled} linkProps={{ to: '/payment' }}>
      Payment
    </Breadcrumb.Item>
  </BreadcrumbWrap>
);
