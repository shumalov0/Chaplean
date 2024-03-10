import React, { useEffect } from "react";
import iconOne from "../../assets/icons/oneOurDiffrence.svg";
import iconTwo from "../../assets/icons/twoOurDiffrence.svg";
import iconThree from "../../assets/icons/threeOurDifreence.svg";
import iconFour from "../../assets/icons/fourOurDiffrence.svg";
import { Element } from "react-scroll";


const OurDifference = () => {

  return (
    <>
      <Element name="2" className=" bg-mainColor pt-10 ">
        <div className="flex items-center justify-between px-5 ">
          <div className="w-[50%] borders  bg-grayColor "></div>
          <h2 className="text-[19px] md:text-[31px] OurDiff text-center px-3 max-w-[350px]  md:max-w-[250px] text-whiteColor w-full font-pop ">Our difference</h2>
          <div className="w-[50%] borders bg-grayColor"></div>
        </div>
        <div  className="container mx-auto px-10 flex flex-col lg:flex-row justify-center md:justify-between gap-0  py-10 ">
            <div className="top flex   items-center flex-col gap-10 py-5 justify-between ">
            <div className="box  flex max-w-[300px] md:max-w-[500px] justify-between gap-5 ">
                <div className="img mt-2 flex items-center justify-center h-[70px] md:h-[100px] w-[70px] md:w-[100px] bg-blueColor rounded-full">
                    <img className="w-[50%] md:w-auto " src={iconOne} alt="iconpicture" />
                </div>
                <div className="text max-w-[150px]  md:max-w-[350px] ">
                    <h2 className="text-[18px] md:text-[31px] font-pop text-whiteColor "> Music Reel</h2>
                    <p className=" text-[10px] md:text-[16px] text-grayColor font-pop pt-0 md:pt-2">You can create 30-second music videos, watch, like, comment, share on or off the platform and save these short videos to your playlists.</p>
                </div>
            </div>
            <div className="box  flex max-w-[300px] md:max-w-[500px] justify-between gap-5 ">
                <div className="img mt-2 flex items-center justify-center h-[70px] md:h-[100px] w-[70px] md:w-[100px] bg-blueColor rounded-full">
                    <img className="w-[50%] md:w-auto " src={iconTwo} alt="iconpicture" />
                </div>
                <div className="text max-w-[150px]  md:max-w-[350px] ">
                    <h2 className="text-[18px] md:text-[31px] font-pop text-whiteColor "> Social Media</h2>
                    <p className=" text-[10px] md:text-[16px] text-grayColor font-pop pt-0 md:pt-2">A feature that lets you listen to music while texting with friends and acquaintances, so you can share the same moment even when you're not together.</p>
                </div>
            </div>
            </div>
            <div className="bottom flex items-center flex-col  gap-10  py-5 justify-between ">
            <div className="box  flex max-w-[300px] md:max-w-[500px] justify-between gap-5 ">
                <div className="img mt-2 flex items-center justify-center h-[70px] md:h-[100px] w-[70px] md:w-[100px] bg-blueColor rounded-full">
                    <img className="w-[50%] md:w-auto " src={iconThree} alt="iconpicture" />
                </div>
                <div className="text max-w-[155px]  md:max-w-[350px] ">
                    <h2 className="text-[18px] md:text-[31px] font-pop text-whiteColor "> Discovering New Music with AI</h2>
                    <p className="  text-[10px] md:text-[16px] text-grayColor font-pop pt-0 md:pt-2">A chatbot powered by advanced artificial intelligence that can understand your current emotions and status through messaging and recommend music that suits you and your mood</p>
                </div>
            </div>
            <div className="box  flex max-w-[300px] md:max-w-[500px] justify-between gap-5 ">
                <div className="img mt-2 flex items-center justify-center h-[70px] md:h-[100px] w-[70px] md:w-[100px] bg-blueColor rounded-full">
                    <img className="w-[50%] md:w-auto " src={iconFour} alt="iconpicture" />
                </div>
                <div className="text max-w-[150px]  md:max-w-[350px] ">
                    <h2 className="text-[18px] md:text-[31px] font-pop text-whiteColor "> Lorem ipsum dolor 
sit amet.</h2>
                    <p className=" text-[10px] md:text-[16px] text-grayColor font-pop pt-0 md:pt-2">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque .</p>
                </div>
            </div>
            </div>
        </div>
      </Element>
    </>
  );
};

export default OurDifference;
