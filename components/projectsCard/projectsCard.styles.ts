import styled from "styled-components";

export const ProjectsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.color2};
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
  }
`;
