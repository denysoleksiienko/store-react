import { useHistory } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { AddressFields, Button, Breadcrumbs, ContactFields } from 'components';
import { PAYMENT } from 'constants/pathnames';
import { Title } from 'styled';

export const Billing = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push(PAYMENT);
  };

  return (
    <Col lg={7}>
      <Breadcrumbs />

      <Title>Billing Information</Title>

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
