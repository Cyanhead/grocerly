import styled, { css } from 'styled-components';
import { getColor, getFontWeight } from '../../../theme';
import { StyledButton } from '../../../components/Button/Button.styled';

export const SectionHeading = styled.p`
  margin-left: 16px;

  text-transform: uppercase;
  font-weight: ${getFontWeight('bold')};
  font-size: calc(12 / 16 * 1rem);
`;

export const Button = styled(StyledButton).attrs<{ $active?: boolean }>(
  props => ({
    type: 'button',
    $variant: 'normal',
    $active: props.$active || false,
  })
)`
  width: 100%;
  padding-left: 32px;
  padding-top: 4px;
  padding-bottom: 4px;

  text-transform: capitalize;

  &:hover {
    background-color: ${getColor('primary50')};
    color: ${getColor('primary700')};
  }

  ${props =>
    props.$active &&
    css`
      background-color: ${getColor('primary50')};
      color: ${getColor('primary700')};
    `}
`;
