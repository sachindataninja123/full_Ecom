import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ProductsSlider from "../productsSlider/ProductsSlider";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full">
      {/* 🔥 Tabs */}
      <div className="flex gap-8 pb-3 border-b">
        {["Description", "Specifications", "Reviews (5)"].map((tab, index) => (
          <span
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-[18px] cursor-pointer font-medium pb-2 transition-all
                ${
                  activeTab === index
                    ? "text-[#ff5252] border-b-2 border-[#ff5252]"
                    : "text-gray-600 hover:text-red-500"
                }
              `}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* 📄 Content Box */}
      <div className="mt-5 py-5 px-4 bg-white shadow-md rounded-md w-full">
        {/* 📝 Description */}
        {activeTab === 0 && (
          <div className="text-gray-600 space-y-3">
            <p className="font-medium text-[15px]">
              This elegant Angrakha Kurti Pant Set is crafted from premium rayon
              fabric, ensuring comfort and breathability throughout the day.
            </p>

            <h4 className="font-bold">Lightweight Design</h4>
            <p>
              Perfect for casual outings, festive occasions, and office wear.
            </p>

            <h4 className="font-bold">Free Shipping</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <ul className="list-disc ml-5 space-y-1">
              <li>Soft and lightweight fabric</li>
              <li>Trendy floral design</li>
              <li>All-day comfort</li>
            </ul>
          </div>
        )}

        {/* 📊 Specifications */}
        {activeTab === 1 && (
          <div className="overflow-x-auto border rounded-md">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-3 font-semibold">Product</th>
                  <th className="px-6 py-3 font-semibold">Color</th>
                  <th className="px-6 py-3 font-semibold">Category</th>
                  <th className="px-6 py-3 font-semibold">Price</th>
                  <th className="px-6 py-3 font-semibold">Stock</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">MacBook Pro</td>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">231</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">MacBook Pro</td>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">231</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">MacBook Pro</td>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">231</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">MacBook Pro</td>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">231</td>
                </tr>
              </tbody>

              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">MacBook Pro</td>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">231</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* ⭐ Reviews */}
        {activeTab === 2 && (
          <div className="space-y-6 w-full ">
            {/* ⭐ Summary */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-green-600">4.3 ★</span>
              <div>
                <p className="text-lg font-medium">Customer Reviews</p>
                <p className="text-sm text-gray-500">Based on 120 reviews</p>
              </div>
            </div>

            {/* ⭐ Review List */}
            <div className="space-y-4 max-h-87.5 overflow-y-auto reviewScroll">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 p-4 border rounded-md bg-white"
                >
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      item % 2 ? "women" : "men"
                    }/${item + 10}.jpg`}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-semibold">User {item}</p>
                      <span className="text-sm text-gray-500">12 Feb 2026</span>
                    </div>

                    <p className="text-yellow-500">★★★★☆</p>

                    <p className="text-gray-600 text-sm mt-1">
                      Good product. Worth the price!
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✍️ Write Review */}
            <div className="p-5 border rounded-md bg-gray-50 space-y-4">
              <h3 className="text-lg font-semibold">Write a Review</h3>

              <TextField
                label="Write a review..."
                multiline
                rows={4}
                className="w-full"
              />

              <div className="flex gap-1 mt-2 text-2xl cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={`${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff5252",
                  "&:hover": { backgroundColor: "#ff3232" },
                }}
              >
                Submit Review
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* 🔥 Related Products */}
      <div className="mt-8">
        <h2 className="text-[24px] text-gray-600 font-semibold -mb-4">
          Related Products
        </h2>
        <ProductsSlider items={6} />
      </div>
    </div>
  );
};

export default ProductTabs;
