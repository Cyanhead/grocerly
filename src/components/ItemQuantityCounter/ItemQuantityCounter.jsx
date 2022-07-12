import { Wrap, CounterText } from './item-quantity-counter.style';
import { Disabler, IconWrap } from '../others.style';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useCartContext } from '../../context/CartContext';

const ItemQuantityCounter = props => {
  const { qty, incQty, decQty, toggleCartItemQuanitity } = useCartContext();

  const ReuseableCounter = props => {
    return (
      <>
        <Disabler
          onClick={props.onClickMinus}
          disabled={props.disablerCheck > 1 ? false : true}
        >
          <IconWrap
            bgHover={props => props.theme.color.greyHover}
            bgActive={props => props.theme.color.greyActive}
            pad="8px"
            mobilePad={props.cart ? '' : '16px'}
            bordRad="0"
            bordR="1px solid rgba(0, 0, 0, 0.2)"
          >
            <FiMinus />
          </IconWrap>
        </Disabler>
        <CounterText>{props.counter}</CounterText>
        <IconWrap
          bgHover={props => props.theme.color.greyHover}
          bgActive={props => props.theme.color.greyActive}
          pad="8px"
          mobilePad={props.cart ? '' : '16px'}
          bordRad="0"
          bordL="1px solid rgba(0, 0, 0, 0.2)"
          onClick={props.onClickPlus}
        >
          <FiPlus />
        </IconWrap>
      </>
    );
  };

  return (
    <>
      {props.cart ? (
        <Wrap mar={props.mar} width="150px">
          <ReuseableCounter
            onClickMinus={() => toggleCartItemQuanitity(props?.item.id, 'dec')}
            onClickPlus={() => toggleCartItemQuanitity(props?.item.id, 'inc')}
            disablerCheck={props.item.quantity}
            counter={props.item.quantity}
            cart={props.cart}
          />
        </Wrap>
      ) : (
        <Wrap>
          <ReuseableCounter
            onClickMinus={decQty}
            onClickPlus={incQty}
            disablerCheck={qty}
            counter={qty}
          />
        </Wrap>
      )}
    </>
  );
};

export default ItemQuantityCounter;
