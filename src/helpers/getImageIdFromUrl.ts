/**
 * Extracts the image id from a given image url.
 * The image id is the last part of the url path before the query string.
 *
 * @example
 * getImageIdFromUrl('https://firebasestorage.googleapis.com/v0/b/project-123.appspot.com/o/images%image_id123.jpg?alt=media');
 * // Returns 'id123'
 *
 * @param url - The image url.
 * @returns The image id.
 */
export function getImageIdFromUrl(url: string) {
  const imageNameAndId = url.split('/o/')[1].split('?')[0].split('_');

  return imageNameAndId[imageNameAndId.length - 1];
}
