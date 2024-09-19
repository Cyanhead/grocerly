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
  setImagesToDeleteOnBackend: React.Dispatch<React.SetStateAction<string[]>>;
  imagesToDeleteOnBackend: string[];
};
