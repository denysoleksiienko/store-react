import React from 'react';
import Col from 'react-bootstrap/Col';

import { IFinishOrder } from 'interfaces/Orders';

import { Title, Wrap, Inner, Button, SpanEmail, SpanDelivery, OrderNumber } from 'styled';

export const FinishOrders: React.FC<IFinishOrder> = ({ user }) => (
  <Col lg={7}>
    <Wrap>
      <Title>Thank you for your order!</Title>
      <Inner>
        <OrderNumber data-testid="order-num">
          Order number is: <b>188787788</b>
        </OrderNumber>
        <p data-testid="order-email">
          You will recieve an email confirmation shortly to <SpanEmail>{user.email}</SpanEmail>
        </p>
        <p data-testid="order-delivery">
          Estimated delivery Day is <br />
          <SpanDelivery>Friday 1st April 2016</SpanDelivery>
        </p>
        <Button onClick={() => window.print()}> Print Recipe </Button>
      </Inner>
    </Wrap>
  </Col>
);
