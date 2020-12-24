import Col from 'react-bootstrap/Col';
import { Title, Wrap, Inner, Button, SpanEmail, SpanDelivery, OrderNumber } from 'styled';

export const FinishOrders = ({ user }) => (
  <Col lg={7}>
    <Wrap>
      <Title>Thank you for your order!</Title>
      <Inner>
        <OrderNumber>
          Order number is: <b>188787788</b>
        </OrderNumber>
        <p>
          You will recieve an email confirmation shortly to <SpanEmail>{user.email}</SpanEmail>
        </p>
        <p>
          Estimated delivery Day is <br />
          <SpanDelivery>Friday 1st April 2016</SpanDelivery>
        </p>
        <Button onClick={() => window.print()}> Print Recipe </Button>
      </Inner>
    </Wrap>
  </Col>
);
