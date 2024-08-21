import styled, { css } from 'styled-components';
import { getBreakpoint, getColor } from '../../../theme';
import { Link } from 'react-router-dom';

export const Container = styled.div.attrs<{
  $noResults?: boolean;
  as?: string;
}>(props => ({
  $noResults: props.$noResults || false,
  as: props.as,
}))`
  border: 1px solid ${getColor('primary')};
  border-radius: 2px;

  background-color: ${getColor('white')};
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: calc(100% + 16px);
  left: 0;
  right: 0;

  max-height: 70vh;
  height: auto;
  overflow-y: auto;

  margin: 0 16px;

  ${props => {
    if (props.$noResults) {
      return css`
        height: auto;
        padding: 24px;
      `;
    }
  }};

  @media screen and (min-width: ${getBreakpoint('md')}) {
    margin: 0;
  }
`;

export const ListItem = styled.li`
list-style: none;
`;

export const SearchRow = styled(Link)`
  display: flex;
  align-items: stretch;
  gap: 20px;

  padding: 24px;
  border-bottom: 1px solid #00000033;

  cursor: pointer;
  text-decoration: none;
  color: ${getColor('black')};

  &:hover {
    background-color: ${getColor('primary100')};
  }
`;

export const Image = styled.img`
  width: 100px;
`;

export const P = styled.p`
  font-size: calc(14 / 16 * 1rem);
`;

export const Title = styled.h3`
  font-size: calc(20 / 16 * 1rem);
`;
