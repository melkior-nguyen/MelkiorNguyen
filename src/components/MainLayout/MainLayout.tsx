import React from "react";
import { darkBg } from "../../assets/exportImg";
import { ParentComponentProps } from "../../types";

const MainLayout: React.FC<ParentComponentProps> = ({ children }) => {
  return (
    <main
      className="w-full h-screen flex"
      style={{
        background: `url(${darkBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </main>
  );
};

export default MainLayout;
