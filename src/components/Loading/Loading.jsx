import React from 'react';
import { LoadingWrap, LoadingImg } from './loading.style';
import generateRandom from '../../helpers/generateRandom';

import loader01 from '../../assets/images/loader01.svg';
import loader02 from '../../assets/images/loader02.svg';
import loader03 from '../../assets/images/loader03.svg';

const Loading = props => {
  const loadingImages = [loader01, loader02, loader03];
  return (
    <LoadingWrap minH={props.minH}>
      <LoadingImg src={loadingImages[generateRandom(0, 3)]} alt="" />
    </LoadingWrap>
  );
};

export default Loading;
