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
              <FooterLinkTitle>Szervezők</FooterLinkTitle>
              <FooterLink to="/">FSEGA</FooterLink>
              <FooterLink to="/">Universitatea Babeș-Bolyai</FooterLink>
              <FooterLink to="/">KŰTV</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              {" "}
              KŰTV
            </SocialLogo>

            <WebsiteRights>
              Készitette Hüvelyes Zoltán {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com/FSEGA" target="_blank">
                <FaFacebook />
              </SocialIconLink>
              {/* Tedd be a href eket ide kesobb */}
              <SocialIconLink
                href="//www.instagram.com/bbte.kozgaz/?hl=en"
                target="_blank"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com/ubbfsega?lang=en"
                target="_blank"
              >
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
