import styled from "styled-components";

export const NewsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const NewsWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  overflow: hidden;
  /* transform: scale(1.2); */

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const NewsCard = styled.div`
  background-color: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  /* width: 100%; */
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  transition: all ease-in-out 0.2s;

  &:hover {
    transform: scale(1.03);
    transition: all ease-in-out 0.2s;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.8);
  }
`;

export const NewsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const NewsH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const NewsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
`;

export const NewsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #01fb71;
`;
