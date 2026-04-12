import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ProductviewContext } from "../../context/MyContext";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const { openAlertBox, setIsLoggedIn } = useContext(ProductviewContext);

  const history = useNavigate();

  const validateValue = Object.values(formFields).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.email === "") {
      openAlertBox("error", "Please enter Email Id");
      setIsLoading(false);
      return;
    }

    if (formFields.password === "") {
      openAlertBox("error", "Please enter Password");
      setIsLoading(false);
      return;
    }

    const res = await postData("/api/user/login", formFields, {
      withCredentials: true,
    });

    // console.log(res);

    if (res?.data?.success) {
      openAlertBox("success", res.data.message);
      localStorage.setItem("userEmail", formFields.email);

      setFormFields({
        email: "",
        password: "",
      });

      localStorage.setItem("accessToken", res?.data?.data?.accessToken);
      localStorage.setItem("refreshToken", res?.data?.data?.refreshToken);

      setIsLoggedIn(true);

      history("/");
    } else {
      openAlertBox("error", res?.data?.message || "Something went wrong");
    }

    setIsLoading(false);
  };

  const forgotPassword = async () => {
    if (formFields.email === "") {
      openAlertBox("error", "Please enter Email Id");
      return;
    }

    try {
      setIsLoading(true);

      const res = await postData("/api/user/forgot-password", {
        email: formFields.email,
      });

      if (res?.data?.success) {
        openAlertBox("success", res.data.message || "OTP sent successfully!");

        localStorage.setItem("userEmail", formFields.email);
        localStorage.setItem("actionType", "forgot-password");

        console.log(res)

        history("/verifyEmail");
      } else {
        openAlertBox("error", res?.data?.message || "Something went wrong");
      }
    } catch (error) {
      openAlertBox("error", "Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className=" min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h3 className="text-[25px] font-bold text-gray-700 mb-6 text-left">
          Welcome Back 👋
        </h3>

        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <TextField
            type="email"
            value={formFields.email}
            disabled={isLoading === true ? true : false}
            name="email"
            label="Email Address"
            variant="outlined"
            fullWidth
            id="email"
            onChange={onChangeInput}
          />

          {/* Password */}
          <div className="relative mt-5">
            <TextField
              type={isShowPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              fullWidth
              value={formFields.password}
              disabled={isLoading === true ? true : false}
              name="password"
              id="password"
              onChange={onChangeInput}
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
            <Button
              onClick={forgotPassword}
               disabled={isLoading}
              className="text-sm! font-medium! text-blue-500! hover:underline! link! lowercase!"
            >
              Forgot Password?
            </Button>
          </div>

          {/* Login Button */}
          <Button
            variant="contained"
            type="submit"
            fullWidth
            className=" hover:bg-gray-900! py-2.5! rounded-lg! btn-org flex items-center justify-center gap-3"
            disabled={!validateValue}
          >
            {isLoading === true ? (
              <CircularProgress color="inherit" />
            ) : (
              "Login"
            )}
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
