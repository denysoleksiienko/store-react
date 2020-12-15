import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import { BreadcrumbItem } from 'components/BreadcrumbItem/';
import { Orders } from 'components/Orders';

export const Payment = () => {
  return (
    <Container>
      <Row>
        <Col lg={7}>
          <BreadcrumbItem />
          <Title>Payment</Title>

          <Form className="form">
            <InputsContainer>
              <Form.Group as={Col} md="10">
                <Label>Cardholder Name</Label>
                <Form.Control type="text" placeholder="Name as it appears on your card" />
              </Form.Group>
            </InputsContainer>

            <InputsContainer>
              <Form.Group as={Col} md="10">
                <Label>Card Number</Label>
                <Form.Control type="number" placeholder="XXXX XXXX XXXX XXXX XXXX" />
              </Form.Group>

              <div className="d-flex">
                <Form.Group as={Col} md="3">
                  <Label>Expire Date</Label>
                  <Form.Control style={{ textAlign: 'center' }} type="text" placeholder="MM / YY" required />
                  <Form.Control.Feedback type="invalid">Please provide a valid date.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="3">
                  <Label>Security Code</Label>
                  <Form.Control style={{ textAlign: 'center' }} type="password" required />
                  <Form.Control.Feedback type="invalid">Please provide a valid security code.</Form.Control.Feedback>
                </Form.Group>
              </div>
            </InputsContainer>

            <Form.Group as={Col} md="6">
              <Button variant="primary" size="lg" style={{ backgroundColor: '#9932CC', width: '100%' }}>
                Continue
              </Button>
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

const Title = styled.h1`
  font-size: 2em;
  margin-left: 16px;
  color: #9932cc;
`;

const Label = styled.label`
  font-size: 1em;
  color: #9932cc;
`;

const InputsContainer = styled.div`
  margin-top: 35px;
`;
