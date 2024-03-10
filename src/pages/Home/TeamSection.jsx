    import React, { useEffect } from "react";
    import Qiyas from '../../assets/picture/qiyaspicture.png';
    import emil from '../../assets/picture/emilPicture.png'
    import deafultt from '../../assets/picture/defaultpicture.png';
    import 'aos/dist/aos.css';
import AOS from 'aos';
    const TeamSection = () => {
      useEffect  (()=>{
        AOS.init();
      },[])
        let CompanyUse = [
            {
              id: 1,
              userName: "Qiyas Sadıqov",
              chefs:'Chief Executive Officer  ',
              img: Qiyas,

            },
            {
              id: 2,
              userName: "Emil Dostaliyev",
              chefs:'Chief Design Officer  ',
              img: emil,

            },
            {
              id: 3,
              userName: "Leyla Tağıyeva",
              chefs:'Project Manager ',
              img: deafultt,

            },
            {
              id: 4,
              userName: "Leyla Allahverdiyeva",
              chefs:'UX/UI Designer',
              img: deafultt,

            },
            {
              id: 5,
              userName: "Taleh Mirzəliyev",
              chefs:'Marketing Manager ',
              img: deafultt,

            }
          ];
    return (
        <section className=" bg-mainColor pt-10 ">
        <div className="flex items-center justify-between px-5  ">
            <div className="w-[50%] borders  bg-grayColor "></div>
            <h2 className="text-[19px] md:text-[31px] OurDiff text-center px-3 max-w-[350px]  md:max-w-[250px] text-whiteColor w-full font-pop">
            {" "}
            Team{" "}
            </h2>
            <div className="w-[50%] borders bg-grayColor"></div>
        </div>
        <div data-aos="zoom-in-up" className="container mx-auto">
        <div className="teamUsers flex items-center gap-8 flex-wrap justify-center  ">
            {
            CompanyUse.map((item,key)=>(

                <div key={key} className="teamBox flex flex-col items-center justify-center pt-10">
                    <div className="teamUserImg w-[144px] md:w-[200px]  bg-no-repeat  flex items-center justify-center ring-amber-200 ">
                      <img src={item.img} alt="img" className="w-full rounded-3xl" />
                    </div>
                    <div className="teamUserName">
                        <h3 className="text-[20px] md:text-[25px] font-pop text-whiteColor">{item.userName}</h3>
                    </div>
                    <div className="teamUserChiefs text-[16px] md:text-[18px] font-pop  text-grayColor">
                    {item.chefs}
                    </div>


                </div>
                ))
            }
        </div>
        </div>
        </section>
    );
    };

    export default TeamSection;
