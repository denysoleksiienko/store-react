import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { Orders } from 'components';
import { Routes } from 'routes/Routes';

import { RowWrap, ColOrders } from 'styled';

export const App = () => (
  <Container>
    <RowWrap>
      <Router>
        <Routes />
      </Router>
      <ColOrders lg={5}>
        <Orders />
      </ColOrders>
    </RowWrap>
  </Container>
);
