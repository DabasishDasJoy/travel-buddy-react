import React, { useContext, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
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
    <div className=" h-full py-20">
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
          <SwiperSlide onClick={() => handleSelectPlace(place)}>
            <div className="relative">
              <img src={place.imgUrl} alt="" />
              <h2 className="card-title absolute bottom-3 left-2">
                {place.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-20">
        <button className="prev">
          <FaArrowCircleLeft className="w-[40px] h-[40px]" />
        </button>
        <button className="ml-4 next">
          <FaArrowCircleRight className="w-[40px] h-[40px]" />
        </button>
      </div>
    </div>
  );
};

export default Places;
