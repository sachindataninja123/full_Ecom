import React from "react";
import { Link } from "react-router-dom";

const BannerBox = ({ img }) => {
  return (
    <div className="box bannerbox  overflow-hidden rounded-lg group">
      <Link to="/">
        <img src={img} alt="banner" className=" h-56 w-full object-cover group-hover:scale-105 transition-all group-hover:rotate-1" />
      </Link>
    </div>
  );
};

export default BannerBox;
