import styled from 'styled-components';
import { getColor, getFontWeight } from '../../../../theme';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: flex;
  gap: 12px;
  align-items: center;

  padding: 8px 16px;
  border-radius: 2px;

  font-weight: ${getFontWeight('medium')};
  cursor: pointer;
  transition: all 100ms ease-in-out;
  text-decoration: none;
  text-transform: capitalize;

  color: ${getColor('black')};

  &.active {
    background-color: ${getColor('primary50')};
  }

  &:hover {
    background-color: ${getColor('primary50')};
  }
`;
