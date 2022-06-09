import React from 'react';
import Preview from '../Preview';

import {
  TileWrap,
  TileImg,
  TileText,
  ProductName,
  ProductCount,
} from './categories.style';
import { generateLightColorHsla as randomColorGenerator } from '../../helpers/generateColor';

import strawberry from '../../assets/images/fruits/apple.png';
import apple from '../../assets/images/fruits/carrot.png';
import carrot from '../../assets/images/fruits/peach.png';
import peach from '../../assets/images/fruits/orange.png';
import orange from '../../assets/images/fruits/potato.png';
import potato from '../../assets/images/fruits/vegetable.png';
import vegetable from '../../assets/images/fruits/strawberry.png';

const Categories = () => {
  //   const listOfPreviewProducts = previewData;
  const listOfPreviewProducts = [
    { image: peach, name: 'peach', count: 1 },
    { image: vegetable, name: 'vegetable', count: 20 },
    { image: strawberry, name: 'strawberry', count: 12 },
    { image: apple, name: 'apple', count: 30 },
    { image: orange, name: 'orange', count: 10 },
    { image: potato, name: 'potato', count: 1 },
    { image: carrot, name: 'carrot', count: 13 },
  ];

  const CategoryTileGenerator = () => {
    return (
      <>
        {listOfPreviewProducts.map((item, i) => {
          return (
            <TileWrap key={i} bg={randomColorGenerator}>
              <TileImg
                // src={fruit}
                src={item.image}
                alt=""
              />
              <TileText>
                <ProductName> {item.name} </ProductName>
                <ProductCount>
                  {item.count} item{item.count === 1 ? '' : 's'}
                </ProductCount>
              </TileText>
            </TileWrap>
          );
        })}
      </>
    );
  };

  return (
    <Preview heading="explore categories">
      <CategoryTileGenerator />
    </Preview>
  );
};

export default Categories;
