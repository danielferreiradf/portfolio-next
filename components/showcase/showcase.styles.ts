import styled from "styled-components";

export const ShowcaseContainer = styled.div`
  section {
    height: 40rem;
    max-width: ${(props) => props.theme.sizes.containerWidth}px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    div {
      margin-right: 3.5rem;

      h1 {
        font-size: 5.5rem;
        font-weight: lighter;
        color: ${(props) => props.theme.colors.color5};
        margin-bottom: -1rem;
      }

      h2 {
        font-size: 3.5rem;
        font-weight: lighter;
        color: ${(props) => props.theme.colors.color4};
        margin-bottom: 3rem;
      }

      a {
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.color5};
        background: ${(props) => props.theme.colors.color4};
        text-decoration: none;
        text-transform: uppercase;
        padding: 1rem;
      }
    }

    div:last-child {
      margin-left: 3.5rem;
      position: relative;

      img {
        width: 23rem;
      }

      &:after {
        position: absolute;
        content: "";
        background: ${(props) => props.theme.colors.color3};
        display: block;
        height: 23rem;
        width: 23rem;
        top: 1.5rem;
        left: 1.5rem;
        z-index: -1;
      }
    }
  }
`;
