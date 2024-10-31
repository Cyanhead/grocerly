import {
  ChevronDown,
  Heart,
  User as UserIcon,
  ShoppingCart,
  LogIn,
  LogOut,
} from 'lucide-react';
import { P, Photo } from './User.styled';
import Menu from '../Menu';
import VisuallyHidden from '../VisuallyHidden';
import { useAuthContext } from '../../context';
import { MenuPropsType } from '../Menu/Menu.type';
import { useLogoutUser } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';
import { truncateString } from '../../helpers';

const TRUNCATION_LENGTH = 10;

function User() {
  const { state } = useAuthContext();

  const { isLoggedIn, user } = state;

  const userName = user?.displayName ?? user?.email ?? 'Guest';

  function formatUserName(userEnteredName: string) {
    const names = userEnteredName.split(' ');

    if (names.length === 1) {
      return truncateString(userName, TRUNCATION_LENGTH);
    }

    const firstName = names[0];
    const lastNameInitial = names[1][0];
    const newName = `${firstName} ${lastNameInitial}.`;

    return truncateString(newName, TRUNCATION_LENGTH);
  }

  const displayName = formatUserName(userName);

  const navigate = useNavigate();

  const userMenuOptions: MenuPropsType['options'] = [
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
    {
      type: 'button',
      label: 'Login',
      icon: LogIn,
      onClick: () => navigate('/login'),
    },
  ];

  const loggedInUserMenuOptions = [...userMenuOptions];
  loggedInUserMenuOptions.pop();
  loggedInUserMenuOptions.unshift({
    type: 'text',
    label: displayName,
  });
  loggedInUserMenuOptions.push({
    type: 'button',
    label: 'Log out',
    icon: LogOut,
    onClick: useLogoutUser,
  });

  return (
    <Menu options={isLoggedIn ? loggedInUserMenuOptions : userMenuOptions}>
      {user?.photoURL ? (
        <Photo src={user?.photoURL} alt="" />
      ) : (
        <Icon icon={UserIcon} />
      )}
      <P>{displayName}</P>
      <Icon icon={ChevronDown} />
      <VisuallyHidden>Check Menu</VisuallyHidden>
    </Menu>
  );
}

export default User;
