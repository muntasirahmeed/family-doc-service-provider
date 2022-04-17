import React from "react";
import { Link } from "react-router-dom";
import Navber from "../../Navber/Navber";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div className="banner2">
      <Navber></Navber>
      <div className="h-[90vh]  flex justify-center items-center w-full font-poppins ">
        <form>
          <div className="bg-gray-100 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
          <div className="text-center  rounded-xl  px-2 text-2xl font-semibold flex  justify-center space-x-3">
              <h1 className="text-cyan-700 ">JOIN</h1>
              <p className="text-rose-700">WITH ME</p>
            </div>
            <div className="space-y-4 mt-10">
              <div>
                <input
                  placeholder="Name"
                  name="name"
                  type="text"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>

              <div>
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <input
                  placeholder="Confrim Password"
                  name="confirmpass"
                  type="password"
                  className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>

            <button className="mt-5 w-full text-white bg-cyan-700 font-semibold py-2 rounded-md  tracking-wide">
              Register
            </button>
            <p className="text-center text-gray-700 mt-3">
              <small >
                Already have an account ?{" "}
                <Link className="text-cyan-600" to="/login">
                  Login
                </Link>
              </small>
            </p>

            {/* or section  */}
            <SocialLogin></SocialLogin>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
