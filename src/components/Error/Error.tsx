import { ErrorPropsType } from './Error.type';
import { Container, Wrapper } from './Error.styled';

function Error({ children }: ErrorPropsType) {
  return (
    <Container data-testid="Error">
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default Error;
