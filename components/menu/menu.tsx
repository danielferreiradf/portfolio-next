import React, { useContext } from "react";
import Link from "next/link";

import { MenuContext } from "../../context/menuContext";
import { MenuContainer } from "./menu.styles";

const Menu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

  return (
    <MenuContainer menuIsOpen={menuIsOpen}>
      <span onClick={() => setMenuIsOpen(!menuIsOpen)}>x</span>
      <ul>
        <li>
          <Link href="/">
            <a onClick={() => setMenuIsOpen(!menuIsOpen)}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#sobre">
            <a onClick={() => setMenuIsOpen(!menuIsOpen)}>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="#projetos">
            <a onClick={() => setMenuIsOpen(!menuIsOpen)}>Projetos</a>
          </Link>
        </li>
        <li>
          <Link href="#contato">
            <a onClick={() => setMenuIsOpen(!menuIsOpen)}>Contato</a>
          </Link>
        </li>
      </ul>
    </MenuContainer>
  );
};

export default Menu;
