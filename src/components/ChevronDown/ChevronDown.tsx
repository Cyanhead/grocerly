import React from 'react';
import { IconWrap } from '../others.style';
import { FiChevronDown } from 'react-icons/fi';

import { ChevronDownWrap } from './chevron-down.style';

const ChevronDown = props => {
  return (
    <ChevronDownWrap trigger={props.trigger} mobile={props.mobile}>
      <IconWrap>
        <FiChevronDown />
      </IconWrap>
    </ChevronDownWrap>
  );
};

export default ChevronDown;
