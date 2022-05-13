import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import NavBar from "../components/navbar";
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
    </>
  );
}

export default Home;
