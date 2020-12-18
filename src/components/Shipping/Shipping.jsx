import React from 'react';
import { useHistory } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CountrySelect from 'react-bootstrap-country-select';

import { ButtonComponent, BreadcrumbItem } from 'components';
import { BILLING } from 'constants/pathnames';
import { Title, Label, InputsWrap, InputSpan, FormGroupInner } from 'styled';

export const Shipping = ({ user, setName, setPhone, setAddress, setOptional, setCity, setCountry, setZip }) => {
  const history = useHistory();

  const handleNext = () => {
    history.push(BILLING);
  };

  return (
    <Col lg={7}>
      <BreadcrumbItem />
      <Title>Shipping Info</Title>

      <Form>
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Recipient</Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={user.name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="8">
            <FormGroupInner>
              <Form.Control
                type="phone"
                placeholder="Daytime Phone"
                value={user.phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <InputSpan>For delivery questions only</InputSpan>
            </FormGroupInner>
          </Form.Group>
        </InputsWrap>

        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Address</Label>
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
