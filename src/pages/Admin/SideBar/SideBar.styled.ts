import styled from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../../../theme';
import { IconButton } from '../../../components';

const SIDEBAR_WIDTH = '283px';

export const GreyBg = styled.div.attrs<{ $show: boolean }>(props => ({
  $show: props.$show || false,
}))`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  overflow: hidden;

  display: ${props => (props.$show ? 'block' : 'none')};

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div.attrs<{ $isOpen: boolean }>(props => ({
  $isOpen: props.$isOpen || false,
}))`
  position: fixed;
  top: 0;
  left: ${props => (props.$isOpen ? 0 : '-100%')};
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 32px;

  min-width: ${SIDEBAR_WIDTH};
  width: ${SIDEBAR_WIDTH};
  height: 100vh;
  height: 100dvh;
  padding: 16px 0;
  overflow-y: auto;

  background-color: ${getColor('white')};
  border-right: ${getColor('faintLine')};

  transition: 300ms ease-in-out;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    position: sticky;
    left: 0;
  }
`;

export const SectionTitle = styled.p`
  margin-left: 16px;

  text-transform: uppercase;
  font-weight: ${getFontWeight('bold')};
  font-size: calc(12 / 16 * 1rem);
`;

export const CloseButton = styled(IconButton).attrs<{ $show: boolean }>({})`
  position: absolute;
  top: 16px;
  left: ${props => (props.$show ? `calc(${SIDEBAR_WIDTH} + 16px)` : '-100%')};
  z-index: 3;

  border-radius: 50%;

  transition: 300ms ease-in-out;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    display: none;
  }
`;
