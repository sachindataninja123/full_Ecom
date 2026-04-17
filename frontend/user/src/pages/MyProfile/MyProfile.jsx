import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { ProductviewContext } from "../../context/MyContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { editData, postData, putData, uploadImage } from "../../utils/api";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const MyProfile = () => {
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [userId, setUserId] = useState("");
  const [showPasswordChange, setshowPasswordChange] = useState(false);
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
    address_details: "",
  });

  const [changePassword, setchangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const formdata = new FormData();

  const { openAlertBox, userData, setUserData, setIsOpenFullScreenPanel } =
    useContext(ProductviewContext);

  const history = useNavigate();

  let selectedImages = [];

  // Image Upload
  const handleImageChange = (e) => {
    try {
      setPreviews([]);

      const files = e.target.files;
      // console.log(files)
      setUploading(true);

      for (var i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImages.push(file);
          formdata.append("avatar", file);
        } else {
          openAlertBox(
            "error",
            "Please select a valid PNG , JPG or webp image file.",
          );
          setUploading(false);
          return false;
        }
      }

      uploadImage("/api/user/user-avatar", formdata).then((res) => {
        setUploading(false);
        let avatar = [];
        console.log(res?.data?.avatar);
        avatar.push(res?.data?.avatar);
        setPreviews(avatar);
        // console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userAvtar = [];
    if (userData?.avatar !== "" && userData?.avatar !== undefined) {
      userAvtar.push(userData?.avatar);
      setPreviews(userAvtar);
    }
  }, [userData]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      history("/");
    }
  }, [history]);

  // Input Change profile
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // input change password change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setchangePassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateValue = Object.values(formFields).every((el) => el);

  const validateValue2 = Object.values(changePassword).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await editData(`/api/user/${userId}`, formFields);

      if (res?.success) {
        //  editData returns data directly, not res.data
        openAlertBox("success", res.message);
        localStorage.setItem("userEmail", formFields.email);
        setUserData(res.data); // update context with new data
      } else {
        openAlertBox("error", res?.message || "Something went wrong");
      }
    } catch (error) {
      openAlertBox("error", "Something went wrong");
    }

    setIsLoading(false);
  };

  const handleSubmitPasswordChange = async (e) => {
    e.preventDefault();

    if (!changePassword.oldPassword)
      return openAlertBox("error", "Please enter old password!");
    if (!changePassword.newPassword)
      return openAlertBox("error", "Please enter new password!");
    if (!changePassword.confirmPassword)
      return openAlertBox("error", "Please enter confirm password!");
    if (changePassword.confirmPassword !== changePassword.newPassword)
      return openAlertBox("error", "Passwords do not match!");

    setIsLoading2(true);

    try {
      const payload = {
        oldPassword: changePassword.oldPassword,
        newPassword: changePassword.newPassword,
        confirmPassword: changePassword.confirmPassword,
      };

      const res = await putData(`/api/user/change-password`, payload);
      console.log(res);

      if (res?.success) {
        // was res?.success
        openAlertBox("success", res.message);
        setchangePassword({
          email: userData?.email || "",
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        openAlertBox("error", res?.message || "Something went wrong"); //  was res?.message
      }
    } catch (error) {
      console.log(error);

      openAlertBox("error", error?.message || "Something went wrong");
    }

    setIsLoading2(false);
  };

  useEffect(() => {
    if (userData?._id !== "" && userData?._id !== undefined) {
      setUserId(userData?._id);
    }
  }, [userData]);

  // Auto fill details after login
  useEffect(() => {
    if (userData) {
      setFormFields({
        name: userData.name || "",
        email: userData.email || "",
        mobile: userData.mobile || "",
        address_details: userData.address_details || "",
      });

      const ph = `"${userData?.mobile}"`;
      setPhone(ph);

      setchangePassword({
        email: userData?.email || "",
      });
    }
  }, [userData]);

  return (
    <section className="py-10 bg-gray-100 min-h-[80vh]">
      <div className="container flex gap-6 items-start">
        {/* LEFT SIDEBAR */}
        <div className="w-[25%] sticky top-24 self-start ">
          <div className="bg-white shadow-md rounded-md p-5 py-10 text-center">
            {/* Profile Image */}
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
              {uploading === true ? (
                <CircularProgress color="inherit" />
              ) : (
                <>
                  {previews?.length !== 0 ? (
                    previews?.map((img, idx) => {
                      return (
                        <img
                          src={img}
                          key={idx}
                          alt="user image"
                          className="w-full h-full object-cover"
                        />
                      );
                    })
                  ) : (
                    <img
                      src={"/user.png"}
                      alt="user image"
                      className="w-full h-full object-cover"
                    />
                  )}
                </>
              )}

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer">
                <FaCloudUploadAlt className="text-white text-2xl" />
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e, "api/user/user-avatar")}
                  name="avatar"
                  accept="image/"
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <h2 className="font-semibold text-lg">{userData?.name}</h2>
            <p className="text-gray-500 text-sm">{userData?.email}</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[75%]">
          <div className="bg-white shadow-md rounded-md p-6 mb-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-700">Edit Profile</h2>
              <Button
                onClick={() => setshowPasswordChange(!showPasswordChange)}
              >
                Change Password
              </Button>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <TextField
                  label="Full Name"
                  value={formFields.name}
                  disabled={isLoading === true ? true : false}
                  name="name"
                  onChange={handleProfileChange}
                  fullWidth
                />

                <TextField
                  type="email"
                  label="Email"
                  value={formFields.email}
                  disabled={true}
                  name="email"
                  onChange={handleProfileChange}
                  fullWidth
                />

                <PhoneInput
                  defaultCountry="in"
                  value={phone}
                  disabled={isLoading}
                  onChange={(phone) => {
                    setPhone(phone);
                    setFormFields((prev) => ({
                      ...prev,
                      mobile: phone,
                    }));
                  }}
                  className="w-full"
                  inputClassName="!w-full !h-[56px] !border !border-gray-300 !rounded-md !px-3 text-[16px]!"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-[56px] !border !border-gray-300 !rounded-l-md !bg-white hover:!bg-gray-100",
                  }}
                />
              </div>

              <br />
              <div
                className="flex items-center justify-center p-5 border  border-dashed hover:border-blue-500 bg-[#f1f1f1] hover:bg-[#e7f3f9] cursor-pointer"
                onClick={() =>
                  setIsOpenFullScreenPanel({
                    open: true,
                    model: "Add New Address",
                  })
                }
              >
                <span className="text-[15px] font-semibold">Add Address</span>
              </div>

              {/* Save Button */}
              <div className="mt-6 flex gap-5">
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
                    "Update Profile"
                  )}
                </Button>
              </div>
            </form>
          </div>

          {showPasswordChange === true && (
            <div className="bg-white shadow-md rounded-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-700 ">
                Change Password
              </h2>
              <form
                action=""
                onSubmit={handleSubmitPasswordChange}
                className="mt-8"
              >
                <div className="grid grid-cols-2 gap-5">
                  <TextField
                    type="text"
                    label="Old Password"
                    value={changePassword.oldPassword}
                    disabled={isLoading2 === true ? true : false}
                    name="oldPassword"
                    onChange={handlePasswordChange}
                    fullWidth
                  />

                  <TextField
                    type="text"
                    label="New Password"
                    value={changePassword.newPassword}
                    disabled={isLoading2 === true ? true : false}
                    name="newPassword"
                    onChange={handlePasswordChange}
                    fullWidth
                  />

                  <TextField
                    type="text"
                    label="Confirm Password"
                    value={changePassword.confirmPassword}
                    disabled={isLoading2 === true ? true : false}
                    name="confirmPassword"
                    onChange={handlePasswordChange}
                    fullWidth
                  />
                </div>

                {/* Save Button */}
                <div className="mt-6 flex gap-5">
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    className=" hover:bg-gray-900! py-2.5! rounded-lg! btn-org flex items-center justify-center gap-3"
                    disabled={!validateValue2}
                  >
                    {isLoading2 === true ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "Change Password"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
