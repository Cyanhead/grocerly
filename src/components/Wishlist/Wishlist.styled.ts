import styled, { css } from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../../theme';
import { SectionHeading2 } from '../BaseStyled';

export const Wrapper = styled.aside.attrs<{ $isVisible: boolean }>(props => ({
  $isVisible: props.$isVisible,
}))`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;

  background-color: ${getColor('white')};

  width: 450px;
  padding: 16px;
  /* border: ${getColor('faintLine')}; */
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  transition: all 500ms ease-in-out;
  transform: translateX(${props => (props.$isVisible ? '0' : '100%')});

  opacity: ${props => (props.$isVisible ? '1' : '0')};

  @media screen and (max-width: ${getBreakpoint('md')}) {
    width: 100%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;

  overflow-y: auto;
`;

export const Card = styled.div`
  display: flex;
  padding: 8px 12px;
  gap: 16px;
  border: ${getColor('faintLine')};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 112px;
  aspect-ratio: 1;
`;

export const Title = styled(SectionHeading2)`
  font-size: calc(20 / 16 * 1rem);
  text-transform: capitalize;
`;

export const Price = styled.p`
  font-size: calc(18 / 16 * 1rem);
  font-weight: ${getFontWeight('medium')};
`;

export const Stock = styled.p.attrs<{ $stock: number }>(props => ({
  $stock: props.$stock,
}))`
  ${({ $stock }) => {
    if ($stock === 0) {
      return css`
        color: ${getColor('grey')};
      `;
    }
    if ($stock < 10) {
      return css`
        color: ${getColor('danger600')};
      `;
    }
    return css`
      color: ${getColor('primary600')};
    `;
  }}
`;
