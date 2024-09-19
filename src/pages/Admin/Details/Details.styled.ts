import styled from 'styled-components';
import { getFontWeight, getColor } from '../../../theme';
import { Cell } from '../Admin.styled';

export const Wrapper = styled(Cell)`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
  }
`;

export const Image = styled.img`
  border-radius: 50%;

  width: 80px;
  height: 80px;
  margin-bottom: 12px;
  border: ${getColor('faintLine')};
`;

export const Divider = styled.hr`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
`;

export const StatsWrapper = styled.div`
  width: 100%;
`;

export const Stats = styled.div``;

export const P = styled.p.attrs<{ $bold?: boolean }>(props => ({
  $bold: props.$bold || false,
}))`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-left: ${props => (props.$bold ? 0 : '28px')};

  font-weight: ${props =>
    props.$bold ? getFontWeight('semibold') : getFontWeight('light')};
  text-transform: capitalize;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
