import facebook from "./../assets/facebook.svg";
import linkedin from "./../assets/linkedin.svg";
import twitter from "./../assets/twitter.svg";
import youtube from "./../assets/youtube.svg";
import instagram from "./../assets/instagram.svg";
function SocilIcons() {
  return (
    <div className="w-full flex justify-center gap-[16px]">
      <img src={facebook} width={40} height={40} className="" />
      <img src={twitter} width={40} height={40} />
      <img src={linkedin} width={40} height={40} />
      <img src={youtube} width={40} height={40} />
      <img src={instagram} width={40} height={40} />
    </div>
  );
}
export default SocilIcons;
