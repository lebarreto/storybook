import React from "react";
import "./checkbox.css";

interface CheckboxProps {
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: "primary" | "secondary" | "default";
}

export const CheckBox = ({
  label,
  disabled = false,
  checked = false,
  color,
  ...props
}: CheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        name={label}
        disabled={disabled}
        checked={checked}
        className={["storybook-checkbox", `storybook-checkbox--${color}`].join(
          " "
        )}
        {...props}
      />
      <label>{label}</label>
    </>
  );
};
