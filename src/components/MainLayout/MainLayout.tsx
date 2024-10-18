import React from "react";
import { darkBg } from "../../assets/exportImg";
import { ParentComponentProps } from "../../types";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";

const MainLayout: React.FC<ParentComponentProps> = ({ children }) => {
  const { isIntroShowed } = useGlobalContext();
  console.log(isIntroShowed)
  return (
    <main
      className="w-full h-screen flex"
      style={{
        backgroundColor: !isIntroShowed ? "#000000" : "transparent",
        backgroundImage: isIntroShowed ? `url(${darkBg})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </main>
  );
};

export default MainLayout;
