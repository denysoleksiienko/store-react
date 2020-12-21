import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import { COLORS } from './colors';

export const RowWrap = styled(Row)`
  height: 70vh;
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-left: 16px;
  color: ${COLORS.orchid};
`;

export const InputsWrap = styled.div`
  margin-top: 25px;
`;

export const Label = styled.label`
  font-size: 1.2em;
  color: ${COLORS.orchid};
`;

export const FormGroupInner = styled.div`
  display: flex;
`;
