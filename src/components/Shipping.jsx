import { useHistory } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { AddressFields, Button, Breadcrumbs, ContactFields } from 'components';
import { BILLING } from 'constants/pathnames';
import { Title } from 'styled';

export const Shipping = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push(BILLING);
  };

  return (
    <Col lg={7}>
      <Breadcrumbs />
      <Title>Shipping Info</Title>

      <Form>
        <ContactFields />

        <AddressFields />

        <Form.Group as={Col} md="6">
          <Button title="Continue" onClick={handleNext} />
        </Form.Group>
      </Form>
    </Col>
  );
};
