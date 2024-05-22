import React, { createContext, useState, useContext } from "react";

const NavbarContext = createContext();

export const useNavbar = () => {
  return useContext(NavbarContext);
};

export const NavbarProvider = ({ children }) => {
  const [navbarContent, setNavbarContent] = useState({
    heading: "Main Hall",
    waiters: "5 Waiters",
    tables: "10 Tables",
  });
  console.log(navbarContent);

  return (
    <NavbarContext.Provider value={{ navbarContent, setNavbarContent }}>
      {children}
    </NavbarContext.Provider>
  );
};
