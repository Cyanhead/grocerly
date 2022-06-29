import React, { useState } from 'react';

import { Wrap, CounterText } from './item-quantity-counter.style';
import { Disabler, IconWrap } from '../others.style';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useStateContext } from '../../context/StateContext';

const ItemQuantityCounter = () => {
  // const [counter, setCounter] = useState(1);

  const { qty, incQty, decQty } = useStateContext();

  // const handleIncrement = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecrement = () => {
  //   if (counter > 1) {
  //     setCounter(counter - 1);
  //   }
  // };

  return (
    <Wrap>
      <Disabler
        // onClick={handleDecrement}
        // disabled={counter > 1 ? false : true}
        onClick={decQty}
        disabled={qty > 1 ? false : true}
      >
        <IconWrap
          bgHover="#eeeeeebb"
          bgActive="#ddddddbb"
          pad="8px"
          bordRad="0"
          bordR="1px solid rgba(0, 0, 0, 0.2)"
        >
          <FiMinus />
        </IconWrap>
      </Disabler>
      {/* <CounterText>{counter}</CounterText> */}
      <CounterText>{qty}</CounterText>
      <IconWrap
        bgHover="#eeeeeebb"
        bgActive="#ddddddbb"
        pad="8px"
        bordRad="0"
        bordL="1px solid rgba(0, 0, 0, 0.2)"
        //
        // onClick={handleIncrement}
        onClick={incQty}
      >
        <FiPlus />
      </IconWrap>
    </Wrap>
  );
};

export default ItemQuantityCounter;
