import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sponsors from "../Sponsors";
import SvgIcon from "../SvgIcon";
import MainLogoPath from "../Logos/MainLogoPath";
import Button from "../Button";
import InputField from "../InputField";
import List from "./components/List";
import { FacebookPath } from "../icons/FacebookPath";
import { TwitterPath } from "../icons/TwitterPath";
import { InstaPath } from "../icons/InstagramPath";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="min-h-[872px] px-[108px]  bg-footerBg relative flex flex-col justify-center items-center gap-[41px]">
      <Sponsors />
      <div className="w-full  flex justify-between items-center">
        <div className="flex justify-center items-center gap-[16px]">
          <SvgIcon width={40} height={40}>
            <MainLogoPath color={"transparent"} />
          </SvgIcon>
          <p className="text-md capitalize text-white">company Name</p>
        </div>
        <div className="flex justify-center items-center gap-[16px]">
          <p className="min-w-[203px] text-white">Ready to get started?</p>
          <Button
            label="get started"
            classes={`capitalize w-full bg-white text-mainColor px-[24px] py-[16px] flex justify-center gap-3 items-center`}
            handleClick={() => console.log("clicked")}
            icon={<FontAwesomeIcon icon="arrow-right" />}
          />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-[15px]">
          <p className="max-w-[178.24px] text-white text-md ">
            Subscribe to our newsletter
          </p>
          <form className="flex justify-center items-center ">
            <InputField
              placeholder="email address"
              classess="max-w-[304px] bg-white/10 text-white  h-[50px]"
            />
            <Button
              label=""
              icon={<FontAwesomeIcon icon="chevron-right" />}
              classes={`capitalize w-[50px]  h-[50px] bg-white text-mainColor px-[24px] py-[16px] flex justify-center p-[8px] items-center`}
              handleClick={() => console.log("clicked")}
            />
          </form>
        </div>
        <div className="flex justify-center items-start gap-[72px]">
          <List
            title="services"
            items={["UI/UX Design", "web Development", "Branding", "Marketing"]}
          />
          <List
            title="website"
            items={["home", "about us", "blogs", "career"]}
          />
          <List title="help center" items={["FAQ", "contact us"]} />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm font-normal capitalize text-lightGray  flex justify-start items-center gap-[72px]">
          <span>terms & conditions</span>
          <span>privacy policy</span>
        </p>
        <div className="flex justify-center items-center gap-[32px] footerGradient pt-[72px]">
          <Link to={"#"}>
            <SvgIcon width={12} height={24}>
              <FacebookPath color="white" />
            </SvgIcon>
          </Link>

          <Link to={"#"}>
            <SvgIcon width={26} height={24}>
              <TwitterPath color="white" />
            </SvgIcon>
          </Link>
          <Link to={"#"}>
            <SvgIcon width={24} height={24}>
              <InstaPath color="white" />
            </SvgIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
