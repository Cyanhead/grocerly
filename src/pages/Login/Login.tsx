import AuthNavBar from '../../components/NavBar/AuthNavBar';
import {
  AnimationWrapper,
  AnimLineBg1,
  AnimLineBg2,
  AnimLineBg3,
  Container,
  Left,
  Right,
  Wrapper,
} from '../AuthPages.styled';
import LoginForm from './LoginForm/LoginForm';

function Login() {
  return (
    <Container data-testid="Login">
      <AuthNavBar type="login" />
      <Wrapper>
        <Left>
          <AnimationWrapper>
            <AnimLineBg1 />
            <AnimLineBg2 />
            <AnimLineBg3 />
          </AnimationWrapper>
        </Left>
        <Right>
          <LoginForm />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Login;
