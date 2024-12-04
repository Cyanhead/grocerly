import { Product } from '../../types';

export type GalleryPropsType = {
  numOfCols?: 3 | 4 | 5;
  images: Product['images'];
  isEditable?: boolean;
};
