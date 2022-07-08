import styled from 'styled-components';

import { Link } from 'react-router-dom';

import {
  SearchBox,
  // InstantSearch,
  // Hits,
  // Highlight,
} from 'react-instantsearch-hooks-web';

const primary = props => props.theme.color.primary;
const primaryLite = props => props.theme.color.primaryLite;
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

  position: relative;

  background-color: #f3f3f3;

  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

// export const SearchbarLeft2 = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   /* position: relative; */

//   /* border: 2px solid red; */
// `;

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

// // ? will probably delete
// export const Wrap = styled.div``;

// export const SearchInput = styled.input`
//   background-color: inherit;

//   padding-left: 12px;

//   font-weight: ${medium};

//   min-width: 300px;

//   border: none;
//   outline: none;
//   border-left: 1px solid ${grey};
// `;
// // ? will probably delete

// let bool = false;

export const CustomSearchBox = styled(SearchBox)`
  display: flex;
  align-items: center;

  min-width: 300px;
  height: 100%;
  padding-right: 12px;

  .ais-SearchBox-input {
    background-color: #f3f3f3;

    padding: 0 12px;
    outline: none;
    border: 1px solid transparent;
    border-left: 1px solid ${grey};

    font-size: 1rem;
    font-weight: ${medium};

    box-shadow: none;

    transition: all 200ms ease;

    &:focus {
      border: 1px solid ${primary};
    }
  }

  .ais-SearchBox-form::before {
    display: none;
  }
`;

export const SearchbarRight = styled(Link)`
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

export const HitContainer = styled.div`
  display: ${({ showResults }) => (showResults ? 'block' : 'none')};
  /* ${CustomSearchBox} > input:focus & { */
  /* display: none;
  ${SearchbarLeft}:hover & {
    display: block;
  } */

  position: absolute;
  /* top: 100px; */
  top: 56px;
  /* bottom: 0; */

  z-index: 20;

  width: 100%;

  li {
    /* border: 5px solid red; */

    &:hover {
      background-color: ${primaryLite};
    }
  }

  /* border: 2px solid green; */
`;

export const HitLink = styled(Link)`
  /* border: 1px solid red; */

  color: inherit;

  width: 100%;
  height: 100%;

  text-decoration: none;

  /* &:hover {
    background-color: ${primary};
  } */
`;

export const HitWrap = styled.article`
  display: flex;
  width: 100%;
  /* border: 1px solid black; */

  /* margin: -10px; */
`;

export const HitLeft = styled.div``;

export const HitRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* border: 1px solid blue; */
`;

export const HitImage = styled.img`
  width: 100px;
  height: auto;

  margin-right: 20px;
  /* border: 3px solid red; */
`;

export const HitP = styled.p`
  /* border: 3px solid red; */
`;

export const HitH1 = styled.h1`
  margin: 8px 0;

  .ais-Highlight-highlighted,
  .ais-Snippet-highlighted {
    background-color: ${primaryLite};
    color: ${primary};
  }
`;
