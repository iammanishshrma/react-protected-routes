import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
