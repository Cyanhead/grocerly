import { LayoutGrid } from 'lucide-react';
import { User } from '../../../components';
import { Container, MenuButton, Wrapper } from './NavBar.styled';
import { NavBarPropsType } from './NavBar.type';

function NavBar({ setShowSideBar }: NavBarPropsType) {
  return (
    <Container data-testid="NavBar">
      <Wrapper>
        <MenuButton
          icon={LayoutGrid}
          visuallyHidden="navigation menu"
          onClick={() => setShowSideBar((prev: boolean) => !prev)}
        />
        <User />
      </Wrapper>
    </Container>
  );
}

export default NavBar;
