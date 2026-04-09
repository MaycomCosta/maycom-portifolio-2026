import React from "react";
import styled from "styled-components";

const Wrap = styled.section`
  padding: 8rem 0;
  background: var(--white);
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 1024px) { padding: 0 2rem; }
  @media (max-width: 640px) { padding: 0 1.25rem; }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 5rem;
  margin-bottom: 5rem;

  @media (max-width: 1024px) { grid-template-columns: 1fr; gap: 2rem; margin-bottom: 3rem; }
`;

const SideLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
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

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--ink);
  white-space: pre-line;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--gray-200);

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const Group = styled.div`
  padding: 2.5rem 2rem 2.5rem 1rem;
  border-right: 1px solid var(--gray-200);

  &:last-child { border-right: none; }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid var(--gray-200);
    padding: 2rem 0;
    &:last-child { border-bottom: none; }
  }
`;

const GroupTitle = styled.h3`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gray-400);
  margin-bottom: 1.75rem;
`;

const SkillList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--gray-100);

  &:last-child { border-bottom: none; }
`;

const SkillName = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--ink);
  letter-spacing: 0.01em;
`;

const SkillLevel = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: 0.68rem;
  color: var(--gray-300);
  letter-spacing: 0.08em;
`;

const SKILLS = {
  frontend: [
    { name: "React / Next.js", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Styled Components", level: "Expert" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "HTML & CSS", level: "Expert" },
    { name: "Vite", level: "Advanced" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced" },
    { name: "Express", level: "Advanced" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "REST APIs", level: "Advanced" },
    { name: "Firebase", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
  ],
  tools: [
    { name: "Git / GitHub", level: "Expert" },
    { name: "Figma", level: "Advanced" },
    { name: "Vercel", level: "Advanced" },
    { name: "Linux CLI", level: "Intermediate" },
    { name: "AWS (S3 / EC2)", level: "Intermediate" },
    { name: "Webpack", level: "Intermediate" },
  ],
};

const Skills = ({ t }) => (
  <Wrap id="skills">
    <Inner>
      <Top>
        <SideLabel>
          <IndexNum>{t("skills.index")}</IndexNum>
          <SectionTag>{t("skills.label")}</SectionTag>
        </SideLabel>
        <Title className="reveal">{t("skills.title")}</Title>
      </Top>

      <Grid>
        {[
          { key: "frontend", label: t("skills.frontend"), items: SKILLS.frontend },
          { key: "backend", label: t("skills.backend"), items: SKILLS.backend },
          { key: "tools", label: t("skills.tools"), items: SKILLS.tools },
        ].map(({ key, label, items }) => (
          <Group key={key}>
            <GroupTitle>{label}</GroupTitle>
            <SkillList>
              {items.map((s) => (
                <SkillItem key={s.name}>
                  <SkillName>{s.name}</SkillName>
                  <SkillLevel>{s.level}</SkillLevel>
                </SkillItem>
              ))}
            </SkillList>
          </Group>
        ))}
      </Grid>
    </Inner>
  </Wrap>
);

export default Skills;
