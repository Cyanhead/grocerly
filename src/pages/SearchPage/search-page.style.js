import styled from 'styled-components';

const white = props => props.theme.color.white;
const greyBg1 = props => props.theme.color.greyBg1;
const greyBg2 = props => props.theme.color.greyBg2;

const semibold = props => props.theme.fontWght.semibold;

export const SearchPageContainer = styled.div`
  width: 100%;

  background-color: ${greyBg1};
`;

export const SearchPageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 8px 80px 8px;
`;

export const SearchPageAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  background-color: ${white};

  width: 280px;
  margin-right: 16px;
  padding: 8px 0;

  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    width: 220px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    display: none;
  }
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

  padding: 12px 0;

  border-bottom: ${props => props.theme.color.faintLine};

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const RowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
`;

export const ResultHeading = styled.p`
  font-size: 1.25rem;
  font-weight: ${semibold};
  text-transform: capitalize;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    font-size: 1.125rem;
  }
`;

export const CategorySelect = styled.select`
  display: none;

  padding: 4px 0;

  text-transform: capitalize;

  @media screen and (max-width: ${props => props.theme.breakpoint.medium}) {
    display: flex;
  }
`;

export const CategoryOption = styled.option`
  text-transform: capitalize;
`;

export const SortWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SortP = styled.p`
  margin-right: 8px;
`;

export const SortButton = styled.select`
  display: flex;
  align-items: center;

  padding: 4px 0;

  text-transform: capitalize;
`;

export const SortOption = styled.option`
  text-transform: capitalize;
`;

export const ResultCount = styled.p``;

export const SearchedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;

  @media screen and (max-width: ${props => props.theme.breakpoint.mediumHigh}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: ${props => props.theme.breakpoint.small}) {
    grid-template-columns: 1fr 1fr;
  }
`;

// * CATEGORY LIST

export const CategoryListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  max-height: 300px;
  overflow-y: auto;
`;

export const CategoryListHeading = styled.h3`
  padding: 8px 16px;
  text-transform: uppercase;
`;

export const CategoryP = styled.p`
  background-color: ${({ active }) => (active ? greyBg2 : 'inherit')};
  color: inherit;

  padding: 8px 32px;

  text-transform: capitalize;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: ${greyBg2};
  }
`;
