import React from "react";
import doctor from "../../Images/doctor2.png";
import Navber from "../Navber/Navber";
import "./Header.css";
const Header = () => {
  return (
    <div className=" banner ">
      <Navber></Navber>

      <div className=" max-w-[1280px] mx-auto  flex flex-col-reverse md:flex-row justify-between items-center h-full md:h-[90vh] px-10 ">
        <div className=" w-full md:w-6/12 text-center py-10 md:text-left">
          <h1 className="text-cyan-700 uppercase    font-poppins text-3xl  md:text-4xl mb-5 font-semibold">
            Welome To <span className="text-rose-700">FAMILY DOC</span>
          </h1>
          <p className="text-zinc-500  mb-3 font-semibold ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="bg-cyan-700 text-white px-4 py-2 rounded font-semibold">
            Dr. Sabrina Rahman
          </button>
        </div>
        <div className="w-full pt-10 mx-auto md:w-6/12">
          <div className="flex justify-center md:justify-end">
            {" "}
            <img
              className="rounded-full w-[300px]  mb-10 md:w-[450px]  "
              src={doctor}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
