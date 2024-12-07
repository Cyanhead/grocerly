import {
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
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '../Icon';
import { formatUserName } from '../../helpers';
import { UserPropsType } from './User.types';

const TRUNCATION_LENGTH = 10;

function User({
  setShowCart = () => {},
  setShowWishlist = () => {},
}: UserPropsType) {
  const { state } = useAuthContext();
  const { isLoggedIn, user } = state;

  const userName = user?.displayName ?? user?.email ?? 'Guest';
  const displayName = formatUserName(userName, TRUNCATION_LENGTH);

  const navigate = useNavigate();
  const location = useLocation();

  // Check if "admin" is in the URL
  const isAdminPage = location.pathname.includes('admin');

  // Base menu options
  const userMenuOptions: MenuPropsType['options'] = [
    {
      type: 'button',
      label: 'Wishlist',
      icon: Heart,
      onClick: () => setShowWishlist(true),
    },
    {
      type: 'button',
      label: 'My Cart',
      icon: ShoppingCart,
      onClick: () => setShowCart(true),
    },
    {
      type: 'button',
      label: 'Login',
      icon: LogIn,
      onClick: () => navigate('/login'),
    },
  ];

  // Filter out cart and wishlist for admin pages
  const filteredMenuOptions = isAdminPage
    ? userMenuOptions.filter(
        option => option.label !== 'Wishlist' && option.label !== 'My Cart'
      )
    : userMenuOptions;

  // Menu options for logged-in users
  const loggedInUserMenuOptions: MenuPropsType['options'] = [
    {
      type: 'text',
      label: displayName,
    },
    ...filteredMenuOptions.filter(option => option.label !== 'Login'),
    {
      type: 'link',
      label: 'Profile',
      icon: UserIcon,
      linkPath: '/profile',
    },
    {
      type: 'button',
      label: 'Log out',
      icon: LogOut,
      onClick: useLogoutUser,
    },
  ];

  return (
    <Menu
      hasChevron={true}
      options={isLoggedIn ? loggedInUserMenuOptions : filteredMenuOptions}
    >
      {user?.photoURL ? (
        <Photo src={user?.photoURL} alt="" />
      ) : (
        <Icon icon={UserIcon} />
      )}
      <P>{displayName}</P>
      <VisuallyHidden>Check Menu</VisuallyHidden>
    </Menu>
  );
}

export default User;
