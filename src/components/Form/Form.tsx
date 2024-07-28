import React from 'react';

import {
  FormWrap,
  FormText,
  FormH1,
  FormP,
  FormAltSignup,
  Form,
  FormButton,
  //
  FormInputGroup,
  FormLabel,
  FormInput,
  PromptMessage,
  PromptP,
} from './form.style';
import { Disabler, IconWrap } from '../others.style';
import { FiAlertTriangle } from 'react-icons/fi';

export const CustomForm = props => {
  return (
    <FormWrap>
      <FormText>
        <FormH1>{props.heading}</FormH1>
        <FormP>{props.subHeading}</FormP>
        <FormAltSignup>
          <FormP>{props.formAltText1}</FormP>
          {props.formAltLink}
          <FormP>{props.formAltText2}</FormP>
        </FormAltSignup>
      </FormText>
      <Form onSubmit={props.onSubmit}>
        {props.children}
        <Disabler disabled={props.submitBtnDisableCondition}>
          <FormButton
            revealType={props.submitBtnRevealType}
            reveal={props.submitBtnRevealCondition}
          >
            {props.submitBtnText}
          </FormButton>
        </Disabler>
      </Form>
    </FormWrap>
  );
};

export const CustomFormInputGroup = props => {
  return (
    <FormInputGroup
      revealType={props.inputRevealType}
      reveal={props.revealCondition}
    >
      <FormLabel htmlFor={props.htmlFor}>
        {props.labelName}
        {props.requiredLabel ? <span style={{ color: 'red' }}>*</span> : ''}
      </FormLabel>
      <FormInput
        type={props.inputType}
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={props.inputOnChange}
        required={props.required}
      />
      <PromptMessage show={props.promptCondition}>
        <IconWrap fontSize="1rem">
          <FiAlertTriangle />
        </IconWrap>
        <PromptP>{props.promptMessage}</PromptP>
      </PromptMessage>
    </FormInputGroup>
  );
};
