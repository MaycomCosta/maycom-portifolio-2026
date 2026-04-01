import React from "react";
import styled from "styled-components";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Tag from "../Tag";
import { safeSrc, onImgError } from "../../../utils/image";

const Card = styled.article`
  position: relative;
  overflow: hidden;
  background: var(--gray-100);
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  position: relative;
  background: var(--warm);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  ${Card}:hover & img {
    transform: scale(1.06);
  }
`;

/* Tall cards for featured */
const ImageBoxTall = styled(ImageBox)`
  aspect-ratio: 3/4;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(13, 13, 13, 0);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  gap: 0.75rem;
  transition: background 0.4s ease;

  ${Card}:hover & {
    background: rgba(13, 13, 13, 0.6);
  }
`;

const OverlayLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const OLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.9rem;
  background: var(--white);
  color: var(--ink);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover { background: var(--gray-100); }
`;

const Meta = styled.div`
  padding: 1.25rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--ink);
  letter-spacing: -0.01em;
`;

const Year = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  color: var(--gray-400);
`;

const Desc = styled.p`
  font-size: 0.85rem;
  color: var(--gray-500);
  font-weight: 300;
  line-height: 1.5;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`;

const ProjectCard = ({ project, tall, t }) => {
  const Img = tall ? ImageBoxTall : ImageBox;
  return (
    <Card>
      <Img>
        <img src={safeSrc(project.image)} alt={project.name} onError={onImgError} loading="lazy" />
        <Overlay>
          <OverlayLinks>
            {project.live && (
              <OLink href={project.live} target="_blank" rel="noopener noreferrer">
                <FiArrowUpRight size={13} />
                {t("projects.view")}
              </OLink>
            )}
            {project.github && (
              <OLink href={project.github} target="_blank" rel="noopener noreferrer">
                <FiGithub size={13} />
                {t("projects.code")}
              </OLink>
            )}
          </OverlayLinks>
        </Overlay>
      </Img>
      <Meta>
        <TopRow>
          <Name>{project.name}</Name>
          {project.year && <Year>{project.year}</Year>}
        </TopRow>
        <Desc>{project.description}</Desc>
        <TagRow>
          {project.stack.map((s) => <Tag key={s}>{s}</Tag>)}
        </TagRow>
      </Meta>
    </Card>
  );
};

export default ProjectCard;
