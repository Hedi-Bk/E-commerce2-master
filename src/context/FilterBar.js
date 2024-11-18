// ------------------------------------context for managing the filterbar / sidebar visibility

import React, { createContext, useContext, useState } from "react";

//START
const FilterBarState = createContext();
export const useFilterBarState = () => useContext(FilterBarState);

export default function FilterBar({ children }) {
  const [visible, setVisible] = useState(false);

  const value = { visible, setVisible };

  return (
    <FilterBarState.Provider value={value}>{children}</FilterBarState.Provider>
  );
}
