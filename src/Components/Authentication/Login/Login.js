import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Navber from "../../Navber/Navber";
import Spinner from "../../Spinner/Spinner";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  useEffect(() => {
    if (user) {
      toast.success('Successfull')
    }
  },[user])
  useEffect(() => {
    if (error) {
      if (error?.message.includes("password")) {
        toast.error("Wrong Password");
      } else if (error?.message.includes("user-not-found")) {
        toast.error("Email not register");
      } else {
        toast.error(error.message);
      }
    }
  }, [error]);
  const handleEmail = (event) => {
    const userEmail = event.target.value;
    if (/\S+@\S+\.\S+/.test(userEmail)) {
      setEmail({ value: userEmail, error: "" });
    } else {
      setEmail({ value: "", error: "Invaild Email" });
    }
  };
  const handlePassword = (event) => {
    const userPassword = event.target.value;
    if (userPassword.length > 7) {
      setPassword({ value: userPassword, error: "" });
    } else {
      setPassword({ value: "", error: "Password should have 8 character" });
    }
  };

  const submitFrom = (event) => {
    event.preventDefault();
    if (email.value && password.value) {
      signInWithEmailAndPassword(email.value, password.value);
    }
  };
  return (
    <div className="banner2">
      <Navber></Navber>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="h-[90vh] flex justify-center items-center w-full font-poppins">
          <form onSubmit={submitFrom}>
            <div className="bg-gray-100 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
              <div className="text-center  rounded-xl  px-2 text-2xl font-semibold flex  justify-center space-x-3">
                <h1 className="text-cyan-700 ">WELCOME</h1>
                <p className="text-rose-700">BACK</p>
              </div>
              <div className="space-y-4 mt-10">
                <div>
                  <input
                    required
                    onBlur={(event) => handleEmail(event)}
                    placeholder="Email"
                    name="email"
                    type="email"
                    className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                  />
                </div>
                {email?.error && (
                  <p className="text-red-500 text-xs pl-4">{email?.error}</p>
                )}
                <div>
                  <input
                    required
                    onBlur={handlePassword}
                    placeholder="Password"
                    name="password"
                    type="password"
                    className="bg-slate-200 px-4 py-2 outline-none rounded-md w-full"
                  />
                </div>
                {password?.error && (
                  <p className="text-red-500 text-xs pl-4">{password?.error}</p>
                )}
              </div>

              <button className="mt-5 w-full text-white bg-cyan-700 font-semibold py-2 rounded-md  tracking-wide">
                Login
              </button>
              <p className="text-center mt-3 text-gray-700">
                <small>
                  Don't have an account ?{" "}
                  <Link className="text-cyan-600" to="/signup">
                    Register
                  </Link>
                </small>
              </p>
              {/* or section  */}
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
