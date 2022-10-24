import React from "react";

const HotelDetailsCard = ({
  hotel: { imgUrl, name, baths, bed, bedrooms, guests },
}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl rounded-sm">
      <figure>
        <img src={imgUrl} alt="Album" className="w-[95%] h-[95%]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {bed} beds {baths} baths {bedrooms} bedrooms {guests} guests
        </p>
      </div>
    </div>
  );
};

export default HotelDetailsCard;
