import { CategoryBox, Error, Skeleton } from '../../../components';
import { useGetCategories } from '../../../hooks';
import Card from './Card';
import { CardPropsType } from './Card/Card.type';
import { SkeletonWrapper } from './Categories.styled';

import berry from '../../../assets/images/categories/berry.png';
import citrus from '../../../assets/images/categories/citrus.png';
import root from '../../../assets/images/categories/root.png';
import leaf from '../../../assets/images/categories/leaf.png';
import vegetable from '../../../assets/images/categories/vegetable.png';
import tuber from '../../../assets/images/categories/tuber.png';
import fruit from '../../../assets/images/categories/fruit.png';
import poultry from '../../../assets/images/categories/poultry.png';
// import grain from '../../../assets/images/categories/grain.png';
// import snack from '../../../assets/images/categories/snack.png';
// import baking from '../../../assets/images/categories/baking.png';
// import cleaning from '../../../assets/images/categories/cleaning.png';

const imagesOfCategories: Record<string, string> = {
  berry,
  citrus,
  root,
  leaf,
  tuber,
  fruit,
  vegetable,
  poultry,
};

function Categories() {
  const { isLoading, data, error } = useGetCategories();

  if (isLoading)
    return (
      <SkeletonWrapper>
        <Skeleton.Chart height="406px" />
      </SkeletonWrapper>
    );
  if (error || !data) {
    return <Error>Could not load categories. Please try again later.</Error>;
  }

  const categories: CardPropsType[] = data.map(category => {
    const imagePath = imagesOfCategories[category];

    return {
      title: category,
      imagePath,
    };
  });

  return (
    <CategoryBox heading="Explore Categories" items={categories} card={Card} />
  );
}

export default Categories;
