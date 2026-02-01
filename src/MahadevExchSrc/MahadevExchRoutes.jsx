import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppLayout from "./components/AppLayout.jsx/AppLayout";

const loadable = (importFn, { fallback = <>Loading...</> } = {}) => {
  const Lazy = lazy(importFn);
  Lazy.preload = importFn;

  const Element = (props) => (
    <Suspense fallback={fallback}>
      <Lazy {...props} />
    </Suspense>
  );

  return { Lazy, Element };
};

// LAZY PAGES
const Home = loadable(() => import("./pages/Home/Home"));
const GameLobby = loadable(() => import("./pages/GameLobby/GameLobby"));
const InPlay = loadable(() => import("./pages/InPlay/InPlay"));
const Cricket = loadable(() => import("./pages/Cricket/Cricket"));
const Tennis = loadable(() => import("./pages/Tennis/Tennis")); 
const Soccer = loadable(() => import("./pages/Soccer/Soccer")); 
const UserLogin = loadable(() => import("./pages/UserLogin/UserLogin")); 

export const MahadevExchRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home.Element />,
      },
      {
        path: "lobby",
        element: <GameLobby.Element />,
      },
      {
        path: "in-play",
        element: <InPlay.Element />,
      },
      {
        path: "cricket",
        element: <Cricket.Element />,
      },
      {
        path: "tennis",
        element: <Tennis.Element />, 
      },
      {
        path: "soccer",
        element: <Soccer.Element />, 
      },
      {
        path: "userLogin",
        element: <UserLogin.Element />, 
      },
    ],
  },
]);
