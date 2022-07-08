import React from 'react';

import {
  SimilarProductLink,
  SimilarProductTileWrap,
  SimilarProductImg,
  SimilarProductInfo,
  SimilarProductName,
  CurrentPrice,
} from '../SimilarProductTile/similar-product-tile.style';

const SimilarProductTile = ({ product: { id, images, name, price } }) => {
  return (
    <SimilarProductLink key={id} to={`/products/${id}`}>
      <SimilarProductTileWrap>
        <SimilarProductImg src={images ? images[0] : 'dummy'} alt="" />
        <SimilarProductInfo>
          <SimilarProductName>{name || 'name'}</SimilarProductName>
          <CurrentPrice>${price || '0.00'}</CurrentPrice>
        </SimilarProductInfo>
      </SimilarProductTileWrap>
    </SimilarProductLink>
  );
};

export default SimilarProductTile;
