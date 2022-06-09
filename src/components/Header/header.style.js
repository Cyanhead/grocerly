import styled from 'styled-components';

const primaryLite = props => props.theme.color.primaryLite;
const black = props => props.theme.color.black;
const white = props => props.theme.color.white;

const medium = props => props.theme.fontWght.medium;

export const HeaderContainer = styled.div`
  width: 100%;

  background-color: ${white};
  color: ${black};
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 18px 0;
  border-bottom: 1px solid rgba(173, 173, 173, 0.2);
`;

export const WishlistAndCart = styled.div`
  display: flex;
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 18px 0;
  border-bottom: 1px solid rgba(173, 173, 173, 0.2);
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNavLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bg || 'inherit'};
  color: ${props => props.fg || 'inherit'};

  margin-right: ${props => props.marR || '24px'};
  padding: 10px;
  border-radius: ${props => props.borR || 'inherit'};

  text-decoration: none;

  &:hover {
    background-color: ${({ bg }) => (bg ? primaryLite : '')};
  }
`;

export const NavP = styled.p`
  font-weight: ${medium};
  text-transform: capitalize;

  color: ${props => props.fg || 'inherit'};
`;
