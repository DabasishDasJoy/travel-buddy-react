import React, { useContext, useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeContext } from "../../../Context/HomeProvider";

SwiperCore.use([Pagination, Navigation]);
const Places = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const { places, setSelectedPlace } = useContext(HomeContext);

  const handleSelectPlace = (place) => {
    console.log(
      "🚀 ~ file: Places.jsx ~ line 16 ~ handleSelectPlace ~ place",
      place
    );
    setSelectedPlace(place);
  };
  return (
    <div className=" h-full py-14">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        className="mySwiper absolute"
      >
        {places.map((place) => (
          //
          <SwiperSlide
            onClick={() => handleSelectPlace(place)}
            className="relative bg-cover bg-center min-w-[270px] max-w-[270px] min-h-[416px] rounded-lg cursor-pointer"
            style={{ backgroundImage: `url(${place.imgUrl})` }}
          >
            <div class="absolute rounded-lg top-0 mt-32 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>

            {/* <div className="">
                <img src={place.imgUrl} alt="" />
              </div> */}
            <div className="absolute bottom-3 left-5 mb-2 flex justify-center">
              <h2 className="card-title  text-3xl ">{place.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-20">
        <button className="prev">
          <FaChevronCircleLeft className="w-[40px] h-[40px]" />
        </button>
        <button className="ml-4 next">
          <FaChevronCircleRight className="w-[40px] h-[40px]" />
        </button>
      </div>
    </div>
  );
};

export default Places;
