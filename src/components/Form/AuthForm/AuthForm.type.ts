export type AuthFormPropsType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  content: {
    pre?: React.ReactNode;
    title: string;
    subheading?: React.ReactNode;
    fieldsets: {
      id: string;
      label: string;
      placeholder: string;
      type: HTMLInputElement['type'];
      required: boolean;
      value: string;
      onChange: (e: string) => void;
      error?: {
        trigger: boolean;
        prompt: string;
      };
    }[];
    customInput?: React.ReactNode;
    button: {
      text: string;
      isDisabled?: boolean;
    };
  };
  children?: React.ReactNode;
};
