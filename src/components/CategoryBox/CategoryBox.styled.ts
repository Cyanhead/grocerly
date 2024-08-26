import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../theme';
import { BaseContainer, BaseWrapper, SectionHeading } from '../BaseStyled';
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

export const Heading = styled(SectionHeading)``;

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
