import React, { createContext, useState } from 'react';

export const CounterContext = createContext(2);

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(4);
  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

