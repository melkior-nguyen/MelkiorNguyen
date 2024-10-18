import { NavLink } from "react-router-dom";

import { AiFillMessage } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { FaHome, FaUser } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

import AppTooltip from "../AppTooltip/AppTooltip";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";

const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: <FaHome className="w-6 h-6" />,
  },
  {
    to: "/about",
    label: "Bio",
    icon: <FaUser className="w-6 h-6" />,
  },
  {
    to: "/projects",
    label: "Porfolio",
    icon: <BsStack className="w-6 h-6" />,
  },
  {
    to: "/skills",
    label: "Services",
    icon: <GrTechnology className="w-6 h-6" />,
  },
  {
    to: "/contact",
    label: "Contact",
    icon: <AiFillMessage className="w-6 h-6" />,
  },
];

const parentVariant = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: "-50%",
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 150,
    },
  },
};
const childVariant = {
  hidden: { opacity: 0, scale: 4 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25 },
  },
};
const AppNavbar = () => {
  const { isIntroShowed } = useGlobalContext();
  return (
    <>
      {isIntroShowed && (
        <motion.nav
          variants={parentVariant}
          initial="hidden"
          animate="show"
          className="fixed top-1/2 left-8 -translate-y-1/2 flex flex-col justify-center 
      border border-appGrayFocus p-4 py-8 gap-6 rounded-full shadow-app"
          style={{
            background: "rgba(255,255,255,0.01)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {navLinks.map((navLink, i) => (
            <NavLink
              to={navLink.to}
              className="text-appGray hover:text-appGrayFocus transition-all"
              key={i}
            >
              <motion.div variants={childVariant}>
                <AppTooltip tooltip={navLink.label}>{navLink.icon}</AppTooltip>
              </motion.div>
            </NavLink>
          ))}
        </motion.nav>
      )}
    </>
  );
};

export default AppNavbar;
