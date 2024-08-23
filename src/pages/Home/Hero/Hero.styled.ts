import styled from 'styled-components';
import heroContainerBg from '../../../assets/images/fruits_illx.webp';
import { getBreakpoint } from '../../../theme';

export const Container = styled.section`
  width: 100%;

  background-color: rgba(197, 234, 217, 0.78);
  background-image: url(${heroContainerBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: content-box;

  box-shadow: inset 0 0 0 1000px rgba(197, 234, 217, 0.78);

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    position: relative;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
  }
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 8px 16px;
  margin-bottom: 20px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    padding: 12px 24px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    padding: 16px 40px;
    justify-content: center;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1600px) {
    flex: 2;
  }
`;

export const Heading = styled.h1``;

export const P = styled.p``;

export const ImageWrapper = styled.div`
  @media screen and (min-width: ${getBreakpoint('sm')}) {
    max-width: 576px;
    align-self: flex-end;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    max-width: 400px;
  }

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    display: flex;
    flex: 1;
    height: 480px;
    max-width: unset;
  }
`;

export const Image = styled.img`
  @media screen and (min-width: ${getBreakpoint('xl')}) {
    max-width: 600px;

    position: absolute;
    right: 0;
    top: 0;
  }

  @media screen and (min-width: 1800px) {
    position: static;
  }
`;
