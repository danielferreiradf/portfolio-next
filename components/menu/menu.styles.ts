import styled from "styled-components";

interface IMenuContainer {
  menuIsOpen: boolean;
}

export const MenuContainer = styled.div<IMenuContainer>`
  width: ${(props) => (props.menuIsOpen ? "25rem" : "0rem")};
  background: ${(props) => props.theme.colors.color3};
  transition: width 0.3s;
  height: 100vh;
  overflow: hidden;

  span {
    color: ${(props) => props.theme.colors.color5};
    cursor: pointer;
    font-size: 3rem;
    display: block;
    text-align: right;
    padding-right: 1rem;
    padding-top: 0.8rem;
  }
`;
