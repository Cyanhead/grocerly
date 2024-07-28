import React from 'react';
import { Link } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundWrap,
  NotFoundImg,
  NotFoundText,
} from './not-found.style';
import intoTheVoid from '../../assets/images/undraw_404.svg';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundWrap>
        <NotFoundImg src={intoTheVoid} alt="" />
        <NotFoundText>
          Sorry, page not found! <Link to="/">Go to homepage</Link>.
        </NotFoundText>
      </NotFoundWrap>
    </NotFoundContainer>
  );
};

export default NotFound;
