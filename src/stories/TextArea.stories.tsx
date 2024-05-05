import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "../components/TextArea";

export default {
  component: TextArea,
  title: "TextArea",
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const MsgTextArea: Story = {
  args: {
    placeholder: "leave your message",
    cols: 30,
    rows: 5,
    classes: `w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none`,
  },
};
