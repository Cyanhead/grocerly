import styled from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../../theme';
import { BaseContainer, BaseWrapper, SectionHeading2 } from '../../components';
import { StyledButton } from '../../components/Button/Button.styled';

export const Container = styled(BaseContainer)``;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.aside`
  border: ${getColor('faintLine')};

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    overflow: auto;
  }

  @media screen and (min-width: ${getBreakpoint('md')}) {
    width: 200px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul {
      flex-direction: column;
    }
  }
`;

export const SidebarButton = styled(StyledButton).attrs<{ $active?: boolean }>(
  ({ $active }) => ({
    $active: $active || false,
  })
)`
  min-width: 123px;
  width: 100%;
  background-color: ${({ $active }) =>
    $active ? getColor('primary50') : 'inherit'};
  text-transform: capitalize;
`;

export const Content = styled.main`
  flex: 1;

  padding: 16px;
  border: ${getColor('faintLine')};

  min-height: 455px;
`;

export const Heading = styled(SectionHeading2)`
  text-transform: uppercase;
  padding-bottom: 12px;
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  border: ${getColor('faintLine')};
`;

export const Title = styled.p`
  font-weight: ${getFontWeight('medium')};
  text-transform: uppercase;
`;

export const Detail = styled.p`
  margin: 4px 0;
`;

export const Key = styled.span`
  font-weight: ${getFontWeight('medium')};
`;
