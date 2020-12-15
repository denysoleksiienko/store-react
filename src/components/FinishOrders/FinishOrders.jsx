import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';

import { Orders } from 'components/Orders';

export const FinishOrders = () => {
  return (
    <Container>
      <Row>
        <Col lg={7}>
          <Wrap>
            <Title>Thank you for your order!</Title>
            <p>Order number is: 188787788</p>
            <p>You will recieve an email confirmation shortly to janathan.smith@gmail.com</p>
            <p>Estimated delivery Day is Friday 1st April 2016</p>
            <p>Print Recipe</p>
          </Wrap>
        </Col>
        <Col lg={5} style={{ background: '#e9ecef' }}>
          <Orders />
        </Col>
      </Row>
    </Container>
  );
};

const Wrap = styled.div`
  margin-top: 50px;
  margin-left: 16px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #9932cc;
`;
