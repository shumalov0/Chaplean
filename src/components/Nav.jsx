import React, { useRef, useState, useEffect } from "react";
import Logo from "../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import closeNavBar from "../assets/icons/closeNavvar.svg";
import openNavBar from "../assets/icons/openNavbar.svg";
import "./Nav.css"; // Import CSS file for styling

const Nav = () => {
  const navRef = useRef();
  const buttonRef = useRef();
  const [closeButton, setOpenButton] = useState(false);

  useEffect(() => {
    // Add event listener to handle clicks outside navbar and button
    const handleClickOutside = (e) => {
      if (
        !navRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpenButton(false);
      }
    };

    // Add event listener for clicks outside the navbar and button
    window.addEventListener("click", handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array to run effect only once

  useEffect(() => {
    // Add or remove class to body based on closeButton state
    if (closeButton) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [closeButton]); // Run effect whenever closeButton state changes

  return (
    <div className="realtive transition-all duration-500 ease-in">
      <div className=" shadow-md w-full fixed top-0 left-0 z-50  bg-blueSecond h-16 flex items-center px-5 justify-between transition-all duration-500 ease-in">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="Menu hidden md:block transition-all duration-500 ease-in">
          <ul className="flex items-center gap-2 lg:gap-5  text-whiteColor font-pop font-normal ">
            <li>
              <Link to="1" className="text-13  lg:text-16 ">
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
                What is Chaplean
              </Link>
            </li>
            <li>
              <Link
                to="5"
                className="text-13 lg:text-16 px-[24px] py-[7px] bg-blueColor rounded-full text-mainColor"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <button
          ref={buttonRef}
          className="md:hidden  "
          onClick={() => setOpenButton(!closeButton)}
        >
          {closeButton ? (
            <img ref={navRef} src={closeNavBar} />
          ) : (
            <img ref={navRef} src={openNavBar} />
          )}
        </button>
      </div>
      <div
        ref={buttonRef}
        className={`mobile md:hidden bg-blueSecond py-5 fixed w-full`}
        style={{
          top: !closeButton ? "-500px" : "0", // Adjust top position based on closeButton state
          transition: "top 0.5s ease", // Add transition inline for smooth animation
        }}
      >
        <ul className="flex flex-col items-center gap-2  lg:gap-[24px]  text-whiteColor font-pop font-normal transition-all duration-500 ease-in mt-12">
          <li>
            <Link
              to="1"
              className="text-13  lg:text-16"
              onClick={() => setOpenButton(false)}
            >
              What is Chaplean
            </Link>
          </li>
          <li>
            <Link
              to="2"
              className="text-13  lg:text-16"
              onClick={() => setOpenButton(false)}
            >
              Our difference
            </Link>
          </li>
          <li>
            <Link
              to="3"
              className="text-13  lg:text-16"
              onClick={() => setOpenButton(false)}
            >
              Pricing
            </Link>
          </li>
          <li></li>
          <li>
            <Link
              to="5"
              className="text-13 lg:text-16 px-[24px] py-[7px] bg-blueColor rounded-full text-mainColor"
              onClick={() => setOpenButton(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
