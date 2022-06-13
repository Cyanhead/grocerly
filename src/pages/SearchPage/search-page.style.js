import styled from 'styled-components';

const white = props => props.theme.color.white;

const semibold = props => props.theme.fontWght.semibold;

export const SearchPageContainer = styled.div`
  width: 100%;

  background-color: #f5f5f5;
`;

export const SearchPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0 80px 0;
`;

export const SearchPageAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  background-color: ${white};

  width: 280px;
  /* max-width: 280px; */
  margin-right: 16px;
  padding: 8px 0;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  flex: 1;

  background-color: ${white};

  padding: 8px;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const RowOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px 8px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const RowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px 8px;
`;

export const ResultHeading = styled.p`
  font-size: 1.25rem;
  font-weight: ${semibold};
  text-transform: capitalize;
`;

export const SortButton = styled.button`
  display: flex;
  align-items: center;
`;

export const ResultCount = styled.p``;

export const SearchedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
`;

// * CATEGORY LIST

export const CategoryListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export const CategoryListHeading = styled.h3`
  padding: 8px 16px;
  text-transform: uppercase;
`;

export const CategoryLink = styled.a`
  color: inherit;

  padding: 8px 32px;

  text-decoration: none;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CategoryP = styled.p`
  text-transform: capitalize;
`;
