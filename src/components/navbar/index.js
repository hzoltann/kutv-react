import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  HamburgerIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="#">KUTV</NavLogo>
          <HamburgerIcon>
            <FaBars />
          </HamburgerIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="versenyszabaly">Versenyszabaly</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="hirek">Hirek</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gyik">GYIK</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="feliratkozas">Feliratkozas</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
