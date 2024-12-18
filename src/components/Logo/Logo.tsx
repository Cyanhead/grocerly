import logo from '../../assets/images/Logo.svg';
import { Image, Link } from './Logo.styled';

function Logo({ ...delegated }) {
  return (
    <Link to="/" data-testid="Logo" {...delegated}>
      <Image src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
