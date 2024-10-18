import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader, AppNavbar } from "./components";
import MainLayout from "./components/MainLayout/MainLayout";
import { GlobalContext } from "./Global/GlobalContext/GlobalContext";

function App() {
  const [isIntroShowed, setIsIntroShowed] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ isIntroShowed, setIsIntroShowed }}>
      <Suspense fallback={<div className="bg-red-500">loading...</div>}>
        <div className=" flex flex-col justify-center items-center text-[#E4E6EB]">
          <AppHeader />
          <AppNavbar />
          <MainLayout>
            <Outlet />
          </MainLayout>
        </div>
      </Suspense>
    </GlobalContext.Provider>
  );
}

export default App;

// const handleScrollToElement = (e: React.SyntheticEvent) => {
//   e.preventDefault();
//   const target = e.target as HTMLAnchorElement;
//   const id = target.getAttribute("href")?.replace("#", "");
//   const ele = document.getElementById(String(id));
//   ele?.scrollIntoView({ behavior: "smooth" });
// };
