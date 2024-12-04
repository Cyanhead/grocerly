import styled from 'styled-components';
import heroContainerBg from '../../../assets/images/fruits_illx.webp';
import { getBreakpoint } from '../../../theme';
import { BaseContainer, BaseWrapper } from '../../../components';

export const Container = styled(BaseContainer)`
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

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column-reverse;
  padding: 0;

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
  }
`;

export const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 20px;
  padding: 40px 16px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    padding: 48px 24px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    padding: 56px 40px;
    justify-content: center;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1600px) {
    flex: 2;
  }
`;

export const Heading = styled.h1`
  font-size: calc(24 / 16 * 1rem);
  max-width: 600px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    font-size: calc(32 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    font-size: calc(48 / 16 * 1rem);
  }

  @media screen and (min-width: ${getBreakpoint('xl')}) {
    font-size: calc(56 / 16 * 1rem);
  }
`;

export const P = styled.p`
  @media screen and (min-width: ${getBreakpoint('lg')}) {
    font-size: calc(20 / 16 * 1rem);
  }
`;

export const ImageWrapper = styled.div`
  align-self: flex-end;
  aspect-ratio: 1.25;

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    max-width: 576px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    align-self: flex-start;
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
