import styled from 'styled-components';
import { COLORS } from '../constants/colors';

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
  color: ${COLORS.gray};
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  & :first-child {
    color: ${COLORS.gray};
  }
`;

export const SummaryTotal = styled.span`
  font-weight: bold;
  color: ${COLORS.indigo};
`;

export const SummaryCostInner = styled.div`
  display: flex;
  justify-content: space-between;
`;
