import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.colors.color2};

  nav {
    max-width: ${(props) => props.theme.sizes.containerWidth}px;
    margin: 0 auto;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5rem;

      li {
        font-size: 2rem;
        color: ${(props) => props.theme.colors.color5};
        text-transform: uppercase;
        cursor: pointer;
      }

      li:last-child {
        background: ${(props) => props.theme.colors.color3};
        padding: 1.4rem;
      }
    }
  }
`;
