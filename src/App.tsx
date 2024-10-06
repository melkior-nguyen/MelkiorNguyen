import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader, AppNavbar } from "./components";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  // const handleScrollToElement = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   const target = e.target as HTMLAnchorElement;
  //   const id = target.getAttribute("href")?.replace("#", "");
  //   const ele = document.getElementById(String(id));
  //   ele?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <Suspense fallback={<div className="bg-red-500">loading...</div>}>
      <div className=" flex flex-col justify-center items-center text-[#E4E6EB]">
        <AppHeader />
        <AppNavbar />
        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </Suspense>
  );
}

export default App;
