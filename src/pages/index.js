import React, { useState } from "react";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/infoSection/Data";
import NavBar from "../components/navbar";
import News from "../components/news";
import SideBar from "../components/sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <News />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;
