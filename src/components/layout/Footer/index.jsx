import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import SocialIcon from "../../ui/SocialIcon";

const Foot = styled.footer`
  border-top: 1px solid var(--gray-200);
  padding: 2.5rem 0;
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 640px) { padding: 0 1.25rem; flex-direction: column; text-align: center; }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const Name = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 400;
  color: var(--ink);
  letter-spacing: 0.02em;
`;

const Sub = styled.p`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gray-400);
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SOCIALS = [
  { href: "https://github.com/MaycomCosta", icon: FiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/maycomcosta/", icon: FiLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/maycomcosta_", icon: FiInstagram, label: "Instagram" },
];

const Footer = ({ t }) => (
  <Foot>
    <Inner>
      <Left>
        <Name>Maycom Lee Cordova da Costa</Name>
        <Sub>{t("footer.tagline")} — © {new Date().getFullYear()} — {t("footer.rights")}</Sub>
      </Left>
      <Right>
        {SOCIALS.map(s => <SocialIcon key={s.label} {...s} />)}
      </Right>
    </Inner>
  </Foot>
);

export default Footer;
