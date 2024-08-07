import logo from '../../assets/images/Logo.svg';
import { Image, Link } from './Logo.styled';

function Logo() {
  return (
    <Link to="/" data-testid="Logo">
      <Image src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
