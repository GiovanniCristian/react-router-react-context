import { createContext } from "react";

const defaultContextValue = {
    results: [],
    pushResult: () => null
  };

export const ResultsContext = createContext(defaultContextValue);

//// Ricorda sempre di dare un valore di default a createContext().////