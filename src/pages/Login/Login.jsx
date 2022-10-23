import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="border  h-screen flex flex-col justify-center items-center gap-[15px] pt-10">
      <div className="w-[570px] border border-[#ABABAB] rounded py-[35px] px-[55px]">
        <h3 className="font-bold text-[24px] text-center">Login</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="username or email"
            className="input focus:outline-none border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 placeholder-black"
          />
        </div>
        <div className="form-control mt-[20px]">
          <input
            type="text"
            placeholder="password"
            className="input focus:outline-none border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 placeholder-black"
          />
          <label className="label">
            <button className="label-text-alt link link-hover">
              Forgot password?
            </button>
          </label>
        </div>
        <button className=" bg-[#F9A51A] font-medium  text-black border-none h-[45px] rounded-md w-full mt-[27px]">
          Login
        </button>

        <p className="font-medium my-[16px] text-center">
          <span className="text-black">Don't have an account?</span>{" "}
          <Link to={"/register"} className="underline text-[#F9A51A]">
            Create an account
          </Link>{" "}
        </p>
      </div>

      <fieldset class="border-t border-[#AAAAAA] w-[400px] mx-auto">
        <legend class="mx-auto px-1 text-black font-medium italic">Or</legend>
      </fieldset>

      <div className="flex flex-col gap-2">
        <div className="border rounded-[57px] border-[#C7C7C7] w-[461px] h-[50px] text-center py-1">
          <p>Continue with Google</p>
        </div>
        <div className="border rounded-[57px] border-[#C7C7C7] w-[461px] h-[50px] text-center py-1">
          <p>Continue with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
