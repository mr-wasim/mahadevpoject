import React from "react";
import SecondaryNav from "../components/SecondaryNav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <SecondaryNav />
      <Outlet />
    </>
  );
};

export default MainLayout;
