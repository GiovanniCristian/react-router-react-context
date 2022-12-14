import { createContext } from "react";

const defaultContextValue = {
  isLoggedIn: false,
  toggleIsLoggedIn: () => null
};

export const UserContext = createContext( defaultContextValue );