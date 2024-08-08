import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className="text-3xl font-semibold text-center text-slate-700">
          Login
          <span className="text-blue-700"> ChatBuzz</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm mt-2 inline-block p-1"
          >
            {"Don't"} have an account?{" "}
            <span className="text-blue-600">Sign Up</span>
          </Link>
        </form>
        <div>
          <button className="btn btn-block btn-sm mt-2 bg-blue-700 text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
