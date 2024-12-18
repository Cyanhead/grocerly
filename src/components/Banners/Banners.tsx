import { Container, Wrapper } from './Banners.styled';
import Banner from './Banner';
import image1 from '../../assets/images/Offer1-delivery-man.webp';
import image2 from '../../assets/images/Offer2-citrus-fruits.webp';
import { BannerPropsType } from './Banner/Banner.type';

const offers: BannerPropsType[] = [
  {
    type: 'secondary',
    tagline: 'Free delivery',
    title: 'Free delivery over $50',
    description: 'Shop $50 product and get free delivery anywhere.',
    button: {
      text: 'Shop Now',
      link: '/products',
    },
    image: image1,
  },
  {
    type: 'primary',
    tagline: '60% off',
    title: 'Organic Food',
    description: 'Save up to 60% off on your first order.',
    button: {
      text: 'Order Now',
      link: '/products',
    },
    image: image2,
  },
];

function Banners() {
  return (
    <Container data-testid="Banners">
      <Wrapper>
        {offers.map(offer => (
          <Banner key={offer.title} {...offer} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Banners;
