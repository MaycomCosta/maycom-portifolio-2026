import React from "react";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";

const Wrap = styled.section`
  padding: 8rem 0;
  background: var(--white);
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 200px 1fr 280px;
  gap: 5rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 2rem;
  }
  @media (max-width: 640px) { padding: 0 1.25rem; }
`;

const SideLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.6rem;

  @media (max-width: 1024px) { flex-direction: row; align-items: center; gap: 1.5rem; }
`;

const IndexNum = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  color: var(--gray-300);
  letter-spacing: 0.1em;
`;

const SectionTag = styled.span`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gray-400);
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ink);
  white-space: pre-line;

  em {
    font-style: italic;
    color: var(--gray-400);
  }
`;

const Body = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: var(--gray-500);
  line-height: 1.85;
  max-width: 540px;
`;

const CvBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink);
  border-bottom: 1px solid var(--gray-300);
  padding-bottom: 0.4rem;
  width: fit-content;
  transition: border-color 0.2s, color 0.2s;

  &:hover { border-color: var(--ink); }
`;

const StatsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 1px solid var(--gray-200);
  padding-left: 2rem;

  @media (max-width: 1024px) {
    border-left: none;
    border-top: 1px solid var(--gray-200);
    padding-left: 0;
    padding-top: 2rem;
    flex-direction: row;
    gap: 2rem;
  }
`;

const Stat = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--gray-200);

  &:first-child { padding-top: 0; }
  &:last-child { border-bottom: none; }

  @media (max-width: 1024px) {
    padding: 0;
    border-bottom: none;
    flex: 1;
  }
`;

const StatNum = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 400;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.div`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gray-400);
  margin-top: 0.35rem;
`;

const About = ({ t }) => (
  <Wrap id="about">
    <Inner>
      <SideLabel>
        <IndexNum>{t("about.index")}</IndexNum>
        <SectionTag>{t("about.label")}</SectionTag>
      </SideLabel>

      <Center>
        <Title className="reveal">
          {t("about.title")}
          {"\n"}<em>{t("about.title_italic")}</em>
        </Title>
        <Body className="reveal reveal-delay-1">{t("about.body_1")}</Body>
        <Body className="reveal reveal-delay-2">{t("about.body_2")}</Body>
        <CvBtn href="/cv-maycom-costa.pdf" download className="reveal reveal-delay-3">
          <FiDownload size={13} /> {t("about.cta")}
        </CvBtn>
      </Center>

      <StatsCol>
        <Stat>
          <StatNum>{t("about.stat_1_num")}</StatNum>
          <StatLabel>{t("about.stat_1_label")}</StatLabel>
        </Stat>
        <Stat>
          <StatNum>{t("about.stat_2_num")}</StatNum>
          <StatLabel>{t("about.stat_2_label")}</StatLabel>
        </Stat>
        <Stat>
          <StatNum>{t("about.stat_3_num")}</StatNum>
          <StatLabel>{t("about.stat_3_label")}</StatLabel>
        </Stat>
      </StatsCol>
    </Inner>
  </Wrap>
);

export default About;
