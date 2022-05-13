import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarRoute,
  SideBarWrap,
  SideBtnWrap,
  SideBarMenu,
} from "./SideBarElements";

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrap>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="versenyszabaly" onClick={toggle}>
            Versenyszabaly
          </SideBarLink>
          <SideBarLink to="hirek" onClick={toggle}>
            Hirek
          </SideBarLink>
          <SideBarLink to="gyik" onClick={toggle}>
            GYIK
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="./signin" onClick={toggle}>
            Iratkozz Fel
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrap>
    </SideBarContainer>
  );
}

export default SideBar;
