import { FacebookPath } from "../components/icons/FacebookPath";
import { InstaPath } from "../components/icons/InstagramPath";
import { LinkedInPath } from "../components/icons/LinkedIn";
import { TwitterPath } from "../components/icons/TwitterPath";
import { UnderLinePath } from "../components/icons/UnderLinePath";
import { YoutubePath } from "../components/icons/YoutubePath";
import Partner_1 from "../components/Logos/Partner_1";
import Partner_2 from "../components/Logos/Partner_2";
import Partner_3 from "../components/Logos/Partner_3";
import Partner_4 from "../components/Logos/Partner_4";
import Partner_5 from "../components/Logos/Partner_5";
import SvgIcon from "../components/SvgIcon";

export default {
  title: "Icon",
  component: SvgIcon,
  tags: ["autodocs"],
};
const iconsBg = "#B5B5FF";
const underLineColor = "#6E6EFF";

export const Facebook = () => (
  <SvgIcon width={32} height={32}>
    <FacebookPath color={iconsBg} />
  </SvgIcon>
);
export const Twitter = () => (
  <SvgIcon width={32} height={32}>
    <TwitterPath color={iconsBg} />
  </SvgIcon>
);
export const LinkedIn = () => (
  <SvgIcon width={32} height={32}>
    <LinkedInPath color={iconsBg} />
  </SvgIcon>
);
export const Youtube = () => (
  <SvgIcon width={32} height={32}>
    <YoutubePath color={iconsBg} />
  </SvgIcon>
);
export const Instagram = () => (
  <SvgIcon width={32} height={32}>
    <InstaPath color={iconsBg} />
  </SvgIcon>
);
export const UnderLineIcon = () => (
  <SvgIcon width={136} height={14}>
    <UnderLinePath color={underLineColor} />
  </SvgIcon>
);
export const Partner_1_Logo = () => (
  <SvgIcon width={166} height={38}>
    <Partner_1 color={underLineColor} />
  </SvgIcon>
);
export const Partner_2_Logo = () => (
  <SvgIcon width={166} height={38}>
    <Partner_2 color={underLineColor} />
  </SvgIcon>
);
export const Partner_3_Logo = () => (
  <SvgIcon width={166} height={38}>
    <Partner_3 color={underLineColor} />
  </SvgIcon>
);
export const Partner_4_Logo = () => (
  <SvgIcon width={166} height={38}>
    <Partner_4 color={underLineColor} />
  </SvgIcon>
);
export const Partner_5_Logo = () => (
  <SvgIcon width={166} height={38}>
    <Partner_5 color={underLineColor} />
  </SvgIcon>
);
