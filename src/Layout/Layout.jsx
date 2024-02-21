
import React from 'react'
import Home from '../pages/Home/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = (children) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
};

export default Layout;