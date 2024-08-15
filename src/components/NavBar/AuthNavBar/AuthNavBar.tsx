import { AuthNavBarPropsType } from './AuthNavBar.type';
import { Container, Link, P, Span } from './AuthNavBar.styled';
import Logo from '../../Logo';
import Layout from '../../Layout';

function AuthNavBar({ type }: AuthNavBarPropsType) {
  return (
    <Container data-testid="AuthNavBar">
      <Logo />
      <Layout.FlexCol>
        <P>
          {type === 'login' && (
            <>
              <Span>Don't have an account?</Span>
              <Link to="/sign-up">Sign up</Link>.
            </>
          )}
          {type === 'sign-up' && (
            <>
              <Span>Already have an account?</Span>{' '}
              <Link to="/login">Login</Link>.
            </>
          )}
        </P>
      </Layout.FlexCol>
    </Container>
  );
}

export default AuthNavBar;
