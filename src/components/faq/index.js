import React from "react";
import {
  NewsContainer,
  NewsCard,
  NewsH1,
  NewsH2,
  NewsIcon,
  NewsP,
  NewsWrap,
} from "./FaqElements";

const Faq = () => {
  return (
    <NewsContainer id="gyik">
      <NewsH1>Gyakori kérdések</NewsH1>
      <NewsWrap>
        <NewsCard>
          <NewsH2>Mikor kezdődik?</NewsH2>
          <NewsP>A verseny május 20.-án kezdődik</NewsP>
        </NewsCard>
        <NewsCard>
          <NewsH2>Jelentkezhetünk több mind 3 fővel egy csapatba?</NewsH2>
          <NewsP>3 fős csapatok jelentkezhetnek</NewsP>
        </NewsCard>
        <NewsCard>
          <NewsH2>Határidön kívűl még jelentkezhetünk?</NewsH2>
          <NewsP>Sajnos csak május 18.-ig lehet jelentkezni</NewsP>
        </NewsCard>
        <NewsCard>
          <NewsH2>Élőben van online fog zajlani a verseny</NewsH2>
          <NewsP>
            Idén <strong>online</strong> fog zajlani
          </NewsP>
        </NewsCard>
        <NewsCard>
          <NewsH2>Milyen feladatokkal fogunk találkozni?</NewsH2>
          <NewsP>
            A két első forduloban piackutatási problémákkal fogtok találkozni
          </NewsP>
        </NewsCard>
        <NewsCard>
          <NewsH2>Kik lesznek a zsűrik?</NewsH2>
          <NewsP>A lehető legjobb szakemberek</NewsP>
        </NewsCard>
      </NewsWrap>
    </NewsContainer>
  );
};

export default Faq;
