import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;

  const handleLogout = () => {
    logout()
      .then()
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar md:px-[135px] px-0 flex justify-between fixed z-20">
      <div className="flex justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className={`w-[120px] h-[56px] ${
              path === "/" || path === "/booking"
                ? "invert-[100%] contrast-[200%] grayscale-[100%]"
                : undefined
            }`}
          />
        </Link>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            <Link to={"/"}>Home</Link>

            <Link to={"/login"}>Login</Link>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search your destination"
            className="w-[370px] h-[44px] rounded-[5px] border border-white outline-none py-[12px] px-[14px]   bg-white/20 text-[#FFFFFF] font-medium text-[16px] placeholder-white"
          />
        </div>
      </div>
      <div
        className={`hidden lg:flex gap-[50px] ${
          path === "/" || path === "/booking" ? "text-white" : "text-black"
        } font-medium text-[16px]`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#F9A51A]" : undefined
          }
          end
        >
          Home
        </NavLink>
        <NavLink>Destination</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
        {user && user.uid ? (
          <>
            {user.email}
            <button
              onClick={handleLogout}
              className="bg-[#F9A51A] rounded-[5px] px-[30px] py-[10px] hover:bg-[#ab6e0d] transition delay-75"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className="bg-[#F9A51A] rounded-[5px] px-[30px] py-[10px] hover:bg-[#ab6e0d] transition delay-75">
                Login
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
