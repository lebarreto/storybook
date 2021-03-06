import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  disabled: false,
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  primary: false,
  disabled: false,
  size: "large",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  primary: false,
  disabled: false,
  size: "medium",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  primary: false,
  disabled: false,
  size: "small",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  label: "Button",
};
