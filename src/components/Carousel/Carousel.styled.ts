import styled, { css } from 'styled-components';
import { getBreakpoint } from '../../theme';
import IconButton from '../IconButton';

export const Container = styled.div`
  display: flex;
  overflow-x: scroll;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    overflow-x: hidden;
  }
`;

export const Wrapper = styled.div.attrs<{ $index: number; $width: number }>(
  props => ({
    $index: props.$index,
  })
)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 12px;
  justify-content: center;
  align-items: flex-start;

  min-width: 94%;

  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }

  transition: 500ms ease;
  transform: translateX(${props => props.$index * (-1 * props.$width)}px);

  @media screen and (min-width: 360px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    grid-template-columns: 1fr 1fr 1fr;
    min-width: 96%;
  }

  @media screen and (min-width: ${getBreakpoint('md')}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    margin-right: 0;
    min-width: 100%;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr;
  }

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
  }
`;

const BaseArrowStyles = css`
  position: absolute;
  bottom: 29%;
  transform: translateY(-50%);
  z-index: 1;
  display: none;

  background-color: #f2f3f4;
  border-radius: 50%;

  box-shadow: 0 2px 12px 10px rgb(0 0 0 / 10%);
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: none;
  }

  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: block;
  }

  @media screen and (min-width: 1350px) {
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 10%);
  }
`;

export const ArrowLeft = styled(IconButton)`
  ${BaseArrowStyles}

  @media screen and (min-width: ${getBreakpoint('md')}) {
    left: 0;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    left: 20px;
  }

  @media screen and (min-width: 1350px) {
    left: -22px;
  }
`;

export const ArrowRight = styled(IconButton)`
  ${BaseArrowStyles}

  @media screen and (min-width: ${getBreakpoint('md')}) {
    right: 0;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    right: 20px;
  }

  @media screen and (min-width: 1350px) {
    right: -22px;
  }
`;
