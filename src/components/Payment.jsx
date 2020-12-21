import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { Breadcrumbs, Button } from 'components';
import { ORDER } from 'constants/pathnames';
import { Title, Label, SecureInfo, InputsWrap, Icon, Span, FormGroupInner } from 'styled';

export const Payment = () => {
  const history = useHistory();

  const handleNext = () => {
    history.push(ORDER);
  };

  return (
    <Col lg={7}>
      <Breadcrumbs />
      <Title>Payment</Title>

      <SecureInfo>
        <Icon src="https://www.flaticon.com/svg/static/icons/svg/1043/1043438.svg" alt="icon" />
        <Span>This is a secure 128-bit SSL encrypted payment</Span>
      </SecureInfo>

      <Form>
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Cardholder Name</Label>
            <Form.Control type="text" placeholder="Name as it appears on your card" />
          </Form.Group>
        </InputsWrap>

        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Card Number</Label>
            <Form.Control type="number" placeholder="XXXX XXXX XXXX XXXX XXXX" />
          </Form.Group>

          <FormGroupInner>
            <Form.Group as={Col} md="4">
              <Label>Expire Date</Label>
              <Form.Control type="text" placeholder="MM / YY" required />
              <Form.Control.Feedback type="invalid">Please provide a valid date.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Label>Security Code</Label>
              <Form.Control type="password" required />
              <Form.Control.Feedback type="invalid">Please provide a valid security code.</Form.Control.Feedback>
            </Form.Group>
          </FormGroupInner>
        </InputsWrap>

        <Form.Group as={Col} md="6">
          <Button title="Pay Securely" onClick={handleNext} />
        </Form.Group>
      </Form>
    </Col>
  );
};
