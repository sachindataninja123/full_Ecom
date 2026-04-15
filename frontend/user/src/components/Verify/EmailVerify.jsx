import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { ProductviewContext } from "../../context/MyContext";
import { postData } from "../../utils/api";

const EmailVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const { openAlertBox } = useContext(ProductviewContext);

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
        navigate("/login");
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
        navigate("/reset-password");
      } else {
        openAlertBox("error", res?.data?.message || "Invalid OTP");
      }
    }
  };

  return (
    <section className="py-20 flex justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center flex flex-col gap-4 ">
        {/* Heading */}
        <h3 className="text-2xl font-bold mb-2">Verify OTP</h3>

        {/* Email */}
        <p className="text-sm">
          OTP sent to <span className="text-red-500 font-medium">{email}</span>
        </p>

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
      </div>
    </section>
  );
};

export default EmailVerify;
