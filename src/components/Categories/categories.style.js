import styled from 'styled-components';
import { Link } from 'react-router-dom';

const semibold = props => props.theme.fontWght.semibold;
const medium = props => props.theme.fontWght.medium;

export const SlideWrap = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  overflow-x: hidden;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    overflow-x: scroll;
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 1s ease;
  transform: translateX(${props => props.sliderIndex * -1152}px);

  min-width: 1152px;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;

    min-width: 100%;
    padding-right: 20px;

    &:last-child {
      padding-right: 0;
    }
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumLow}) {
    /* grid-template-columns: 1fr 1fr; */
    grid-gap: 16px;
  }
  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;

export const TileLink = styled(Link)`
  color: inherit;

  margin: 0 16px;

  text-decoration: none;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    margin: 0;
  }
`;

export const TileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bg || 'inherit'};

  max-width: 200px;
  width: 100%;
  height: auto;
  padding: 12px 24px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    width: 100%;
    margin: 0;
  }
`;

export const TileImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const TileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 16px;
`;

export const ProductName = styled.p`
  font-size: 1.125rem;
  font-weight: ${semibold};

  text-transform: capitalize;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    height: 54px;
  }
`;

export const ProductCount = styled.p`
  font-size: 0.875rem;
  font-weight: ${medium};
`;
