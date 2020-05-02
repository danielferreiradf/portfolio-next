import styled from "styled-components";

export const ProjectsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.color2};
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);

  img {
    width: 100%;
    min-height: 14rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2.65rem;
    color: ${(props) => props.theme.colors.color3};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.35rem;
    color: ${(props) => props.theme.colors.color5};
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    justify-content: flex-end;

    a {
      color: ${(props) => props.theme.colors.color5};
      text-decoration: none;
      background: ${(props) => props.theme.colors.color4};
      margin-left: 1rem;
      padding: 0.5rem 1rem;
      font-size: 1.35rem;
      transition: 0.3s all;

      &:hover {
        color: ${(props) => props.theme.colors.color2};
        background: ${(props) => props.theme.colors.color3};
      }
    }

    a:first-child {
      background: ${(props) => props.theme.colors.color1};

      &:hover {
        color: ${(props) => props.theme.colors.color2};
        background: ${(props) => props.theme.colors.color3};
      }
    }
  }
`;
