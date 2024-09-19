import { Image, ImageButton, Preview, Wrapper } from '../Gallery.styled';
import { GalleryPropsType } from '../Gallery.type';
import { useGalleryContext } from '../context';

function GalleryViewer({ numOfCols = 4, images }: GalleryPropsType) {
  const { activeImageIndex, setActiveImageIndex } = useGalleryContext();

  return (
    <Wrapper data-testid="Gallery" $numOfCols={numOfCols}>
      <Preview
        src={images[activeImageIndex]}
        alt="product image"
        $numOfCols={numOfCols}
      />

      {images.map((image, index) => (
        <ImageButton key={index} onFocus={() => setActiveImageIndex(index)}>
          <Image
            src={image}
            alt="product images"
            onMouseEnter={() => setActiveImageIndex(index)}
            $active={activeImageIndex === index}
          />
        </ImageButton>
      ))}
    </Wrapper>
  );
}

export default GalleryViewer;
