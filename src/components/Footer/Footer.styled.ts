import styled from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../../theme';
import { BaseWrapper, SectionHeading2, TextLink } from '../BaseStyled';

export const Container = styled.footer``;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    gap: 32px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    gap: 40px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    gap: 32px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
    gap: 40px;
  }
`;

export const ContactGroup = styled.ul`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;

  list-style: none;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    gap: 28px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
`;

export const Span = styled.span`
  font-weight: ${getFontWeight('semibold')};
  margin: 0 4px;
`;

export const Column = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    gap: 16px;
  }
`;

export const Heading = styled(SectionHeading2)`
  text-transform: uppercase;
`;

export const LinksGroup = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`;

export const Link = styled(TextLink)`
  text-transform: capitalize;
`;

export const Footnote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
  }
`;

export const P = styled.p``;

export const Payments = styled.img`
  max-width: 224px;
  width: 100%;
  object-fit: contain;

  /* @media screen and (min-width: ${getBreakpoint('lg')}) {
    max-width: 256px;
  } */
`;

export const Social = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialIcon = styled(Link)`
  background-color: ${getColor('primary')};
  color: ${getColor('white')};
  border-radius: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: line-through;

  &:hover {
    background-color: ${getColor('primary600')};
    color: ${getColor('white')};
  }
`;
