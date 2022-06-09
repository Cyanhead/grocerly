import React from 'react';
import {
  PreviewContainer,
  PreviewWrap,
  PreviewTop,
  PreviewHeading,
  CategoryList,
  Category,
  PreviewBottom,
} from './preview.style';

const Preview = props => {
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
        <PreviewBottom>{props.children}</PreviewBottom>
        {/* arrows */}
      </PreviewWrap>
    </PreviewContainer>
  );
};

export default Preview;
