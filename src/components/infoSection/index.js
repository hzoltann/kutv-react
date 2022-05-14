import { Button } from "../ButtonElement";
import React from "react";
import {
  InfoContainer,
  Img,
  ImgWrap,
  InfoRow,
  InfoWrap,
  Column1,
  Column2,
  Heading,
  Subtitle,
  BtnWrap,
  TextWrap,
  TopLine,
} from "./InfoElements";

const InfoSection = ({
  lightText,
  id,
  imgStart,
  img,
  lightBg,
  darkText,
  buttonLabel,
  description,
  headLine,
  topLine,
  primary,
  dark,
  dark2,
  description2,
  description3,
  description4,
  showBtn,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrap>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrap>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <Subtitle darkText={darkText}>{description4}</Subtitle>

                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={600}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark ? 1 : 0}
                    showBtn={showBtn ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrap>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
