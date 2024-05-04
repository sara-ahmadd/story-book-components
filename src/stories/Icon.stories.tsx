import { FacebookPath } from "../components/FacebookPath";
import { InstaPath } from "../components/InstagramPath";
import { LinkedInPath } from "../components/LinkedIn";
import SvgIcon from "../components/SvgIcon";
import { TwitterPath } from "../components/TwitterPath";
import { UnderLinePath } from "../components/UnderLinePath";
import { YoutubePath } from "../components/YoutubePath";

export default {
  title: "Icon",
  component: SvgIcon,
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
