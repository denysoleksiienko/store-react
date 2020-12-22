import { StyledButton } from 'styled';

export const Button = ({ title, onClick }) => (
  <StyledButton variant="primary" size="lg" onClick={onClick} type="submit">
    {title}
  </StyledButton>
);
