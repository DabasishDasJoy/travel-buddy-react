import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HomeContext } from "../../../Context/HomeProvider";

const Booking = () => {
  const { selectedPlace } = useContext(HomeContext);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  return (
    <div className="flex justify-center items-center h-full">
      <div className=" w-[470px] bg-white rounded-md px-[24px] py-[27px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Origin</span>
          </label>
          <input
            type="text"
            placeholder="from"
            className="input px-[22px] py-[20px] text-black font-bold bg-[#F2F2F2] w-[417px] h-[60px]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Destination</span>
          </label>
          <input
            name="destination"
            readOnly
            defaultValue={selectedPlace.name}
            type="text"
            placeholder="desitnatin"
            className="input px-[22px] py-[20px] text-black font-bold bg-[#F2F2F2] w-[417px] h-[60px]"
          />
        </div>

        <div className="flex justify-between gap-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">From</span>
            </label>
            <DatePicker
              className="px-[22px] py-[20px] text-black font-bold bg-[#F2F2F2] rounded-md w-full h-[60px]"
              selected={dateFrom}
              onChange={(date) => setDateFrom(date)}
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
              showYearDropdown
              scrollableMonthYearDropdown
              showMonthDropdown
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">To</span>
            </label>
            <DatePicker
              className="px-[22px] py-[20px] text-black font-bold bg-[#F2F2F2] rounded-md w-full h-[60px]"
              selected={dateTo}
              onChange={(date) => setDateTo(date)}
              minDate={new Date()}
              dateFormat="dd-MM-yyyy"
              allowSameDay
            />
          </div>
        </div>

        <button className=" bg-[#F9A51A] font-medium text-black border-none h-[60px] rounded-md w-full mt-[27px]">
          Start Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
