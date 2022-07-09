import React from 'react';
import Cart from '../Cart';
import CartButton from '../CartButton';
import Logo from '../Logo';
import { GreenSpan, IconWrap, MobileIcon } from '../others.style';
import Searchbar from '../Searchbar';
import User from '../User';
import Wishlist from '../Wishlist';
import {
  HeaderContainer,
  HeaderWrap,
  HeaderTop,
  WishlistAndCart,
  HeaderBottom,
  NavLinks,
  HeaderNavLink,
  NavP,
} from './header.style';

import { FiHome, FiPercent, FiPhone, FiGrid, FiSearch } from 'react-icons/fi';
import { HiOutlineFire } from 'react-icons/hi';
import { VscMegaphone } from 'react-icons/vsc';

const primary = props => props.theme.color.primary;
const white = props => props.theme.color.white;

const Header = () => {
  const NavLinkGenerator = props => {
    return (
      <>
        {props.links.map((link, i) => {
          return (
            <HeaderNavLink href={link.url} key={i}>
              <IconWrap fontSize="1rem">{link.icon}</IconWrap>
              <NavP> {link.name} </NavP>
            </HeaderNavLink>
          );
        })}
      </>
    );
  };

  return (
    <HeaderContainer>
      <HeaderWrap>
        <HeaderTop>
          <Logo />
          <Searchbar />
          <WishlistAndCart>
            <Wishlist />
            <CartButton />
          </WishlistAndCart>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MobileIcon>
              <IconWrap fontSize="2rem">
                <FiSearch />
              </IconWrap>
            </MobileIcon>
            <User />
          </div>
        </HeaderTop>
        <HeaderBottom>
          <HeaderNavLink href="" bg={primary} fg={white} borR="2px">
            <IconWrap>
              <FiGrid />
            </IconWrap>
            <NavP>Browse All Categories</NavP>
          </HeaderNavLink>

          <NavLinks>
            <NavLinkGenerator
              links={[
                { name: 'home', icon: <FiHome />, url: '' },
                { name: 'hot deals', icon: <HiOutlineFire />, url: '' },
                { name: 'promotions', icon: <FiPercent />, url: '' },
                { name: 'new products', icon: <VscMegaphone />, url: '' },
              ]}
            />
          </NavLinks>
          <HeaderNavLink href="" marR="0">
            <IconWrap fontSize="1rem">
              <FiPhone />
            </IconWrap>
            <NavP>
              <GreenSpan>1233-7777 24/7</GreenSpan> support center
            </NavP>
          </HeaderNavLink>
        </HeaderBottom>
      </HeaderWrap>
      <Cart />
    </HeaderContainer>
  );
};

export default Header;
