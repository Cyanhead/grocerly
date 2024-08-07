import { SearchResultsPropsType } from './SearchResults.type';
import Layout from '../../Layout';
import { Container, Image, Title, P, SearchRow } from './SearchResults.styled';
import { Star } from 'lucide-react';
import { forwardRef, Ref } from 'react';

// NOTE: uninstall algolia after production testing

function SearchResults(
  { searchResultList }: SearchResultsPropsType,
  ref: Ref<HTMLDivElement>
) {
  if (searchResultList.length === 0) {
    return (
      <Container data-testid="SearchResults" $noResults ref={ref}>
        <Title>No results!</Title>
      </Container>
    );
  }

  return (
    <Container data-testid="SearchResults" ref={ref}>
      {searchResultList.map(({ id, name, image, category, price }) => {
        return (
          <SearchRow key={id} to={`/products/${id}`}>
            <Image src={image} alt={`product image of ${name}`} />
            <Layout.FlexRow
              $align="stretch"
              $justify="space-between"
              $width="100%"
            >
              <Layout.FlexCol $justify="space-between">
                <Layout.FlexCol>
                  <P>{category}</P>
                  <Title>{name}</Title>
                </Layout.FlexCol>
                <P>{price}</P>
              </Layout.FlexCol>

              <Layout.FlexCol $justify="space-between">
                {/* NOTE: check josh's site for sample of star rating component */}
                <P>3 hrs</P>
                <Star fill="green" color="green" />
              </Layout.FlexCol>
            </Layout.FlexRow>
          </SearchRow>
        );
      })}
    </Container>
  );
}

const ForwardedSearchResults = forwardRef(SearchResults);
export default ForwardedSearchResults;
