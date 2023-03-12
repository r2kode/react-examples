import React from "react";
import { Meta, Story } from "@storybook/react";
import { DynamicForm } from "../src/components/DynamicForm";

export default {
  title: "DynamicForm",
  component: DynamicForm,
} as Meta;

const Template: Story = (args) => <DynamicForm {...args} />;

export const Default = Template.bind({});
Default.args = { msg: "YIPPEE-KI-YAY" };
