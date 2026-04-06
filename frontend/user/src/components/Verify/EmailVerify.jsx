import React, { useState, useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { ProductviewContext } from "../../context/MyContext";

const EmailVerify = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const context = useContext(ProductviewContext);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    const finalOtp = otp.join("");
    if (finalOtp.length < 4)
      return context.openAlertBox("error", "Enter Full OTP");

    context.openAlertBox("success", "Email Verified");
    navigate("/reset-password");
  };

  return (
    <section className="py-20 flex justify-center bg-gray-100">
      <div className="bg-white p-15 py-10 rounded-xl shadow-md text-center flex flex-col gap-4">
        <h3 className="text-2xl font-bold mb-3">Verify OTP</h3>
        <p className="text-sm ">
          OTP sent to <span className="text-red-500">{email}</span>
        </p>

        <div className="flex gap-3 justify-center mb-4">
          {otp.map((d, i) => (
            <input
              key={i}
              maxLength="1"
              ref={(el) => (inputs.current[i] = el)}
              value={d}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-12 h-12 text-center border rounded"
            />
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          className="bg-[#ff5252]! text-white! w-full hover:bg-gray-900!"
        >
          Verify OTP
        </Button>
      </div>
    </section>
  );
};

export default EmailVerify;
