import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { HomeContext } from "../../Context/HomeProvider";
import LeftTitle from "./LeftTitle/LeftTitle";

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
        <LeftTitle></LeftTitle>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
