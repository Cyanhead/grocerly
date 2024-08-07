import { InputPropsType } from './Input.type';
import { Input as Component } from './Input.styled';
import { useId } from 'react';

function Input({ id, ...delegated }: InputPropsType) {
  const generatedId = useId();
  const appliedId = id || generatedId;

  return (
    <Component
      //
      data-testid="Input"
      id={appliedId}
      type="text"
      placeholder="Enter text..."
      {...delegated}
    />
  );
}

export default Input;
