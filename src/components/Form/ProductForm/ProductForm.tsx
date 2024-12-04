import { ProductFormPropsType } from './ProductForm.type';
import {
  FormElement as Form,
  Label,
  SubmitButton,
  Title,
} from '../Form.styled';
import ProductFormInput from './ProductFormInput';
import Layout from '../../Layout';
import { NewProductStateType } from '../AddProductForm/AddProductForm.type';
import { ExistingProductStateType } from '../EditProductForm/EditProductForm.type';
import Gallery from '../../Gallery';
import ProductCategorySelect from './ProductCategorySelect';
import OtherNamesInput from './OtherNamesInput';

function ProductForm<T extends NewProductStateType | ExistingProductStateType>({
  onSubmit,
  children,
  state: product,
  stateSetter,
  status = 'idle',
  button,
}: ProductFormPropsType<T>) {
  const isLoading = status === 'loading';

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

      <OtherNamesInput
        otherNames={product.otherNames}
        setOtherNames={
          stateSetter as unknown as React.Dispatch<
            React.SetStateAction<string[]>
          >
        }
      />

      <ProductCategorySelect
        category={product.category}
        onSelectChange={e =>
          stateSetter(prevState => ({
            ...prevState,
            category: e.target.value,
          }))
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
