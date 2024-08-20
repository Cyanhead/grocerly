import { X } from 'lucide-react';
import {
  FormInput,
  Label,
  OptionalTag,
  Prompt,
  Set,
} from '../AuthForm/AuthForm.styled';
import {
  PasswordErrorType,
  PasswordInputPropsType,
} from './PasswordInput.type';
import { useEffect, useState } from 'react';
import { useValidatePassword } from '../../../hooks';

function PasswordInput({
  id,
  label,
  type,
  placeholder,
  required,
  value: password,
  onChange,
  setIsPasswordValid,
}: PasswordInputPropsType) {
  const [showPrompts, setShowPrompts] = useState(false);

  const { hasMinimumLength, hasNumber, hasSpecialChar, hasUppercase } =
    useValidatePassword(password);

  function handleShowPrompts() {
    if (password.length === 0) {
      return;
    }
    setShowPrompts(true);
  }

  useEffect(() => {
    if (password.length === 0) {
      setShowPrompts(false);
    }
  }, [password]);

  useEffect(() => {
    if (hasMinimumLength && hasNumber && hasSpecialChar && hasUppercase) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }, [
    hasMinimumLength,
    hasNumber,
    hasSpecialChar,
    hasUppercase,
    setIsPasswordValid,
  ]);

  return (
    <Set>
      <Label htmlFor={id}>
        {label} {required === false && <OptionalTag>(optional)</OptionalTag>}
      </Label>
      <FormInput
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={password}
        onChange={e => onChange(e.target.value)}
        onBlur={handleShowPrompts}
      />
      {showPrompts && (
        <Prompts
          hasAtLeastEightChars={hasMinimumLength}
          hasNumber={hasNumber}
          hasUppercase={hasUppercase}
          hasSpecialChar={hasSpecialChar}
        />
      )}
    </Set>
  );
}

export default PasswordInput;

function Prompts({
  hasAtLeastEightChars,
  hasNumber,
  hasSpecialChar,
  hasUppercase,
}: PasswordErrorType) {
  return (
    <div>
      {!hasAtLeastEightChars && (
        <PromptWrapper text="Must have 8 or more characters." />
      )}
      {!hasNumber && <PromptWrapper text="Must include number." />}
      {!hasSpecialChar && (
        <PromptWrapper text="Must include special character." />
      )}
      {!hasUppercase && <PromptWrapper text="Must include uppercase." />}
    </div>
  );
}

function PromptWrapper({ text }: { text: string }) {
  return (
    <Prompt>
      <X size={18} />
      {text}
    </Prompt>
  );
}
