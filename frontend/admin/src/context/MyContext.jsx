import { createContext, useState } from "react";

// create context
export const MyContext = createContext();

// provider component
const MyContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <MyContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
