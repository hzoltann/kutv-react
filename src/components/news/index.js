import React from "react";
import {
  NewsContainer,
  NewsCard,
  NewsH1,
  NewsH2,
  NewsIcon,
  NewsP,
  NewsWrap,
} from "./NewsElements";

import Icon1 from "../../img/congrat.svg";
import Icon2 from "../../img/deadline.svg";
import Icon3 from "../../img/fordulo.svg";

const News = () => {
  return (
    <NewsContainer id="hirek">
      <NewsH1>Fő hírek</NewsH1>
      <NewsWrap>
        <NewsCard>
          <NewsIcon src={Icon1} />
          <NewsH2>Továbjutott csapatok</NewsH2>
          <NewsP>
            20 csapat jutott tovább a döntőbe 2021-ben <br /> Gratulálunk!
          </NewsP>
        </NewsCard>
        <NewsCard>
          <NewsIcon src={Icon2} />
          <NewsH2>Jelentkezési határidő</NewsH2>
          <NewsP>Jelentkezz minnél hamarabb egészen május 18.-ig</NewsP>
        </NewsCard>
        <NewsCard>
          <NewsIcon src={Icon3} />
          <NewsH2>Fordulok száma</NewsH2>
          <NewsP>
            Idén a verseny nem a megszokott 3 fordulóból hanem 4-ből fog állni
          </NewsP>
        </NewsCard>
      </NewsWrap>
    </NewsContainer>
  );
};

export default News;
