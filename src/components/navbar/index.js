import React, { useEffect, useState } from "react";
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

import { animateScroll as scroll } from "react-scroll/modules";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            KUTV
          </NavLogo>
          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="versenyszabaly"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Versenyszabaly
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="hirek"
                smooth={true}
                duration={600}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Hirek
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="gyik">GYIK</NavLinks>
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
