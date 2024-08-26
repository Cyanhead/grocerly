import styled, { css } from 'styled-components';
import fruitLinesIllustration from '../../../assets/images/fruits_illx.webp';
import { getColor, getFontWeight, getBreakpoint } from '../../../theme';
import { SectionHeading } from '../../BaseStyled';
import { LinkButton } from '../../Button';

export const Wrapper = styled.div.attrs<{ $theme?: 'primary' | 'secondary' }>(
  props => ({
    $theme: props.$theme || 'primary',
  })
)`
  background-color: rgba(197, 234, 217, 0.78);
  background-image: url(${fruitLinesIllustration});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;

  box-shadow: inset 0 0 0 1000px rgba(197, 234, 217, 0.78);

  position: relative;
  display: flex;

  width: 100%;
  padding: 18px 24px;
  border-radius: 3px;

  ${props => {
    if (props.$theme === 'secondary') {
      return css`
        background-color: rgba(255, 245, 225, 0.85);
        box-shadow: inset 0 0 0 1000px rgba(255, 245, 225, 0.85);
      `;
    }
  }}

  @media screen and (min-width: ${getBreakpoint('sm')}) {
    padding: 34px 48px;
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    max-width: 600px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 15px;
`;

export const Tag = styled.p.attrs<{ $theme?: 'primary' | 'secondary' }>(
  props => ({
    $theme: props.$theme || 'primary',
  })
)`
  color: ${getColor('white')};
  background-color: ${props =>
    props.$theme === 'primary' ? getColor('primary') : getColor('accent')};

  padding: 5.5px 7px;
  border-radius: 3px;

  font-size: calc(12 / 16 * 1rem);
  font-weight: ${getFontWeight('medium')};
`;

export const Title = styled(SectionHeading)`
  @media screen and (min-width: ${getBreakpoint('xl')}) {
    font-size: calc(28 / 16 * 1rem);
  }
`;

export const Description = styled.p``;

export const Button = styled(LinkButton).attrs({ type: 'button' })`
  margin-top: 10px;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    margin-top: 25px;
  }
`;

export const ImageWrapper = styled.div`
  display: none;
  width: 280px;
  height: 200px;

  @media screen and (min-width: 340px) {
    display: flex;
  }

  @media screen and (min-width: ${getBreakpoint('md')}) {
    width: 250px;
  }
`;

export const Image = styled.img`
  max-width: 150px;
  height: 96%;

  object-fit: contain;
  object-position: bottom;

  position: absolute;
  right: 0;
  bottom: 0;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    max-width: 250px;
    width: auto;
  }
`;
