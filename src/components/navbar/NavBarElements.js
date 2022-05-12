import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
// import {Link as LinkScroll} from "react-scroll"

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 80px;
  /* margin-top: -80px; */

  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and(max-width:960px) {
    transition: all ease-in-out 0.6s;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  cursor: pointer;
  color: #fff;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
