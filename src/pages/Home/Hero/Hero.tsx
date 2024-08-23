import {
  Container,
  Heading,
  Image,
  ImageWrapper,
  P,
  Section,
  Wrapper,
} from './Hero.styled';
import spilledFruitsBag from '../../../assets/images/fruits_spill.webp';
import SubscribeForm from '../SubscribeForm';

function Hero() {
  return (
    <Container data-testid="Hero">
      <Wrapper>
        <Section>
          <Heading>Don't miss our daily amazing deals.</Heading>
          <P>Save up to 60% off on your first order.</P>
          <SubscribeForm />
        </Section>
        <ImageWrapper>
          <Image src={spilledFruitsBag} alt="" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

export default Hero;
