// containg the theme context for managing the theme

import React, { useContext, useState } from "react";

//-1- create the context
const ThemeContext = React.createContext();

// -2- Export Context To Use
export const useTheme = () => useContext(ThemeContext);

//-3- Create Provider +Expoert it to wrap all componnents
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
