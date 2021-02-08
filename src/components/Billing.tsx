import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik, FormikProps } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { Button, Breadcrumbs, CountrySelect } from 'components';

import { COUNTRIES } from 'constants/countries';
import { PAYMENT } from 'constants/pathnames';

import { Title, Label, FormGroupInner, Error } from 'styled';

import { VALIDATION_BILLING } from 'constants/validationSchema';

import { IUserFormValues } from 'interfaces/FormValues';
import { IUserProps } from 'interfaces/UserProps';
import { ICountries } from 'interfaces/Countries';

export const Billing: React.FC<IUserProps> = ({
  user,
  setName,
  setEmail,
  setAddress,
  setOptional,
  setCity,
  setCountry,
  setZip,
}) => {
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'address':
        setAddress(e.target.value);
        break;
      case 'optional':
        setOptional(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
      case 'zip':
        setZip(e.target.value);
        break;
      default:
        e.target.value = '';
    }
    formik.handleChange(e);
  };

  const handleChangeCountry = (e: ICountries[]): void => {
    setCountry(e);
    formik.setFieldValue('country', e);
  };

  const formik: FormikProps<IUserFormValues> = useFormik({
    initialValues: { ...user },
    validationSchema: VALIDATION_BILLING,
    onSubmit: () => {
      setTimeout(() => history.push(PAYMENT), 300);
    },
  });

  return (
    <Col lg={7}>
      <Breadcrumbs />

      <Title>Billing Information</Title>

      <Form data-testid="form-billing" noValidate onSubmit={formik.handleSubmit}>
        <Form.Group as={Col} md="10">
          <Label>Billing Contact</Label>
          <Form.Control
            data-testid="name"
            name="name"
            type="text"
            placeholder="Full Name"
            value={formik.values.name}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.name && !formik.errors.name}
            isInvalid={!!formik.errors.name && formik.touched.name}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="10">
          <Form.Control
            data-testid="email"
            name="email"
            type="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.email && !formik.errors.email}
            isInvalid={!!formik.errors.email && formik.touched.email}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="10">
          <Label>Billing Address</Label>

          <Form.Control
            data-testid="address"
            name="address"
            type="text"
            placeholder="Street Address"
            value={formik.values.address}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.address && !formik.errors.address}
            isInvalid={!!formik.errors.address && formik.touched.address}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="10">
          <Form.Control
            data-testid="optional"
            name="optional"
            type="text"
            placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
            value={formik.values.optional}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.optional && !formik.errors.optional}
            isInvalid={!!formik.errors.optional && formik.touched.optional}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.optional}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="10">
          <Form.Control
            data-testid="city"
            name="city"
            type="text"
            placeholder="City"
            value={formik.values.city}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.city && !formik.errors.city}
            isInvalid={!!formik.errors.city && formik.touched.city}
            required
          />
          <Form.Control.Feedback type="invalid">{formik.errors.city}</Form.Control.Feedback>
        </Form.Group>
        <FormGroupInner>
          <Form.Group as={Col} md="6">
            <CountrySelect
              data-testid="country"
              placeholder="Country"
              onChange={handleChangeCountry}
              options={COUNTRIES}
              selected={formik.values.country}
              isValid={formik.touched.country && !formik.errors.country}
              isInvalid={!!formik.errors.country}
            />
            <Error>{formik.errors.country}</Error>
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Control
              data-testid="zip"
              name="zip"
              type="text"
              placeholder="Zip"
              value={formik.values.zip}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.zip && !formik.errors.zip}
              isInvalid={!!formik.errors.zip && formik.touched.zip}
              required
            />
            <Form.Control.Feedback type="invalid">{formik.errors.zip}</Form.Control.Feedback>
          </Form.Group>
        </FormGroupInner>

        <Form.Group as={Col} md="6">
          <Button title="Continue" type="submit" />
        </Form.Group>
      </Form>
    </Col>
  );
};
