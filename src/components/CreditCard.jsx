import { usePaymentInputs } from 'react-payment-inputs';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Label, FormGroupInner, InputsWrap } from 'styled';
import images from 'react-payment-inputs/images';

export const CreditCard = ({ formik }) => {
  const { getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs();

  return (
    <InputsWrap>
      <Form.Group as={Col} md="10">
        <Label>Card Number</Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <svg {...getCardImageProps({ images })} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            {...getCardNumberProps({ onBlur: formik.handleBlur, onChange: formik.handleChange })}
            isValid={formik.touched.cardNumber && !formik.errors.cardNumber}
            isInvalid={formik.touched.cardNumber && formik.errors.cardNumber}
            placeholder="XXXX XXXX XXXX XXX"
          />
          <Form.Control.Feedback type="invalid">{formik.errors.cardNumber}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <FormGroupInner>
        <Form.Group as={Col} md="4">
          <Label>Expiry date</Label>
          <Form.Control
            {...getExpiryDateProps({ onBlur: formik.handleBlur, onChange: formik.handleChange })}
            isValid={formik.touched.expiryDate && !formik.errors.expiryDate}
            isInvalid={formik.touched.expiryDate && formik.errors.expiryDate}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.expiryDate}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Label>Security Code</Label>
          <Form.Control
            {...getCVCProps({ onBlur: formik.handleBlur, onChange: formik.handleChange })}
            isValid={formik.touched.cvc && !formik.errors.cvc}
            isInvalid={formik.touched.cvc && formik.errors.cvc}
            placeholder="123"
          />
          <Form.Control.Feedback type="invalid">{formik.errors.cvc}</Form.Control.Feedback>
        </Form.Group>
      </FormGroupInner>
    </InputsWrap>
  );
};
