import React from 'react';

import {
  HeroContainer,
  HeroWrap,
  HeroLeft,
  HeroText,
  HeroH1,
  HeroP,
  HeroForm,
  InputWrap,
  HeroInput,
  HeroBtn,
  HeroRight,
  HeroImg,
} from './hero.style';
import { IconWrap } from '../others.style';
import heroBg from '../../assets/images/fruits_spill.webp';
import { IoPaperPlaneOutline } from 'react-icons/io5';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrap>
        <HeroLeft>
          <HeroText>
            <HeroH1>Don’t miss our daily amazing deals.</HeroH1>
            <HeroP>Save up to 60% off on your first order</HeroP>
          </HeroText>
          <HeroForm>
            <InputWrap>
              <IconWrap>
                <IoPaperPlaneOutline />
              </IconWrap>
              <HeroInput type="text" placeholder="Enter your email address" />
            </InputWrap>
            <HeroBtn>Subscribe</HeroBtn>
          </HeroForm>
        </HeroLeft>
        <HeroRight>
          <HeroImg src={heroBg} alt="" />
        </HeroRight>
      </HeroWrap>
    </HeroContainer>
  );
};

export default Hero;
