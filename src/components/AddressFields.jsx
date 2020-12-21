import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CountrySelect from 'react-bootstrap-country-select';

import { Label, InputsWrap, FormGroupInner } from 'styled';

export const AddressFields = ({ user, setAddress, setOptional, setCity, setCountry, setZip }) => (
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
        <CountrySelect value={user.country} onChange={(id) => setCountry(id)} placeholder="Country" flags={false} />
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
);
