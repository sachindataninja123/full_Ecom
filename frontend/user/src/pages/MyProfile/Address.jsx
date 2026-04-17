import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ProductviewContext } from "../../context/MyContext";
import { postData } from "../../utils/api";

const Address = () => {
  const { setIsOpenFullScreenPanel, openAlertBox, userData } =
    useContext(ProductviewContext);

  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const [formFields, setFormFields] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
    status: "",
    userId: "",
  });

  useEffect(() => {
    if (userData?._id) {
      setFormFields((prev) => ({ ...prev, userId: userData._id }));
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formFields.address_line ||
      !formFields.city ||
      !formFields.state ||
      !formFields.pincode ||
      !phone ||
      !status
    ) {
      return openAlertBox("error", "Please fill all required fields");
    }

    setIsLoading(true);

    try {
      const res = await postData("/api/address/add", formFields);

      if (res?.data?.success) {
        openAlertBox("success", res.data.message);
        setIsOpenFullScreenPanel({ open: false });
      } else {
        openAlertBox("error", res?.data?.message || "Something went wrong");
      }
    } catch (err) {
      openAlertBox("error", err?.message || "Something went wrong");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-center pt-20  min-h-[70vh] p-6">
      <Card className="w-full max-w-3xl bg-gray-100 shadow-xl rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Add New Address
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <TextField
              label="Address Line"
              name="address_line"
              value={formFields.address_line}
              onChange={handleChange}
              size="small"
              fullWidth
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <TextField
                label="City"
                name="city"
                value={formFields.city}
                onChange={handleChange}
                size="small"
                fullWidth
                required
              />

              <TextField
                label="State"
                name="state"
                value={formFields.state}
                onChange={handleChange}
                fullWidth
                size="small"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Pincode"
                name="pincode"
                value={formFields.pincode}
                onChange={handleChange}
                fullWidth
                size="small"
                required
              />

              <TextField
                label="Country"
                name="country"
                value={formFields.country}
                onChange={handleChange}
                size="small"
                fullWidth
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <PhoneInput
                  defaultCountry="in"
                  value={phone}
                  disabled={isLoading}
                  onChange={(value) => {
                    setPhone(value);
                    setFormFields((prev) => ({ ...prev, mobile: value }));
                  }}
                  className="w-full"
                  inputClassName="!w-full !h-[56px] !border !border-gray-300 !rounded-md !px-3 text-[16px]!"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-[56px] !border !border-gray-300 !rounded-l-md !bg-white hover:!bg-gray-100",
                  }}
                />
                {/* <PhoneInput
                  defaultCountry="in"
                  value={phone}
                  onChange={(value) => {
                    setPhone(value);
                    setFormFields((prev) => ({ ...prev, mobile: value }));
                  }}
                  inputClassName="w-full"
                  size="small"
                /> */}
              </div>

              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={status}
                  label="Status"
                  onChange={(e) => {
                    setStatus(e.target.value);
                    setFormFields((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }));
                  }}
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value={true}>Active</MenuItem>
                  <MenuItem value={false}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="py-3 rounded-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                <span className="flex items-center gap-2">
                  <FaCloudUploadAlt /> Submit Address
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Address;
