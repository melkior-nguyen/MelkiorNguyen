import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React, { Suspense } from "react";
import AppLoader from "../components/AppLoader/AppLoader";

const loadAble = ({ factory, fallback, ...rest }: any) => {
  const LazyComponent = React.lazy(factory);
  return () => (
    <Suspense fallback={fallback ?? <AppLoader />}>
      <LazyComponent {...rest} />
    </Suspense>
  );
};

export const LazyHome = loadAble({
  factory: () =>
    import("../pages").then((module) => ({ default: module.Home })),
});

export const LazyProjects = loadAble({
  factory: () =>
    import("../pages").then((module) => ({ default: module.Projects })),
});

export const LazyAbout = loadAble({
  factory: () =>
    import("../pages").then((module) => ({ default: module.About })),
});

export const LazyContact = loadAble({
  factory: () =>
    import("../pages").then((module) => ({ default: module.Contact })),
});

export const LazySkills = loadAble({
  factory: () =>
    import("../pages").then((module) => ({ default: module.Skills })),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>error...</div>,
    children: [
      {
        path: "/",
        element: <LazyHome />,
      },
      {
        path: "/projects",
        element: <LazyProjects />,
      },
      {
        path: "/skills",
        element: <LazySkills />,
      },
      {
        path: "/about",
        element: <LazyAbout />,
      },
      {
        path: "/contact",
        element: <LazyContact />,
      },
    ],
  },
]);

export default router;
