import { Products } from '../../types';

export type GalleryPropsType = {
  numOfCols?: 3 | 4 | 5;
  images: Products[0]['images'];
  isEditable?: boolean;
};
