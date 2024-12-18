import { GalleryPropsType } from '../Gallery.type';

export type GalleryEditorPropsType = GalleryPropsType & {
  newImagesToUpload?: File[];
  setNewImagesToUpload?: React.Dispatch<React.SetStateAction<File[]>>;
  imagesToDeleteOnBackend?: string[];
  setImagesToDeleteOnBackend?: React.Dispatch<React.SetStateAction<string[]>>;
};
