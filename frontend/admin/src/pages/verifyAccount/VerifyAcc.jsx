import React, { useState, useRef, useContext } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { MyContext } from "../../context/MyContext";
import { postData } from "../../utils/api";

const VerifyAcc = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");
  const [isLoading, setIsLoading] = useState(false);

  const { openAlertBox } = useContext(MyContext);

  // 🔹 Handle input change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move forward
    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }

    // Move backward on delete
    if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // 🔹 Check if OTP complete
  const isOtpComplete = otp.every((digit) => digit !== "");

  // 🔹 Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const actionType = localStorage.getItem("actionType");

    if (actionType !== "forgot-password") {
      const res = await postData("/api/user/verifyEmail", {
        email: email,
        otp: otp.join(""),
      });

      // console.log(res);

      if (res?.data?.success) {
        openAlertBox("success", res.data.message || "Email Verified!");
        localStorage.removeItem("userEmail");
        navigate("/admin/login");
      } else {
        openAlertBox("error", res?.data?.message || "Invalid OTP");
      }
    } else {
      const res = await postData("/api/user/verify-forgot-password-otp", {
        email: email,
        otp: otp.join(""),
      });

      // console.log(res);

      if (res?.data?.success) {
        openAlertBox("success", res.data.message || "Email Verified!");
        setIsLoading(false)
        navigate("/admin/change-password");
      } else {
        openAlertBox("error", res?.data?.message || "Invalid OTP");
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gray-100">
      {/* HEADER */}
      <header className="w-full fixed top-0 left-0 px-6 py-4 flex items-center justify-between z-50">
        <NavLink to="/">
          <img src="/logofably.png" alt="logo" className="w-36" />
        </NavLink>

        <div className="flex items-center gap-3">
          <NavLink
            to="/admin/login"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm border border-gray-300 hover:bg-gray-100"
          >
            <FiLogIn size={16} />
            Login
          </NavLink>

          <NavLink
            to="/admin/register"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm border border-gray-300 hover:bg-gray-100"
          >
            <FiUserPlus size={16} />
            Sign Up
          </NavLink>
        </div>
      </header>

      {/* CARD */}
      <div className="w-full max-w-lg rounded-md bg-[#f1f1f1] shadow-lg py-8 px-8 mt-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-700 mb-2">
            Welcome Back!
          </h2>
          <p className="text-gray-500 text-xl font-semibold  mt-1 mb-5">
            Please verify your email
          </p>
          <p className="text-gray-500 mt-2">
            OTP sent to <span className="text-red-500">{email}</span>
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex gap-3 justify-center mt-4 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          ))}
        </div>

        {/* Verify Button */}
        <Button
          onClick={handleSubmit}
          disabled={!isOtpComplete}
          className="bg-[#ff5252]! text-white! w-full hover:bg-gray-900! py-2!"
        >
          Verify OTP
        </Button>

        {/* FOOTER */}
        <p className="text-md text-center text-gray-500 mt-6">
          Back to
          <NavLink
            to="/admin/login"
            className="text-blue-500 hover:underline font-medium hover:text-blue-600 transition-all pl-1"
          >
            Login
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default VerifyAcc;
