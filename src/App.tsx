import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { Orders } from 'components';
import { Routes } from 'routes/Routes';

import { RowWrap, ColWrap } from 'styled';

export const App: React.FC<unknown> = () => (
  <Container>
    <RowWrap>
      <Router>
        <Routes />
      </Router>
      <ColWrap lg={5}>
        <Orders />
      </ColWrap>
    </RowWrap>
  </Container>
);
