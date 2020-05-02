import React, { useContext } from "react";

import { MenuContext } from "../../context/menuContext";
import { HeaderContainer } from "./header.styles";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

  return (
    <HeaderContainer>
      <nav>
        <ul>
          {!menuIsOpen ? (
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}>Menu</li>
          ) : (
            <li></li>
          )}
          <li>
            <Link href="https://www.google.com" passHref={true}>
              <a target="_blank">Currículo</a>
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
