import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  urls: string[];
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContect = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [urls, setUrls] = useState<string[]>([]);
  return (
    <AppContext.Provider value={{ urls, setUrls }}>
      {children}
    </AppContext.Provider>
  );
};
