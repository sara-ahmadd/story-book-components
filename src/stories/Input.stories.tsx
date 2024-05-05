import InputField from "../components/InputField";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  component: InputField,
  title: "InputField",
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

type Story = StoryObj<typeof InputField>;

export const FullWidthNameInput: Story = {
  args: {
    placeholder: "enter full name",
  },
};

export const FullWidthMobileInput: Story = {
  args: {
    placeholder: "enter mobile",
  },
};
export const FullWidthEmailInput: Story = {
  args: {
    placeholder: "enter email",
  },
};
