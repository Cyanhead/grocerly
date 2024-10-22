import { Products } from '../../../types';

type Images = Products[0]['images'];

export type GalleryContextType = {
  activeImageIndex: number;
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
  fileErrors: string[];
  setFileErrors: React.Dispatch<React.SetStateAction<string[]>>;
  currentImages: string[];
  setCurrentImages: React.Dispatch<React.SetStateAction<string[]>>;
  viewableSelectedImage: string[];
  setViewableSelectedImage: React.Dispatch<React.SetStateAction<string[]>>;

  newImagesToUpload: File[];
  setNewImagesToUpload: React.Dispatch<React.SetStateAction<File[]>>;
  imagesToDeleteOnBackend: Images;
  setImagesToDeleteOnBackend: React.Dispatch<React.SetStateAction<Images>>;
};
