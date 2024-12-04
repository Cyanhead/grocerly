import { CategoryBoxPropsType } from './CategoryBox.type';
import {
  Container,
  Wrapper,
  Heading,
  TopRow,
  // Categories,
  // CategoryButton,
  // CategorySelect,
  // CategoryOption,
} from './CategoryBox.styled';
// import { useState } from 'react';
import Carousel from '../Carousel';

// type Category = 'All' | 'Plant' | 'Animal';
// const categoryList: Category[] = ['All', 'Plant', 'Animal'];

function CategoryBox<T>({
  heading,
  items,
  card: Card,
}: CategoryBoxPropsType<T>) {
  // const [activeCategory, setActiveCategory] = useState<Category>('All');

  return (
    <Container data-testid="CategoryBox">
      <Wrapper>
        <TopRow>
          <Heading>{heading}</Heading>
          {/* // TODO: implement filter on button click */}
          {/* <Categories>
            {categoryList.map(category => (
              <CategoryButton
                key={category}
                $active={category === activeCategory}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </Categories> */}
          {/* // TODO: implement filter on select */}
          {/* <CategorySelect title="Category">
            {categoryList.map(category => (
              <CategoryOption
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryOption>
            ))}
          </CategorySelect> */}
        </TopRow>
        <Carousel items={items} card={Card} />
      </Wrapper>
    </Container>
  );
}

export default CategoryBox;
