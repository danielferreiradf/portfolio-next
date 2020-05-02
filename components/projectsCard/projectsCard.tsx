import React from "react";

import { ProjectsCardContainer } from "./projectsCard.styles";
import Link from "next/link";

interface IProjectsCardProps {
  project: {
    id: number;
    name: string;
    imgName: string;
    description: string;
    githubLink: string;
    liveLink?: string;
  };
}

const ProjectsCard: React.FC<IProjectsCardProps> = ({ project }) => {
  return (
    <ProjectsCardContainer>
      <img
        src={`/assets/images/covers/${project.imgName}.png`}
        alt={project.name}
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div>
        <Link href={project.githubLink} passHref={true}>
          <a target="_blank">+ Github</a>
        </Link>
        {project.liveLink && (
          <Link href={project.liveLink} passHref={true}>
            <a target="_blank">+ Veja Mais</a>
          </Link>
        )}
      </div>
    </ProjectsCardContainer>
  );
};

export default ProjectsCard;
