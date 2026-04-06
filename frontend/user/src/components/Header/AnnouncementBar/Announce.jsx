import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Announce = () => {
  const offers = [
    { text: "🔥 Get up to 50% off new season styles", link: "/offers" },
    { text: "🚚 Free delivery on orders above ₹999", link: "/shipping" },
    { text: "🆕 New arrivals dropping every week", link: "/new" },
    { text: "🎁 Exclusive deals for members", link: "/deals" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between border-y border-gray-300 bg-gray-100 px-6 py-2">
      {/* LEFT - Animated Offer */}
      <div className="overflow-hidden">
        <Link
          to={offers[index].link}
          key={index}
          className="text-sm animate-fadeSlide  flex  items-center justify-center gap-2 hover:border-[#111] border-b border-transparent  transition"
        >
          {offers[index].text}
          <FaArrowRightLong className="font-extralight" />
        </Link>
      </div>

      {/* RIGHT - Links */}
      <div className="flex items-center gap-6 text-sm">
        <Link to="/help-center" className="hover:border-[#111] border-b border-transparent transition">
          Help & Center
        </Link>
        <Link to="/order-tracking" className="hover:border-[#111] border-b border-transparent transition">
          Become a seller
        </Link>
      </div>
    </div>
  );
};

export default Announce;
