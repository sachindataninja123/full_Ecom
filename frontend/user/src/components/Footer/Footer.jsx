import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Footer = () => {
  return (
    <>
      <footer className="py-6 bg-[#fcfcfc]">
        <div className="container">
          <div className="flex items-center justify-center gap-8 py-8 pb-10">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <MdOutlineLocalShipping className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="font-semibold text-[16px] mb-1">Free Shipping</h3>
              <p className="font-medium text-[12px]">
                For all orders Over $100
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <GiReturnArrow className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="font-semibold text-[16px] mb-1">
                30 Days Returns{" "}
              </h3>
              <p className="font-medium text-[12px]">For an exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <IoWalletOutline className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="font-semibold text-[16px] mb-1">
                Secured Payment
              </h3>
              <p className="font-medium text-[12px]">Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="font-semibold text-[16px] mb-1">Special Gifts</h3>
              <p className="font-medium text-[12px]">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="font-semibold text-[16px] mb-1">Support 24/7</h3>
              <p className="font-medium text-[12px]">Contact us anytime</p>
            </div>
          </div>

          <hr className="text-gray-400" />

          <div className="footer flex items-start py-8">
            <div className="part1 w-[30%] ">
              <h2 className="text-[18px] font-semibold mb-4">Contact us</h2>
              <p className="text-[14px] font-normal pb-4">
                Fably - Mega Super Store <br />
                507-Union Trade Centre India
              </p>

              <Link className="link font-medium" to="mailto:abcde@gmail.com">
                abcde@gmail.com
              </Link>

              <span className="text-[20px] font-semibold mb-5 block w-full mt-3 text-[#ff5252]">
                (+91) 1234-123-234
              </span>

              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[#ff5252] text-[40px]" />
                <span className="text-[16px] font-semibold tracking-tight">
                  Online Chat <br />
                  Get Expert Help.
                </span>
              </div>
            </div>

            <div className="part2 w-[35%] flex ">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-semibold mb-5">Products</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Prices drop
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      New products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-semibold mb-5">Our Company</h2>
                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Terms and conditions of Use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Secure Payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part3 w-[35%] flex pl-10 flex-col pr-8">
              <h2 className="text-[18px] font-semibold mb-5">
                Subscribe to newsletter
              </h2>
              <p className="text-[15px] mb-5">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>

              <form action="">
                <input
                  type="text"
                  className="border border-gray-300 outline-none w-full h-11.25 pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.4)] text-[14px]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org mb-2">Subscribe</Button>
              </form>

              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the terms and conditions and the privacy policy."
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip bg-white border-t border-[rgba(0,0,0,0.2)] py-3">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center justify-center gap-3">
            <li className="group">
              <Link
                to="/"
                target="_blank"
                className="border border-[rgba(0,0,0,0.4)] rounded-full w-10.25 h-10.25 flex items-center justify-center group-hover:text-white group-hover:bg-[#ff5252] group-hover:border-none transition-all group-hover:-translate-y-1"
              >
                <FaFacebookF />
              </Link>
            </li>

            <li className="group">
              <Link
                to="/"
                target="_blank"
                className="border border-[rgba(0,0,0,0.4)] rounded-full w-10.25 h-10.25 flex items-center justify-center group-hover:text-white group-hover:bg-[#ff5252] group-hover:border-none  group-hover:-translate-y-1   transition-all"
              >
                <FiYoutube />
              </Link>
            </li>

            <li className="group">
              <Link
                to="/"
                target="_blank"
                className="border border-[rgba(0,0,0,0.4)] rounded-full w-10.25 h-10.25 flex items-center justify-center group-hover:text-white group-hover:bg-[#ff5252] group-hover:border-none   group-hover:-translate-y-1  transition-all"
              >
                <FaInstagram />
              </Link>
            </li>

            <li className="group">
              <Link
                to="/"
                target="_blank"
                className="border border-[rgba(0,0,0,0.4)] rounded-full w-10.25 h-10.25 flex items-center justify-center group-hover:text-white group-hover:bg-[#ff5252] group-hover:border-none  group-hover:-translate-y-1  transition-all"
              >
                <FaPinterestP />
              </Link>
            </li>

            <li className="group">
              <Link
                to="/"
                target="_blank"
                className="border border-[rgba(0,0,0,0.4)] rounded-full w-10.25 h-10.25 flex items-center justify-center group-hover:text-white group-hover:bg-[#ff5252] group-hover:border-none  group-hover:-translate-y-1  transition-all"
              >
                <FaXTwitter />
              </Link>
            </li>
          </ul>

          <p className="text-gray-500 text-[14px]">© 2026 - Fably Ecommerce By Zebex </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
