import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { ButtonComponent, Orders, BreadcrumbItem } from 'components';
import { BILLING } from 'constants/pathnames';
import { RowWrap, Title, Label, InputsWrap, InputSpan, ColOrders, FormGroupInner } from 'styled';

export const Shipping = () => {
  const history = useHistory();
  const handleNext = () => {
    history.push(BILLING);
  };

  return (
    <Container>
      <RowWrap>
        <Col lg={7}>
          <BreadcrumbItem />
          <Title>Shipping Info</Title>

          <Form>
            <InputsWrap>
              <Form.Group as={Col} md="10">
                <Label>Recipient</Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group as={Col} md="8">
                <FormGroupInner>
                  <Form.Control type="phone" placeholder="Daytime Phone" />
                  <InputSpan>For delivery questions only</InputSpan>
                </FormGroupInner>
              </Form.Group>
            </InputsWrap>

            <InputsWrap>
              <Form.Group as={Col} md="10">
                <Label>Address</Label>
                <Form.Control type="text" placeholder="Street Address" />
              </Form.Group>
              <Form.Group as={Col} md="10">
                <Form.Control type="text" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
              </Form.Group>

              <Form.Group as={Col} md="10">
                <Form.Control type="text" placeholder="City" required />
              </Form.Group>

              <FormGroupInner>
                <Form.Group as={Col} md="6">
                  <Form.Control as="select" custom>
                    <option>Country</option>
                    <option>USA</option>
                    <option>UA</option>
                    <option>EU</option>
                    <option>CA</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Control type="text" placeholder="Zip" required />
                </Form.Group>
              </FormGroupInner>
            </InputsWrap>

            <Form.Group as={Col} md="6">
              <ButtonComponent title="Continue" onClick={handleNext} />
            </Form.Group>
          </Form>
        </Col>

        <ColOrders lg={5}>
          <Orders />
        </ColOrders>
      </RowWrap>
    </Container>
  );
};
