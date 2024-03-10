import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Select from "../../assets/icons/select.svg";


let creator = [
  {
    id: 1,
    offer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    offer: "Lorem ipsum dolor sit amet,",
  },
  {
    id: 3,
    offer: "Lorem ipsum dolor sit amet, consectetur .",
  },
  {
    id: 4,
    offer: "Lorem ipsum dolor sit amet, ",
  },
  {
    id: 5,
    offer: "Lorem ipsum dolor sit",
  },
];
let personal = [
  {
    id: 1,
    offer: "Lorem , consectetur adipiscing elit.",
  },
  {
    id: 2,
    offer: "Lorem ipsum dolor sit amet,",
  },
  {
    id: 3,
    offer: "Lorem ipsum dolor.",
  },
  {
    id: 4,
    offer: "Lorem ipsum dolor sit amet, ",
  },
  {
    id: 5,
    offer: "Lorem ipsum sit",
  },
];

const 
PersonalTabs = () => {

  return (
    <section className="bg-mainColor">
      <div className="container mx-auto px-10  ">
        <Tabs className="flex flex-col items-center md:items-start">
          <TabList className="cursor-pointer bg-blueSecond max-w-[300px] rounded-[16px] flex items-center justify-center">
            <Tab className="rightSelect px-9 py-5 w-full font-pop text-[20px] font-semibold outline-none text-whiteColor">
              Personal
            </Tab>
            <Tab className="leftSelect px-9 py-5 w-full font-pop text-[20px] font-semibold outline-none text-whiteColor">
              Creator
            </Tab>
          </TabList>

          <TabPanel>
            {personal.map((item, key) => (
              <div key={key} className="ListBox flex max-w-[290px] items-center gap-3 pt-5 ">
                <img src={Select} alt="selecticon" />
                <h4 className="font-pop text-[16px] text-whiteColor">{item.offer}</h4>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            {creator.map((item, key) => (
              <div key={key} className="ListBox max-w-[290px] flex items-center gap-3 pt-5 ">
                <img src={Select} alt="selecticon" />
                <h4 className="font-pop text-[16px] text-whiteColor">{item.offer}</h4>
              </div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default PersonalTabs;
