import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { BreadcrumbItem } from 'components';
import { ButtonComponent } from 'components';
import { Orders } from 'components';

import { Title, Label, SecureInfo, InputsWrap, Icon, Span } from 'styled';

export const Payment = () => {
  return (
    <Container>
      <Row>
        <Col lg={7}>
          <BreadcrumbItem />
          <Title>Payment</Title>

          <SecureInfo>
            <Icon src="https://www.flaticon.com/svg/static/icons/svg/1043/1043438.svg" alt="icon" />
            <Span>This is a secure 128-bit SSL encrypted payment</Span>
          </SecureInfo>

          <Form className="form">
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

              <div className="d-flex">
                <Form.Group as={Col} md="4">
                  <Label>Expire Date</Label>
                  <Form.Control style={{ textAlign: 'center' }} type="text" placeholder="MM / YY" required />
                  <Form.Control.Feedback type="invalid">Please provide a valid date.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Label>Security Code</Label>
                  <Form.Control style={{ textAlign: 'center' }} type="password" required />
                  <Form.Control.Feedback type="invalid">Please provide a valid security code.</Form.Control.Feedback>
                </Form.Group>
              </div>
            </InputsWrap>

            <Form.Group as={Col} md="6">
              <ButtonComponent title="Pay Securely" />
            </Form.Group>
          </Form>
        </Col>
        <Col lg={5} style={{ background: '#e9ecef' }}>
          <Orders />
        </Col>
      </Row>
    </Container>
  );
};
