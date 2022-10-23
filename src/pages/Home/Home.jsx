import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { HomeContext } from "../../Context/HomeProvider";

const Home = () => {
  const { selectedPlace } = useContext(HomeContext);

  return (
    <div
      className="min-h-screen bg-fixed pt-[60px] grid grid-cols-2 text-white bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.70)), url(${selectedPlace.imgUrl})`,
      }}
    >
      <div className="flex justify-center items-center ">
        <div className="w-[80%] flex flex-col gap-[26px]">
          <h1 className="uppercase font-normal text-[90px] leading-[117px]">
            {selectedPlace.name}
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis, accusamus!
          </p>
          <button className="bg-[#F9A51A] rounded-[5px] px-[30px] py-[10px] hover:bg-[#ab6e0d] transition delay-75 text-[#000000] w-[161px] h-[48px] font-medium text-[16px]">
            Booking
          </button>
        </div>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
