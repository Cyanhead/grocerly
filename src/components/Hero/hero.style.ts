import styled from 'styled-components';
import heroContainerBg from '../../assets/images/fruits_illx.webp';

const primary = props => props.theme.color.primary;
const primaryHover = props => props.theme.color.primaryHover;
const white = props => props.theme.color.white;
const grey = props => props.theme.color.grey;

const semibold = props => props.theme.fontWght.semibold;
const medium = props => props.theme.fontWght.medium;

export const HeroContainer = styled.div`
  width: 100%;

  background-color: rgba(197, 234, 217, 0.78);
  background-image: url(${heroContainerBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: content-box;

  box-shadow: inset 0 0 0 1000px rgba(197, 234, 217, 0.78);
`;

export const HeroWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumLow}) {
    flex-direction: column-reverse;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 40px 0;

  flex: 1;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 54px;
`;

export const HeroH1 = styled.h1`
  max-width: 500px;
  margin-bottom: 28px;

  font-size: 3rem;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    font-size: 2rem;
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 1.75rem;
  }
`;

export const HeroP = styled.p`
  font-size: 1.25rem;
  font-weight: ${medium};

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    font-size: 1rem;
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    font-size: 0.875rem;
  }
`;

export const HeroForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;

  width: 100%;
  border-radius: 2px;

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    flex-direction: column;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${white};
  color: ${grey};

  width: 100%;
  padding: 16px 12px;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    padding: 12px 8px;
  }
`;

export const HeroInput = styled.input`
  color: inherit;

  margin-left: 8px;
  width: 100%;
  border: none;
  outline: none;

  font-size: 0.875rem;
  font-weight: ${medium};
`;

export const HeroBtn = styled.button`
  background-color: ${primary};
  color: ${white};

  padding: 0 16px;
  border: none;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  outline: none;

  font-weight: ${semibold};

  cursor: pointer;

  &:hover {
    background-color: ${primaryHover};
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    padding: 16px 0;
    border-radius: 2px;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;

  margin-right: -48px;
`;
