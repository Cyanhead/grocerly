import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import {
  Footnote,
  Column,
  ContactGroup,
  Container,
  Heading,
  Link,
  LinksGroup,
  ListItem,
  P,
  Section,
  Span,
  Wrapper,
  Payments,
  Social,
  SocialIcon,
} from './Footer.styled';
import payments from '../../assets/images/payments.webp';
import Icon from '../Icon';

const contact_details = [
  {
    icon: MapPin,
    title: 'Address',
    content: '1762 School House Road',
  },
  { icon: Phone, title: 'Call us', content: '1233-777' },
  {
    icon: Mail,
    title: 'Email',
    content: 'grocerly@contact.com',
  },
  {
    icon: Clock,
    title: 'Work hours',
    content: '8:00 - 20:00, Sunday -  Thursday',
  },
];

const navigation_links = [
  {
    column: 'account',
    links: [
      { name: 'wishlist', url: '#' },
      { name: 'cart', url: '#' },
      { name: 'track order', url: '#' },
      { name: 'shipping details', url: '#' },
    ],
  },
  {
    column: 'useful links',
    links: [
      { name: 'about us', url: '#' },
      { name: 'contact', url: '#' },
      { name: 'hot deals', url: '#' },
      { name: 'promotions', url: '#' },
      { name: 'new products', url: '#' },
    ],
  },
  {
    column: 'help center',
    links: [
      { name: 'payments', url: '#' },
      { name: 'refund', url: '#' },
      { name: 'checkout', url: '#' },
      { name: 'shipping', url: '#' },
      { name: 'q & a', url: '#' },
      { name: 'privacy policy', url: '#' },
    ],
  },
];

function Footer() {
  return (
    <Container data-testid="Footer">
      <Wrapper>
        <Section>
          <ContactGroup>
            {contact_details.map(({ icon: Icon, title, content }, index) => (
              <ListItem key={index}>
                <Icon color="#3BB77E" /> <Span>{title}:</Span> {content}
              </ListItem>
            ))}
          </ContactGroup>
          {navigation_links.map(({ column, links }, index) => (
            <Column key={index}>
              <Heading>{column}</Heading>
              <LinksGroup>
                {links.map(({ name, url }, index) => (
                  <ListItem key={index}>
                    <Link to={url}>{name}</Link>
                  </ListItem>
                ))}
              </LinksGroup>
            </Column>
          ))}
        </Section>
        <Footnote>
          <P>
            &copy; {new Date().getFullYear()} Grocerly, all rights reserved.
          </P>
          <Payments src={payments} alt="" />
          <Social>
            {[Facebook, Linkedin, Instagram, Twitter].map((icon, index) => (
              <SocialIcon to="#" key={index}>
                <Icon icon={icon} />
              </SocialIcon>
            ))}
          </Social>
        </Footnote>
      </Wrapper>
    </Container>
  );
}

export default Footer;
