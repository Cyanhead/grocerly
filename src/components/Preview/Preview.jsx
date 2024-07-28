import React, { useState, createContext, useEffect } from 'react';
import {
  PreviewContainer,
  PreviewWrap,
  PreviewTop,
  PreviewHeading,
  CategoryList,
  CategorySelect,
  CategoryOption,
  Category,
  PreviewBottom,
  Arrow
} from './preview.style';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useProductsListContext } from '../../context/ProductsListContext';

export const SliderContext = createContext();

const Preview = props => {
  const { setFilteredProducts, batchCount } = props;

  const { products } = useProductsListContext();

  const [sliderIndex, setSliderIndex] = useState(0);

  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', 'vegetable', 'fruit'];

  const handleCategory = e => {
    if (e.target.innerHTML.toLowerCase() === 'all'.toLowerCase()) {
      setFilteredProducts(products);
      setFilterCategory('all');
    } else {
      setFilterCategory(e.target.innerHTML.toLowerCase());
    }
  };

  const handleSelectValue = e => {
    if (e.target.value.toLowerCase() === 'all'.toLowerCase()) {
      setFilteredProducts(products);
      setFilterCategory('all');
    } else {
      setFilterCategory(e.target.value);
    }
  };

  const handleArrowClick = direction => {
    if (direction === 'left') {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : batchCount - 1 || 1);
    } else {
      setSliderIndex(sliderIndex < (batchCount - 1 || 1) ? sliderIndex + 1 : 0);
    }
  };

  useEffect(() => {
    if (filterCategory.toLowerCase() === 'all'.toLowerCase()) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.category === filterCategory)
      );
    }
  }, [products, filterCategory, setFilteredProducts]);

  return (
    <PreviewContainer>
      <PreviewWrap>
        <PreviewTop>
          <PreviewHeading>{props.heading}</PreviewHeading>
          <CategoryList>
            {categories?.map((catgry, i) => {
              return (
                <Category
                  key={i + catgry}
                  onClick={handleCategory}
                  active={filterCategory.toLowerCase() === catgry.toLowerCase()}
                >
                  {catgry}
                </Category>
              );
            })}
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to="/products"
            >
              <Category>more</Category>
            </Link>
          </CategoryList>
          <CategorySelect onChange={handleSelectValue}>
            {categories?.map((catgry, i) => {
              return (
                <CategoryOption key={i + catgry} value={catgry}>
                  {catgry}
                </CategoryOption>
              );
            })}
          </CategorySelect>
        </PreviewTop>
        <PreviewBottom>
          <Arrow direction="left" onClick={() => handleArrowClick('left')}>
            <FiArrowLeft />
          </Arrow>
          <Arrow direction="right" onClick={() => handleArrowClick('right')}>
            <FiArrowRight />
          </Arrow>
          <SliderContext.Provider value={sliderIndex}>
            {props.children}
          </SliderContext.Provider>
        </PreviewBottom>
      </PreviewWrap>
    </PreviewContainer>
  );
};

export default Preview;
