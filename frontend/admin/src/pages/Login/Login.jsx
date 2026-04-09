import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 relative">
      {/* HEADER */}
      <header className="w-full fixed top-0 left-0 px-6 py-4 flex items-center justify-between z-50 bg-white/70 backdrop-blur">
        <NavLink to="/">
          <img src="/logofably.png" alt="logo" className="w-36" />
        </NavLink>

        <div className="flex items-center gap-3">
          <NavLink
            to="/admin/login"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm border transition ${
                isActive
                  ? "bg-black text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/admin/register"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm border transition ${
                isActive
                  ? "bg-black text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            Sign Up
          </NavLink>
        </div>
      </header>

      {/* CARD */}
      <div className="w-full max-w-lg rounded-2xl  p-7 z-10 shadow-md">
        {/* TEXT */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-700">Welcome Back! </h2>
          <p className="text-gray-500 text-xl  mt-1">
            Sign in to continue to your dashboard
          </p>
        </div>

        {/* FORM */}
        <form className="flex flex-col gap-4">
          <TextField
            label="Email Address"
            variant="outlined"
            size="small"
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
          />

          <div className="flex justify-end">
            <span className="text-sm text-gray-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          <Button
            variant="contained"
            className="bg-white! text-black! text-[17px] py-2.5! rounded-lg!"
          >
            Sign In
          </Button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-5">
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
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <NavLink
            to="/admin/register"
            className="text-black font-medium hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Login;
