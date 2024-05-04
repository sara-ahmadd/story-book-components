import "./App.css";
import Button from "./components/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "./components/InputField";
import TextArea from "./components/TextArea";
import SocilIcons from "./components/SocialMediaIcons";
import SpecialText from "./components/SpecialText";
import SvgIcon from "./components/SvgIcon";
import { UnderLinePath } from "./components/UnderLinePath";
library.add(fas);

const underLineColor = "#6E6EFF";

function App() {
  return (
    <div className="w-screen h-screen">
      <SpecialText
        text="test special text"
        txtTransform="capitalize"
        color={underLineColor}
        fontSize="xl"
        icon={
          <SvgIcon width={136} height={14}>
            <UnderLinePath color={underLineColor} />
          </SvgIcon>
        }
      />
      <form className="flex flex-col w-[650px] h-full p-[20px] justify-start items-center gap-3">
        <InputField
          placeholder="enter your name"
          classes={`w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none`}
        />
        <InputField
          placeholder="enter mobile"
          classes={`w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none`}
        />
        <InputField
          placeholder="enter email"
          classes={`w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none`}
        />
        <TextArea
          placeholder="leave your message"
          cols={20}
          rows={5}
          classes={`w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none`}
        />
        <Button
          label="test btn"
          icon={undefined}
          classes={`capitalize w-full text-white bg-mainColor px-[24px] py-[16px]`}
          handleClick={() => console.log("clicked")}
        />
      </form>
      <SocilIcons />
      <Button
        label={`get started`}
        icon={<FontAwesomeIcon icon="arrow-right" />}
        classes={`capitalize w-[300px] bg-white text-mainColor px-[24px] py-[16px] flex justify-center gap-3 items-center`}
        handleClick={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
