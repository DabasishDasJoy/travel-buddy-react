import { createContext } from "react";
import { useLoaderData } from "react-router-dom";

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const places = useLoaderData();

  const homeInfo = { places };
  return (
    <HomeContext.Provider value={homeInfo}> {children} </HomeContext.Provider>
  );
};

export default HomeProvider;
