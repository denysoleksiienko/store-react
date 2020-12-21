import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { COLORS } from '../constants/colors';

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
