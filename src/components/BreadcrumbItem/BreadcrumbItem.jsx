import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BreadcrumbWrap } from 'styled';

// ToDo: Matching with routes

export const BreadcrumbItem = () => {
  return (
    <BreadcrumbWrap>
      <Breadcrumb.Item href="/" active>
        Shipping
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/billing">Billing</Breadcrumb.Item>
      <Breadcrumb.Item href="/payment">Payment</Breadcrumb.Item>
    </BreadcrumbWrap>
  );
};
