import {
  Flame,
  Heart,
  Home,
  LayoutGrid,
  Megaphone,
  Percent,
} from 'lucide-react';
import Button, { LinkButton } from '../Button';
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

const bottomNavLinks = [
  { text: 'Home', icon: Home },
  { text: 'Hot deals', icon: Flame },
  { text: 'Promotions', icon: Percent },
  { text: 'New products', icon: Megaphone },
];

function NavBar() {
  return (
    <Container data-testid="NavBar">
      <Wrapper>
        <TopRow>
          <Logo />
          <SearchForm />

          <WishlistAndCart>
            <Button $variant="normal">
              <Icon icon={Heart} />
              Wishlist
            </Button>

            <CartButton />
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
  );
}

export default NavBar;
