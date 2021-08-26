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
  label: "Checkbox",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
  label: "Checkbox",
};
