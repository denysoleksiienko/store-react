import { useHistory } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CountrySelect from 'react-bootstrap-country-select';

import { ButtonComponent, BreadcrumbItem } from 'components';
import { PAYMENT } from 'constants/pathnames';
import { Title, Label, InputsWrap, FormGroupInner } from 'styled';

export const Billing = ({
  user,
  setEmail,
  setName,
  setPhone,
  setAddress,
  setOptional,
  setCity,
  setCountry,
  setZip,
}) => {
  const history = useHistory();

  const handleNext = () => {
    history.push(PAYMENT);
  };

  return (
    <Col lg={7}>
      <BreadcrumbItem />

      <Title>Billing Information</Title>

      <Form>
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Billing Contact</Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={user.name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="10">
            <Form.Control
              type="text"
              placeholder="Email Address"
              value={user.email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
        </InputsWrap>

        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Billing Address</Label>
            <Form.Control
              type="text"
              placeholder="Street Address"
              value={user.address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="10">
            <Form.Control
              type="text"
              placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
              value={user.optional}
              onChange={(event) => setOptional(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} md="10">
            <Form.Control
              type="text"
              placeholder="City"
              value={user.city}
              onChange={(event) => setCity(event.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
          </Form.Group>

          <FormGroupInner>
            <Form.Group as={Col} md="6">
              <CountrySelect
                value={user.country}
                onChange={(id) => setCountry(id)}
                placeholder="Country"
                flags={false}
              />
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Control
                type="text"
                placeholder="Zip"
                value={user.zip}
                onChange={(event) => setZip(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
            </Form.Group>
          </FormGroupInner>
        </InputsWrap>

        <Form.Group as={Col} md="6">
          <ButtonComponent title="Continue" onClick={handleNext} />
        </Form.Group>
      </Form>
    </Col>
  );
};
