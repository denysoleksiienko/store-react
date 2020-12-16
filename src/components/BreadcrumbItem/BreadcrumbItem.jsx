import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const BreadcrumbItem = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/" active>
        Shipping
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/billing">Billing</Breadcrumb.Item>
      <Breadcrumb.Item href="/payment">Payment</Breadcrumb.Item>
    </Breadcrumb>
  );
};
