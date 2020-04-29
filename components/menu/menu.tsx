import React, { useContext } from "react";

import { MenuContext } from "../../context/menuContext";
import { MenuContainer } from "./menu.styles";

const Menu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

  return (
    <div
      style={{
        width: menuIsOpen ? "15rem" : "0rem",
        transition: "all 0.5s",
        background: "red",
        height: "100%",
      }}
    >
      <h1>MENU</h1>
    </div>
  );
};

export default Menu;
