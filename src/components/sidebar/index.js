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

function SideBar() {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrap>
        <SideBarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="versenyszabaly">Versenyszabaly</SideBarLink>
          <SideBarLink to="hirek">Hirek</SideBarLink>
          <SideBarLink to="gyik">GYIK</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="./signin">Iratkozz Fel</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrap>
    </SideBarContainer>
  );
}

export default SideBar;
