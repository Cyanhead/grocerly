import AuthNavBar from '../../components/NavBar/AuthNavBar';
import { Container, Left, Right, Wrapper } from '../AuthPages.styled';
import {
  AnimationWrapper,
  AnimLineBg1,
  AnimLineBg2,
  AnimLineBg3,
} from '../Login/Login.styled';
import PasswordResetForm from './PasswordResetForm';

function ForgotPassword() {
  return (
    <Container data-testid="ForgotPassword">
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
          <PasswordResetForm />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default ForgotPassword;
