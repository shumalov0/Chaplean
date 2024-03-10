import React from "react";
import CountUp from "react-countup";
const Statistics = () => {
  let staticProduct = [
    {
      id: 1,
      title: "User",
      number:100,
      numicon: "K",
    },
    {
      id: 2,
      title: "Rating",
      number: 4.8,
      numicon: "",
    },
    {
      id: 3,
      title: "Music",
      number: 4350,
      numicon: "+",
    },
    {
      id: 4,
      title: "Partnership",
      number: 3,
      numicon: "+",
    },
  ];

  return (
    <>
      <section className="bg-mainColor pt-10 pb-10">
        <div className="flex items-center justify-between px-5 ">
          <div className="w-[50%] borders  bg-grayColor "></div>
          <h2 className="text-[19px] md:text-[31px] OurDiff text-center px-3 max-w-[350px]  md:max-w-[250px] text-whiteColor w-full font-pop">
            Statistics
          </h2>
          <div className="w-[50%] borders bg-grayColor"></div>
        </div>
        <div className="container mx-auto flex flex-wrap mt-10 items-center  justify-around  ">
            {staticProduct.map((item,key)=>(
          <div className="countBox flex flex-col items-center " key={key}>  
            <div className="count font-pop text-[40px] md:text-[61px] font-semibold text-whiteColor">
            <CountUp enableScrollSpy duration={4} end={item.number} /> <span>{item.numicon}</span> 
            </div>
            <div className="countBottom font-pop text-[15px] md:text-[25px] text-whiteColor font-light">
              {item.title}
            </div>
          </div>
                ))}
        </div>
      </section>
    </>
  );
};

export default Statistics;
