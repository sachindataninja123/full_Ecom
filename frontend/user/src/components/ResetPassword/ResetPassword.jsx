import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import { ProductviewContext } from "../../context/MyContext";
import { IoEye, IoEyeOff } from "react-icons/io5";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const navigate = useNavigate();
  const context = useContext(ProductviewContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevent reload

    if (!password || !confirmPassword) {
      context.openAlertBox("error", "All fields are required");
      return;
    }

    if (password.length < 6) {
      context.openAlertBox("error", "Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      context.openAlertBox("error", "Passwords do not match");
      return;
    }

    context.openAlertBox("success", "Password Changed Successfully");
    navigate("/login");
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h3 className="text-[25px] font-bold text-gray-700 mb-6">
          Reset Password
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="relative">
            <TextField
              type={isShowPassword ? "text" : "password"}
              label="New Password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute! top-1/2 right-2 -translate-y-1/2 min-w-0! w-9! h-9! rounded-full! text-gray-600! hover:bg-gray-200!"
            >
              {isShowPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </Button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <TextField
              type={isShowPassword2 ? "text" : "password"}
              label="Confirm Password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              type="button"
              onClick={() => setIsShowPassword2(!isShowPassword2)}
              className="absolute! top-1/2 right-2 -translate-y-1/2 min-w-0! w-9! h-9! rounded-full! text-gray-600! hover:bg-gray-200!"
            >
              {isShowPassword2 ? <IoEye size={20} /> : <IoEyeOff size={20} />}
            </Button>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="btn-org hover:bg-gray-900! py-2.5!"
          >
            Change Password
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Login */}
          <p className="text-center text-sm text-gray-600">
            Remembered password?{" "}
            <Link to="/login" className="text-blue-500 hover:underline link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
