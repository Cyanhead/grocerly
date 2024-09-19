import { ChangeEvent, useEffect } from 'react';
import { GalleryEditorPropsType } from './GalleryEditor.type';
import {
  Image,
  ImageButton,
  ImageWrapper,
  Preview,
  Wrapper,
} from '../Gallery.styled';
import {
  DeleteImageButton,
  ErrorText,
  FileInput,
  NewImageButton,
} from './GalleryEditor.styled';
import Icon from '../../Icon';
import { Plus, Trash2 } from 'lucide-react';
import { useGalleryContext } from '../context';

function GalleryEditor({ numOfCols = 4, images }: GalleryEditorPropsType) {
  const {
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
  } = useGalleryContext();

  const fileTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  function areFilesValid(files: FileList) {
    let isValid = true;
    for (let i = 0; i < files.length; i++) {
      if (!fileTypes.includes(files[i].type)) {
        isValid = false;

        const nextFileError = [
          ...fileErrors,
          `Invalid file type selected: "${files[i].type}"`,
        ];
        setFileErrors(nextFileError);
      }
    }
    return isValid;
  }

  function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {
    const selectedImages = e.target.files;

    if (!selectedImages) {
      const nextFileErrors = [...fileErrors, 'No files selected'];
      setFileErrors(nextFileErrors);

      return;
    }

    if (!areFilesValid(selectedImages)) {
      return;
    }

    for (let i = 0; i < selectedImages.length; i++) {
      const image = selectedImages[i];
      if (image) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setViewableSelectedImage(prev => [...prev, reader.result as string]); // Set the image preview
        };

        reader.readAsDataURL(image); // Read the file as a Data URL
      } else {
        setViewableSelectedImage([]); // Reset the preview if no file is selected
      }
    }

    setNewImagesToUpload([...newImagesToUpload, ...selectedImages]);
    setFileErrors([]);
  }

  function handleImageDelete(imageToRemove: string) {
    const isUrl = imageToRemove.split('/')[0] === 'https:';

    if (isUrl) {
      setImagesToDeleteOnBackend(prev => [...prev, imageToRemove]);
    } else {
      setViewableSelectedImage(
        viewableSelectedImage.filter(image => image !== imageToRemove)
      );
    }
    setCurrentImages(currentImages.filter(image => image !== imageToRemove));
  }

  const combinedFiles = [...currentImages, ...viewableSelectedImage];

  useEffect(() => {
    setCurrentImages(images);
  }, [images, setCurrentImages]);

  return (
    <>
      <Wrapper data-testid="Gallery" $numOfCols={numOfCols}>
        <Preview
          src={combinedFiles[activeImageIndex]}
          alt="product image"
          $numOfCols={numOfCols}
        />

        {combinedFiles.map((image, index) => (
          <ImageWrapper
            key={index}
            onMouseOver={() => setActiveImageIndex(index)}
          >
            <ImageButton onFocus={() => setActiveImageIndex(index)}>
              <Image
                src={image}
                alt="product images"
                onMouseEnter={() => setActiveImageIndex(index)}
                $active={activeImageIndex === index}
              />
            </ImageButton>
            <DeleteImageButton onClick={() => handleImageDelete(image)}>
              <Icon
                icon={Trash2}
                visuallyHidden="delete image"
                isIconStandalone
              />
            </DeleteImageButton>
          </ImageWrapper>
        ))}
        <FileInput
          type="file"
          id="product-images"
          onInputCapture={handleFileSelect}
          accept="image/*"
          multiple
        />

        {images.length <= 7 && (
          <NewImageButton
            as="label"
            htmlFor="product-images"
            tabIndex={0}
            // Simulate a click on the button
            onKeyDown={event => {
              if (event.key === 'Enter') {
                event.currentTarget.click();
              }
            }}
          >
            <Icon
              icon={Plus}
              size={40}
              visuallyHidden="add new image"
              isIconStandalone
            />
          </NewImageButton>
        )}
      </Wrapper>
      {newImagesToUpload.length > 0 && (
        <p>
          You added {newImagesToUpload.length}{' '}
          {newImagesToUpload.length === 1 ? 'image' : 'images'}.
        </p>
      )}
      {fileErrors &&
        fileErrors.map((error, index) => (
          <ErrorText key={index}>{error}.</ErrorText>
        ))}
    </>
  );
}

export default GalleryEditor;
