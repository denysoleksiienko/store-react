import { useHistory } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { AddressFields, Button, Breadcrumbs, ContactFields } from 'components';
import { BILLING } from 'constants/pathnames';
import { Title } from 'styled';
/////////////

import { useFormik } from 'formik';
import { validationSchema } from 'constants/validationSchema';

export const Shipping = (props) => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      ...props.user,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => history.push(BILLING), 200);
    },
  });

  return (
    <Col lg={7}>
      <Breadcrumbs />
      <Title>Shipping Info</Title>

      <Form validated onSubmit={formik.handleSubmit}>
        <ContactFields props={props} formik={formik} />

        <AddressFields props={props} formik={formik} />

        <Form.Group as={Col} md="6">
          <Button title="Continue" />
        </Form.Group>
      </Form>
    </Col>
  );
};
