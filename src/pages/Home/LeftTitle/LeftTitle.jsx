import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeContext } from "../../../Context/HomeProvider";

const LeftTitle = () => {
  const { selectedPlace } = useContext(HomeContext);
  return (
    <div className="w-[80%] flex flex-col gap-[26px]">
      <h1 className="uppercase font-normal text-[90px] leading-[117px]">
        {selectedPlace.name}
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        accusamus!
      </p>
      <Link to={"/booking"}>
        <button className="bg-[#F9A51A] rounded-[5px] px-[30px] py-[10px] hover:bg-[#ab6e0d] transition delay-75 text-[#000000] w-[161px] h-[48px] font-medium text-[16px]">
          Booking
        </button>
      </Link>
    </div>
  );
};

export default LeftTitle;
