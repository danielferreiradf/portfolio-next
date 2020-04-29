import React, { useContext } from "react";

import { MenuContext } from "../../context/menuContext";

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

  return (
    <>
      <div>{menuIsOpen ? "SIM" : "NAO"}</div>
      <button onClick={() => setMenuIsOpen(!menuIsOpen)}>CLICK</button>
    </>
  );
};

export default Header;
