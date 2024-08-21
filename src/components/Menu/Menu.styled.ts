import styled from 'styled-components';
import { StyledButton } from '../Button/Button.styled';
import { getBreakpoint } from '../../theme';

export const Button = styled(StyledButton).attrs<{ $gap?: number }>(props => ({
  type: 'button',
  $gap: props.$gap || 4,
}))`
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: ${props => `${props.$gap}px`};

  width: 100%;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    gap: 6px;
    padding: 16px;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Ul = styled.ul`
  position: absolute;
  right: 0;
  top: calc(100% + 16px);
  z-index: 5;
  width: max-content;
  border-radius: 2px;
  background-color: white;
  padding: 0;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
  list-style: none;
`;

export const ListButtonWrapper = styled.li`
  /* list-style: none; */
  font-size: 1rem;

  @include respond-to(md) {
    // 768px
    font-size: calc(14 / 16 * 1rem);
  }
`;

export const ListText = styled.li`
  padding: 10px 12px;
`;
