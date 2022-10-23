import React, { useContext } from "react";
import { HomeContext } from "../../Context/HomeProvider";
import PlaceCard from "./PlaceCard";

const Places = () => {
  const { places } = useContext(HomeContext);
  return (
    <div className="">
      <div className="flex overflow-x-scroll gap-2 flex-nowrap">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place}></PlaceCard>
        ))}
      </div>
      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Places;
