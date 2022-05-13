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

import Icon1 from "../../img/car.svg";
import Icon2 from "../../img/car.svg";
import Icon3 from "../../img/car.svg";

const News = () => {
  return (
    <NewsContainer id="hirek">
      <NewsH1>Fo hirek</NewsH1>
      <NewsWrap>
        <NewsCard>
          <NewsIcon src={Icon1} />
          <NewsH2>Reduce Expenses</NewsH2>
          <NewsP>We help reduce your fees nad increaase stb.</NewsP>
        </NewsCard>
        <NewsCard>
          <NewsIcon src={Icon2} />
          <NewsH2>Reduce Expenses</NewsH2>
          <NewsP>We help reduce your fees nad increaase stb.</NewsP>
        </NewsCard>
        <NewsCard>
          <NewsIcon src={Icon3} />
          <NewsH2>Reduce Expenses</NewsH2>
          <NewsP>We help reduce your fees nad increaase stb.</NewsP>
        </NewsCard>
      </NewsWrap>
    </NewsContainer>
  );
};

export default News;
