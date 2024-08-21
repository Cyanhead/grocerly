import styled, { css } from 'styled-components';
import { getColor, getFontWeight } from '../../theme';
import { ButtonPropsType } from './Button.type';

const BaseStyles = css<ButtonPropsType>`
  display: flex;
  gap: 6px;
  align-items: center;
  padding: ${({ $pad }) => ($pad ? `${$pad}px` : '16px')};
  border: none;
  border-radius: 2px;
  font-weight: ${getFontWeight('medium')};
  cursor: pointer;
  transition: all 100ms ease-in-out;
  text-decoration: none;

  ${props => {
    const { disabled } = props;
    if (disabled) {
      return css`
        opacity: 0.6;
        filter: grayscale(1);
        cursor: not-allowed;
      `;
    }
  }}

  ${props => {
    const { $variant, $theme } = props;

    switch ($variant) {
      case 'secondary':
        return css`
          background-color: ${getColor('white')};
          color: ${$theme === 'danger'
            ? getColor('danger600')
            : getColor('primary600')};
          border: 2px solid
            ${$theme === 'danger'
              ? getColor('danger600')
              : getColor('primary600')};

          &:hover {
            background-color: ${$theme === 'danger'
              ? getColor('danger50')
              : getColor('primary50')};
          }
        `;
      case 'ghost':
        return css`
          background-color: ${$theme === 'danger'
            ? getColor('danger50')
            : getColor('primary50')};
          color: ${$theme === 'danger'
            ? getColor('danger700')
            : getColor('primary700')};

          &:hover {
            background-color: ${$theme === 'danger'
              ? getColor('danger100')
              : getColor('primary100')};
          }
        `;
      case 'normal':
        return css`
          background-color: transparent;
          color: ${$theme || getColor('black')};

          &:hover {
            color: ${$theme || getColor('primary600')};
          }
        `;
      default:
        // primary
        return css`
          background-color: ${getColor('primary')};
          color: ${getColor('white')};

          &:hover {
            background-color: ${getColor('primary500')};
          }
        `;
    }
  }};
`;

export const StyledButton = styled.button<ButtonPropsType>`
  ${BaseStyles}
`;
