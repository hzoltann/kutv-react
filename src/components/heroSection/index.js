import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrap,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../video/bgVideo.mp4";
import { Button } from "bootstrap";

function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>XIV. KÖZÉPISKOLÁSOK ÜZLETI TANÁCSADÓ VERSENYE</HeroH1>
        <HeroP>
          Iratkozz fel lorem lorem lorem lorem asdmo lsda ipsum sum dolor amer
        </HeroP>
        <HeroBtnWrap>
          <Button to="signup">
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrap>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
