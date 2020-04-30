import React from "react";

import { ProjectsContainer } from "./projects.styles";
import ProjectsCard from "../projectsCard/projectsCard";
const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <section id="projetos">
        <h1>Projetos</h1>
        <h2>Alguns projetos desenvolvidos</h2>

        <section>
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </section>
      </section>
    </ProjectsContainer>
  );
};

export default Projects;
