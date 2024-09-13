import {
  Container,
  Wrapper,
  LoadingImage,
  LoadingContent,
  LoadingTextContainer,
  LoadingMainText,
  LoadingSubText,
  LoadingBtn,
  SingleTextLine,
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
function SingleLineText({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return <SingleTextLine $width={width} $height={height} />;
}

const Skeleton = {
  ImageAndText,
  Text,
  SingleLineText,
  Metric,
};

export default Skeleton;
