import { ProductFormInputPropsType } from './ProductFormInput.type';
import { Input, Label, Set, TextArea } from '../../Form.styled';
import { useId } from 'react';

function ProductFormInput({
  label,
  name,
  placeholder = 'Enter text...',
  type = 'text',
  value,
  onInputChange,
  onTextAreaChange,
  required = true,
}: ProductFormInputPropsType) {
  const id = useId();

  if (type === 'textarea') {
    return (
      <Set>
        <Label htmlFor={id}>{label}</Label>
        <TextArea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onTextAreaChange}
          required={required}
        />
      </Set>
    );
  }

  if (type === 'number') {
    return (
      <Set>
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          required={required}
        />
      </Set>
    );
  }

  return (
    <Set>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        required={required}
      />
    </Set>
  );
}

export default ProductFormInput;
