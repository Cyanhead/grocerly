import React from 'react';
import {
  LabelImg,
  LabelContainer,
  LabelImgWrap,
  LabelWrap,
} from './labels.style';

import label1 from '../../assets/images/label1.svg';
import label2 from '../../assets/images/label2.svg';
import label3 from '../../assets/images/label3.svg';

const Labels = () => {
  const images = [label1, label2, label3];

  return (
    <LabelContainer>
      <LabelWrap>
        {images.map((img, i) => {
          return (
            <LabelImgWrap>
              <LabelImg key={i} src={img} alt="" />
            </LabelImgWrap>
          );
        })}
      </LabelWrap>
    </LabelContainer>
  );
};

export default Labels;
