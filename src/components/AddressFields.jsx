import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CountrySelect from 'react-bootstrap-country-select';
import { useCountry } from 'hooks/useCountry';
import { Label, InputsWrap, FormGroupInner } from 'styled';

export const AddressFields = () => {
  const { country, setCountry } = useCountry();

  return (
    <InputsWrap>
      <Form.Group as={Col} md="10">
        <Label>Address</Label>
        <Form.Control type="text" placeholder="Street Address" />
      </Form.Group>
      <Form.Group as={Col} md="10">
        <Form.Control type="text" placeholder="Apt, Suite, Bldg, Gate Code. (optional)" />
      </Form.Group>

      <Form.Group as={Col} md="10">
        <Form.Control type="text" placeholder="City" required />
      </Form.Group>

      <FormGroupInner>
        <Form.Group as={Col} md="6">
          <CountrySelect value={country} onChange={setCountry} placeholder="Country" flags={false} />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Control type="text" placeholder="Zip" required />
        </Form.Group>
      </FormGroupInner>
    </InputsWrap>
  );
};
