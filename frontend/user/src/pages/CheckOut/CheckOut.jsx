import React from "react";
import TextField from "@mui/material/TextField";
import { HiShoppingBag } from "react-icons/hi2";
import Button from "@mui/material/Button";

const CheckOut = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1 className="uppercase font-semibold text-[20px] ">
              Billing Details
            </h1>

            <form action="" className="w-full mt-5">
              <div className="flex items-center gap-5 pb-5">
                <div className="col w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>
              </div>

              <h6 className="text-[16px] font-medium">Street address *</h6>
              <div className="flex items-center flex-col gap-5  pb-5 mt-2">
                <div className="col w-full">
                  <TextField
                    label="House number and street name"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>

                <div className="col w-full">
                  <TextField
                    label="Apartment, suite, unit etc. (optional)"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>
              </div>

              <h6 className="text-[15px] font-medium">Town / City *</h6>
              <div className="flex items-center flex-col gap-5 pb-5 mt-2">
                <div className="col w-full">
                  <TextField
                    label="Town / City"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5 ">
                <div className="col w-[50%]">
                  <TextField
                    label="State"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    label="Country"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>
              </div>

              <h6 className="text-[15px] font-medium">Postcode / ZIP </h6>
              <div className="flex items-center flex-col pb-5 mt-2">
                <div className="col w-full">
                  <TextField
                    type="number"
                    label="Town / City"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-5 ">
                <div className="col w-[50%]">
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    label="Alternate Phone Number"
                    variant="outlined"
                    size="small"
                    className="w-full bg-gray-100"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rightCol w-[30%]">
          <div className="card shadow-md bg-white p-5 rounded-md">
            <h2 className="uppercase mb-3 font-semibold">Your Order</h2>

            <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.2)]">
              <span className="text-[15px] font-medium">Product</span>
              <span className="text-[15px] font-medium">SubTotal</span>
            </div>

            <div className="reviewScroll max-h-80 overflow-y-scroll overflow-x-hidden pr-3">
              <div className="flex items-center justify-between py-3">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-13 h-13 object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A Line Kurti With Sh...</h4>
                    <span className="text-[14px]">Qty : 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-medium text-[#ff5252]">
                  ₹12000.00
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-13 h-13 object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A Line Kurti With Sh...</h4>
                    <span className="text-[14px]">Qty : 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-medium text-[#ff5252]">
                  ₹12000.00
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-13 h-13 object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A Line Kurti With Sh...</h4>
                    <span className="text-[14px]">Qty : 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-medium text-[#ff5252]">
                  ₹12000.00
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-13 h-13 object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A Line Kurti With Sh...</h4>
                    <span className="text-[14px]">Qty : 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-medium text-[#ff5252]">
                  ₹12000.00
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-13 h-13 object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A Line Kurti With Sh...</h4>
                    <span className="text-[14px]">Qty : 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-medium text-[#ff5252]">
                  ₹12000.00
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-13 h-13 object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A Line Kurti With Sh...</h4>
                    <span className="text-[14px]">Qty : 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-medium text-[#ff5252]">
                  ₹12000.00
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-13 h-13 object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A Line Kurti With Sh...</h4>
                    <span className="text-[14px]">Qty : 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-medium text-[#ff5252]">
                  ₹12000.00
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="part1 flex items-center gap-3">
                  <div className="img w-13 h-13 object-cover overflow-hidden rounded-md group cursor-pointer">
                    <img
                      src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90"
                      alt=""
                      className="w-full transition-all group-hover:scale-105"
                    />
                  </div>

                  <div className="info">
                    <h4 className="text-[14px]">A Line Kurti With Sh...</h4>
                    <span className="text-[14px]">Qty : 1</span>
                  </div>
                </div>

                <span className="text-[14px] font-medium text-[#ff5252]">
                  ₹12000.00
                </span>
              </div>
            </div>

            <div className="mt-5 ">
              <Button className="bg-[#ff5252]! text-white! w-full py-2! hover:bg-black! transition">
                <HiShoppingBag size={20} className="mr-2" />
                 Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
