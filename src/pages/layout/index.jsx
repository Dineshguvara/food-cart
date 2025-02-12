import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sideBar/index";

const Layout = () => {
  return (
    <>
        <Sidebar>
          <Outlet />
        </Sidebar>
    </>
  );
};
 
export default Layout;
