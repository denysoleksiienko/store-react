import { useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Label, InputsWrap, InputSpan, FormGroupInner } from 'styled';

export const ContactFields = ({ user, setName, setPhone, setEmail }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Recipient</Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={user.name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="8">
            <FormGroupInner>
              <Form.Control
                type="phone"
                placeholder="Daytime Phone"
                value={user.phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <InputSpan>For delivery questions only</InputSpan>
            </FormGroupInner>
          </Form.Group>
        </InputsWrap>
      ) : (
        <InputsWrap>
          <Form.Group as={Col} md="10">
            <Label>Billing Contact</Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={user.name}
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="10">
            <Form.Control
              type="text"
              placeholder="Email Address"
              value={user.email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
        </InputsWrap>
      )}
    </>
  );
};
