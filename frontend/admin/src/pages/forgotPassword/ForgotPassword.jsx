import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { FiLogIn, FiUserPlus } from "react-icons/fi";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center  relative">
      {/* HEADER */}
      <header className="w-full fixed top-0 left-0 px-6 py-4 flex items-center justify-between z-50 ">
        <NavLink to="/">
          <img src="/logofably.png" alt="logo" className="w-36" />
        </NavLink>

        <div className="flex items-center gap-3">
          <NavLink
            to="/admin/login"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-black text-white shadow-md"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-sm"
              }`
            }
          >
            <FiLogIn size={16} />
            Login
          </NavLink>

          <NavLink
            to="/admin/register"
            className={({ isActive }) =>
              `flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-black text-white shadow-md"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100 hover:shadow-sm"
              }`
            }
          >
            <FiUserPlus size={16} />
            Sign Up
          </NavLink>
        </div>
      </header>

      {/* CARD */}
      <div className="w-full max-w-150 rounded-md bg-[#f1f1f1] shadow-sm p-7 mt-7 z-10 ">
        {/* TEXT */}
        <div className="text-center mb-13">
          <h2 className="text-4xl font-bold text-gray-700 mb-2">
            Having trouble to sign in?{" "}
          </h2>
          <p className="text-gray-500 text-2xl font-semibold  mt-1">
            Reset your password
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-4 ">
          <TextField
            label="Enter your Email"
            fullWidth
            margin="normal"
            size="small"
          />
          <Button variant="contained"  fullWidth className="mt-1! bg-blue-500!">
            Send OTP
          </Button>
        </form>

        {/* FOOTER */}
        <p className="text-md text-center text-gray-500 mt-10">
          Don't want to reset?{" "}
          <NavLink
            to="/admin/login"
            className="text-blue-500 font-medium hover:underline hover:text-blue-600 transition-all"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;

