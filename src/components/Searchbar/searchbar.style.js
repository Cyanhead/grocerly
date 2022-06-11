import styled from 'styled-components';

const primary = props => props.theme.color.primary;
const primaryHover = props => props.theme.color.primaryHover;
const white = props => props.theme.color.white;
const grey = props => props.theme.color.grey;

const semibold = props => props.theme.fontWght.semibold;
const medium = props => props.theme.fontWght.medium;

export const SearchbarWrap = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 3px;
`;

export const SearchbarLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f3f3f3;

  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

export const CategoryBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;

  font-weight: ${semibold};

  border: none;
  outline: none;

  cursor: pointer;

  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

export const SearchInput = styled.input`
  background-color: inherit;

  padding-left: 12px;

  font-weight: ${medium};

  min-width: 300px;

  border: none;
  outline: none;
  border-left: 1px solid ${grey};
`;

export const SearchbarRight = styled.div`
  background-color: ${primary};
  color: ${white};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 20px;
  font-size: 1.5rem;

  align-self: stretch;

  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  cursor: pointer;

  &:hover {
    background-color: ${primaryHover};
  }
`;
