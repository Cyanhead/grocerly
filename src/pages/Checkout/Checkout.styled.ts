import styled from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../../theme';
import { BaseContainer, BaseWrapper, TextLink } from '../../components';
import { StyledButton } from '../../components/Button/Button.styled';

export const Container = styled(BaseContainer)``;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Cart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    padding: 16px;

    border: ${getColor('faintLine')};
  }
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border: ${getColor('faintLine')};

  @media screen and (min-width: ${getBreakpoint('xs')}) {
    align-items: stretch;
  }
`;

export const Image = styled.img`
  height: 80px;
  aspect-ratio: 1;
  display: none;

  @media screen and (min-width: 361px) {
    display: block;
  }

  @media screen and (min-width: ${getBreakpoint('xs')}) {
    height: 120px;
  }

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    height: 150px;
  }
`;

export const Title = styled(TextLink)`
  font-size: calc(18 / 16 * 1rem);
  font-weight: ${getFontWeight('medium')};
  text-transform: capitalize;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    font-size: calc(20 / 16 * 1rem);
    line-height: 1.5;
  }

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(24 / 16 * 1rem);
    line-height: 3;
  }
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: ${getFontWeight('semibold')};

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    font-size: calc(20 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(24 / 16 * 1rem);
    font-weight: ${getFontWeight('bold')};
  }
`;

const NAVBAR_HEIGHT = 178;
export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;

  border: ${getColor('faintLine')};

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    position: sticky;
    top: calc(${NAVBAR_HEIGHT}px + 32px);

    width: 30%;
  }
`;

export const Button = styled(StyledButton)`
  justify-content: center;
  font-weight: ${getFontWeight('semibold')};
  font-size: calc(20 / 16 * 1rem);
`;
