import { createContext, useContext } from "react";

export type GlobalContextType = {
  isIntroShowed: boolean;
  setIsIntroShowed: (c: boolean) => void;
};
export const GlobalContext = createContext<GlobalContextType>({
  isIntroShowed: false,
  setIsIntroShowed: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
