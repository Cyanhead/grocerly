import { ProductCardPropsType } from './ProductCard.type';
import {
  Wrapper,
  Image,
  TextWrapper,
  Category,
  Name,
  Group,
  PriceGroup,
  DiscountedPrice,
  OldPrice,
  AddButton,
  Link,
} from './ProductCard.styled';
import { useMemo } from 'react';

import dummy from '../../assets/images/default_product.svg';
import { Icon } from '..';
import { ShoppingCart } from 'lucide-react';
import { separateNumberByComma } from '../../helpers';
import { useCartContext } from '../../context';

function ProductCard({
  product: { id, name, images, price, category },
}: ProductCardPropsType) {
  const { dispatch } = useCartContext();

  const oldPrice = useMemo(() => {
    const multiplier = Math.random() + 1;
    return separateNumberByComma(price * multiplier, 2);
  }, [price]);

  function handleAddToCart(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: id,
        name,
        price,
        image: images[0].smallURL,
        quantity: 1,
      },
    });
  }

  return (
    <Link to={`/products/${id}`}>
      <Wrapper>
        <Image src={images[0]?.smallURL ?? dummy} alt={`image of ${name}`} />
        <TextWrapper>
          <Category>{category}</Category>
          <Name> {name} </Name>
          <Group>
            <PriceGroup>
              <DiscountedPrice> ${price} </DiscountedPrice>
              <OldPrice> ${oldPrice} </OldPrice>
            </PriceGroup>
            <AddButton onClick={handleAddToCart}>
              <Icon icon={ShoppingCart} />
              Add
            </AddButton>
          </Group>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}

export default ProductCard;
