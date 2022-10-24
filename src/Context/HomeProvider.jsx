import { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const places = useLoaderData();

  const [selectedPlace, setSelectedPlace] = useState(places[0]);
  const [dateFrom, setDateFrom] = useState(null);

  const [dateTo, setDateTo] = useState(null);

  console.log(
    "🚀 ~ file: HomeProvider.jsx ~ line 16 ~ HomeProvider ~ dateTo",
    dateTo
  );

  const homeInfo = {
    places,
    selectedPlace,
    setSelectedPlace,
    dateFrom,
    setDateFrom,
    dateTo,
    setDateTo,
  };
  return (
    <HomeContext.Provider value={homeInfo}> {children} </HomeContext.Provider>
  );
};

export default HomeProvider;
