import React, { useContext } from "react";
import { HomeContext } from "../../../Context/HomeProvider";

const PlaceCard = ({ place, place: { imgUrl, name } }) => {
  const { setSelectedPlace } = useContext(HomeContext);

  const handleSelectPlace = () => {
    setSelectedPlace(place);
  };

  console.log("🚀 ~ file: PlaceCard.jsx ~ line 4 ~ PlaceCard ~ place", place);
  return (
    <div
      onClick={handleSelectPlace}
      className="min-w-[270px] min-h-[416px] image-full rounded-md cursor-pointer"
      style={{
        background: ` linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%), url(${imgUrl}) no-repeat`,
        backgroundSize: "contain",
      }}
    >
      <div className="card-body bg-transparent flex flex-col justify-end  min-h-full">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default PlaceCard;
