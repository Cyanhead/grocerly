import styled from 'styled-components';
import { getBreakpoint, getColor } from '../../../theme';
import {
  BaseContainer,
  BaseWrapper,
  Option as BaseOption,
  SectionHeading2,
  Select as BaseSelect,
} from '../../../components';

export const Container = styled(BaseContainer)``;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
`;

export const LeftColumn = styled.aside`
  display: none;

  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  background-color: ${getColor('white')};

  margin-right: 16px;
  padding: 8px 0;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

  @media screen and (min-width: ${getBreakpoint('md')}) {
    width: 220px;
    display: flex;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    width: 280px;
  }
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  flex: 1;

  background-color: ${getColor('white')};

  @media screen and (min-width: ${getBreakpoint('md')}) {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    padding: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 16px;
  flex-wrap: wrap;

  padding: 12px 0;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Heading = styled(SectionHeading2)`
  padding-bottom: 8px;
  border-bottom: ${getColor('faintLine')};

  text-transform: capitalize;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const CategorySelect = styled.select`
  display: none;

  padding: 4px 0;

  text-transform: capitalize;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: flex;
  }
`;

export const SelectGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileCategories = styled(Group)`
  @media screen and (min-width: ${getBreakpoint('md')}) {
    display: none;
  }
`;

export const P = styled.p`
  margin-right: 8px;
`;

export const Select = styled(BaseSelect)`
  text-transform: capitalize;
`;

export const Option = styled(BaseOption)``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;

  @media screen and (min-width: ${getBreakpoint('xs')}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
