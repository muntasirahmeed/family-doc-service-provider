import { CalendarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Service = ({ service }) => {
  const { name,regPrice, price, img, details } = service;

  return (
    <div>
      <div className="font-poppins w-[350px] mx-auto bg-grid-50 bg-slate-100 rounded-md">
        <img className="p-2 rounded-xl" src={img} alt="" />
        <div className="px-3 pb-5 ">
          <div className=" pl-2 pb-2">
            <h1 className="text-2xl py-3 text-teal-700  font-semibold ">
              {name.toUpperCase()}
            </h1>
            <div className="flex items-center justify-between px-1">
              <p className="text-md text-gray-600 ">
                Price:{" "}
                <span className="text-xl font-semibold text-teal-700">
                  ${price}
                </span>{" "}
              </p>
              <p className="text-md text-gray-600">
                Reg price:{" "}
                <span className="text-xl font-semibold text-rose-700 opacity-80">
                  <del>${regPrice}</del>
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="text-sm pl-2">
            
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-teal-700"></CheckCircleIcon>{" "}
              {/* {details?.srt1} */}
              Lorem ipsum dolor sit amet,  
            </p>
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-teal-700"></CheckCircleIcon>{" "}
              {/* {details?.srt1} */}
              Lorem ipsum dolor sit amet,
            </p>

            {/* <p className="text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              laborum consequuntur{" "}
            </p> */}
          </div>

          <button className="bg-teal-700 hover:bg-teal-800 md:duration-500 ease-in-out w-full mt-3 text-white px-4 py-2 rounded font-semibold flex items-center justify-center mx-2">
            <CalendarIcon className="w-5 mr-2"></CalendarIcon>
            Book Appoinment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
