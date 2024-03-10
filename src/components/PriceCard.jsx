import React from "react";
import offer from "../assets/icons/select.svg";

const PriceCard = ({status,price,offers}) => {
  return (
    <div className="p-[32px] bg-blueSecond flex flex-col justify-between gap-3 min-h-[457px] px-11 rounded-[24px] " >
      <div className="price">
        <span className="text-[20px]  font-pop text-whiteColor">{status}</span>
        <h2 className="text-[31px] font-pop text-whiteColor" >{price}$</h2>
      </div>
      <div className="offer flex flex-col gap-5">
        {
        offers.map((item,key)=>(
          
        <div key={key} className="offerbox flex items-center gap-3">
        <img src={offer} alt="offericon" />
        <span className="text-[16px]  font-pop text-whiteColor">{item.offer}</span>
        </div>
          
          ))
        }
       


      </div>
      <button className="py-[12px] px-[32px] bg-mainColor  rounded-[8px] font-pop text-whiteColor hover:bg-blueColor focus:outline-none focus:ring-2 focus:blueColor focus:ring-opacity-50 transition-colors">Subscribe</button>
    </div>
  );
};

export default PriceCard;
