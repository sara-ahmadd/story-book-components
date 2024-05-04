import InputField from "../components/InputField";
import type { Meta, StoryObj } from "@storybook/react";
import "./../index.css";

export default {
  component: InputField,
  title: "InputField",
} satisfies Meta<typeof InputField>;

type Story = StoryObj<typeof InputField>;

export const FullWidthNameInput: Story = {
  args: {
    placeholder: "enter full name",
    classes: `w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none`,
  },
};

export const FullWidthMobileInput: Story = {
  args: {
    placeholder: "enter mobile",
    classes: `w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none`,
  },
};
export const FullWidthEmailInput: Story = {
  args: {
    placeholder: "enter email",
    classes: `w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none`,
  },
};
