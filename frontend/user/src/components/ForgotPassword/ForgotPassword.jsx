import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ProductviewContext } from "../../context/MyContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const context = useContext(ProductviewContext)

  const handleSubmit = () => {
    if (!email) return context.openAlertBox("error", "Enter Email");

    context.openAlertBox("success", "OTP Send");
    navigate("/emailverify", { state: { email } });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-[25px] font-bold mb-6">Forgot Password</h3>

        <TextField
          label="Enter Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="mt-5">
          <Button
            onClick={handleSubmit}
            className="bg-[#ff5252]! text-white! w-full hover:bg-gray-900!"
          >
            Send OTP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
