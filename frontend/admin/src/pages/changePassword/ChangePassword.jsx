import React, { useState, useContext } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { MyContext } from "../../context/MyContext"; // ✅ ADD THIS

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const navigate = useNavigate(); // ✅ FIX
  const context = useContext(MyContext); // ✅ FIX

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      return context.openAlertBox("error", "All fields are required");
    }

    if (password.length < 6) {
      return context.openAlertBox(
        "error",
        "Password must be at least 6 characters"
      );
    }

    if (password !== confirmPassword) {
      return context.openAlertBox("error", "Passwords do not match");
    }

    // 🔥 API CALL HERE
    console.log("New Password:", password);

    context.openAlertBox("success", "Password Changed Successfully");

    navigate("/admin/login"); // 
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
      <div className="w-full max-w-md rounded-md bg-white shadow-lg p-7 mt-20">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">
            Reset Password
          </h2>
          <p className="text-gray-500 mt-2">
            You can change password here
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {/* New Password */}
          <div className="relative">
            <TextField
              type={isShowPassword ? "text" : "password"}
              label="New Password"
              fullWidth
              value={password}
              size="small"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute! top-1/2 right-2 -translate-y-1/2 min-w-0! w-9! h-9! rounded-full! text-gray-600! hover:bg-gray-200!"
            >
              {isShowPassword ? <IoEye /> : <IoEyeOff />}
            </Button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <TextField
              type={isShowPassword2 ? "text" : "password"}
              label="Confirm Password"
              fullWidth
              size="small"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              type="button"
              onClick={() => setIsShowPassword2(!isShowPassword2)}
              className="absolute! top-1/2 right-2 -translate-y-1/2 min-w-0! w-9! h-9! rounded-full! text-gray-600! hover:bg-gray-200!"
            >
              {isShowPassword2 ? <IoEye /> : <IoEyeOff />}
            </Button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-blue-500! hover:bg-blue-600! py-2.5!"
          >
            Change Password
          </Button>

          
        </form>

        {/* FOOTER */}
        <p className="text-md text-center text-gray-500 mt-6">
          Don't want to reset?{" "}
          <NavLink
            to="/admin/login"
            className="text-black font-medium hover:text-blue-500"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default ChangePassword;