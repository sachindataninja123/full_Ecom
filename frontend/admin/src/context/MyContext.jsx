import { createContext, useState } from "react";

// create context
export const MyContext = createContext();

// provider component
const MyContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isSideBarOpen,
        setIsSideBarOpen,
        isLoggedIn,
        setisLoggedIn,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
