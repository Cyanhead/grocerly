import {
  Container,
  Wrapper,
  LoadingImage,
  LoadingContent,
  LoadingTextContainer,
  LoadingMainText,
  LoadingSubText,
  LoadingBtn,
} from './Skeleton.styled';

function ImageAndText() {
  return (
    <Container>
      <Wrapper>
        <LoadingImage />
        <LoadingContent>
          <LoadingTextContainer>
            <LoadingMainText />
            <LoadingSubText />
          </LoadingTextContainer>
          <LoadingBtn />
        </LoadingContent>
      </Wrapper>
    </Container>
  );
}

function Text({ width }: { width?: string }) {
  return (
    <LoadingContent $width={width}>
      <LoadingTextContainer>
        <LoadingMainText />
        <LoadingSubText />
      </LoadingTextContainer>
      <LoadingBtn />
    </LoadingContent>
  );
}

function Metric() {
  return (
    <LoadingContent $height="87.33px">
      <LoadingTextContainer>
        <LoadingMainText />
        <LoadingSubText $height="24px" />
      </LoadingTextContainer>
    </LoadingContent>
  );
}

const Skeleton = {
  ImageAndText,
  Text,
  Metric,
};

export default Skeleton;
