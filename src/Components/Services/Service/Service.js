import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Service = ({ service }) => {
  const { name,  img, details } = service;

  return (
    <div>
      <div className="font-poppins w-[350px] mx-auto bg-grid-50 rounded-md">
        <img className="p-2 rounded-xl" src={img} alt="" />
        <div className="px-3 pb-5">
          <h1 className="text-2xl pl-2 my-3 text-cyan-700 font-semibold">{name}</h1>
          <div className="text-sm pl-2">
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-cyan-700"></CheckCircleIcon>{" "}
              {details?.srt1}
            </p>
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-cyan-700"></CheckCircleIcon>{" "}
              {details?.srt1}
            </p>
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-cyan-700"></CheckCircleIcon>{" "}
              {details?.srt1}
            </p>
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-cyan-700"></CheckCircleIcon>{" "}
              {details?.srt1}
            </p>
            <p className="flex items-center text-gray-600 mb-1">
              {" "}
              <CheckCircleIcon className="w-4 mr-2 text-cyan-700"></CheckCircleIcon>{" "}
              {details?.srt1}
            </p>
          </div>
          <button className="bg-cyan-800 w-full mt-3 text-white px-4 py-2 rounded font-semibold">
            Book Appoinment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
