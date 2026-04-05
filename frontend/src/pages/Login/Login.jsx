import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ProductviewContext } from "../../context/MyContext";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const context = useContext(ProductviewContext);

  const history = useNavigate();

  const forgotPassword = () => {
    context.openAlertBox("success", "OTP Send");
    history("/verify");
  };

  return (
    <section className=" min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h3 className="text-[25px] font-bold text-gray-700 mb-6 text-left">
          Welcome Back 👋
        </h3>

        <form className="w-full space-y-5">
          {/* Email */}
          <TextField
            type="email"
            label="Email Address"
            variant="outlined"
            fullWidth
            name="email"
            id="email"
          />

          {/* Password */}
          <div className="relative mt-5">
            <TextField
              type={isShowPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              id="password"
            />

            <Button
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute! top-1/2 right-2 -translate-y-1/2 min-w-0! w-9! h-9! rounded-full! text-gray-600! hover:bg-gray-200!"
            >
              {isShowPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </Button>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <Link
              to="/verify"
              className="text-sm font-medium text-blue-500 hover:underline link"
              onClick={forgotPassword}
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            variant="contained"
            fullWidth
            className="btn-org hover:bg-gray-900! py-2.5! rounded-lg!"
          >
            Login
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <Button
            fullWidth
            className="flex! items-center! justify-center! gap-3 bg-gray-100! hover:bg-gray-200! text-black! py-2.5! rounded-lg!"
          >
            <FcGoogle size={22} />
            Continue with Google
          </Button>

          {/* Register */}
          <p className="text-center text-sm text-gray-600 mt-3">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 link hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
