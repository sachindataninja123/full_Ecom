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

const AddAddress = () => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    mobile: "",
    status: "",
    userId: "",
  });

  const [status, setStatus] = useState("");

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFields.address_line === " ") {
      openAlertBox("error", "Please enter Address line");
      return;
    }

    if (formFields.city === " ") {
      openAlertBox("error", "Please enter City");
      return;
    }

    if (formFields.state === " ") {
      openAlertBox("error", "Please enter your State");
      return;
    }

    if (phone === " ") {
      openAlertBox("error", "Please enter your 10 digit Mobile no");
      return;
    }
    if (formFields.pincode === " ") {
      openAlertBox("error", "Please enter your Pincode");
      return;
    }

    if (formFields.status === " ") {
      openAlertBox("error", "Please enter your Status");
      return;
    }

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

  return (
    <div className="bg-gray-100 m-4 rounded-lg p-5 shadow-md">
      <h1 className="text-[20px] font-semibold mb-4">Add Address</h1>

      <form action="">
        <div className="w-full grid grid-cols-2 gap-5">
          <div className="rounded-sm w-full ">
            <label className="label">Address Line</label>
            <input type="text" className="input bg-white" />
          </div>

          <div className=" rounded-sm w-full">
            <label className="label">City</label>
            <input type="text" className="input bg-white" />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-5 mt-5">
          <div className="rounded-sm w-full">
            <label className="label">State</label>
            <input type="text" className="input bg-white" />
          </div>

          <div className=" rounded-sm w-full">
            <label className="label">Pincode</label>
            <input type="text" className="input bg-white" />
          </div>

          <div className=" rounded-sm w-full">
            <label className="label">Country</label>
            <input type="text" className="input bg-white" />
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
      </form>

      <div className="sticky bottom-0 mt-7 shadow-md">
        <Button className="btn-blue w-full flex items-center justify-center gap-2">
          <FaCloudUploadAlt size={20} />
          Publish and Submit
        </Button>
      </div>
    </div>
  );
};

export default AddAddress;
