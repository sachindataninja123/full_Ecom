import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Button from "@mui/material/Button";
import { HiShoppingBag } from "react-icons/hi2";

const MyList = () => {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      brand: "Levis",
      title: "A-Line Kurti With sharara & Dupatta",
      image:
        "https://img.theloom.in/live/media/catalog/product/cache/101a419f04e4161b4f9f2458eaa9a195/c/o/cok1106bluevsti1_2_.jpg",
      price: 1500,
      oldPrice: 1800,
    },
    {
      id: 2,
      brand: "Zara",
      title: "Stylish Summer Dress",
      image:
        "https://img.theloom.in/live/media/catalog/product/cache/101a419f04e4161b4f9f2458eaa9a195/c/o/cok1106bluevsti1_2_.jpg",
      price: 1200,
      oldPrice: 1500,
    },
  ]);

  // ❌ Remove item
  const handleRemove = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };

  return (
    <section className="bg-[#f8f8f8] py-10 min-h-[80vh]">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">My Wishlist ❤️</h2>
        <p className="text-gray-600 mb-6">
          {listItems.length} item(s) in your wishlist
        </p>

        {/* EMPTY STATE */}
        {listItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">
              Your wishlist is empty 😢
            </h3>
            <Link to="/" className="text-[#ff5252] font-medium hover:underline">
              Continue Shopping
            </Link>
          </div>
        )}

        {/* LIST ITEMS */}
        {listItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 mb-4 flex gap-4"
          >
            {/* Image */}
            <Link
              to={`/product/${item.id}`}
              className="w-28 h-36 rounded-lg overflow-hidden group"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-105 transition"
                alt=""
              />
            </Link>

            {/* Info */}
            <div className="flex-1 relative">
              {/* Remove */}
              <RxCross2
                size={20}
                onClick={() => handleRemove(item.id)}
                className="absolute right-0 top-0 cursor-pointer text-gray-400 hover:text-red-500"
              />

              <p className="text-sm text-gray-500">{item.brand}</p>

              <Link
                to={`/product/${item.id}`}
                className="block text-lg font-semibold text-gray-800 hover:text-[#ff5252]"
              >
                {item.title}
              </Link>

              {/* Price */}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-lg font-bold text-[#ff5252]">
                  ₹{item.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ₹{item.oldPrice}
                </span>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-3">
                <Button className="bg-[#ff5252]! text-white! hover:bg-gray-800! transition-all  flex items-center gap-2">
                  <HiShoppingBag size={18} />
                  Move to Cart
                </Button>

                <Button className="border! border-gray-300! px-2 btn-border">
                  View Product
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyList;
