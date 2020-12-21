import { useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Label, InputsWrap, InputSpan, FormGroupInner } from 'styled';

export const ContactFields = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? (
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Recipient</Label>
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group as={Col} md="8">
            <FormGroupInner>
              <Form.Control type="phone" placeholder="Daytime Phone" />
              <InputSpan>For delivery questions only</InputSpan>
            </FormGroupInner>
          </Form.Group>
        </InputsWrap>
      ) : (
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Billing Contact</Label>
            <Form.Control type="text" placeholder="Full Name" />
          </Form.Group>
          <Form.Group as={Col} md="10">
            <Form.Control type="text" placeholder="Email Address" />
          </Form.Group>
        </InputsWrap>
      )}
    </>
  );
};
