import React from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Label, FormGroupInner, InputsWrap } from 'styled';

import { IPaymentInputs, ICreditCard } from 'interfaces/PaymentInputs';

export const CreditCard: React.FC<ICreditCard> = ({
  onBlur,
  onChange,
  isValidNumber,
  isInvalidNumber,
  isValidDate,
  isInvalidDate,
  isValidCvc,
  isInvalidCvc,
  errorNumber,
  errorExpiryDate,
  errorCvc,
}) => {
  const { getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps }: IPaymentInputs = usePaymentInputs();

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
            {...getCardNumberProps({ onBlur: onBlur, onChange: onChange })}
            isValid={isValidNumber}
            isInvalid={isInvalidNumber}
            placeholder="XXXX XXXX XXXX XXX"
          />
          <Form.Control.Feedback type="invalid">{errorNumber}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <FormGroupInner>
        <Form.Group as={Col} md="4">
          <Label>Expiry date</Label>
          <Form.Control
            {...getExpiryDateProps({ onBlur: onBlur, onChange: onChange })}
            isValid={isValidDate}
            isInvalid={isInvalidDate}
          />
          <Form.Control.Feedback type="invalid">{errorExpiryDate}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Label>Security Code</Label>
          <Form.Control
            {...getCVCProps({ onBlur: onBlur, onChange: onChange })}
            isValid={isValidCvc}
            isInvalid={isInvalidCvc}
            placeholder="123"
          />
          <Form.Control.Feedback type="invalid">{errorCvc}</Form.Control.Feedback>
        </Form.Group>
      </FormGroupInner>
    </InputsWrap>
  );
};
