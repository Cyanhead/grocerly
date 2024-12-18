import Resizer from 'react-image-file-resizer';

const THUMBNAIL_IMAGE_DIMENSION = 80;
const SMALL_IMAGE_DIMENSION = 300;
const LARGE_IMAGE_DIMENSION = 500;

/**
 * Resizes a file to a specified size and returns the resized file as a URI.
 * @param file The file to be resized
 * @param type The type of resizing to be done. Defaults to 'small'.
 *              - 'thumbnail' resizes to 80x80
 *              - 'small' resizes to 300x300
 *              - 'large' resizes to 500x500
 * @returns A promise that resolves to a URI of the resized file
 */
export const resizeFile = (
  file: File,
  type: 'thumbnail' | 'small' | 'large' = 'small'
) =>
  new Promise(resolve => {
    const size =
      type === 'thumbnail'
        ? THUMBNAIL_IMAGE_DIMENSION
        : type === 'small'
        ? SMALL_IMAGE_DIMENSION
        : LARGE_IMAGE_DIMENSION;

    Resizer.imageFileResizer(
      file,
      size,
      size,
      'PNG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'file'
    );
  });
