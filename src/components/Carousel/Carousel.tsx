import { CarouselPropsType } from './Carousel.type';
import { ArrowLeft, ArrowRight, Container, Wrapper } from './Carousel.styled';
import { useEffect, useRef, useState } from 'react';
import { divideArrayIntoBatches } from '../../helpers';
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from 'lucide-react';

function Carousel<T>({ items, card: Card }: CarouselPropsType<T>) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(1200);
  const [batchSize, setBatchSize] = useState(6);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const batchedArrays = divideArrayIntoBatches(items, batchSize);
  const itemCount = batchedArrays.length;

  function handleCarouselLeft() {
    const carouselCount = itemCount - 1;

    setCarouselIndex(prevState => {
      if (prevState === 0) {
        return carouselCount;
      }
      return prevState - 1;
    });
  }

  function handleCarouselRight() {
    const carouselCount = itemCount - 1;

    setCarouselIndex(prevState => {
      if (prevState === carouselCount) {
        return 0;
      }
      return prevState + 1;
    });
  }

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      setWrapperWidth(wrapper.offsetWidth);
    }

    function onResize() {
      if (wrapper) {
        setWrapperWidth(wrapper.offsetWidth);
      }
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    adjustBatchSize();
    function adjustBatchSize() {
      if (window.innerWidth >= 1) {
        setBatchSize(3);
      }

      if (window.innerWidth >= 360) {
        setBatchSize(6);
      }

      if (window.innerWidth >= 576) {
        setBatchSize(9);
      }

      if (window.innerWidth >= 768) {
        setBatchSize(4);
      }

      if (window.innerWidth >= 992) {
        setBatchSize(5);
      }

      if (window.innerWidth >= 1200) {
        // NOTE: consider using 7 later as per the design
        setBatchSize(6);
      }
    }

    window.addEventListener('resize', adjustBatchSize);

    return () => {
      window.removeEventListener('resize', adjustBatchSize);
    };
  }, []);

  return (
    <Container data-testid="Carousel">
      <ArrowLeft
        icon={ArrowLeftIcon}
        onClick={handleCarouselLeft}
        disabled={itemCount === 1}
      />
      <ArrowRight
        icon={ArrowRightIcon}
        onClick={handleCarouselRight}
        disabled={itemCount === 1}
      />
      {batchedArrays.map((items, index) => {
        return (
          <Wrapper
            $index={carouselIndex}
            key={index}
            ref={wrapperRef}
            $width={wrapperWidth}
          >
            {items.map((item, index) => {
              return <Card key={index} item={item} {...item} />;
            })}
          </Wrapper>
        );
      })}
    </Container>
  );
}

export default Carousel;
