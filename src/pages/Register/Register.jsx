import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="border  h-screen flex flex-col justify-center items-center gap-[15px] pt-10">
      <div className="w-[570px] border border-[#ABABAB] rounded py-[35px] px-[55px]">
        <h3 className="font-bold text-[24px] text-center">Register</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="name"
            className="input focus:outline-none border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 placeholder-black"
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="username or email"
            className="input focus:outline-none border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 placeholder-black"
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="password"
            className="input focus:outline-none border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 placeholder-black"
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            placeholder="confrim password"
            className="input focus:outline-none border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 placeholder-black"
          />
        </div>
        <div className="form-control">
          <label className="cursor-pointer label justify-start gap-1">
            <input type="checkbox" className="checkbox checkbox-accent" />
            <span className="label-text">
              Accept out{" "}
              <Link className="underline text-blue-600">
                Terms & Conditions
              </Link>
            </span>
          </label>
        </div>
        <button className=" bg-[#F9A51A] font-medium text-black border-none h-[45px] rounded-md w-full mt-[10px]">
          Create Account
        </button>

        <p className="font-medium my-[16px] text-center">
          <span className="text-black">Already have an account?</span>{" "}
          <Link to={"/login"} className="underline text-[#F9A51A]">
            Login
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

export default Register;
