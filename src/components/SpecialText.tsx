import SvgIcon from "./SvgIcon";
import { UnderLinePath } from "./UnderLinePath";

function SpecialText({
  fontSize,
  color,
  txtTransform,

  text,
}: {
  fontSize: string;
  color: string;
  txtTransform: string;

  text: string;
}) {
  return (
    <div className="flex flex-col justify-start h-fit w-fit p-1 items-start gap-1">
      <p className={`${color} ${txtTransform} ${fontSize} font-bold`}>{text}</p>
      <SvgIcon height={14} width={"full"}>
        <UnderLinePath color={"#6E6EFF"} />
      </SvgIcon>
    </div>
  );
}

export default SpecialText;
