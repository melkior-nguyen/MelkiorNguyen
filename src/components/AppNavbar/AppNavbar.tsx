import { NavLink } from "react-router-dom";

import { AiFillMessage } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { FaHome, FaUser } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

import AppTooltip from "../AppTooltip/AppTooltip";

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
const AppNavbar = () => {
  return (
    <nav
      className="fixed top-1/2 left-8 -translate-y-1/2 flex flex-col justify-center 
      border border-appGrayFocus p-4 py-8 gap-6 rounded-full shadow-app"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      {navLinks.map((navLink, i) => (
        <NavLink
          to={navLink.to}
          className="text-appGray hover:text-appGrayFocus transition-all"
          key={i}
        >
          <AppTooltip tooltip={navLink.label}>{navLink.icon}</AppTooltip>
        </NavLink>
      ))}
    </nav>
  );
};

export default AppNavbar;
