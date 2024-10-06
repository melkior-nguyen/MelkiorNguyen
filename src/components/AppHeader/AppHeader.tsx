import { NavLink } from "react-router-dom";
import DarkLogoIcon from "../../SVGs/DarkLogoIcon";
import { CallMadeIcon, GithubIcon, InstagramIcon } from "../../SVGs";
import "./style.css";

const AppHeader = () => {
  return (
    <header className="w-full max-w-screen-2xl flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2 py-4 px-16 z-10">
      <NavLink to="/">
        <DarkLogoIcon />
      </NavLink>
      <nav className="flex gap-3 items-center">
        <a
          className="text-appGray hover:text-appGrayFocus transition-all cursor-pointer w-6 h-6"
          href="https://github.com/melkior-nguyen"
          target="blank"
        >
          <GithubIcon />
        </a>
        <a
          className="text-appGray hover:text-appGrayFocus transition-all cursor-pointer w-6 h-6"
          href="https://www.instagram.com/melkior_nguyen/"
          target="blank"
        >
          <InstagramIcon />
        </a>
        <button className="getInTouchButton text-lg text-appGray hover:text-appGrayFocus">
          <div className="dots_border"></div>
          <span className="text_button">
            Get In Touch
            <div className=" w-4 h-4">
              <CallMadeIcon />
            </div>
          </span>
        </button>
      </nav>
    </header>
  );
};

export default AppHeader;
