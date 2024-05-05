import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/NavBar";
import SvgIcon from "../components/SvgIcon";
import MainLogoPath from "../components/Logos/MainLogoPath";

export default {
  component: Navbar,
  title: "Navbar",
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Nav: Story = {
  args: {
    logo: (
      <SvgIcon width={40} height={40}>
        <MainLogoPath />
      </SvgIcon>
    ),
  },
};
