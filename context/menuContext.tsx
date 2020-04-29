import React, { createContext, useState } from "react";

const MenuContext = React.createContext(null);

const MenuProvider = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={[menuIsOpen, setMenuIsOpen]}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
