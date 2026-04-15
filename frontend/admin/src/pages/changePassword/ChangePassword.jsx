import React, { useState, useContext } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { MyContext } from "../../context/MyContext";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const history = useNavigate();
  const { openAlertBox } = useContext(MyContext);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const validateValue =
    formFields.email &&
    formFields.newPassword.trim() !== "" &&
    formFields.confirmPassword.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.newPassword === "") {
      openAlertBox("error", "Please enter new Password");
      setIsLoading(false);
      return;
    }

    if (formFields.confirmPassword === "") {
      openAlertBox("error", "Please enter confirm Password");
      setIsLoading(false);
      return;
    }
    if (formFields.confirmPassword !== formFields.newPassword) {
      openAlertBox("error", "Password and confirm Password do not match");
      setIsLoading(false);
      return;
    }
    postData(`/api/user/reset-password`, formFields)
      .then((res) => {
        if (res?.data?.error === false) {
          localStorage.removeItem("userEmail");
          localStorage.removeItem("actionType");
          openAlertBox("success", res?.data?.message);
          history("/admin/login");
        } else {
          openAlertBox("error", res?.data?.message);
        }
      })
      .catch(() => {
        openAlertBox("error", "Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
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
      <div className="w-full max-w-lg rounded-md bg-[#f1f1f1] shadow-lg px-7 pb-14 pt-5 mt-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">Reset Password</h2>
          <p className="text-gray-500 mt-2">You can change password here</p>
        </div>

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="relative">
            <TextField
              label="New Password"
              type={isShowPassword ? "text" : "password"}
              value={formFields.newPassword}
              disabled={isLoading === true ? true : false}
              onChange={onChangeInput}
              name="newPassword"
              fullWidth
              size="small"
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
              label="Confirm Password"
              type={isShowPassword2 ? "text" : "password"}
              value={formFields.confirmPassword}
              disabled={isLoading === true ? true : false}
              onChange={onChangeInput}
              name="confirmPassword"
              fullWidth
              size="small"
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
            variant="contained"
            type="submit"
            fullWidth
            className="hover:bg-blue-500! py-2.5! rounded-lg! btn-org flex items-center justify-center gap-3"
            disabled={!validateValue || isLoading}
          >
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Change Password"
            )}
          </Button>
        </form>

        {/* FOOTER */}
        <p className="text-md text-center text-gray-500 mt-13">
          Don't want to reset?{" "}
          <NavLink
            to="/admin/login"
            className="text-blue-500 font-medium hover:text-blue-600 transition-all hover:underline"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default ChangePassword;
