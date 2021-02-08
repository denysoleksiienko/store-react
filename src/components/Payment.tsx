import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik, FormikProps } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { Breadcrumbs, Button, CreditCard } from 'components';
import { ORDER } from 'constants/pathnames';
import { Title, Label, SecureInfo, InputsWrap, Icon, Span } from 'styled';

import { VALIDATION_PAYMENT } from 'constants/validationSchema';
import { IPaymentFormValues } from 'interfaces/FormValues';

export const Payment: React.FC = () => {
  const history = useHistory();

  const formik: FormikProps<IPaymentFormValues> = useFormik({
    initialValues: {
      name: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
    validationSchema: VALIDATION_PAYMENT,
    onSubmit: () => {
      setTimeout(() => history.push(ORDER), 300);
    },
  });

  return (
    <Col lg={7}>
      <Breadcrumbs />
      <Title>Payment</Title>

      <SecureInfo>
        <Icon src="https://www.flaticon.com/svg/static/icons/svg/1043/1043438.svg" alt="icon" />
        <Span>This is a secure 128-bit SSL encrypted payment</Span>
      </SecureInfo>

      <Form data-testid="form-payment" noValidate onSubmit={formik.handleSubmit}>
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Cardholder Name</Label>
            <Form.Control
              data-testid="name"
              name="name"
              type="text"
              placeholder="Name as it appears on your card"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.name && !formik.errors.name}
              isInvalid={!!formik.errors.name && formik.touched.name}
              required
            />
            <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
          </Form.Group>
        </InputsWrap>

        <CreditCard
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isValidNumber={formik.touched.cardNumber && !formik.errors.cardNumber}
          isInvalidNumber={!!formik.errors.cardNumber && formik.touched.cardNumber}
          isValidDate={formik.touched.expiryDate && !formik.errors.expiryDate}
          isInvalidDate={!!formik.errors.expiryDate && formik.touched.expiryDate}
          isValidCvc={formik.touched.cvc && !formik.errors.cvc}
          isInvalidCvc={!!formik.errors.cvc && formik.touched.cvc}
          errorNumber={formik.errors.cardNumber}
          errorExpiryDate={formik.errors.expiryDate}
          errorCvc={formik.errors.cvc}
        />

        <Form.Group as={Col} md="6">
          <Button title="Pay Securely" type="submit" data-testid="btn-payment" />
        </Form.Group>
      </Form>
    </Col>
  );
};
