import { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const places = useLoaderData();
  console.log(
    "🚀 ~ file: HomeProvider.jsx ~ line 8 ~ HomeProvider ~ places",
    places
  );

  const [selectedPlace, setSelectedPlace] = useState(places[0]);

  const homeInfo = { places, selectedPlace, setSelectedPlace };
  return (
    <HomeContext.Provider value={homeInfo}> {children} </HomeContext.Provider>
  );
};

export default HomeProvider;
