import React from "react";
import styled from "styled-components";
import { FiArrowDown } from "react-icons/fi";
import { scrollTo } from "../../../utils/scroll";

const Wrap = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  background: var(--white);
  padding-top: 72px;
  position: relative;
  overflow: hidden;
`;

const ToneBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 38%;
  height: 100%;
  background: var(--warm);
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
    top: auto;
    bottom: 0;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  position: relative;
  z-index: 1;
  gap: 4rem;

  @media (max-width: 1024px) { padding: 0 2rem; gap: 2rem; }
  @media (max-width: 768px) {
    padding: 3rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray-400);
`;

const LabelLine = styled.span`
  flex: 1;
  height: 1px;
  background: var(--gray-200);
  max-width: 80px;
`;

const AvailDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4CAF50;
  display: inline-block;
  margin-right: 0.4rem;
`;

const Heading = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: var(--ink);

  .big {
    font-size: clamp(5rem, 12vw, 10rem);
    display: block;
  }
  .italic {
    font-size: clamp(4rem, 9vw, 7.5rem);
    font-style: italic;
    color: var(--gray-300);
    display: block;
  }
  .sub {
    font-size: clamp(2.5rem, 6vw, 5rem);
    display: block;
    font-weight: 700;
  }
`;

const Tagline = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: var(--gray-500);
  max-width: 400px;
  line-height: 1.7;
  letter-spacing: 0.01em;
`;

const CtaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const CtaBtn = styled.button`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--white);
  background: var(--ink);
  border: none;
  padding: 1rem 2.5rem;
  transition: background 0.25s ease, transform 0.2s ease;

  &:hover { background: var(--gray-600); transform: translateY(-1px); }
`;

const CtaText = styled.button`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gray-400);
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s;

  &:hover { color: var(--ink); }
`;

const Right = styled.div`
  width: 36%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2rem;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const LocationLabel = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray-400);
`;

const LocationValue = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--gray-600);
  font-style: italic;
`;

const IndexNum = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  color: var(--gray-300);
  letter-spacing: 0.1em;
`;

const Bottom = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  @media (max-width: 640px) { padding: 0 1.25rem 2rem; }
`;

const ScrollBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray-400);
  background: none;
  border: none;
  transition: color 0.2s;

  svg { animation: bounceY 2s ease infinite; }
  @keyframes bounceY {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }

  &:hover { color: var(--ink); }
`;

const Hero = ({ t }) => (
  <Wrap id="hero">
    <ToneBlock />

    <Main>
      <Left>
        <LabelRow>
          <LabelLine />
          <Label>
            <AvailDot />{t("hero.available")}
          </Label>
        </LabelRow>

        <Heading className="reveal">
          <span className="big">{t("hero.title_1")}</span>
          <span className="italic">{t("hero.title_italic")}</span>
          <span className="sub">{t("hero.title_2")}</span>
        </Heading>

        <Tagline className="reveal reveal-delay-2">{t("hero.tagline")}</Tagline>

        <CtaRow className="reveal reveal-delay-3">
          <CtaBtn onClick={() => scrollTo("work")}>{t("hero.cta")}</CtaBtn>
          <CtaText onClick={() => scrollTo("contact")}>
            {t("nav.contact")} <FiArrowDown size={12} />
          </CtaText>
        </CtaRow>
      </Left>

      <Right className="reveal reveal-delay-2">
        <IndexNum>001 / 004</IndexNum>
        <LocationBox>
          <LocationLabel>{t("hero.location").split("—")[0].trim()}</LocationLabel>
          <LocationValue>{t("hero.location")}</LocationValue>
        </LocationBox>
      </Right>
    </Main>

    <Bottom>
      <ScrollBtn onClick={() => scrollTo("about")}>
        <FiArrowDown size={13} /> {t("hero.scroll")}
      </ScrollBtn>
      <Label>{t("hero.label")}</Label>
    </Bottom>
  </Wrap>
);

export default Hero;
