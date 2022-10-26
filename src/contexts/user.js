import React from 'react';

const defaultContextValue = {
    isLoggedIn: false,
    toggleIsLoggedIn: () => null
  };
  
  export const UserContext = React.createContext( defaultContextValue );