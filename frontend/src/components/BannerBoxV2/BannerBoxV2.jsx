import React from "react";
import { Link } from "react-router-dom";

const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxv2 overflow-hidden rounded-md group relative">
      <img
        src={props.image}
        alt=""
        className="w-110 h-62 object-cover group-hover:scale-105  transition-all"
      />
      <div
        className={`info absolute p-5 top-0 ${props.info === "left" ? "left-0" : "right-0 pl-14"} w-[70%] h-full z-50 flex items-center justify-start gap-2 flex-col`}
      >
        <h2 className="text-[21px] font-semibold">Samsung Gear VR Camerra</h2>
        <span className="w-full text-[#ff5252] text-[20px] font-bold">$129.00</span>
        <div className="link w-full">
            <Link to="/" className="text-[16px] font-semibold underline">Shop Now</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
