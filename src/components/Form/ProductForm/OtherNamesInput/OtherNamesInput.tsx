import { Input, Label, OptionalTag, Set } from '../../Form.styled';
import { OtherNamesInputPropsType } from './OtherNamesInput.type';
import { useState } from 'react';

function OtherNamesInput({
  otherNames,
  setOtherNames,
}: OtherNamesInputPropsType) {
  const [inputValue, setInputValue] = useState(otherNames.join(', '));

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    const array = convertCommaSeparatedToArray(inputValue);
    setOtherNames(prevState => ({
      ...prevState,
      otherNames: array,
    }));
  }

  function convertCommaSeparatedToArray(text: string) {
    if (!text) return [];
    return text
      .split(',')
      .map(name => name.trim())
      .filter(name => name); // Remove empty strings
  }

  return (
    <Set>
      <Label>
        Other Names <OptionalTag>(must be comma separated)</OptionalTag>
      </Label>
      <Input
        type="text"
        name="other-names"
        placeholder="Enter other product names..."
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </Set>
  );
}

export default OtherNamesInput;
