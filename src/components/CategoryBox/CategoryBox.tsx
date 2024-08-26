import { CategoryBoxPropsType } from './CategoryBox.type';
import {
  Container,
  Wrapper,
  SectionHeading,
  TopRow,
  Categories,
  CategoryButton,
  CategorySelect,
  CategoryOption,
} from './CategoryBox.styled';
import { useState } from 'react';
import Carousel from '../Carousel';

type Category = 'All' | 'Vegetables' | 'Fruits' | 'Dairy' | 'Meat';
const categoryList: Category[] = [
  'All',
  'Vegetables',
  'Fruits',
  'Dairy',
  'Meat',
];

function CategoryBox<T>({
  heading,
  items,
  card: Card,
}: CategoryBoxPropsType<T>) {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  return (
    <Container data-testid="CategoryBox">
      <Wrapper>
        <TopRow>
          <SectionHeading>{heading}</SectionHeading>
          {/* // TODO: implement filter on button click */}
          <Categories>
            {categoryList.map(category => (
              <CategoryButton
                key={category}
                $active={category === activeCategory}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </Categories>
          {/* // TODO: implement filter on select */}
          <CategorySelect title="Category">
            {categoryList.map(category => (
              <CategoryOption
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </CategoryOption>
            ))}
          </CategorySelect>
        </TopRow>
        <Carousel items={items} card={Card} />
      </Wrapper>
    </Container>
  );
}

export default CategoryBox;
