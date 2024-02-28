import React from "react";
import Logo from "../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import topicon from '../assets/icons/top-icon.svg';
import DownloadButton from "./DownloadButton";

const Footer = () => {
  return (
    <footer className=" bg-blueSecond  py-8 px-8 ">
    <div className="  md:flex md:items-center md:justify-between ">
      <div className="left py-3">
        <div className="logo">
          <img src={Logo} alt="Company Logo" />
        </div>
        <div className="menu pt-3 ">
          <ul className="flex flex-col items-start gap-4  lg:gap-[24px]  text-whiteColor font-pop font-normal transition-all duration-500 ease-in ">
            <li>
              <Link to="1" className="text-13  lg:text-16">
                What is Chaplean
              </Link>
            </li>
            <li>
              <Link to="2" className="text-13  lg:text-16">
                Our difference
              </Link>
            </li>
            <li>
              <Link to="3" className="text-13  lg:text-16">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="4" className="text-13  lg:text-16">
                Contact us
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="right  ">
          <DownloadButton/>
         <div className="flex items-center gap-2 pt-3 ">
          <div className="flex items-center gap-1 py-[12px] md:py-[17px] px-[30px] md:px-[50px] rounded-full bg-mainColor max-w-[168.73px] md:max-w-[208.73px] justify-center ">
             <input className="  outline-0 text-16 font-pop  text-grayColor placeholder:text-grayColor bg-mainColor  max-w-[120px] flex items-center justify-center" placeholder="Subcribe"/>
             <img src={topicon} alt="ticon"/>
          </div>
             <p className="text-16 font-pop text-grayColor">To stay updated</p>
         </div>
      </div>
    </div>
    <p className=" text-center text-[10px] font-pop text-grayColor">Privacy & Policy - Cookies</p>
    </footer>
  );
};

export default Footer;
