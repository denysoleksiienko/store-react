import Col from 'react-bootstrap/Col';

import { Title, OrderWrap } from 'styled';

export const FinishOrders = ({ user }) => (
  <Col lg={7}>
    <OrderWrap>
      <Title>Thank you for your order!</Title>

      <p>
        Order number is: <span>188787788</span>
      </p>
      <p>
        You will recieve an email confirmation shortly to <span>{user.email}</span>
      </p>
      <p>
        Estimated delivery Day is <span>Friday 1st April 2016</span>
      </p>
      <p>Print Recipe</p>
    </OrderWrap>
  </Col>
);
