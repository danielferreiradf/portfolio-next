import styled from "styled-components";

export const ProjectsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.color2};
  padding: 1rem;

  img {
    width: 100%;
  }
`;
