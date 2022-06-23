import React from 'react';
import {
  SearchbarWrap,
  SearchbarLeft,
  CategoryBtn,
  SearchInput,
  SearchbarRight,
} from './searchbar.style';
import { FiSearch } from 'react-icons/fi';
import ChevronDown from '../ChevronDown';

const Searchbar = () => {
  return (
    <SearchbarWrap>
      <SearchbarLeft>
        <CategoryBtn>
          All Categories
          <ChevronDown />
        </CategoryBtn>
        <SearchInput type="text" placeholder="Search for items..." />
      </SearchbarLeft>
      <SearchbarRight to="/products">
        <FiSearch />
      </SearchbarRight>
    </SearchbarWrap>
  );
};

export default Searchbar;
