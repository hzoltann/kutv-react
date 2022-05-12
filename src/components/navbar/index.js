import React from "react";
import { Nav, NavBarContainer, NavLogo } from "./NavBarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="#">KUTV</NavLogo>
          <h1>Alllllloo</h1>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
