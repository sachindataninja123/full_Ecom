import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { ProductviewContext } from "../../context/MyContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const MyProfile = () => {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/woman-showing-ok-sign_23-2148990150.jpg",
  );

  const [userData, setUserData] = useState({
    name: "Mahaieka Sharma",
    email: "mahaieka@gmail.com",
    phone: "9876543210",
  });

  const { isLoggedIn, setIsLoggedIn } = useContext(ProductviewContext);
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      history("/");
    }
  }, [history]);

  // Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Input Change
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // Save
  const handleSave = () => {
    console.log(userData);
    alert("Profile Updated ");
  };

  return (
    <section className="py-10 bg-gray-100 min-h-[80vh]">
      <div className="container flex gap-6">
        {/* LEFT SIDEBAR */}
        <div className="w-[25%]">
          <div className="bg-white shadow-md rounded-md p-5 py-10 text-center">
            {/* Profile Image */}
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 relative group">
              <img src={image} alt="" className="w-full h-full object-cover" />

              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer">
                <FaCloudUploadAlt className="text-white text-2xl" />
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <h2 className="font-semibold text-lg">{userData.name}</h2>
            <p className="text-gray-500 text-sm">{userData.email}</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[75%]">
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-bold mb-8">Edit Profile</h2>

            <div className="grid grid-cols-2 gap-5">
              <TextField
                label="Full Name"
                name="name"
                value={userData.name}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Phone"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                fullWidth
              />

              <TextField
                label="Address"
                name="address"
                onChange={handleChange}
                fullWidth
              />
            </div>

            {/* Save Button */}
            <div className="mt-6 flex gap-5">
              <Button
                onClick={handleSave}
                className="bg-[#ff5252]! text-white! px-4! py-3! hover:bg-gray-800! transition-all"
              >
                Save Changes
              </Button>

              <Button className="btn-border px-4 ">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
