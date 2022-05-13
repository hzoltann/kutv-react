import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll/modules";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              {" "}
              Kutv1
            </SocialLogo>

            <WebsiteRights>KUTV (C) {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com" target="_blank">
                <FaFacebook />
              </SocialIconLink>
              {/* Tedd be a href eket ide kesobb */}
              <SocialIconLink target="_blank">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink target="_blank">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
