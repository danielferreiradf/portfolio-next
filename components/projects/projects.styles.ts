import styled from "styled-components";

export const ProjectsContainer = styled.div`
  section {
    max-width: ${(props) => props.theme.sizes.containerWidth}px;
    margin: 0 auto;
    padding: 0 1rem;
    margin-bottom: 3rem;

    h1 {
      color: ${(props) => props.theme.colors.color5};
      font-size: 3.5rem;
      margin-bottom: 1rem;
      padding-top: 6rem;
    }

    h2 {
      color: ${(props) => props.theme.colors.color5};
      background: ${(props) => props.theme.colors.color4};
      display: inline-block;
      padding: 0.5rem;
      font-size: 2rem;
      margin-bottom: 7rem;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        height: 0.5rem;
        width: 12rem;
        background: ${(props) => props.theme.colors.color3};
        bottom: -1.5rem;
        left: 0;
      }
    }

    section {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      padding: 0;

      @media (max-width: ${(props) => props.theme.breakPoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
