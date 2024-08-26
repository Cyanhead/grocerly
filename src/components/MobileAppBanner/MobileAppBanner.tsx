import {
  AppStoreButton,
  ButtonGroup,
  Container,
  Group,
  Heading,
  Image,
  ImageWrapper,
  Link,
  P,
  Wrapper,
} from './MobileAppBanner.styled';
import phones from '../../assets/images/phone-app-interface.webp';
import apple_store from '../../assets/images/apple-store.svg';
import play_store from '../../assets/images/play-store.svg';

function MobileAppBanner() {
  return (
    <Container data-testid="MobileAppBanner">
      <Wrapper>
        <Group>
          <Heading>Shop Faster With Grocerly App</Heading>
          <P>Available on both IOS & Android.</P>
          <ButtonGroup>
            <Link to="#app-store">
              <AppStoreButton src={apple_store} alt="app store" />
            </Link>
            <Link to="#play-store">
              <AppStoreButton src={play_store} alt="play store" />
            </Link>
          </ButtonGroup>
        </Group>
        <ImageWrapper>
          <Image src={phones} alt="phones" />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

export default MobileAppBanner;
