import Col from 'react-bootstrap/Col';
import { Title, OrderWrap } from 'styled';

export const FinishOrders = ({ user }) => (
  <Col lg={7}>
    <Title>Thank you for your order!</Title>
    <OrderWrap>
      <p>
        Order number is: <b>188787788</b>
      </p>
      <p>
        You will recieve an email confirmation shortly to <b>{user.email}</b>
      </p>
      <p>Estimated delivery Day is Friday 1st April 2016</p>
      <p>Print Recipe</p>
    </OrderWrap>
  </Col>
);
