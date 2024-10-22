import { GalleryPropsType } from './Gallery.type';
import GalleryEditor from './GalleryEditor';
import GalleryViewer from './GalleryViewer';

function Gallery({
  numOfCols = 4,
  images,
  isEditable = false,
}: GalleryPropsType) {
  if (isEditable)
    return <GalleryEditor numOfCols={numOfCols} images={images} />;

  return <GalleryViewer numOfCols={numOfCols} images={images} />;
}

export default Gallery;
