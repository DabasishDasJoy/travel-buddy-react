import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
  const { user, createUser, logout } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(null);

  const handleName = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  const handlePassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };
  const handleEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handleConfirm = (e) => {
    setUserInfo({ ...userInfo, confirm: e.target.value });
  };

  const handleAccept = (e) => {
    setAccepted(e.target.checked);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    createUser(userInfo.email, userInfo.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="border  h-screen flex flex-col justify-center items-center gap-[15px] pt-10">
      <form className="w-[570px] border border-[#ABABAB] rounded py-[35px] px-[55px]">
        <h3 className="font-bold text-[24px] text-center">Register</h3>
        <div className="form-control">
          <input
            onChange={handleName}
            type="text"
            value={userInfo.name}
            name="name"
            placeholder="name"
            className="input focus:outline-none  border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 "
          />
        </div>
        <div className="form-control">
          <input
            onChange={handleEmail}
            value={userInfo.email}
            name="email"
            type="email"
            placeholder="username or email"
            className="input focus:outline-none autofill:bg-red-400 border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 "
          />
        </div>
        <div className="form-control">
          <input
            onChange={handlePassword}
            name="password"
            value={userInfo.password}
            type="password"
            placeholder="password"
            className="input focus:outline-none autofill:bg-red-400 border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 "
          />
        </div>

        <div className="form-control">
          <input
            onChange={handleConfirm}
            name="confirm"
            value={userInfo.confirm}
            type="password"
            placeholder="confrim password"
            className="input focus:outline-none autofill:bg-red-400 border-b-[#C5C5C5] border-t-0 border-x-0 rounded-none px-1 py-0 "
          />
        </div>
        <div className="form-control">
          <label className="cursor-pointer label justify-start gap-1">
            <input
              onClick={handleAccept}
              type="checkbox"
              className="checkbox checkbox-accent"
            />
            <span className="label-text">
              Accept our{" "}
              <Link className="underline text-blue-600">
                Terms & Conditions
              </Link>
            </span>
          </label>
        </div>
        <button
          onClick={handleCreateAccount}
          type="submit"
          className={`${
            accepted ? "bg-[#F9A51A]" : "bg-slate-300"
          } font-medium text-black border-none h-[45px] rounded-md w-full mt-[10px] `}
          disabled={!accepted}
        >
          Create Account
        </button>

        <p className="font-medium my-[16px] text-center">
          <span className="text-black">Already have an account?</span>{" "}
          <Link to={"/login"} className="underline text-[#F9A51A]">
            Login
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

export default Register;
