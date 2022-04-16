import React, { useState } from "react";
import { MenuAlt1Icon, ShoppingCartIcon, XIcon } from "@heroicons/react/solid";
const Naver = () => {
  /*  return (
       <div className="bg-transparent   py-4  ">
         <div className="flex justify-between px-10 max-w-[1280px] mx-auto">
           <div className="logo text-cyan-700 font-semibold uppercase text-2xl font-mono">
             Family-Doc
           </div>
           <div className="flex items-center space-x-5 text-cyan-700 font-poppins text-lg font-semibold">
             <p>Home</p>
             <p>Services</p>
             <p>Chekout</p>
             <p>Login</p>
           </div>
         </div>
       </div>
     );
   }; */

  const [open, setOpen] = useState(false);
  return (
    <nav className="max-w-[1280px] mx-auto  bg-transparent w-full top-0 left-0">
      <div className="flex items-center justify-between py-4 md:px-10 font-poppins px-7">
        <div className="">
          <h1 className="uppercase font-mono text-rose-700 font-semibold text-2xl  md:text-3xl">Family-doc</h1>
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="w-10 h-10 absolute right-8 top-6 cursor-pointer md:hidden"></XIcon>
          ) : (
            <MenuAlt1Icon className="w-10 h-10 absolute flex  right-8 top-3 cursor-pointer md:hidden"></MenuAlt1Icon>
          )}
        </div>
        <div
          className={`md:flex  md:items-center space-x-0 md:space-x-6 md:pb-0 pt-8 md:pt-0 pb-10 absolute md:static    md:z-auto z-[2] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all space-y-5 md:space-y-0 duration-500 ease-in-out ${
            open
              ? "top-16 opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
          }`}
        >
          <span className="">
            {" "}
            <ShoppingCartIcon className="w-6 text-gray-600"></ShoppingCartIcon>{" "}
          </span>

          <span className="block font-semibold text-lg text-gray-600 cursor-pointer">
            Login
          </span>

          <button className="bg-cyan-700 text-white py-2 px-6 rounded-full  hover:bg-cyan-900 duration-300 font-semibold ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Naver;
