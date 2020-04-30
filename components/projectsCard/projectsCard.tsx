import React from "react";

import { ProjectsCardContainer } from "./projectsCard.styles";

const ProjectsCard: React.FC = () => {
  return (
    <ProjectsCardContainer>
      <img src="/assets/images/profile.jpg" alt="Projeto" />
      <h1>Projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem
        amet officia magnam neque repudiandae animi quis placeat nisi
        dignissimos, cum laudantium similique voluptatem doloremque.
      </p>
      <button>1</button>
      <button>2</button>
    </ProjectsCardContainer>
  );
};

export default ProjectsCard;
