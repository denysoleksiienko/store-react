import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { RowWrap, Title, OrderWrap, ColOrders } from 'styled';

import { Orders } from 'components';

export const FinishOrders = () => {
  return (
    <Container>
      <RowWrap>
        <Col lg={7}>
          <Title>Thank you for your order!</Title>
          <OrderWrap>
            <p>Order number is: 188787788</p>
            <p>You will recieve an email confirmation shortly to janathan.smith@gmail.com</p>
            <p>Estimated delivery Day is Friday 1st April 2016</p>
            <p>Print Recipe</p>
          </OrderWrap>
        </Col>
        <ColOrders lg={5}>
          <Orders />
        </ColOrders>
      </RowWrap>
    </Container>
  );
};
