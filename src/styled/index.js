import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const COLORS = {
  white: '#fff',
  orchid: '#9932cc',
  solitude: '#e9ecef',
  gray: '#808080',
};

export const BreadcrumbWrap = styled(Breadcrumb)`
  ol.breadcrumb {
    background: ${COLORS.white};
  }
  color: ${COLORS.orchid};
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: bold;
  color: ${COLORS.gray};
  &.active {
    color: ${COLORS.orchid};
  }
`;

export const RowWrap = styled(Row)`
  height: 70vh;
`;

export const ColOrders = styled(Col)`
  background: ${COLORS.solitude};
`;

export const Title = styled.h1`
  font-size: 2em;
  margin-left: 16px;
  color: ${COLORS.orchid};
`;

export const Label = styled.label`
  font-size: 1.2em;
  color: ${COLORS.orchid};
`;

export const InputsWrap = styled.div`
  margin-top: 25px;
`;

export const StyledButton = styled(Button)`
  background-color: ${COLORS.orchid};
  width: 100%;
`;

export const OrderWrap = styled.div`
  margin-top: 50px;
  margin-left: 16px;
`;

export const SummaryTitle = styled.h5`
  font-size: 1.2em;
  color: ${COLORS.orchid};
  margin: 12px;
`;

export const SummaryWrap = styled.div`
  margin-left: 12px;
`;

export const SummaryList = styled.div`
  padding: 0;
`;

export const SummaryCost = styled.div`
  flex-flow: column;
`;

export const SummaryItem = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const SummaryItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const SummaryTotal = styled.span`
  font-weight: bold;
  color: #310062;
`;

export const SecureInfo = styled.div`
  margin-left: 16px;
  margin-top: 15px;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

export const Span = styled.span`
  font-size: 18px;
  padding-left: 10px;
`;

export const InputSpan = styled.span`
  margin-left: 20px;
  font-size: 12px;
`;

export const FormGroupInner = styled.div`
  display: flex;
`;
