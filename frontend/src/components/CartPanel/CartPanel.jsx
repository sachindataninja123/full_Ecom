import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";

const CartPanel = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Designer Party Saree wear",
      image:
        "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90",
      price: 25,
      qty: 1,
    },
    {
      id: 2,
      title: "Designer Party Saree wear",
      image:
        "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90",
      price: 25,
      qty: 1,
    },
    {
      id: 3,
      title: "Designer Party Saree wear",
      image:
        "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90",
      price: 25,
      qty: 1,
    },
    {
      id: 4,
      title: "Designer Party Saree wear",
      image:
        "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90",
      price: 25,
      qty: 1,
    },
    {
      id: 5,
      title: "Designer Party Saree wear",
      image:
        "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sari/y/w/u/free-gadwal-fashion-club-collection-unstitched-original-imagydunza3jwxdf.jpeg?q=90",
      price: 25,
      qty: 1,
    },
  ]);

  // ➕ Increment
  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // ➖ Decrement
  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  // ❌ Delete
  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="scroll w-full max-h-93 overflow-y-scroll overflow-x-hidden py-3 px-4">
        {cartItems.map((item) => (
          <div
            className="cartItem w-full flex items-center mb-4 border-b border-[rgba(0,0,0,0.2)] pb-3"
            key={item.id}
          >
            {/* Image */}
            <div className="img w-[25%] overflow-hidden h-23 rounded-md">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="info w-[75%] pr-5 pl-4">
              <h4 className="text-[16px] font-medium">
                <Link to="/" className="link">
                  {item.title}
                </Link>
              </h4>

              {/* Qty + Price */}
              <div className="flex items-center justify-between mt-2">
                {/* Quantity Control */}
                <div className="flex items-center gap-2 border rounded-md px-0.5 overflow-hidden ">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 text-lg font-bold cursor-pointer hover:bg-gray-200 rounded-md overflow-hidden transition-all"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2 text-lg font-bold cursor-pointer hover:bg-gray-200 rounded-md overflow-hidden transition-all "
                  >
                    +
                  </button>
                </div>

                {/* Delete */}
                <MdDelete
                  size={21}
                  className="mt-2 cursor-pointer transition-all hover:text-red-500"
                  onClick={() => handleDelete(item.id)}
                />
              </div>

              {/* Price */}
              <div className="mt-3">
                <span className="text-[#ff5252]  font-bold">
                  $ {item.price * item.qty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottomSec absolute bottom-2.5 left-2.5 w-full pr-5">
        <div className="bottomInfo p-5 w-full border-t border-[rgba(0,0,0,0.9)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-semibold">1 item</span>
            <span className="text-[#ff5252] font-bold"> $86.00</span>
          </div>

          <div className="flex items-center justify-between w-full ">
            <span className="text-[14px] font-semibold">Shipping</span>
            <span className="text-[#ff5252] font-bold"> $8.00</span>
          </div>
        </div>

        <div className="bottomInfo py-5 px-5 w-full border-t border-[rgba(0,0,0,0.9)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[15px] font-semibold">Total (tax excl.)</span>
            <span className="text-[#ff5252] font-bold"> $93.00</span>
          </div>

          <br />

          <div className="flex items-center justify-between w-full gap-5">
            <Link
              to="/cartpage"
              className="btn-org flex-1 text-center py-2.5 rounded-md font-semibold hover:bg-[#222]! transition-all"
            >
              View Cart
            </Link>

            <Link
              to="/checkout"
              className="btn-org flex-1 text-center py-2.5 rounded-md font-semibold hover:bg-[#222]! transition-all"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
