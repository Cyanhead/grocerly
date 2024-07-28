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
  ProductCount
} from './categories.style';
import { generateLightColorHsla as randomColorGenerator } from '../../helpers/generateColor';

import { generateRandom } from '../../helpers/generateRandom';
import { batchArray } from '../../helpers/batchArray';
import Loading from '../Loading';

const Categories = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const CategoryTileGenerator = props => {
    const sliderIndex = useContext(SliderContext);
    return (
      <Slide sliderIndex={sliderIndex}>
        {props.productBatch?.map(item => {
          const randomNum = generateRandom(2, 30);
          // console.log('productBatch', props.productBatch);
          return (
            <TileLink to={`/products/${item.id}`} key={item.id}>
              <TileWrap bg={randomColorGenerator}>
                <TileImg src={item.images[0]} alt="" />
                <TileText>
                  <ProductName> {item.name} </ProductName>
                  <ProductCount>
                    {randomNum} item{randomNum}
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
        {productBatches.length ? (
          productBatches?.map((batch, i) => {
            return <CategoryTileGenerator productBatch={batch} key={i} />;
          })
        ) : (
          <Loading minH="100%" />
        )}
      </SlideWrap>
    </Preview>
  );
};

export default Categories;
