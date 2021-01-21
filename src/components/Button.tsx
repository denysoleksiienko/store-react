import React from 'react';
import { StyledButton } from 'styled';

import { IButtonProps } from 'interfaces/Button';

export const Button: React.FC<IButtonProps> = ({ title, type }) => (
  <StyledButton variant="primary" size="lg" type={type}>
    {title}
  </StyledButton>
);
