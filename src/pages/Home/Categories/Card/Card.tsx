import { CardPropsType } from './Card.type';
import { Container, Image, Title } from './Card.styled';
import defaultImage from '../../../../assets/images/categories/default.png';
import { generateLightColorHsla } from '../../../../helpers';

import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

function Card({ title, imagePath }: CardPropsType) {
  const [bg, setBg] = useState(generateLightColorHsla());

  useEffect(() => {
    const throttledBgChange = throttle(() => {
      setBg(generateLightColorHsla());
    }, 1000);

    throttledBgChange();
    return () => {
      throttledBgChange.cancel();
    };
  }, []);

  return (
    <Container $bg_color={bg}>
      <Image src={imagePath || defaultImage} alt="" />
      <Title>{title}</Title>
    </Container>
  );
}

export default Card;
