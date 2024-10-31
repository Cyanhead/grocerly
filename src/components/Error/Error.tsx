import { ErrorPropsType } from './Error.type';
import { Container, Wrapper } from './Error.styled';
import { SectionHeading2 } from '../BaseStyled';

function Error({ children }: ErrorPropsType) {
  return (
    <Container data-testid="Error">
      <Wrapper>
        <SectionHeading2>{children}</SectionHeading2>
      </Wrapper>
    </Container>
  );
}

export default Error;
