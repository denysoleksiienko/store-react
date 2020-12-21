import { useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CountrySelect from 'react-bootstrap-country-select';

import { useCountry } from 'hooks/useCountry';
import { Orders, ButtonComponent, BreadcrumbItem } from 'components';
import { PAYMENT } from 'constants/pathnames';
import { RowWrap, Title, Label, InputsWrap, ColOrders, FormGroupInner } from 'styled';

export const Billing = () => {
  const history = useHistory();
  const { country, setCountry } = useCountry();

  const handleNext = () => {
    history.push(PAYMENT);
  };

  return (
    <Container>
      <RowWrap>
        <Col lg={7}>
          <BreadcrumbItem />

          <Title>Billing Information</Title>

          <Form>
            <InputsWrap>
              <Form.Group as={Col} md="10">
                <Label>Billing Contact</Label>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group as={Col} md="10">
                <Form.Control type="text" placeholder="Email Address" />
              </Form.Group>
            </InputsWrap>

            <InputsWrap>
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

              <FormGroupInner>
                <Form.Group as={Col} md="6">
                  <CountrySelect value={country} onChange={setCountry} placeholder="Country" />
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
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
