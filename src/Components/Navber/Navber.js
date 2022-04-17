import React, { useState } from "react";
import {
  BookOpenIcon,
  HomeIcon,
  InformationCircleIcon,
  MenuAlt1Icon,
  XIcon,
} from "@heroicons/react/solid";
import loginimg from "../../Images/logo/login-img2.png.crdownload";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
const Navber = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-transparent w-full top-0 left-0">
      <div className="flex bg-transparent items-center justify-between py-4 md:px-10 font-poppins px-7 max-w-[1280px] mx-auto">
        <div className="">
          <h1
            className="uppercase font-mono text-pink-700 font-semibold text-2xl  md:text-3xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            Family-doc
          </h1>
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
          <span
            className="font-semibold  text-gray-600 cursor-pointer flex items-center"
            onClick={() => navigate("/")}
          >
            {" "}
            <HomeIcon className="w-5 text-cyan-700 mr-1"></HomeIcon> Home
          </span>
          <span
            className="font-semibold  text-gray-600 cursor-pointer flex items-center"
            onClick={() => navigate("/blogs")}
          >
            {" "}
            <BookOpenIcon className="w-6 text-cyan-700 mr-1"></BookOpenIcon>{" "}
            Blogs
          </span>
          <span
            className="font-semibold  text-gray-600 cursor-pointer flex items-center"
            onClick={() => navigate("/about")}
          >
            {" "}
            <InformationCircleIcon className="w-6 text-cyan-700 mr-1"></InformationCircleIcon>{" "}
            About
          </span>

          {user ? (
            <button
              className="bg-cyan-700 text-sm text-white py-2 px-4 rounded-full  hover:bg-cyan-900 duration-300 font-semibold ease-in-out flex items-center"
              onClick={handleSignOut}
            >
              Sign Out
              <img
                className="w-5 ml-2 rounded-full bg-gray-100"
                src={loginimg}
                alt=""
              />
            </button>
          ) : (
            <button
              className="bg-cyan-700 text-sm text-white py-2 px-4 rounded-full  hover:bg-cyan-900 duration-300 font-semibold ease-in-out flex items-center"
              onClick={() => navigate("/signup")}
            >
              Sign Up
              <img
                className="w-5 ml-2 rounded-full bg-gray-100"
                src={loginimg}
                alt=""
              />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navber;
