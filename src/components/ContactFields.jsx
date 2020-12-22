import { useLocation } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Label, InputsWrap, InputSpan, FormGroupInner } from 'styled';

export const ContactFields = ({ props, formik }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <InputsWrap>
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
                type="phone"
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
            <Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>
          </Form.Group>
        </InputsWrap>
      ) : (
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Billing Contact</Label>
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
          <Form.Group as={Col} md="10">
            <Form.Control
              name="email"
              type="text"
              placeholder="Email Address"
              value={formik.values.email}
              onChange={(e) => {
                props.setEmail(e.target.value);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
              isValid={formik.touched.email && !formik.errors.email}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
          </Form.Group>
        </InputsWrap>
      )}
    </>
  );
};
