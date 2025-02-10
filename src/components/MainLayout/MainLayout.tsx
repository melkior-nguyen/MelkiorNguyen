import React from "react";
import { darkBg } from "../../assets/exportImg";
import { ParentComponentProps } from "../../types";
import { useGlobalContext } from "../../Global/GlobalContext/GlobalContext";

const MainLayout: React.FC<ParentComponentProps> = ({ children }) => {
  const { isIntroShowed } = useGlobalContext();
  console.log(isIntroShowed)
  return (
    <main
      className="w-full h-screen flex justify-center items-center p-[68px]"
      style={{
        // backgroundColor: !isIntroShowed ? "#212121" : "transparent",
        // backgroundImage: isIntroShowed ? `url(${darkBg})` : "none",
        backgroundImage: `url(${darkBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </main>
  );
};

export default MainLayout;
