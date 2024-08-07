import {
  ChevronDown,
  Heart,
  User as UserIcon,
  ShoppingCart,
  LogIn,
  LogOut,
} from 'lucide-react';
import { P } from './User.styled';
import Menu from '../Menu';
import VisuallyHidden from '../VisuallyHidden';
import { useAuthContext } from '../../context';
import { MenuPropsType } from '../Menu/Menu.type';
import { useLogout } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';

function User() {
  const { state } = useAuthContext();
  const { isLoggedIn, user } = state;
  const userName = user?.name ?? 'Guest';

  const navigate = useNavigate();

  const userMenuOptions: MenuPropsType['options'] = [
    {
      type: 'button',
      label: 'Login',
      icon: LogIn,
      onClick: () => navigate('/login'),
    },
    {
      type: 'button',
      label: 'Wishlist',
      icon: Heart,
      onClick: () => console.log('Added to wishlist'),
    },
    {
      type: 'button',
      label: 'My Cart',
      icon: ShoppingCart,
      onClick: () => console.log('Added to cart'),
    },
  ];

  const loggedInUserMenuOptions = [...userMenuOptions];
  loggedInUserMenuOptions.shift();
  loggedInUserMenuOptions.unshift({
    type: 'button',
    label: 'Log out',
    icon: LogOut,
    onClick: useLogout,
  });
  loggedInUserMenuOptions.unshift({
    type: 'text',
    label: userName,
  });

  return (
    <Menu options={isLoggedIn ? loggedInUserMenuOptions : userMenuOptions}>
      <Icon icon={UserIcon} />
      <P>{userName}</P>
      <Icon icon={ChevronDown} />
      <VisuallyHidden>Check Menu</VisuallyHidden>
    </Menu>
  );
}

export default User;
