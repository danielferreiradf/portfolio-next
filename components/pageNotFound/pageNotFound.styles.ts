import styled from "styled-components";

export const PageNotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 18rem;
    }

    h1 {
      text-align: center;
      color: ${(props) => props.theme.colors.color5};
      font-size: 3rem;
      margin-bottom: 3rem;
    }

    a {
      font-size: 1.5rem;
      text-decoration: none;
      color: ${(props) => props.theme.colors.color5};
      background: ${(props) => props.theme.colors.color4};
      padding: 1rem 1.6rem;
      text-transform: uppercase;
      transition: all 0.3s;

      &:hover {
        background: ${(props) => props.theme.colors.color3};
      }
    }
  }
`;
