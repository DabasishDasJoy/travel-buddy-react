import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlePassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userInfo.email, userInfo.password)
      .then((res) => {
        navigate(from, { replace: true });
        e.target.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="border  h-screen flex flex-col justify-center items-center gap-[15px] pt-10">
      <form
        onSubmit={handleSubmit}
        className="w-[570px] border border-[#ABABAB] rounded py-[35px] px-[55px]"
      >
        <h3 className="font-bold text-[24px] text-center">Login</h3>
        <div className="form-control">
          <input
            onChange={handleEmail}
            name="email"
            type="text"
            placeholder="username or email"
            className="input focus:outline-none border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 placeholder-black"
          />
        </div>
        <div className="form-control mt-[20px]">
          <input
            onChange={handlePassword}
            name="password"
            type="password"
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
      </form>

      <fieldset className="border-t border-[#AAAAAA] w-[400px] mx-auto">
        <legend className="mx-auto px-1 text-black font-medium italic">
          Or
        </legend>
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
