import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik, FormikProps } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Button, Breadcrumbs, CountrySelect } from 'components';

import { BILLING } from 'constants/pathnames';
import { COUNTRIES } from 'constants/countries';
import { Title, Label, FormGroupInner, InputSpan, LocationIcon, Error } from 'styled';

import { VALIDATION_SHIPPING } from 'constants/validationSchema';

import { IUserFormValues } from 'interfaces/FormValues';
import { IUserProps } from 'interfaces/UserProps';
import { ICountries } from 'interfaces/Countries';

export const Shipping: React.FC<IUserProps> = ({
  user,
  setName,
  setPhone,
  setAddress,
  setOptional,
  setCity,
  setCountry,
  setZip,
  fetchCity,
}) => {
  const history = useHistory();

  const formik: FormikProps<IUserFormValues> = useFormik({
    initialValues: { ...user },
    validationSchema: VALIDATION_SHIPPING,
    onSubmit: () => {
      setTimeout(() => history.push(BILLING), 300);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
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
            onChange={handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.name && !formik.errors.name}
            isInvalid={!!formik.errors.name && formik.touched.name}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
        </Form.Group>
        <FormGroupInner>
          <Form.Group as={Col} md="6">
            <Form.Control
              name="phone"
              type="text"
              placeholder="Daytime Phone"
              value={formik.values.phone}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.phone && !formik.errors.phone}
              isInvalid={!!formik.errors.phone && formik.touched.phone}
            />

            <Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <InputSpan>For delivery questions only</InputSpan>
          </Form.Group>
        </FormGroupInner>
        <Form.Group as={Col} md="10">
          <Label>Address</Label>

          <Form.Control
            name="address"
            type="text"
            placeholder="Street Address"
            value={formik.values.address}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.address && !formik.errors.address}
            isInvalid={!!formik.errors.address && formik.touched.address}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="10">
          <Form.Control
            name="optional"
            type="text"
            placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
            value={formik.values.optional}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            isValid={formik.touched.optional && !formik.errors.optional}
            isInvalid={!!formik.errors.optional && formik.touched.optional}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.optional}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="10">
          <InputGroup>
            <Form.Control
              name="city"
              type="text"
              placeholder="City"
              value={formik.values.city ? formik.values.city : (formik.values.city = user.city)}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.city && !formik.errors.city}
              isInvalid={!!formik.errors.city && formik.touched.city}
            />
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">
                <LocationIcon
                  src="https://www.flaticon.com/svg/static/icons/svg/1016/1016056.svg"
                  onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => fetchCity(e)}
                />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control.Feedback type="invalid">{formik.errors.city}</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <FormGroupInner>
          <Form.Group as={Col} md="6">
            <CountrySelect
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
              name="zip"
              type="text"
              placeholder="Zip"
              value={formik.values.zip}
              onChange={handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.zip && !formik.errors.zip}
              isInvalid={!!formik.errors.zip && formik.touched.zip}
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
