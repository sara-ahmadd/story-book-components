import type { Meta, StoryObj } from "@storybook/react";
import "./../index.css";
import Button from "../components/Button";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);
export default {
  component: Button,
  title: "SubmitBtn",
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const SubmitBtn: Story = {
  args: {
    label: "submit",
    classes: `capitalize w-full text-white bg-mainColor px-[24px] py-[16px]`,
    handleClick: () => console.log("clicked"),
  },
};

export const GetStarted: Story = {
  args: {
    label: `get started`,
    icon: <FontAwesomeIcon icon="arrow-right" />,
    classes: `capitalize w-full bg-white text-mainColor px-[24px] py-[16px] flex justify-center gap-3 items-center`,
    handleClick: () => console.log("clicked"),
  },
};
export const RightArrowBtn: Story = {
  args: {
    label: ``,
    icon: <FontAwesomeIcon icon="chevron-right" />,
    classes: `capitalize w-[50px] h-[50px] bg-white text-mainColor px-[24px] py-[16px] flex justify-center p-[8px] items-center`,
    handleClick: () => console.log("clicked"),
  },
};
