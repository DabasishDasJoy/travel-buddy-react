import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { HomeContext } from "../../Context/HomeProvider";
import HotelDetailsCard from "../shared/HotelDetailsCard";

const Hotels = () => {
  const { dateFrom, dateTo, selectedPlace } = useContext(HomeContext);

  const { hotels } = useLoaderData();

  return (
    <div className="pt-[100px] px-[100px]">
      <div className="border-t-2 grid grid-cols-2">
        <div>
          <small className="text-slate-500">
            252 stays from {dateFrom?.toLocaleDateString()} to{" "}
            {dateTo?.toLocaleDateString()}
          </small>
          <h3 className="font-bold text-[24px]">
            Stays in {selectedPlace.name}
          </h3>
          <div className="flex flex-col gap-3 mt-2">
            {hotels.map((hotel) => (
              <HotelDetailsCard key={hotel.id} hotel={hotel}></HotelDetailsCard>
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Hotels;
