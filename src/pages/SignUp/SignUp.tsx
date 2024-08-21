import AuthNavBar from '../../components/NavBar/AuthNavBar';
import {
  AnimationWrapper,
  AnimCircleBg1,
  AnimCircleBg2,
  AnimCircleBg3,
} from './SignUp.styled';
import { Container, Left, Right, Wrapper } from '../AuthPages.styled';
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
    <Container data-testid="SignUp">
      <AuthNavBar type="sign-up" />
      <Wrapper>
        <Right>
          <SignUpForm />
        </Right>
        <Left>
          <AnimationWrapper>
            <AnimCircleBg1 />
            <AnimCircleBg2 />
            <AnimCircleBg3 />
          </AnimationWrapper>
        </Left>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
