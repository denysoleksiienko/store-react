import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { Breadcrumbs, Button } from 'components';
import { ORDER } from 'constants/pathnames';
import { Title, Label, SecureInfo, InputsWrap, Icon, Span, FormGroupInner } from 'styled';

import { VALIDATION_PAYMENT } from 'constants/validationSchema';

export const Payment = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: '',
      credit: '',
      date: '',
      code: '',
    },
    validationSchema: VALIDATION_PAYMENT,
    onSubmit: (e) => {
      console.log(e);
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

        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Card Number</Label>
            <Form.Control
              name="credit"
              type="number"
              placeholder="XXXX XXXX XXXX XXXX XXXX"
              value={formik.values.credit}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isValid={formik.touched.credit && !formik.errors.credit}
              isInvalid={formik.touched.credit && formik.errors.credit}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.credit}</Form.Control.Feedback>
          </Form.Group>

          <FormGroupInner>
            <Form.Group as={Col} md="4">
              <Label>Expire Date</Label>
              <Form.Control
                name="date"
                type="text"
                placeholder="MM / YY"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.touched.date && !formik.errors.date}
                isInvalid={formik.touched.date && formik.errors.date}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.date}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Label>Security Code</Label>
              <Form.Control
                name="code"
                type="password"
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isValid={formik.touched.code && !formik.errors.code}
                isInvalid={formik.touched.code && formik.errors.code}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.code}</Form.Control.Feedback>
            </Form.Group>
          </FormGroupInner>
        </InputsWrap>

        <Form.Group as={Col} md="6">
          <Button title="Pay Securely" />
        </Form.Group>
      </Form>
    </Col>
  );
};
