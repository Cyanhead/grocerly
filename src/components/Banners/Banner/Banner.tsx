import { BannerPropsType } from './Banner.type';
import {
  Button,
  Content,
  Description,
  Image,
  ImageWrapper,
  Tag,
  Title,
  Wrapper,
} from './Banner.styled';
import { ArrowRight } from 'lucide-react';

function Banner({
  type,
  title,
  description,
  tagline,
  button,
  image,
}: BannerPropsType) {
  return (
    <Wrapper data-testid="Banner" $theme={type}>
      <Content>
        <Tag $theme={type}>{tagline}</Tag>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button to={button.link}>
          {button.text} <ArrowRight strokeWidth={1.5} />
        </Button>
      </Content>
      <ImageWrapper>
        <Image src={image} alt="" />
      </ImageWrapper>
    </Wrapper>
  );
}

export default Banner;
