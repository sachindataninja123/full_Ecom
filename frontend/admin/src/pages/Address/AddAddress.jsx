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
import { fetchDataFromApi, postData } from "../../utils/api";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

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
    selected : false
  });

  useEffect(() => {
    setFormFields((prev) => ({
      ...prev,
      userId: formFields.userId,
    }));
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
      // console.log(res);

      if (res?.data?.success) {
        openAlertBox("success", res.data.message);

        setIsOpenFullScreenPanel({
          open: false,
        });
      } else {
        openAlertBox("error", res?.data?.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);

      openAlertBox("error", error?.message || "Something went wrong");
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

        <div className="mt-7">
          <Button
            type="submit"
            className="btn-blue w-full flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              <>
                <FaCloudUploadAlt size={20} />
                Publish and Submit
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
