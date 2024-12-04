import { useId, useState } from 'react';
import { Input, Label, Option, Select, Set } from '../../Form.styled';
import { useGetCategories } from '../../../../hooks';
import { ProductCategorySelectPropsType } from './ProductCategorySelect.type';

function ProductCategorySelect({
  category,
  onSelectChange,
}: ProductCategorySelectPropsType) {
  const id = useId();
  const [showInput, setShowInput] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const {
    isLoading: isLoadingCategories,
    data: categories,
    error,
  } = useGetCategories();

  // Determine active category or fallback
  const defaultCategory = categories?.[0] || '';
  const activeCategory = category || defaultCategory;

  // Loading, Error States
  if (isLoadingCategories) return <p>Loading categories...</p>;
  if (error || !categories) {
    return <p>Could not load categories. Please try again later.</p>;
  }

  return (
    <Set>
      <Label htmlFor={id}>Category</Label>
      <Select
        id={id}
        name="category"
        value={activeCategory}
        onChange={onSelectChange}
      >
        <Option value="new" onClick={() => setShowInput(true)}>
          New Category
        </Option>
        {categories.map(category => (
          <Option
            key={category}
            value={category}
            onClick={() => setShowInput(false)}
          >
            {category}
          </Option>
        ))}
      </Select>

      {showInput && (
        <Input
          id={`${id}-new-category`}
          name="new-category"
          value={newCategory}
          onChange={e => {
            setNewCategory(e.target.value);
            onSelectChange({
              ...e,
              target: { ...e.target, value: e.target.value },
            } as unknown as React.ChangeEvent<HTMLSelectElement>);
          }}
          placeholder="Enter new category..."
          required
        />
      )}
    </Set>
  );
}

export default ProductCategorySelect;
