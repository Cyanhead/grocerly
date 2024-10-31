import styled from 'styled-components';
import { getBreakpoint, getColor, getFontWeight } from '../../theme';
import { StyledButton } from '../Button/Button.styled';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  padding: 10px;

  border: 1px solid rgba(173, 173, 173, 0.25);

  transition: 150ms ease-in;

  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const TextWrapper = styled.div`
  margin-top: 10px;
`;

export const Category = styled.p`
  font-size: calc(10 / 16 * 1rem);
  text-transform: capitalize;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(12 / 16 * 1rem);
  }
`;

export const Name = styled.p`
  font-weight: ${getFontWeight('semibold')};
  text-transform: capitalize;
  font-size: calc(14 / 16 * 1rem);

  @media screen and (min-width: ${getBreakpoint('md')}) {
    margin: 4px 0 8px 0;

    font-size: 1rem;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  height: auto;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
    align-items: center;
    height: 38px;
  }
`;

export const PriceGroup = styled.div`
  display: flex;

  justify-content: center;
  align-self: flex-start;

  margin-bottom: 8px;

  align-items: center;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    margin-bottom: 0;
  }
`;

export const DiscountedPrice = styled.p`
  color: ${getColor('primary600')};

  margin-right: 10px;

  font-weight: ${getFontWeight('semibold')};
  text-transform: capitalize;

  font-size: 1rem;
  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(18 / 16 * 1rem);
  }
`;

export const OldPrice = styled.p`
  color: ${getColor('grey')};

  font-size: calc(12 / 16 * 1rem);
  font-weight: ${getFontWeight('medium')};
  text-decoration: line-through;
  text-transform: capitalize;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(14 / 16 * 1rem);
  }
`;

export const AddButton = styled(StyledButton).attrs({
  type: 'button',
  $variant: 'ghost',
})`
  justify-content: center;
  padding: 8px 12px;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    visibility: hidden;

    ${Wrapper}:hover & {
      visibility: visible;
    }
  }
`;
