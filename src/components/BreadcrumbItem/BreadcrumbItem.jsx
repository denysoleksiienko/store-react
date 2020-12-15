import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './BreadcrumbItem.css';

export const BreadcrumbItem = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#" active>
        Shipping
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Billing</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Payment</Breadcrumb.Item>
    </Breadcrumb>
  );
};
