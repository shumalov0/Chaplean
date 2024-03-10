import React, { useEffect } from "react";
import Location from "../../components/Location";
import FormComponent from "../../components/Form";
import { Element } from "react-scroll";
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactUs = () => {
  useEffect  (()=>{
    AOS.init();
  },[])
  return (
    <>
      <Element name='4' className="  pt-10   bg-mainColor pb-10 ">
        <div className="container mx-auto px-5 flex flex-col md:flex-row md:justify-beetween md:items-center justify-between flex-wrap  gap-10">
          <div  data-aos="fade-down-right" className="Location">
            <Location />
          </div>
          <div data-aos="fade-down-left" className="Form">
            <FormComponent/>
          </div>

        </div>
      </Element>
    </>
  );
};

export default ContactUs;
