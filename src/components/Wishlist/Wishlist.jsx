import { useRef } from 'react';
import { useCartContext } from '../../context/CartContext';
import { useWishlistContext } from '../../context/WIshlistContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside.hook';
import {
  WishlistWrap,
  WishlistTop,
  WishlistTopLeft,
  EmptyWishlistButton,
  EmptyWishlistButtonSpan,
  WishlistMid,
  WishlistHeading,
  WishlistP,
  AddProductsButton,
  WishlistItemsList,
  WishlistItemWrap,
  WishlistItemLeft,
  ItemImg,
  ItemDetails,
  WishlistItemRight,
} from './wishlist.style';

import {
  FiHeart,
  FiTrash,
  FiChevronLeft,
  FiShoppingCart,
} from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { ColoredBtn, Disabler, GreenSpan, IconWrap } from '../others.style';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

const Wishlist = () => {
  const {
    wishlistItems,
    setWishlistItems,
    showWishlist,
    setShowWishlist,
    totalQuantity,
    setTotalQuantity,
    onWishlistAdd,
  } = useWishlistContext();

  const { onAdd } = useCartContext();

  const clickOutRef = useRef(null);
  useOnClickOutside(clickOutRef, () => setShowWishlist(false));
  useLockBodyScroll(showWishlist);

  const EmptyWishlist = () => {
    return (
      <WishlistMid>
        {/* TODO: replace icon with svg */}
        <IconWrap fontSize="8rem">
          <FiHeart />
        </IconWrap>
        <WishlistP
          fontSize="1.25rem"
          fontWght={props => props.theme.fontWght.medium}
          textTrans="inherit"
          textAlign="center"
        >
          There are no items in the Wishlist ಥ_ಥ
        </WishlistP>
        <AddProductsButton
          to="/products"
          onClick={() => setShowWishlist(!showWishlist)}
        >
          Add products
        </AddProductsButton>
      </WishlistMid>
    );
  };

  const WishlistInterface = () => {
    return (
      <WishlistItemsList>
        {wishlistItems.map(item => {
          return (
            <WishlistItemWrap key={item?.id}>
              <WishlistItemLeft>
                <ItemImg src={item?.images[0]} alt="" />
                <ItemDetails>
                  <WishlistP> {item?.name} </WishlistP>
                  <WishlistP>
                    <GreenSpan
                      fontWght={props => props.theme.fontWght.semibold}
                    >
                      &#36;{item?.price}{' '}
                    </GreenSpan>
                  </WishlistP>
                </ItemDetails>
              </WishlistItemLeft>
              <WishlistItemRight>
                <IconWrap
                  onClick={() => onWishlistAdd(item)}
                  fg={props => props.theme.color.primary}
                  fgHover={props => props.theme.color.primaryHover}
                  bgHover={props => props.theme.color.primaryLite}
                  bordRad="50%"
                  pad="10px 9px 8px 9px"
                >
                  <FaHeart />
                </IconWrap>
                <ColoredBtn
                  fontSize="0.875rem"
                  pad="8px 22px"
                  padMid="12px 16px"
                  bg={props => props.theme.color.primaryLite}
                  bgHover={props => props.theme.color.primary}
                  fg={props => props.theme.color.primary}
                  fgHover={props => props.theme.color.white}
                  bordRad="2px"
                  cursor="pointer"
                  onClick={() => onAdd(item)}
                >
                  <IconWrap fontSize="0.875rem">
                    <FiShoppingCart />
                  </IconWrap>
                  Add
                </ColoredBtn>
              </WishlistItemRight>
            </WishlistItemWrap>
          );
        })}
      </WishlistItemsList>
    );
  };

  const handleEmptyWishlist = () => {
    setWishlistItems([]);
    setTotalQuantity(0);
  };

  return (
    <WishlistWrap
      centerCenter={wishlistItems.length === 0}
      showWishlist={showWishlist}
      ref={clickOutRef}
    >
      <WishlistTop>
        <WishlistTopLeft>
          <IconWrap
            onClick={() => setShowWishlist(!showWishlist)}
            mar="0 4px 0 0"
            pad="8px"
            bordRad="4px"
            bgHover={props => props.theme.color.greyHover}
            bgActive={props => props.theme.color.greyActive}
          >
            <FiChevronLeft />
          </IconWrap>
          <WishlistHeading>
            Wishlist{' '}
            <GreenSpan>
              ({totalQuantity} item{totalQuantity === 1 ? '' : 's'})
            </GreenSpan>
          </WishlistHeading>
        </WishlistTopLeft>
        <Disabler
          disabled={wishlistItems.length === 0}
          onClick={handleEmptyWishlist}
        >
          <EmptyWishlistButton>
            <IconWrap fontSize="1.25rem" bg="transparent" bgHover="transparent">
              <FiTrash />
            </IconWrap>
            <EmptyWishlistButtonSpan>Clear all</EmptyWishlistButtonSpan>
          </EmptyWishlistButton>
        </Disabler>
      </WishlistTop>
      {wishlistItems.length === 0 ? <EmptyWishlist /> : <WishlistInterface />}
    </WishlistWrap>
  );
};

export default Wishlist;
