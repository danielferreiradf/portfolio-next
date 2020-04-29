import React, { useContext } from "react";

import { MenuContext } from "../../context/menuContext";
import { HeaderContainer } from "./header.styles";

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
          <li>Curriculo</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
