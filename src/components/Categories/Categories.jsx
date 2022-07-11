import React, { useContext } from 'react';
import Preview, { SliderContext } from '../Preview';

import {
  SlideWrap,
  Slide,
  TileWrap,
  TileImg,
  TileText,
  ProductName,
  ProductCount,
} from './categories.style';
import { generateLightColorHsla as randomColorGenerator } from '../../helpers/generateColor';

import apple from '../../assets/images/fruits/apple.png';
import carrot from '../../assets/images/fruits/carrot.png';
import peach from '../../assets/images/fruits/peach.png';
import potato from '../../assets/images/fruits/potato.png';
import vegetable from '../../assets/images/fruits/vegetable.png';
import strawberry from '../../assets/images/fruits/strawberry.png';

const Categories = () => {
  const listOfPreviewProducts = [
    { image: peach, name: 'peach', count: 1 },
    { image: vegetable, name: 'vegetable', count: 20 },
    { image: strawberry, name: 'strawberry', count: 12 },
    { image: apple, name: 'apple', count: 30 },
    { image: carrot, name: 'carrot', count: 10 },
    { image: potato, name: 'potato', count: 1 },
  ];
  const dummy1 = [
    { image: peach, name: 'peach2', count: 1 },
    { image: vegetable, name: 'vegetable2', count: 20 },
    { image: strawberry, name: 'strawberry2', count: 12 },
    { image: apple, name: 'apple2', count: 30 },
    { image: carrot, name: 'carrot2', count: 10 },
    { image: potato, name: 'potato2', count: 1 },
  ];
  const dummy2 = [
    { image: peach, name: 'peach3', count: 1 },
    { image: vegetable, name: 'vegetable3', count: 20 },
    { image: strawberry, name: 'strawberry3', count: 12 },
    { image: apple, name: 'apple3', count: 30 },
    { image: carrot, name: 'carrot3', count: 10 },
    { image: potato, name: 'potato3', count: 1 },
  ];

  const CategoryTileGenerator = props => {
    const sliderIndex = useContext(SliderContext);
    return (
      <Slide sliderIndex={sliderIndex}>
        {props.data.map((item, i) => {
          return (
            <TileWrap key={i} bg={randomColorGenerator}>
              <TileImg src={item.image} alt="" />
              <TileText>
                <ProductName> {item.name} </ProductName>
                <ProductCount>
                  {item.count} item{item.count === 1 ? '' : 's'}
                </ProductCount>
              </TileText>
            </TileWrap>
          );
        })}
      </Slide>
    );
  };

  return (
    <Preview heading="explore categories">
      <SlideWrap>
        <CategoryTileGenerator data={listOfPreviewProducts} />
        <CategoryTileGenerator data={dummy1} />
        <CategoryTileGenerator data={dummy2} />
      </SlideWrap>
    </Preview>
  );
};

export default Categories;
