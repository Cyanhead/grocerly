import { createContext, useState, ReactNode } from 'react';

import { GalleryContextType } from './types';
import { Products } from '../../../types';

export const GalleryContext = createContext<GalleryContextType | undefined>(
  undefined
);

function GalleryProvider({ children }: { children: ReactNode }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fileErrors, setFileErrors] = useState<string[]>([]);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [viewableSelectedImage, setViewableSelectedImage] = useState<string[]>(
    []
  );

  const [newImagesToUpload, setNewImagesToUpload] = useState<File[]>([]);
  const [imagesToDeleteOnBackend, setImagesToDeleteOnBackend] = useState<
    Products[0]['images']
  >([]);

  return (
    <GalleryContext.Provider
      value={{
        activeImageIndex,
        setActiveImageIndex,
        fileErrors,
        setFileErrors,
        currentImages,
        setCurrentImages,
        viewableSelectedImage,
        setViewableSelectedImage,
        newImagesToUpload,
        setNewImagesToUpload,
        setImagesToDeleteOnBackend,
        imagesToDeleteOnBackend,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export { GalleryProvider };
