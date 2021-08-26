import React from "react";

interface CheckboxProps {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
}

export const CheckBox = ({
  label,
  disabled = false,
  checked = false,
  ...props
}: CheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        name={label}
        disabled={disabled}
        checked={checked}
        {...props}
      />
      <label>{label}</label>
    </>
  );
};
