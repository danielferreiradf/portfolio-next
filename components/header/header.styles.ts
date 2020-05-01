import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.colors.color2};
  position: fixed;
  width: 100%;
  z-index: 1;
  opacity: 0.95;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  nav {
    max-width: ${(props) => props.theme.sizes.containerWidth}px;
    margin: 0 auto;
    padding: 0 1rem;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5rem;

      li {
        font-size: 1.8rem;
        color: ${(props) => props.theme.colors.color5};
        text-transform: uppercase;
        cursor: pointer;
      }

      li:last-child {
        background: ${(props) => props.theme.colors.color3};
        padding: 1.1rem;
      }
    }
  }
`;
