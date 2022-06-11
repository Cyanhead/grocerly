import React, { useState } from 'react';
import {
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

import dummy from '../../assets/images/fruits/potato.png';
import { ColoredBtn, IconWrap } from '../others.style';
import { FiShoppingCart } from 'react-icons/fi';

// todo: remember to implement review component later

const ProductTile = props => {
  const [visible, setVisible] = useState('none');

  const showAddButton = () => {
    setVisible('flex');
  };

  const hideAddButton = () => {
    setVisible('none');
  };

  return (
    <ProductTileWrap onMouseEnter={showAddButton} onMouseLeave={hideAddButton}>
      <ProductImg src={props.image || dummy} alt={props.imgAlt || 'img'} />
      <ProductInfo>
        <ProductCategory> {props.category || 'category'} </ProductCategory>
        <ProductName> {props.productName || 'name'} </ProductName>
        <PurchaseWrap>
          <PriceWrap>
            <CurrentPrice> ${props.currentPrice || '0.00'} </CurrentPrice>
            <OldPrice> ${props.oldPrice || '0.00'} </OldPrice>
          </PriceWrap>
          <ColoredBtn
            visibility={visible}
            fontSize="0.875rem"
            pad="8px 22px"
            bg={props => props.theme.color.primaryLite}
            bgHover={props => props.theme.color.primary}
            fg={props => props.theme.color.primary}
            fgHover={props => props.theme.color.white}
            bordR="2px"
          >
            <IconWrap fontSize="0.875rem">
              <FiShoppingCart />
            </IconWrap>
            Add
          </ColoredBtn>
        </PurchaseWrap>
      </ProductInfo>
    </ProductTileWrap>
  );
};

export default ProductTile;
