import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import Button from "@mui/material/Button";
import { HiShoppingBag } from "react-icons/hi2";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      brand: "Levis",
      title: "A-Line Kurti With sharara & Dupatta",
      image:
        "https://img.theloom.in/live/media/catalog/product/cache/101a419f04e4161b4f9f2458eaa9a195/c/o/cok1106bluevsti1_2_.jpg",
      price: 1500,
      oldPrice: 1800,
      size: "S",
      qty: 1,
    },
    {
      id: 2,
      brand: "Levis",
      title: "A-Line Kurti With sharara & Dupatta",
      image:
        "https://img.theloom.in/live/media/catalog/product/cache/101a419f04e4161b4f9f2458eaa9a195/c/o/cok1106bluevsti1_2_.jpg",
      price: 1500,
      oldPrice: 1800,
      size: "S",
      qty: 1,
    },
    {
      id: 3,
      brand: "Levis",
      title: "A-Line Kurti With sharara & Dupatta",
      image:
        "https://img.theloom.in/live/media/catalog/product/cache/101a419f04e4161b4f9f2458eaa9a195/c/o/cok1106bluevsti1_2_.jpg",
      price: 1500,
      oldPrice: 1800,
      size: "S",
      qty: 1,
    },
  ]);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <section className="bg-[#f8f8f8] py-10">
      <div className="container max-w-6xl mx-auto px-4 flex gap-8">
        {/* LEFT */}
        <div className="w-[65%]">
          <h2 className="text-[22px] text-gray-600 font-bold mb-1">Your Cart 🛒</h2>
          <p className="text-gray-600 mb-6">
            <span className="text-[#ff5252] font-semibold">
              {cartItems.length} </span> item(s) in your cart
          </p>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 mb-2 flex gap-4"
            >
              {/* Image */}
              <Link
                to={`/product/${item.id}`}
                className="w-30 h-40 rounded-lg overflow-hidden group"
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
                  to="/"
                  className="block text-lg font-semibold text-gray-800 hover:text-[#ff5252] transition"
                >
                  {item.title}
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-[20px]">★★★★☆</span>
                  <span className="text-gray-400 text-[12px]">(195)</span>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3 mt-3">
                  {/* Size */}
                  <select className="bg-[#edeaea] rounded-md px-1 py-1 text-sm focus:outline-none">
                    {sizes.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>

                  {/* Qty */}
                  <select className="bg-[#edeaea] rounded-md px-2 py-1 text-sm  focus:outline-none">
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q}>{q}</option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-lg font-bold text-[#ff5252]">
                    ₹{item.price * item.qty}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹{item.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-[35%]">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{subTotal}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>

              <div className="border-t pt-3 flex justify-between text-base font-semibold">
                <span>Total</span>
                <span className="text-[#ff5252]">₹{subTotal}</span>
              </div>
            </div>

            {/* Button */}
            <div className="mt-5 ">
              <Button className="bg-[#ff5252]! text-white! w-full py-2! hover:bg-black! transition">
                <HiShoppingBag size={20} className="mr-2" />
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
