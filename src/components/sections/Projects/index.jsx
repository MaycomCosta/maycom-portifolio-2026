import React from "react";
import styled from "styled-components";
import ProjectCard from "../../ui/ProjectCard";
import { useProjects } from "../../../hooks/useProjects";

const Wrap = styled.section`
  padding: 8rem 0;
  background: var(--gray-100);
`;

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 1024px) { padding: 0 2rem; }
  @media (max-width: 640px) { padding: 0 1.25rem; }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 4rem;
  gap: 2rem;
  flex-wrap: wrap;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.05;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.45rem 1rem;
  border: 1px solid ${({ $active }) => ($active ? "var(--ink)" : "var(--gray-300)")};
  background: ${({ $active }) => ($active ? "var(--ink)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--white)" : "var(--gray-400)")};
  transition: all 0.25s ease;

  &:hover {
    border-color: var(--ink);
    color: ${({ $active }) => ($active ? "var(--white)" : "var(--ink)")};
  }
`;

/* Editorial asymmetric grid */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

/* Each card occupies different columns for editorial feel */
const Cell = styled.div`
  grid-column: ${({ $col }) => $col};

  @media (max-width: 1024px) { grid-column: span 6; }
  @media (max-width: 768px) { grid-column: 1 / -1; }
`;

const LAYOUTS = [
  "1 / 8",   // wide left
  "8 / 13",  // narrow right
  "1 / 5",   // narrow left
  "5 / 13",  // wide right
  "1 / 7",   // half
  "7 / 13",  // half
];

const Empty = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  color: var(--gray-400);
  font-style: italic;
  padding: 4rem 0;
  text-align: center;
`;

const Projects = ({ t }) => {
  const { projects, categories, filter, setFilter } = useProjects();

  return (
    <Wrap id="work">
      <Inner>
        <Header>
          <HeaderLeft>
            <MetaRow>
              <IndexNum>{t("projects.index") || "02"}</IndexNum>
              <SectionTag>{t("projects.label")}</SectionTag>
            </MetaRow>
            <Title className="reveal">{t("projects.label")}</Title>
          </HeaderLeft>

          <FilterRow>
            {categories.map((cat) => (
              <FilterBtn key={cat} $active={filter === cat} onClick={() => setFilter(cat)}>
                {cat === "All" ? t("projects.filter_all") : cat}
              </FilterBtn>
            ))}
          </FilterRow>
        </Header>

        {projects.length === 0 ? (
          <Empty>{t("projects.no_results")}</Empty>
        ) : (
          <Grid>
            {projects.map((project, i) => (
              <Cell key={project.id} $col={LAYOUTS[i % LAYOUTS.length]}>
                <ProjectCard
                  project={project}
                  tall={i % 3 === 1}
                  t={t}
                />
              </Cell>
            ))}
          </Grid>
        )}
      </Inner>
    </Wrap>
  );
};

export default Projects;
