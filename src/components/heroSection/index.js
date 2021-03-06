import React, { useState } from "react";
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
  HeroTimer,
  HeroTimerWrap,
} from "./HeroElements";
import Video from "../../video/bgVideo.mp4";
import { Button } from "../ButtonElement";
import Timer from "./Timer";
function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>XIV. KÖZÉPISKOLÁSOK ÜZLETI TANÁCSADÓ VERSENYE</HeroH1>
        <HeroP>Iratkozz fel egészen május 18.-ig</HeroP>
        <HeroBtnWrap>
          <Button
            to="signIn"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            showBtn={true}
          >
            Iratkozz fel {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrap>
      </HeroContent>
      <HeroTimerWrap>
        <HeroTimer>
          {/* Majus 30 ig 10 ora https://www.epochconverter.com/ */}
          <Timer countDownTimestampMs={1653904800000} />
        </HeroTimer>
      </HeroTimerWrap>
    </HeroContainer>
  );
}

export default HeroSection;
