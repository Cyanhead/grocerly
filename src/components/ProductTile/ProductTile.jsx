import React, { useState } from 'react';

import {
  ProductLink,
  ProductTileWrap,
  ProductImg,
  ProductInfo,
  ProductCategory,
  ProductName,
  PurchaseWrap,
  PriceWrap,
  CurrentPrice,
  OldPrice,
} from './product-tile.style';

import dummy from '../../assets/images/default_product.svg';
import { ColoredBtn, IconWrap } from '../others.style';
import { FiShoppingCart } from 'react-icons/fi';

import { useCartContext } from '../../context/CartContext';

// todo: remember to implement review component later

const ProductTile = ({
  product: { id, name, images, price, oldPrice, category },
  product,
}) => {
  const [visible, setVisible] = useState('none');
  const [onBtnHover, setOnBtnHover] = useState(false);

  const { onAdd } = useCartContext();

  const showAddButton = () => {
    setVisible('flex');
  };

  const hideAddButton = () => {
    setVisible('none');
  };

  return (
    <ProductLink to={onBtnHover ? '' : `/products/${id}`}>
      <ProductTileWrap
        onMouseEnter={showAddButton}
        onMouseLeave={hideAddButton}
      >
        <ProductImg src={images ? images[0] : dummy} alt="" />
        <ProductInfo>
          <ProductCategory>{category || 'category'}</ProductCategory>
          <ProductName> {name || 'name'} </ProductName>
          <PurchaseWrap>
            <PriceWrap>
              <CurrentPrice> ${price || '0.00'} </CurrentPrice>
              <OldPrice> ${oldPrice || '0.00'} </OldPrice>
            </PriceWrap>
            <ColoredBtn
              visibility={visible}
              fontSize="0.875rem"
              pad="8px 22px"
              padMid="8px 16px"
              bg={props => props.theme.color.primaryLite}
              bgHover={props => props.theme.color.primary}
              fg={props => props.theme.color.primary}
              fgHover={props => props.theme.color.white}
              bordRad="2px"
              cursor="pointer"
              onClick={() => onAdd(product)}
              onMouseEnter={() => setOnBtnHover(true)}
              onMouseLeave={() => setOnBtnHover(false)}
            >
              <IconWrap fontSize="0.875rem">
                <FiShoppingCart />
              </IconWrap>
              Add
            </ColoredBtn>
          </PurchaseWrap>
        </ProductInfo>
      </ProductTileWrap>
    </ProductLink>
  );
};

export default ProductTile;
