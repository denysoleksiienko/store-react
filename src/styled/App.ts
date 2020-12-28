import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { COLORS } from '../constants/colors';

export const RowWrap = styled(Row)`
  height: 70vh;
`;

export const ColOrders = styled(Col)`
  background: ${COLORS.solitude};
`;
