import Partner_1 from "./Logos/Partner_1";
import Partner_2 from "./Logos/Partner_2";
import Partner_3 from "./Logos/Partner_3";
import Partner_4 from "./Logos/Partner_4";
import Partner_5 from "./Logos/Partner_5";
import SvgIcon from "./SvgIcon";
const logoBg = "#6E6EFF";
function Sponsors() {
  return (
    <div className="min-h-[285px] flex flex-col justify-center items-center gap-[40px] bg-white shadow-md w-[90%]  text-darkPurple absolute top-[-122px] left-[80px]">
      <h3 className="text-lg font-bold capitalize w-fit mx-auto">
        our sponsors and parnters
      </h3>
      <ul className="flex justify-center items-center gap-[30px] opacity-[70%]">
        <SvgIcon width={172} height={34}>
          <Partner_1 color={logoBg} />
        </SvgIcon>
        <SvgIcon width={172} height={34}>
          <Partner_2 color={logoBg} />
        </SvgIcon>
        <SvgIcon width={172} height={34}>
          <Partner_3 color={logoBg} />
        </SvgIcon>
        <SvgIcon width={172} height={34}>
          <Partner_4 color={logoBg} />
        </SvgIcon>
        <SvgIcon width={172} height={34}>
          <Partner_5 color={logoBg} />
        </SvgIcon>
      </ul>
    </div>
  );
}

export default Sponsors;
