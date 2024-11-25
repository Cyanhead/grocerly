import { Flame, Home, LayoutGrid, Megaphone, Percent } from 'lucide-react';
import { LinkButton } from '../Button';
import Icon from '../Icon';
import Layout from '../Layout';
import Logo from '../Logo';
import SearchBar from '../Search/SearchBar';
import SearchForm from '../Search/SearchForm';
import User from '../User';
import CartButton from './CartButton';
import {
  BottomRow,
  Container,
  NavLinks,
  TopRow,
  WishlistAndCart,
  Wrapper,
} from './NavBar.styled';
import { useState } from 'react';
import Wishlist from '../Wishlist';
import WishlistButton from './WishlistButton';
import Cart from '../Cart';

const bottomNavLinks = [
  { text: 'Home', icon: Home },
  { text: 'Hot deals', icon: Flame },
  { text: 'Promotions', icon: Percent },
  { text: 'New products', icon: Megaphone },
];

function NavBar() {
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Container data-testid="NavBar">
        <Wrapper>
          <TopRow>
            <Logo />
            <SearchForm />

            <WishlistAndCart>
              <WishlistButton onClick={() => setShowWishlist(true)} />
              <CartButton onClick={() => setShowCart(true)} />
            </WishlistAndCart>
            <Layout.FlexRow $justify="space-between" $align="center">
              <SearchBar />
              <User />
            </Layout.FlexRow>
          </TopRow>
          <BottomRow>
            <LinkButton to="/products">
              <Icon icon={LayoutGrid} />
              Browse All Categories
            </LinkButton>
            <NavLinks>
              {bottomNavLinks.map(({ text, icon }) => {
                const formatted = '#' + text.split(' ').join('-').toLowerCase();
                const url = text.toLowerCase() === 'home' ? '/' : formatted;

                return (
                  <li key={text}>
                    <LinkButton to={url} $variant="normal">
                      <Icon icon={icon} />
                      {text}
                    </LinkButton>
                  </li>
                );
              })}
            </NavLinks>
          </BottomRow>
        </Wrapper>
      </Container>
      <Wishlist isVisible={showWishlist} setIsVisible={setShowWishlist} />
      <Cart isVisible={showCart} setIsVisible={setShowCart} />
    </>
  );
}

export default NavBar;
