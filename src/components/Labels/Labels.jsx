import React from 'react';
import { LabelImg, LabelContainer, LabelWrap } from './labels.style';

import label1 from '../../assets/images/label1.svg';
import label2 from '../../assets/images/label2.svg';
import label3 from '../../assets/images/label3.svg';

const Labels = () => {
  const LabelImages = () => {
    const images = [label1, label2, label3];

    return (
      <>
        {images.map((img, i) => {
          return <LabelImg key={i} src={img} alt="" />;
        })}
      </>
    );
  };
  return (
    <LabelContainer>
      <LabelWrap>
        <LabelImages />
      </LabelWrap>
    </LabelContainer>
  );
};

export default Labels;
