import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signing">How it works</FooterLink>
              <FooterLink to="/signing">Testimonials</FooterLink>
              <FooterLink to="/signing">Careers</FooterLink>
              <FooterLink to="/signing">Investors</FooterLink>
              <FooterLink to="/signing">Terms of valami</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signing">How it works</FooterLink>
              <FooterLink to="/signing">Testimonials</FooterLink>
              <FooterLink to="/signing">Careers</FooterLink>
              <FooterLink to="/signing">Investors</FooterLink>
              <FooterLink to="/signing">Terms of valami</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signing">How it works</FooterLink>
              <FooterLink to="/signing">Testimonials</FooterLink>
              <FooterLink to="/signing">Careers</FooterLink>
              <FooterLink to="/signing">Investors</FooterLink>
              <FooterLink to="/signing">Terms of valami</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signing">How it works</FooterLink>
              <FooterLink to="/signing">Testimonials</FooterLink>
              <FooterLink to="/signing">Careers</FooterLink>
              <FooterLink to="/signing">Investors</FooterLink>
              <FooterLink to="/signing">Terms of valami</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
