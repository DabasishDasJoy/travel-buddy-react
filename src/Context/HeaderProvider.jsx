import React, { createContext, useState } from "react";
export const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [active, setActive] = useState(null);
  const activeInfo = { active, setActive };

  return (
    <HeaderContext.Provider value={activeInfo}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
