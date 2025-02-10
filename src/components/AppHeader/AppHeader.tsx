import { NavLink, useNavigate } from "react-router-dom";
import DarkLogoIcon from "../../SVGs/DarkLogoIcon";
import { CallMadeIcon, GithubIcon, InstagramIcon } from "../../SVGs";
import { motion } from "framer-motion";
import "./style.css";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";
import { useCallback, useMemo } from "react";

const AppHeader = () => {
  const navigate = useNavigate();
  const { isIntroShowed } = useGlobalContext();

  const socialList = useMemo(
    () => [
      {
        link: "https://github.com/melkior-nguyen",
        icon: <GithubIcon />,
      },
      {
        link: "https://www.instagram.com/melkior_nguyen/",
        icon: <InstagramIcon />,
      },
    ],
    []
  );

  const handleVariant = useCallback((position: "left" | "right") => {
    const headerVariant = {
      hidden: { x: position === "left" ? "-200%" : "200%", opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
        },
      },
    };
    return headerVariant;
  }, []);

  if (!isIntroShowed) return null;

  return (
    <header className="w-full max-w-screen-2xl flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2 py-4 px-16 z-10">
      <motion.div
        variants={handleVariant("right")}
        initial="hidden"
        animate="show"
      >
        <NavLink to="/">
          <DarkLogoIcon />
        </NavLink>
      </motion.div>
      <motion.nav
        className="flex gap-3 items-center"
        variants={handleVariant("left")}
        initial="hidden"
        animate="show"
      >
        {socialList.map((social, i) => (
          <a
            key={i}
            className="text-appGray hover:text-appGrayFocus transition-all cursor-pointer w-6 h-6"
            href={social.link}
            target="blank"
          >
            {social.icon}
          </a>
        ))}
        <button
          className="getInTouchButton text-lg text-appGray hover:text-appGrayFocus"
          onClick={() => {
            navigate("/contact");
          }}
        >
          <div className="dots_border"></div>
          <span className="text_button whitespace-nowrap text-sm sm:text-[13px]">
            Get In Touch
            <div className=" w-4 h-4">
              <CallMadeIcon />
            </div>
          </span>
        </button>
      </motion.nav>
    </header>
  );
};

export default AppHeader;
