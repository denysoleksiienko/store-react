import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { BreadcrumbItem } from 'components';
import { ButtonComponent } from 'components';
import { Orders } from 'components';

import { Title, Label, InputsContainer } from 'styled';

export const Billing = () => {
  return (
    <Container>
      <Row>
        <Col lg={7}>
          <BreadcrumbItem />

          <Title>Billing Information</Title>

          <Form className="form">
            <InputsContainer>
              <Form.Group as={Col} md="10">
                <Label>Billing Contact</Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group as={Col} md="10">
                <Form.Control type="text" placeholder="Email Address" />
              </Form.Group>
            </InputsContainer>

            <InputsContainer>
              <Form.Group as={Col} md="10">
                <Label>Billing Address</Label>
                <Form.Control type="text" placeholder="Street Address" />
              </Form.Group>
              <Form.Group as={Col} md="10">
                <Form.Control type="text" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
              </Form.Group>

              <Form.Group as={Col} md="10">
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex">
                <Form.Group as={Col} md="6">
                  <Form.Control as="select" custom>
                    <option>Country</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                </Form.Group>
              </div>
            </InputsContainer>

            <Form.Group as={Col} md="6">
              <ButtonComponent title="Continue" />
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
