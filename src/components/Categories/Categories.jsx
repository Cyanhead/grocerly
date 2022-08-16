import React, { useContext, useState } from 'react';
import Preview, { SliderContext } from '../Preview';

import {
  SlideWrap,
  Slide,
  TileLink,
  TileWrap,
  TileImg,
  TileText,
  ProductName,
  ProductCount,
} from './categories.style';
import { generateLightColorHsla as randomColorGenerator } from '../../helpers/generateColor';

import generateRandom from '../../helpers/generateRandom';
import { batchArray } from '../../helpers/batchArray';
import Loading from '../Loading';

const Categories = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const CategoryTileGenerator = props => {
    const sliderIndex = useContext(SliderContext);
    return (
      <Slide sliderIndex={sliderIndex}>
        {props.product.map((item, i) => {
          const randomNum = generateRandom(1, 30);
          return (
            <TileLink to={`/products/${item.id}`} key={i + item.name}>
              <TileWrap bg={randomColorGenerator}>
                <TileImg src={item.images[0]} alt="" />
                <TileText>
                  <ProductName> {item.name} </ProductName>
                  <ProductCount>
                    {randomNum} item{randomNum === 1 ? '' : 's'}
                  </ProductCount>
                </TileText>
              </TileWrap>
            </TileLink>
          );
        })}
      </Slide>
    );
  };

  // number of batches required
  const batchCount = 2;
  const itemCountPerBatch = 6;
  let productBatches = batchArray(
    filteredProducts,
    itemCountPerBatch,
    batchCount
  );

  return (
    <Preview
      heading="explore categories"
      setFilteredProducts={setFilteredProducts}
      batchCount={batchCount}
    >
      <SlideWrap>
        {productBatches.length === 1 && <Loading minH="100%" />}
        {productBatches.length !== 1 &&
          productBatches.map((batch, i) => {
            return <CategoryTileGenerator product={batch} key={i} />;
          })}
      </SlideWrap>
    </Preview>
  );
};

export default Categories;
