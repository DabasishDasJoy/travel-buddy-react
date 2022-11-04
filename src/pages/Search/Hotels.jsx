import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
import { HomeContext } from "../../Context/HomeProvider";
import HotelDetailsCard from "../shared/HotelDetailsCard";
import "./Hotels.css";
const Hotels = () => {
  const { dateFrom, dateTo, selectedPlace } = useContext(HomeContext);

  const { hotels } = useLoaderData();
  const position = [51.505, -0.09];
  return (
    <div className="pt-[100px] px-[100px]">
      <div className="border-t-2 grid grid-cols-2 gap-5">
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

        <div className="p-5">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          ,
        </div>
      </div>
    </div>
  );
};

export default Hotels;
