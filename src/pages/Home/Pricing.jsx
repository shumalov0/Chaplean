import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PriceCard from "../../components/PriceCard";
import { Element } from "react-scroll";

let personalPrice = [
  {
    id: 1,
    status: "Free",
    price: 0,
    offers: [
      {
        id: 1,
        offer: "3 Chaplean Ai use",
      },
      {
        id: 2,
        offer: "Limitless reels ",
      },
      {
        id: 3,
        offer: "Advertisement",
      },
    ],
  },
  {
    id: 2,
    status: "Normal",
    price: 3,
    offers: [
      {
        id: 1,
        offer: "25 Chaplean Ai use",
      },
      {
        id: 2,
        offer: "Limitless reels ",
      },
      {
        id: 3,
        offer: "Advertisement",
      },
    ],
  },
  {
    id: 3,
    status: "Premium",
    price: 7,
    offers: [
      {
        id: 1,
        offer: "50 Chaplean Ai use",
      },
      {
        id: 2,
        offer: "Badge",
      },
      {
        id: 3,
        offer: "Limitless reels ",
      },
      {
        id: 4,
        offer: "No advertisement",
      },
      {
        id: 5,
        offer: "Autoreply ",
      },
    ],
  },
  {
    id: 4,
    status: "VIP",
    price: 10,
    offers: [
      {
        id: 1,
        offer: "150 Chaplean Ai use",
      },
      {
        id: 2,
        offer: "Limitless reels  ",
      },
      {
        id: 3,
        offer: "No advertisement",
      },
      {
        id: 4,
        offer: "Autoreply",
      },
      {
        id: 5,
        offer: "Customizable badge",
      },
      {
        id: 6,
        offer: "2 username",
      },
    ],
  },
];
let creatorPrice = [
  {
    id: 1,
    status: "Free",
    price: 0,
    offers: [
      {
        id: 1,
        offer: "10 AI use ",
      },
      {
        id: 2,
        offer: "Limitless reels ",
      },
      {
        id: 3,
        offer: "Advertisement",
      },
    ],
  },
  {
    id: 2,
    status: "Normal",
    price: 3,
    offers: [
      {
        id: 1,
        offer: "100 AI use",
      },
      {
        id: 2,
        offer: "Limitless reels ",
      },
      {
        id: 3,
        offer: "No Advertisement",
      },
    ],
  },
  {
    id: 3,
    status: "Premium",
    price: 7,
    offers: [
      {
        id: 1,
        offer: "Limitless AI use",
      },
      {
        id: 2,
        offer: "Limitless reels ",
      },
      {
        id: 3,
        offer: "No advertisement ",
      },

    ],
  }
];

const Pricing = () => {

  return (
    <Element name='3' className="bg-mainColor pt-10 pb-10">
      <div className="flex items-center justify-between px-5 ">
        <div className="w-[50%] borders  bg-grayColor "></div>
        <h2 className="text-[19px] md:text-[31px] OurDiff text-center px-3 max-w-[350px]  md:max-w-[250px] text-whiteColor w-full font-pop">
          Pricing
        </h2>
        <div className="w-[50%] borders bg-grayColor"></div>
      </div>
      <div  className="container mx-auto px-10">
        <Tabs className="flex flex-col items-center md:items-start pt-10">
          <div className="flex items-center justify-center w-full">
            <TabList className=" cursor-pointer bg-blueSecond max-w-[300px] rounded-[16px] flex items-center justify-center ">
              <Tab className=" rightSelect px-9 py-5 w-full font-pop text-[20px] font-semibold outline-none text-whiteColor">
                Personal
              </Tab>
              <Tab className=" leftSelect px-9 py-5 w-full font-pop text-[20px] font-semibold outline-none text-whiteColor">
                Creator
              </Tab>
            </TabList>
          </div>
          <TabPanel className="pt-10 mx-auto ">
            <div className="flex gap-8 flex-wrap items-center justify-center">
              {personalPrice.map((item, key) => (
                <PriceCard key={key} status={item.status} price={item.price} offers={item.offers} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className=" mx-auto ">
            <div className="flex gap-8 flex-wrap items-center justify-center">
              {creatorPrice.map((item, key) => (
                <PriceCard key={key} status={item.status} price={item.price} offers={item.offers} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </Element>
  );
};

export default Pricing;
