import React from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div>
      <section className="section py-5">
        <div className="container flex w-[80%] max-w-[80%] ">
          <div className="leftpart w-[75%]">
            <h2>Your Cart</h2>
            <p className="mt-0">
              There are <span className="font-bold text-[#ff5252]">2</span>{" "}
              products in your cart.
            </p>

            <div className="shadow-md bg-white  rounded-md">
              <div className="cartItem w-full p-3 flex items-center gap-4">
                <div className="img w-[16%] rounded-md overflow-hidden">
                  <Link to="/product/1" className="group">
                    <img
                      src="https://img.theloom.in/live/media/catalog/product/cache/101a419f04e4161b4f9f2458eaa9a195/c/o/cok1106bluevsti1_2_.jpg"
                      className="w-full group-hover:scale-105 transition-all"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="info w-[84%]">
                  <span className="text-[15px] font-semibold">Levis</span>
                  <h3>A-Line Kurti With sharara & Dupatta</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
