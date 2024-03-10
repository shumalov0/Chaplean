import React, { useEffect } from "react";

import Section1 from "./Section1";
import OurDifference from "./OurDifference";
import Statistics from "../../components/Statistics";
import TeamSection from "./TeamSection";
import ContactUs from "./ContactUs";
import MusicSection from "./MusicSection";
import PersonalTabs from "./PersonalTabs";
import Pricing from "./Pricing";
 // You can also use <link> for styles
// ..


const Home = () => {

  return (

    <div>
      <Section1  />
      <MusicSection />
      <PersonalTabs />
      <OurDifference />
      <Statistics />
      <Pricing />
      <TeamSection />
      <ContactUs />
    </div>
  );
};

export default Home;
