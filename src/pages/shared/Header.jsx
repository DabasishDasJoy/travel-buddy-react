import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar md:px-[135px] px-0 flex justify-between fixed">
      <div className="flex justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className="w-[120px] h-[56px] invert-[100%] contrast-[200%] grayscale-[100%]"
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
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
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
      <div className="hidden lg:flex gap-[50px] text-white font-medium text-[16px]">
        <NavLink>News</NavLink>
        <NavLink>Destination</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
        <button className="bg-[#F9A51A] rounded-[5px] px-[30px] py-[10px] hover:bg-[#ab6e0d] transition delay-75">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
