import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        {/* Heading */}
        <h3 className="text-[25px] font-bold text-gray-700 mb-6 text-left">
          Create Account 🚀
        </h3>

        <form className="w-full space-y-5">

          {/* Name + Phone (side by side) */}
          <div className="flex gap-4">
            <TextField
              type="text"
              label="Full Name"
              variant="outlined"
              fullWidth
            />

            <TextField
              type="tel"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
          </div>

          {/* Email */}
          <TextField
            type="email"
            label="Email Address"
            variant="outlined"
            fullWidth
          />

          {/* Password */}
          <div className="relative mt-5">
            <TextField
              type={isShowPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              fullWidth
            />

            <Button
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute! top-1/2 right-2 -translate-y-1/2 min-w-0! w-9! h-9! rounded-full! text-gray-600! hover:bg-gray-200!"
            >
              {isShowPassword ? (
                <IoEye size={20} />
              ) : (
                <IoEyeOff size={20} />
              )}
            </Button>
          </div>

          {/* Register Button */}
          <Button
            variant="contained"
            fullWidth
            className=" hover:bg-gray-900! py-2.5! rounded-lg! btn-org"
          >
            Register
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Signup */}
          <Button
            fullWidth
            className="flex! items-center! justify-center! gap-3 bg-gray-100! hover:bg-gray-200! text-black! py-2.5! rounded-lg!"
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600 mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 font-medium hover:underline link"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
};

export default Register;