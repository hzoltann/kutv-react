import { Button } from "react-scroll";
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

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrap>
          <InfoRow>
            <Column1>
              <TextWrap>
                <TopLine>Topline</TopLine>
                <Heading>Headnig</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home"></Button>
                </BtnWrap>
              </TextWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrap>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
