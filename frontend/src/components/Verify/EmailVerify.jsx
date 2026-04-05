import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";

const EmailVerify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  // 🔢 Handle Change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // 👉 Move to next input
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  // ⬅️ Handle Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // 📋 Handle Paste
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d+$/.test(pasteData)) return;

    const newOtp = pasteData.split("");
    setOtp(newOtp);

    newOtp.forEach((_, i) => {
      if (inputs.current[i]) {
        inputs.current[i].value = newOtp[i];
      }
    });

    inputs.current[3].focus();
  };

  // ✅ Submit
  const handleSubmit = () => {
    const finalOtp = otp.join("");
    if (finalOtp.length < 4) {
      alert("Please enter complete OTP");
      return;
    }

    alert(finalOtp);

    // console.log("OTP:", finalOtp);
    // 👉 API call here
  };

  return (
    <section className="py-20 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-md shadow-lg py-12 px-4 text-center">
        {/* Heading */}
        <h3 className="text-3xl font-semibold text-gray-700 mb-5">Verify OTP</h3>
        <p className="text-gray-500 text-sm mb-4">OTP send to <span className="text-[#ff5252]">skraj7033450312@gmail.com</span></p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff5252] focus:ring-2 focus:ring-[#ff5252] transition"
            />
          ))}
        </div>

        {/* Button */}
        <div className="w-[86%] m-auto">
          <Button
            onClick={handleSubmit}
            className="bg-[#ff5252]! text-white! w-full py-2! hover:bg-black! transition"
          >
            Verify OTP
          </Button>
        </div>

        {/* Resend */}
        <p className="text-sm text-gray-500 mt-4">
          Didn’t receive code?{" "}
          <span className="text-[#ff5252] cursor-pointer hover:underline">
            Resend OTP
          </span>
        </p>
      </div>
    </section>
  );
};

export default EmailVerify;
