import { ReactNode, useRef, useState } from "react";
import SvgIcon from "./SvgIcon";
import SearchIconPath from "./icons/SearchIconPath";
import DivideLine from "./icons/DivideLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Globe from "./icons/Globe";
import { NavLink } from "react-router-dom";

function Navbar({ logo }: { logo: ReactNode }) {
  const searchTerm = useRef<HTMLInputElement>(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [langList, setLangList] = useState(false);
  const [lang, setLang] = useState("en");
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-black font-bold"
      : "text-black font-medium hover:font-bold transition-all";
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-[100px]">
      <div className="flex justify-start items-center gap-[61px]">
        <div className="w-[40px] h-[40px]">{logo}</div>
        <ul className="text-[14px] capitalize flex justify-start items-center gap-[32px]">
          <li id="home" role="button">
            <NavLink to="/" className={setActive}>
              home
            </NavLink>
          </li>
          <li id="about us">
            <NavLink to="/about-us" className={setActive}>
              about us
            </NavLink>
          </li>
          <li id="career">
            <NavLink to="/career" className={setActive}>
              career
            </NavLink>
          </li>
          <li id="blogs">
            <NavLink to="/blogs" className={setActive}>
              blogs
            </NavLink>
          </li>
          <li id="contact us">
            <NavLink to="/contact-us" className={setActive}>
              contact us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-start items-center gap-[16px]">
        <div
          className={`flex justify-center items-center gap-[16px] ${showSearchBar ? "border-b-2 border-lightGray" : ""}`}
        >
          <span role="button" onClick={() => setShowSearchBar(!showSearchBar)}>
            <SvgIcon width={20} height={20}>
              <SearchIconPath />
            </SvgIcon>
          </span>
          {showSearchBar && (
            <input
              type="text"
              placeholder="search here"
              ref={searchTerm}
              className={`p-1 outline-none capitalize text-xs transition-all ${showSearchBar ? "block" : "hidden"}`}
            />
          )}
        </div>
        <div className="">
          <SvgIcon width={5} height={25}>
            <DivideLine />
          </SvgIcon>
        </div>

        <div className="h-full relative">
          <div className="flex justify-start items-center gap-[8px]">
            <div>
              <SvgIcon width={20} height={20}>
                <Globe />
              </SvgIcon>
            </div>
            <div
              className="flex justify-start items-center gap-[8px] capitalize cursor-pointer"
              role="button"
              onClick={() => setLangList(!langList)}
            >
              <span>{lang}</span>
              <FontAwesomeIcon icon={"chevron-down"} />
            </div>
          </div>
          <ul
            className={`flex flex-col justify-center items-center gap-[8px] shadow-md p-0 absolute ${langList ? "flex" : "hidden"} transition-all`}
          >
            <p
              className={`hover:text-black py-[16px] px-[8px] border-b-2 border-lightGray capitalize ${lang == "en" ? "" : "text-lightGray"}`}
              role="button"
              onClick={() => {
                setLang("en");
                setLangList(!langList);
              }}
            >
              English
            </p>
            <p
              className={`hover:text-black py-[16px] px-[8px] border-b-2 border-lightGray capitalize ${lang == "ar" ? "" : "text-lightGray"}`}
              role="button"
              onClick={() => {
                setLang("ar");
                setLangList(!langList);
              }}
            >
              Arabic
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
