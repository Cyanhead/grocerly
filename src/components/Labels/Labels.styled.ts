import styled from 'styled-components';
import { BaseContainer, BaseWrapper } from '../BaseStyled';
import { getBreakpoint } from '../../theme';

export const Container = styled(BaseContainer)``;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (min-width: ${getBreakpoint('md')}) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
