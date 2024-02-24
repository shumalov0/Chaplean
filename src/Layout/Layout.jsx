import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Router from "../router/Router";

const Layout = (children) => {
  return (
    <>
      <Header />
      <Router>{children}</Router>
      <Footer />
    </>
  );
};

export default Layout;
