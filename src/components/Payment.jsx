import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { Breadcrumbs, Button, CreditCard } from 'components';
import { ORDER } from 'constants/pathnames';
import { Title, Label, SecureInfo, InputsWrap, Icon, Span } from 'styled';

import { VALIDATION_PAYMENT } from 'constants/validationSchema';

export const Payment = () => {
  const history = useHistory();

  const formik = useFormik({
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

      <Form noValidate onSubmit={formik.handleSubmit}>
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Cardholder Name</Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name as it appears on your card"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.name && !formik.errors.name}
              isInvalid={formik.touched.name && formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
          </Form.Group>
        </InputsWrap>

        <CreditCard formik={formik} />

        <Form.Group as={Col} md="6">
          <Button title="Pay Securely" type="submit" />
        </Form.Group>
      </Form>
    </Col>
  );
};
