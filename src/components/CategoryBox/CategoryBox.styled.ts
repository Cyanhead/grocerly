import styled from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../../theme';
import { BaseContainer, BaseWrapper } from '../BaseStyled';
import { StyledButton } from '../Button/Button.styled';

export const Container = styled(BaseContainer)``;

export const Wrapper = styled(BaseWrapper)`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionHeading = styled.h2`
  font-family: 'Quicksand', sans-serif;
  font-weight: ${getFontWeight('semibold')};
  font-size: calc(20 / 16 * 1rem);

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(24 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    font-size: calc(28 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    font-size: calc(32 / 16 * 1rem);
  }
`;

export const Categories = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: flex;
  }
`;

export const CategoryButton = styled(StyledButton).attrs<{ $active?: boolean }>(
  props => ({
    type: 'button',
    $variant: 'normal',
    $active: props.$active,
  })
)`
  color: ${props => (props.$active ? getColor('primary') : 'inherit')};
`;

export const CategorySelect = styled.select`
  padding: 8px 4px;
  background-color: ${getColor('white')};
  border: 1px solid ${getColor('primary700')};
  border-radius: 2px;
  padding-left: 8px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: none;
  }
`;

export const CategoryOption = styled.option``;
