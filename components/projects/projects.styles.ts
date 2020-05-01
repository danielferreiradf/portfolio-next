import styled from "styled-components";

export const ProjectsContainer = styled.div`
  section {
    max-width: ${(props) => props.theme.sizes.containerWidth}px;
    margin: 0 auto;
    padding: 0 1rem;

    h1 {
      color: ${(props) => props.theme.colors.color5};
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: ${(props) => props.theme.colors.color4};
      font-size: 2.5rem;
      margin-bottom: 7rem;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        height: 0.5rem;
        width: 12rem;
        background: ${(props) => props.theme.colors.color4};
        bottom: -1.5rem;
        left: 0;
      }
    }

    section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 3rem;
    }
  }
`;
