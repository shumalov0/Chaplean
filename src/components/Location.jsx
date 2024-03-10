import React from "react";
import LocationImg from "../assets/icons/location-icon.svg";
import MailImg from "../assets/icons/mail-icon.svg";
import phoneImg from "../assets/icons/phone-icon.svg";
import Instagram from '../assets/icons/instagram-icon.svg';
import faceBook from '../assets/icons/facebook-icon.svg';
import Tiktok from '../assets/icons/tiktok-icon.svg';
import Tiwiter from '../assets/icons/x-twitter-icon.svg';
import { Link } from "react-router-dom";
const Location = () => {
  return (
    <div className=" flex flex-col items-center sm:items-start gap-10 ">
      <h3 className="contactHead w-[250px] md:w-[340px] flex bg-blueSecond py-[12px] px-[32px] rounded-[16px] text-[25px] md:text-[31px] font-pop text-whiteColor mb-5" >Contact Us</h3>
      <div className="contactInfo flex flex-col gap-6 ps-2 md:ps-5">
        <div className="infoBox flex items-center gap-3">
          <div className="iconImg">
            <img src={MailImg} alt="mailicon" />
          </div>
          <span className="iconText text-whiteColor font-pop ">info@chaplean.net</span>
        </div>
        <div className="infoBox flex items-center gap-3">
          <div className="iconImg">
            <img src={phoneImg} alt="Phoneicon" />
          </div>
          <span className="iconText text-whiteColor font-pop">+99499 123 45 67</span>
        </div>
        <div className="infoBox flex items-center gap-3">
          <div className="iconImg">
            <img src={LocationImg} alt="mailicon" />
          </div>
          <span className="iconText text-whiteColor font-pop">Baku, Azerbaijan</span>
        </div>
      </div>
      <div className="socialIcons flex items-center gap-4 " >
        <Link className='Icon'>
            <img src={Instagram} alt="instagram" />
        </Link>
        <Link className='Icon'>
            <img src={faceBook} alt="instagram" />
        </Link>
        <Link className='Icon'>
            <img src={Tiktok} alt="instagram" />
        </Link>
        <Link className='Icon'>
            <img src={Tiwiter} alt="instagram" />
        </Link>
      </div>

    </div>
  );
};

export default Location;
