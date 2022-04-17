import React from "react";
import logo from "../../../Images/logo/google.png";
const SocialLogin = () => {
  return (
    <div>
      <div className="mt-2 font-poppins">
        <div className="flex items-center">
          <div className="h-[2px] bg-gray-500 rounded-full w-full"></div>
          <div className="text-gray-600 mx-4">Or</div>
          <div className="h-[2px] bg-gray-500 rounded-full w-full"></div>
        </div>
        <div className="bg-gray-200 rounded-full flex items-center justify-center py-1 shadow md:shadow-gray-300 mx-10 mt-4 ">
          <img className="h-7 rounded-full mr-5" src={logo} alt="" />
          <p className="font-semibold text-cyan-900">Sign With Google</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
