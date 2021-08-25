import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckBox } from "./CheckBox";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  color: "default",
  label: "Checkbox",
};

export const Primary = Template.bind({});
Primary.args = {
  checked: true,
  disabled: false,
  color: "primary",
  label: "Checkbox",
};

export const Secondary = Template.bind({});
Secondary.args = {
  checked: true,
  disabled: false,
  color: "secondary",
  label: "Checkbox",
};
