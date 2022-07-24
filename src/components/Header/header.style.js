import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primary = props => props.theme.color.primary;
const primaryHover = props => props.theme.color.primaryHover;
const black = props => props.theme.color.black;
const white = props => props.theme.color.white;

const medium = props => props.theme.fontWght.medium;

export const HeaderContainer = styled.div`
  width: 100%;

  background-color: ${white};
  color: ${black};

  position: sticky;
  top: 0;
  z-index: 11;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 18px;
  border-bottom: 1px solid rgba(173, 173, 173, 0.2);

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    padding: 0;
  }
`;

export const WishlistAndCart = styled.div`
  display: flex;

  @media screen and (max-width: ${props => props.theme.breakpoint.large}) {
    display: none;
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 18px 0;
  border-bottom: 1px solid rgba(173, 173, 173, 0.2);

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    display: none;
  }
`;

export const AllCategoryBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${primary};
  color: ${white};

  margin-right: ${props => props.marR || '24px'};
  padding: 10px;
  border-radius: 2px;

  text-decoration: none;

  &:hover {
    background-color: ${primaryHover};
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: inherit;

  margin-right: ${props => props.marR || '24px'};
  padding: 10px;
  border-radius: 2px;

  text-decoration: none;

  &:hover {
    color: ${primary};
  }
`;

export const NavP = styled.p`
  font-weight: ${medium};
  text-transform: capitalize;

  color: ${props => props.fg || 'inherit'};
`;
