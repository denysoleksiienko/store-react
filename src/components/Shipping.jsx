import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { Typeahead } from 'react-bootstrap-typeahead';
import { COUNTRIES } from 'constants/countries';

import { Button, Breadcrumbs } from 'components';
import { BILLING } from 'constants/pathnames';
import { Title, Label, FormGroupInner, InputSpan } from 'styled';

import { VALIDATION_SHIPPING } from 'constants/validationSchema';

export const Shipping = (props) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      ...props.user,
    },
    validationSchema: VALIDATION_SHIPPING,
    onSubmit: () => {
      setTimeout(() => history.push(BILLING), 300);
    },
  });

  return (
    <Col lg={7}>
      <Breadcrumbs />
      <Title>Shipping Info</Title>

      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group as={Col} md="10">
          <Label>Recipient</Label>

          <Form.Control
            name="name"
            type="text"
            placeholder="Full Name"
            value={formik.values.name}
            onChange={(e) => {
              props.setName(e.target.value);
              formik.handleChange(e);
            }}
            onBlur={formik.handleBlur}
            isValid={formik.touched.name && !formik.errors.name}
            isInvalid={formik.touched.name && formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="8">
          <FormGroupInner>
            <Form.Control
              name="phone"
              type="text"
              placeholder="Daytime Phone"
              value={formik.values.phone}
              onChange={(e) => {
                props.setPhone(e.target.value);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              isValid={formik.touched.phone && !formik.errors.phone}
              isInvalid={formik.touched.phone && formik.errors.phone}
            />
            <InputSpan>For delivery questions only</InputSpan>
          </FormGroupInner>
        </Form.Group>
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
            <Typeahead
              id="basic-typeahead-single"
              placeholder="Country"
              onChange={(e) => props.setCountry(e)}
              options={COUNTRIES}
              selected={props.user.country}
              isValid={formik.touched.country && !formik.errors.country}
              isInvalid={formik.touched.country && formik.errors.country}
            />
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

        <Form.Group as={Col} md="6">
          <Button title="Continue" />
        </Form.Group>
      </Form>
    </Col>
  );
};
