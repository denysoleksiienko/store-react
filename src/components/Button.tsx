import React from 'react';
import { StyledButton } from 'styled';

interface IButtonProps {
  title: string;
  type: string;
}

export const Button: React.FC<IButtonProps> = ({ title, type }) => (
  <StyledButton variant="primary" size="lg" type={type}>
    {title}
  </StyledButton>
);
