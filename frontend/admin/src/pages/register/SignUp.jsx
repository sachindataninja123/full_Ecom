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

const SignUp = () => {
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
            Join us today!{" "}
          </h2>
          <p className="text-gray-500 text-2xl font-semibold  mt-1">
            Get special benefits and stay up-to-date.
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-4 ">
          <TextField label="Name" variant="outlined" size="small" fullWidth />
          <TextField
            label="Email Address"
            variant="outlined"
            size="small"
            fullWidth
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <IoEyeOff /> : <IoEye />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <IoEyeOff /> : <IoEye />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

      

          <Button
            variant="contained"
            className="bg-blue-500! text-white! text-[14px]! py-2! rounded-md!"
          >
            Sign Up
          </Button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-5 mt-10">
          <span className="flex-1 h-px bg-gray-200"></span>
          <span className="text-xs text-gray-400">OR CONTINUE WITH</span>
          <span className="flex-1 h-px bg-gray-200"></span>
        </div>

        {/* SOCIAL LOGIN */}
        <div className="flex gap-3">
          <Button
            variant="outlined"
            className="border-gray-300! text-gray-700! py-2! flex items-center gap-2 w-full"
          >
            <FcGoogle size={22} />
            Google
          </Button>

          <Button
            variant="outlined"
            className="border-gray-300! text-gray-700! py-2! flex items-center gap-2 w-full"
          >
            <FaFacebookF size={20} className="text-blue-600" />
            Facebook
          </Button>
        </div>

        {/* FOOTER */}
        <p className="text-md text-center text-gray-500 mt-10">
          Already have an account?{" "}
          <NavLink
            to="/admin/login"
            className="text-blue-500 hover:text-blue-600 font-medium hover:underline"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
