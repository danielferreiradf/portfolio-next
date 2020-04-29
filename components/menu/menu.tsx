import React, { useContext } from "react";

import { MenuContext } from "../../context/menuContext";
import { MenuContainer } from "./menu.styles";

const Menu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

  return (
    <MenuContainer menuIsOpen={menuIsOpen}>
      <span onClick={() => setMenuIsOpen(!menuIsOpen)}>X</span>
      <p>Home</p>
      <p>Sobre</p>
      <p>Projetos</p>
      <p>Contato</p>
    </MenuContainer>
  );
};

export default Menu;
