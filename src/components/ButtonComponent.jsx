import { StyledButton } from 'styled';

export const ButtonComponent = ({ title, onClick }) => (
  <StyledButton variant="primary" size="lg" onClick={onClick}>
    {title}
  </StyledButton>
);
