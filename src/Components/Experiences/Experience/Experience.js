import React from "react";
import img from "../../../Images/illuistraitons/img1.png";
const Experience = ({ experience }) => {
  const { name, image, info } = experience;
  return (
    <div>
      <div className=" w-[320px] rounded-md flex font-poppins flex-col justify-center py-10 px-5 bg-cyan-50 ">
        <div>
          <img className="h-32 w-32 block mx-auto " src={image} alt="" />
        </div>
        <h1 className="text-xl text-center mt-6 mb-2  font-semibold  text-cyan-700">{name.toUpperCase()}</h1>
        <p className="text-sm text-center text-slate-400">{info}</p>
      </div>
    </div>
  );
};

export default Experience;
