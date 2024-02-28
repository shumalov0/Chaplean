import React from "react";
import PartnerLogo from '../../assets/picture/logo 1.png'
import PartnerLogotwo from '../../assets/picture/text logo 1.png'
import downloadBtn from "../../assets/icons/download-icon.svg";
import Phoneppicture from '../../assets/picture/chaplean-phonepicture.png'
import './Home.css'
const Section1 = () => {
  return (
    <section className=" py-5 bg-mainColor px-10 " >
      <div className="container mx-auto flex items-center justify-between ">

      <div className="left flex flex-col gap-6 max-w-[803px]">
      <h1 className=" font-pop  text-[20px] md:text-[40px] lg:text-[30px] honeHead font-semibold  ">
        Don't just listen to music, feel it, make it a part of your life.
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
          <p className="text-16 font-pop text-grayColor">Coming soon...</p>
        </div>
      </div>
      <div className="colobration  ">
        <h2 className="py-5 text-whiteColor font-pop">Collaboration Partners</h2>
        <div className="partnerLogo flex items-center gap-6">
          <img src={PartnerLogotwo} alt="partner Logo 2" />
          <img src={PartnerLogo} alt="partner Logo" />
        </div>
      </div>
      </div>
      <div className="right max-w-[255px] hidden md:flex">
         <img src={Phoneppicture} alt="phonePicture" />
      </div>
      </div>

    </section>
  );
};

export default Section1;
