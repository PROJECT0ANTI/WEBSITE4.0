import React from "react";
import MyNavbar from "./NavbarSection/Navbar";
import CustomFooter from "./FooterSection/Footer";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <MyNavbar />
      <main className="app-content">
        {children}
      </main>
      <CustomFooter />
    </div>
  );
};

export default Layout;
