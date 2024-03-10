import React, { useEffect } from "react";
import PartnerLogo from '../../assets/icons/text logo 1.svg'
import PartnerLogotwo from '../../assets/icons/logo 1.svg'
import downloadBtn from "../../assets/icons/download-icon.svg";
import Phoneppicture from '../../assets/picture/chaplean-phonepicture.png'
import { Element } from "react-scroll";

import './Home.css'
const Section1 = () => {

  return (
    <Element name='1' id="/5" className=" py-5 bg-mainColor px-10 " >
      <div className="container mx-auto flex items-center justify-between ">

      <div className="left flex flex-col gap-6 max-w-[803px]">
      <h1 className=" font-pop  text-[20px] md:text-[40px]  honeHead font-semibold  ">
      Melodies for moments, moments for you
      </h1>
      <p className="text-[12px] md:-[16px] max-w-[542px] text-grayColor">
        Don't just listen to music, feel it, make it a part of your life.Don't
        just listen to music, feel it, make it a part of your life.Don't just
        listen to music
      </p>
      <div className="divBtn">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 py-[12px] md:py-[17px] px-[30px] md:px-[50px] rounded-full bg-blueSecond ">
            <a>
              <img src={downloadBtn} alt="iconD" />
            </a>
            <span className="text-16 font-pop  text-grayColor">Download</span>
          </button>
          <p className="text-16 font-pop text-grayColor hidden md:block">Coming soon...</p>
        </div>
      </div>
      <div className="colobration  ">
        <h2 className="py-5 text-whiteColor font-pop text-center md:text-start ">Collaboration Partners</h2>
        <div className="partnerLogo flex justify-center md:justify-start   gap-6">
          <img src={PartnerLogo} alt="partner Logo" />
          <img src={PartnerLogotwo} alt="partner Logo 2" className=" bg-no-repeat bg-cover" />
        </div>
      </div>
      </div>
      <div className="right max-w-[255px] hidden md:flex" >
         <img src={Phoneppicture} alt="phonePicture" />
      </div>

      </div>

    </Element>
  );
};

export default Section1;
