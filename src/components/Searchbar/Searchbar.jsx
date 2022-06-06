import React from 'react';
import {
  SearchbarWrap,
  SearchbarLeft,
  CategoryBtn,
  SearchInput,
  SearchbarRight,
} from './searchbar.style';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { IconWrap } from '../others.style';

const Searchbar = () => {
  return (
    <SearchbarWrap>
      <SearchbarLeft>
        <CategoryBtn>
          All Categories
          <IconWrap>
            <FiChevronDown />
          </IconWrap>
        </CategoryBtn>
        <SearchInput type="text" placeholder="Search for items..." />
      </SearchbarLeft>
      <SearchbarRight>
        <FiSearch />
      </SearchbarRight>
    </SearchbarWrap>
  );
};

export default Searchbar;
