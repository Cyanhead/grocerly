import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../theme';
import {
  BaseContainer,
  BaseWrapper,
  Option,
  SectionHeading,
  Select,
} from '../BaseStyled';
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

export const CategorySelect = styled(Select)`
  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: none;
  }
`;

export const CategoryOption = styled(Option)``;
