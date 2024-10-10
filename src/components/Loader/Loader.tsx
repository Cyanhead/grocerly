import React from 'react';
import { FullScreenWrapper, Image, Wrapper } from './Loader.styled';
import loader01 from '../../assets/images/loader01.svg';
import loader02 from '../../assets/images/loader02.svg';
import loader03 from '../../assets/images/loader03.svg';
import { generateRandom } from '../../helpers/generateRandom';
import { LoaderPropsType } from './Loader.type';

function Loader({ fullscreen = false }: LoaderPropsType) {
  const loaderImageList = [loader01, loader02, loader03];
  const loadingImage = loaderImageList[generateRandom(0, 2)];

  if (fullscreen) {
    return (
      <FullScreenWrapper data-testid="Loader">
        <Image src={loadingImage} alt="loading" />
      </FullScreenWrapper>
    );
  }

  return (
    <Wrapper data-testid="Loader">
      <Image src={loadingImage} alt="loading" />
    </Wrapper>
  );
}

const MemoizedLoader = React.memo(Loader);
export default MemoizedLoader;
