import styled from 'styled-components';
import { BaseContainer, BaseWrapper } from '../../components';

export const Container = styled(BaseContainer)`
  width: 100%;
  grid-column-start: auto;
  grid-column-end: span 4;
`;

export const Wrapper = styled(BaseWrapper)`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
