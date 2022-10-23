import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-fixed pt-[60px] grid grid-cols-2 text-white"
      style={{
        background: `rgba(0, 0, 0, 0.7) , url('https://i.ibb.co/brjftjv/Rectangle-1.png') no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-center ">
        <div className="w-[80%] flex flex-col gap-[26px]">
          <h1 className="uppercase font-normal text-[97px] leading-[117px]">
            Cox's bazar
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
