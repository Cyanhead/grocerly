import { User } from '../../../components';
import { Container, Wrapper } from './NavBar.styled';

function NavBar() {
  return (
    <Container data-testid="NavBar">
      <Wrapper>
        <User />
      </Wrapper>
    </Container>
  );
}

export default NavBar;
