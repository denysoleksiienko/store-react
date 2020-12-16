import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const Title = styled.h1`
  font-size: 2em;
  margin-top: 50px;
  margin-left: 16px;
  color: #9932cc;
`;

export const Label = styled.label`
  font-size: 1.2em;
  color: #9932cc;
`;

export const InputsWrap = styled.div`
  margin-top: 25px;
`;

export const StyledButton = styled(Button)`
  background-color: #9932cc;
  width: 100%;
`;

export const OrderWrap = styled.div`
  margin-top: 50px;
  margin-left: 16px;
`;

export const SummaryTitle = styled.h5`
  font-size: 1.2em;
  color: #9932cc;
  margin: 12px;
`;

export const SummaryWrap = styled.div`
  margin-left: 12px;
`;

export const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SummaryCost = styled.div`
  flex-flow: column;
`;

export const SummaryItem = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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
