import styled from "styled-components";

interface IMenuContainer {
  menuIsOpen: boolean;
}

export const MenuContainer = styled.div<IMenuContainer>`
  width: ${(props) => (props.menuIsOpen ? "25rem" : "0")};
  background: ${(props) => props.theme.colors.color2};
  transition: width 0.3s;
  height: 100vh;
  overflow: hidden;
  position: sticky;
  /* z-index: 2; */
  top: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  span {
    color: ${(props) => props.theme.colors.color5};
    cursor: pointer;
    font-size: 3rem;
    display: block;
    text-align: right;
    padding-right: 2rem;
  }

  ul {
    margin-top: 4.5rem;

    li {
      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.color5};
        font-size: 2rem;
        display: block;
        text-align: center;
        margin-bottom: 2rem;
        padding: 1rem;
        text-transform: uppercase;
        transition: all 0.2s;

        &:hover {
          background: ${(props) => props.theme.colors.color3};
        }
      }
    }
  }
`;
