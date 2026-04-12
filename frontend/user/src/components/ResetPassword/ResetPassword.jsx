import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import { ProductviewContext } from "../../context/MyContext";
import { IoEye, IoEyeOff } from "react-icons/io5";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../utils/api";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const history = useNavigate();
  const { openAlertBox, setIsLoggedIn } = useContext(ProductviewContext);

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
    postData(`/api/user/reset-password`, formFields).then((res) => {
      // console.log(res);
      if (res?.data?.error === false) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("actionType");
        openAlertBox("success", res?.data?.message);
        setIsLoading(false);
        history("/login");
      } else {
        openAlertBox("error", res?.data?.message);
      }
    });
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
              value={formFields.newPassword}
              disabled={isLoading === true ? true : false}
              onChange={onChangeInput}
              name="newPassword"
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
              value={formFields.confirmPassword}
              disabled={isLoading === true ? true : false}
              onChange={onChangeInput}
              name="confirmPassword"
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
            variant="contained"
            type="submit"
            fullWidth
            className="hover:bg-gray-900! py-2.5! rounded-lg! btn-org flex items-center justify-center gap-3"
            disabled={!validateValue || isLoading}
          >
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Change Password"
            )}
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Login */}
          <p className="text-center text-sm text-gray-600">
            Remembered password?
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
