import { range } from '../../../helpers';
import {
  ImageAndTextContainer,
  ImageAndTextWrapper,
  LoadingImage,
  LoadingContent,
  LoadingTextContainer,
  LoadingMainText,
  LoadingSubText,
  LoadingBtn,
  SingleTextLine,
  ChartWrapper,
  ChartImage,
} from './Skeleton.styled';

function ImageAndText() {
  return (
    <ImageAndTextContainer>
      <ImageAndTextWrapper>
        <LoadingImage />
        <LoadingContent>
          <LoadingTextContainer>
            <LoadingMainText />
            <LoadingSubText />
          </LoadingTextContainer>
          <LoadingBtn />
        </LoadingContent>
      </ImageAndTextWrapper>
    </ImageAndTextContainer>
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

function SingleLineText({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return <SingleTextLine $width={width} $height={height} />;
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

function Chart({ height }: { height?: string }) {
  return (
    <ChartWrapper>
      <ChartImage $height={height} />
    </ChartWrapper>
  );
}

function Dashboard() {
  return (
    <>
      {range(0, 4).map(num => (
        <Metric key={num} />
      ))}
      <Chart />
      <Chart />
    </>
  );
}

function Wrapper({
  children,
}: // style,
{
  children: React.ReactNode;
  // style?: React.CSSProperties;
}) {
  return <>{children}</>;
}

const Skeleton = {
  ImageAndText,
  Text,
  SingleLineText,
  Dashboard,
  Metric,
  Chart,
  Wrapper,
};

export default Skeleton;
