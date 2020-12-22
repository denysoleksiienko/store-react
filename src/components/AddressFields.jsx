import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CountrySelect from 'react-bootstrap-country-select';

import { Label, InputsWrap, FormGroupInner } from 'styled';

export const AddressFields = ({ props, formik }) => (
  <InputsWrap>
    <Form.Group as={Col} md="10">
      <Label>Address</Label>
      <Form.Control
        name="address"
        type="text"
        placeholder="Street Address"
        value={formik.values.address}
        onChange={(e) => {
          props.setAddress(e.target.value);
          formik.handleChange(e);
        }}
        onBlur={formik.handleBlur}
        isValid={formik.touched.address && !formik.errors.address}
        isInvalid={formik.touched.address && formik.errors.address}
      />
      <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="10">
      <Form.Control
        name="optional"
        type="text"
        placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
        value={formik.values.optional}
        onChange={(e) => {
          props.setOptional(e.target.value);
          formik.handleChange(e);
        }}
        onBlur={formik.handleBlur}
        isValid={formik.touched.optional && !formik.errors.optional}
        isInvalid={formik.touched.optional && formik.errors.optional}
      />
      <Form.Control.Feedback type="invalid">{formik.errors.optional}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} md="10">
      <Form.Control
        name="city"
        type="text"
        placeholder="City"
        value={formik.values.city}
        onChange={(e) => {
          props.setCity(e.target.value);
          formik.handleChange(e);
        }}
        onBlur={formik.handleBlur}
        isValid={formik.touched.city && !formik.errors.city}
        isInvalid={formik.touched.city && formik.errors.city}
      />
      <Form.Control.Feedback type="invalid">{formik.errors.city}</Form.Control.Feedback>
    </Form.Group>

    <FormGroupInner>
      <Form.Group as={Col} md="6">
        <CountrySelect
          value={props.user.country}
          onChange={(name) => props.setCountry(name)}
          placeholder="Country"
          flags={false}
        />

        {/* <CountrySelect
          name="country"
          type="text"
          placeholder="Country"
          value={formik.values.country}
          onChange={(id) => {
            props.setCountry(id);
            formik.handleChange();
          }}
          onBlur={formik.handleBlur}
          isValid={formik.touched.country && !formik.errors.country}
          isInvalid={formik.touched.country && formik.errors.country}
          flags={false}
        /> */}
        <Form.Control.Feedback type="invalid">{formik.errors.country}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="4">
        <Form.Control
          name="zip"
          type="text"
          placeholder="Zip"
          value={formik.values.zip}
          onChange={(e) => {
            props.setZip(e.target.value);
            formik.handleChange(e);
          }}
          onBlur={formik.handleBlur}
          isValid={formik.touched.zip && !formik.errors.zip}
          isInvalid={formik.touched.zip && formik.errors.zip}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.zip}</Form.Control.Feedback>
      </Form.Group>
    </FormGroupInner>
  </InputsWrap>
);
