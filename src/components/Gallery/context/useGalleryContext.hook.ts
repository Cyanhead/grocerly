// galleryHooks.ts
import { useContext } from 'react';
import { GalleryContext } from './GalleryContext';

const useGalleryContext = () => {
  const context = useContext(GalleryContext);
  if (context === undefined) {
    throw new Error('useGalleryContext must be used within a GalleryProvider');
  }
  return context;
};

export { useGalleryContext };
