import React, { useState } from 'react';
import Cart from '../Cart';
import CartButton from '../CartButton';
import Logo from '../Logo';
import { Disabler, IconWrap, MobileIcon } from '../others.style';
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

import { FiHome, FiPercent, FiGrid, FiSearch } from 'react-icons/fi';
import { HiOutlineFire } from 'react-icons/hi';
import { VscMegaphone } from 'react-icons/vsc';

const primary = props => props.theme.color.primary;
const white = props => props.theme.color.white;

const Header = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  const NavLinkGenerator = props => {
    return (
      <>
        {props.links.map((link, i) => {
          return (
            <Disabler
              // TODO delete when all links have been added
              disabled={link.url.trim() === ''}
            >
              <HeaderNavLink to={link.url} key={i}>
                <IconWrap fontSize="1rem">{link.icon}</IconWrap>
                <NavP> {link.name} </NavP>
              </HeaderNavLink>
            </Disabler>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Searchbar mobile toggleSearch={toggleSearch} />
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
              <MobileIcon onClick={() => setToggleSearch(!toggleSearch)}>
                <IconWrap fontSize="2rem">
                  <FiSearch />
                </IconWrap>
              </MobileIcon>
              <User />
            </div>
          </HeaderTop>
          <HeaderBottom>
            <HeaderNavLink to="/products" bg={primary} fg={white} borR="2px">
              <IconWrap>
                <FiGrid />
              </IconWrap>
              <NavP>Browse All Categories</NavP>
            </HeaderNavLink>

            <NavLinks>
              <NavLinkGenerator
                links={[
                  { name: 'home', icon: <FiHome />, url: '/' },
                  { name: 'hot deals', icon: <HiOutlineFire />, url: '' },
                  { name: 'promotions', icon: <FiPercent />, url: '' },
                  { name: 'new products', icon: <VscMegaphone />, url: '' },
                ]}
              />
            </NavLinks>
          </HeaderBottom>
        </HeaderWrap>
        <Cart />
      </HeaderContainer>
    </>
  );
};

export default Header;
