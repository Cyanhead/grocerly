import { ProductFormPropsType } from './ProductForm.type';
import {
  FormElement as Form,
  Label,
  OptionalTag,
  SubmitButton,
  Title,
} from '../Form.styled';
import ProductFormInput from './ProductFormInput';
import Layout from '../../Layout';
import { NewProductType } from '../AddProductForm/AddProductForm.type';
import { ExistingProductType } from '../EditProductForm/EditProductForm.type';
import Gallery from '../../Gallery';

function ProductForm<T extends NewProductType | ExistingProductType>({
  onSubmit,
  children,
  state: product,
  stateSetter,
  status = 'idle',
  button,
}: ProductFormPropsType<T>) {
  const isLoading = status === 'loading';

  const joinedProductNames = product.otherNames.join(', ');
  function convertCommaSeparatedToArray(text: string) {
    if (!text) return [];
    return text.split(',').map(name => name.trim());
  }

  return (
    <Form onSubmit={onSubmit} aria-label="product-form">
      <Title>
        {'id' in product ? `Edit ${product.name}` : 'Add New Product'}
      </Title>

      <ProductFormInput
        type="text"
        label="Name"
        name="name"
        placeholder="Enter product name..."
        value={product.name}
        onInputChange={e =>
          stateSetter(prevState => ({ ...prevState, name: e.target.value }))
        }
      />

      <ProductFormInput
        type="text"
        label={
          <>
            Other Names <OptionalTag>(must be comma separated)</OptionalTag>
          </>
        }
        name="other-names"
        placeholder="Enter other product names..."
        value={joinedProductNames}
        onInputChange={e =>
          stateSetter(prevState => ({
            ...prevState,
            otherNames: convertCommaSeparatedToArray(e.target.value),
          }))
        }
      />

      <ProductFormInput
        type="text"
        label="Category"
        name="category"
        value={product.category}
        onInputChange={e =>
          stateSetter(prevState => ({ ...prevState, category: e.target.value }))
        }
      />

      <ProductFormInput
        type="textarea"
        label="About"
        name="about"
        placeholder="Enter product description..."
        value={product.about}
        onTextAreaChange={e =>
          stateSetter(prevState => ({ ...prevState, about: e.target.value }))
        }
      />

      <ProductFormInput
        type="number"
        label="Price"
        name="price"
        placeholder="Enter product price..."
        value={product.price}
        onInputChange={e =>
          stateSetter(prevState => ({
            ...prevState,
            price: parseInt(e.target.value),
          }))
        }
      />

      {children && children}

      <Layout.FlexCol $gap={4}>
        <Label>Images</Label>
        <Gallery isEditable numOfCols={4} images={product.images} />
      </Layout.FlexCol>

      <SubmitButton id="submit-btn" type="submit" disabled={isLoading}>
        {isLoading ? button.loadingText : button.text}
      </SubmitButton>
    </Form>
  );
}

export default ProductForm;
