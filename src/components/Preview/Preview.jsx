import React, { useState, createContext } from 'react';
import {
  PreviewContainer,
  PreviewWrap,
  PreviewTop,
  PreviewHeading,
  CategoryList,
  Category,
  PreviewBottom,
  Arrow,
} from './preview.style';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

export const SliderContext = createContext();

const Preview = props => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = direction => {
    if (direction === 'left') {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <PreviewContainer>
      <PreviewWrap>
        <PreviewTop>
          <PreviewHeading>{props.heading}</PreviewHeading>
          <CategoryList>
            <Category green>all</Category>
            <Category>vegetables</Category>
            <Category>coffee &amp; teas</Category>
            <Category>meat</Category>
          </CategoryList>
        </PreviewTop>
        <PreviewBottom>
          <Arrow direction="left" onClick={() => handleClick('left')}>
            <FiArrowLeft />
          </Arrow>
          <Arrow direction="right" onClick={() => handleClick('right')}>
            <FiArrowRight />
          </Arrow>
          <SliderContext.Provider value={sliderIndex}>
            {props.children}
          </SliderContext.Provider>
        </PreviewBottom>
      </PreviewWrap>
    </PreviewContainer>
  );
};

export default Preview;
