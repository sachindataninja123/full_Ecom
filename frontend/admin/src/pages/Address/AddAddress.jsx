import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "@mui/material/Button";
import { FaRegImages } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { postData } from "../../utils/api";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { useEffect } from "react";

const AddAddress = () => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setIsOpenFullScreenPanel, openAlertBox, userData } =
    useContext(MyContext);

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
    status: "",
    userId: userData?._id,
  });

  useEffect(() => {
    formFields.userId = userData?._id;
  }, [userData]);

  const [status, setStatus] = useState("");

  // Input Change profile
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeStatus = (event) => {
    const value = event.target.value;

    setStatus(value);
    setFormFields((prev) => ({
      ...prev,
      status: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.address_line === "") {
      openAlertBox("error", "Please enter Address line");
      setIsLoading(false);
      return;
    }

    if (formFields.city === "") {
      openAlertBox("error", "Please enter City");
      setIsLoading(false);
      return;
    }

    if (formFields.state === "") {
      openAlertBox("error", "Please enter your State");
      setIsLoading(false);
      return;
    }

    if (phone === "") {
      openAlertBox("error", "Please enter your 10 digit Mobile no");
      setIsLoading(false);
      return;
    }
    if (formFields.pincode === "") {
      openAlertBox("error", "Please enter your Pincode");
      setIsLoading(false);
      return;
    }

    if (formFields.status === "") {
      openAlertBox("error", "Please enter your Status");
      setIsLoading(false);
      return;
    }

    try {
      const res = await postData(`/api/address/add`, formFields);

      if (res?.success) {
        //  editData returns data directly, not res.data
        openAlertBox("success", res.message);
        localStorage.setItem("userEmail", formFields.email);
        setUserData(res.data); // update context with new data
        setIsOpenFullScreenPanel({
          open: false,
        });
      } else {
        openAlertBox("error", res?.message || "Something went wrong");
      }
    } catch (error) {
      openAlertBox("error", "Something went wrong");
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-gray-100 m-4 rounded-lg p-5 shadow-md">
      <h1 className="text-[20px] font-semibold mb-4">Add Address</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-2 gap-5">
          <div className="rounded-sm w-full ">
            <label className="label">Address Line</label>
            <input
              type="text"
              className="input bg-white"
              onChange={handleProfileChange}
              value={formFields.address_line}
              name="address_line"
            />
          </div>

          <div className=" rounded-sm w-full">
            <label className="label">City</label>
            <input
              type="text"
              className="input bg-white"
              onChange={handleProfileChange}
              value={formFields.city}
              name="city"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-5 mt-5">
          <div className="rounded-sm w-full">
            <label className="label">State</label>
            <input
              type="text"
              className="input bg-white"
              onChange={handleProfileChange}
              value={formFields.state}
              name="state"
            />
          </div>

          <div className=" rounded-sm w-full">
            <label className="label">Pincode</label>
            <input
              type="text"
              className="input bg-white"
              onChange={handleProfileChange}
              value={formFields.pincode}
              name="pincode"
            />
          </div>

          <div className=" rounded-sm w-full">
            <label className="label">Country</label>
            <input
              type="text"
              className="input bg-white"
              onChange={handleProfileChange}
              value={formFields.country}
              name="country"
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-5 mt-5">
          <div className="rounded-sm w-full">
            <label className="label">Mobile No</label>
            <PhoneInput
              defaultCountry="in"
              value={phone}
              disabled={isLoading === true ? true : false}
              onChange={(phone) => {
                setPhone(phone);
                setFormFields((prev) => ({
                  ...prev,
                  mobile: phone,
                }));
              }}
            />
          </div>

          <div className=" rounded-sm w-full">
            <label className="label">Status</label>
            <Select
              value={status}
              onChange={handleChangeStatus}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              className="w-full"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={true}>true</MenuItem>
              <MenuItem value={false}>false</MenuItem>
            </Select>
          </div>
        </div>

        <div className="sticky bottom-0 mt-7 shadow-md">
          <Button
            type="submit"
            className="btn-blue w-full flex items-center justify-center gap-2"
          >
            <FaCloudUploadAlt size={20} />
            Publish and Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
