import styled from 'styled-components';
import { COLORS } from 'constants/colors';

export const Wrap = styled.div`
  margin-top: 50px;
  font-size: 18px;
  @media print {
    color: #000;
  }
`;

export const Inner = styled.div`
  margin-top: 50px;
  margin-left: 16px;
`;

export const OrderNumber = styled.p`
  font-size: 20px;
`;

export const SpanEmail = styled.span`
  font-weight: bold;
  color: ${COLORS.orchid};
  text-decoration: underline;
`;

export const SpanDelivery = styled.span`
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
`;

export const Button = styled.button`
  padding: 0;
  font-weight: bold;
  color: ${COLORS.orchid};
  border: none;
  text-decoration: underline;
  background-color: #fff;
  &:active,
  :focus,
  :hover {
    outline: none;
  }
`;
