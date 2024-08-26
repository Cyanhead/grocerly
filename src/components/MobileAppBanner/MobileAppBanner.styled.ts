import styled from 'styled-components';
import { BaseContainer, BaseWrapper } from '../BaseStyled';
import { getBreakpoint } from '../../theme';
import fruits_illustration from '../../assets/images/fruits_illx.webp';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled(BaseContainer)`
  background-color: rgba(197, 234, 217, 0.78);
  background-image: url(${fruits_illustration});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: content-box;

  box-shadow: inset 0 0 0 1000px rgba(197, 234, 217, 0.78);

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    position: relative;
  }
`;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    flex-direction: row;
    gap: 72px;
  }
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    gap: 32px;
  }
`;

export const Heading = styled.h1`
  font-size: calc(24 / 16 * 1rem);

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(32 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    font-size: calc(40 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    font-size: calc(52 / 16 * 1rem);
  }
`;

export const P = styled.p`
  font-size: 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(20 / 16 * 1rem);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  margin-top: 32px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    gap: 16px;
    margin-top: 44px;
  }
`;

export const Link = styled(RouterLink)`
  width: 100%;
`;

export const AppStoreButton = styled.img`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;
