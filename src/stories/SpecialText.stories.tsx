import type { Meta, StoryObj } from "@storybook/react";
import "./../index.css";
import SpecialText from "../components/SpecialText";

export default {
  component: SpecialText,
  title: "SpecialText",
} satisfies Meta<typeof SpecialText>;

type Story = StoryObj<typeof SpecialText>;

export const HeroSection: Story = {
  args: {
    text: "software",
    fontSize: "text-[48px]",
    color: "text-[#6E6EFF]",
    txtTransform: "capitalize",
  },
};
export const AboutUsSection: Story = {
  args: {
    text: "benefits",
    fontSize: "text-[32px]",

    color: "text-[#6E6EFF]",
    txtTransform: "capitalize",
  },
};
export const ServicesSection: Story = {
  args: {
    text: "services",
    fontSize: "text-[32px]",
    color: "text-[#6E6EFF]",
    txtTransform: "capitalize",
  },
};
export const Process: Story = {
  args: {
    text: "process",
    fontSize: "text-[32px]",
    color: "text-[#6E6EFF]",
    txtTransform: "capitalize",
  },
};
export const Blogs: Story = {
  args: {
    text: "blogs",
    fontSize: "text-[32px]",
    color: "text-[#525F72]",
    txtTransform: "capitalize",
  },
};
export const FreeQuote: Story = {
  args: {
    text: "free quote",
    fontSize: "text-[32px]",
    color: "text-[#525F72]",
    txtTransform: "capitalize",
  },
};
export const Projects: Story = {
  args: {
    text: "projects",
    fontSize: "text-[32px]",
    color: "text-[#6E6EFF]",
    txtTransform: "lowercase",
  },
};
