import { InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import { StyledInput } from "../../styles/input";
import { StyledField } from "./style";

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children: string | undefined;
  register: UseFormRegisterReturn;
  borderColor: string;
}

function Input({
  label,
  type,
  placeholder,
  register,
  children,
  borderColor = "var(--color-gray-0)",
}: iInput) {
  const [labelStatus, setLabelStatus] = useState(false);

  function changeLabelStatus() {
    setLabelStatus(!labelStatus);
  }

  return (
    <StyledField>
      {labelStatus && <label>{label}</label>}

      <StyledInput
        border={borderColor}
        type={type}
        placeholder={placeholder}
        {...register}
        onFocus={changeLabelStatus}
        onBlur={changeLabelStatus}
      />
      <span>{children}</span>
    </StyledField>
  );
}

export default Input;
