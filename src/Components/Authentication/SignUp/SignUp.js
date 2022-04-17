import React from "react";
import { Link } from "react-router-dom";
import Naver from "../../Navber/Naver";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div className="banner">
      <Naver></Naver>
      <div className="  flex justify-center items-center w-full font-poppins ">
        <form>
          <div className="bg-gray-100 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <h1 className="text-center font-semibold text-rose-700 text-2xl">
              FAMILY DOC
            </h1>
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

            <button className="mt-5 w-full text-white bg-rose-700 font-semibold py-2 rounded-md  tracking-wide">
              Register
            </button>
            <p className="text-center mt-3">
              <small>
                Already have an account ?{" "}
                <Link className="text-rose-500" to="/login">
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
