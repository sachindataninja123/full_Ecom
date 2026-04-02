import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container">
      {/* 🔥 Tabs */}
      <div className="flex items-center gap-8  pb-3">
        {["Description", "Specifications", "Reviews (5)"].map((tab, index) => (
          <span
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-[18px] cursor-pointer font-medium pb-2 transition-all
                ${
                  activeTab === index
                    ? "text-[#ff5252] "
                    : "text-gray-600 hover:text-red-500"
                }
              `}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="">
        {/* 📄 Content */}
        <div className=" mt-5 py-5 px-8 bg-white shadow-md rounded-md ">
          {/* 📝 Description */}
          {activeTab === 0 && (
            <div className="text-gray-600 space-y-3">
              <p className="font-medium text-[15px]">
                This elegant Angrakha Kurti Pant Set is crafted from premium
                rayon fabric, ensuring comfort and breathability throughout the
                day.
              </p>
              <h4 className="font-bold">LighWeight Design</h4>
              <p className="font-medium text-[15px]">
                Perfect for casual outings, festive occasions, and office wear.
                The floral print adds a modern touch to traditional styling.
              </p>

              <h4 className="font-bold">FreeShipping Policy</h4>
              <p className="font-medium text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                commodi minus ullam blanditiis temporibus iure vero magni
                mollitia dolores ipsam.
              </p>

              <h4 className="font-bold">Easy To Carry</h4>
              <p className="font-medium text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                dolorum iusto, praesentium nulla quisquam labore, dolore, autem
                eum libero aperiam quasi neque alias ut? Veniam corporis
                exercitationem ratione dicta nemo.
              </p>

              <ul className="list-disc ml-5 space-y-1 font-medium text-[15px]">
                <li>Soft and lightweight fabric</li>
                <li>Trendy floral design</li>
                <li>All-day comfort</li>
                <li>Easy to wash and maintain</li>
              </ul>
            </div>
          )}

          {/* 📊 Specifications */}
          {activeTab === 1 && (
            <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-sm border border-gray-300 border-default">
              <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-gray-200">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-gray-600 font-semibold text-[16px]"
                    >
                      Product name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-gray-600 font-semibold text-[16px]"
                    >
                      Color
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-gray-600 font-semibold text-[16px]"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-gray-600 font-semibold text-[16px]"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-gray-600 font-semibold text-[16px]"
                    >
                      Stock
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-neutral-primary border-b border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Silver</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">$2999</td>
                    <td class="px-6 py-4">231</td>
                  </tr>
                  <tr class="bg-neutral-primary border-b border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td class="px-6 py-4">423</td>
                  </tr>
                  <tr class="bg-neutral-primary">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4">121</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* ⭐ Reviews */}
          {activeTab === 2 && (
            <div className="space-y-6 w-[85%]">
              {/* ⭐ Summary */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-green-600">4.3 ★</span>
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    Customer Reviews
                  </p>
                  <p className="text-sm text-gray-500">Based on 120 reviews</p>
                </div>
              </div>

              {/* ⭐ Reviews List */}
              <div className="space-y-4">
                {/* Review Card */}
                <div className="flex gap-4 p-4 border-gray-300 rounded-md shadow-sm bg-white">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-800">Riya Sharma</p>
                      <span className="text-sm text-gray-500">12 Feb 2026</span>
                    </div>

                    <p className="text-yellow-500 text-sm">★★★★★</p>

                    <p className="text-gray-600 text-sm mt-1">
                      Loved the fabric quality! Totally worth the price.
                    </p>
                  </div>
                </div>

                {/* Review Card */}
                <div className="flex gap-4 p-4 border border-gray-300 rounded-md shadow-sm bg-white">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-800">Ankit Verma</p>
                      <span className="text-sm text-gray-500">10 Feb 2026</span>
                    </div>

                    <p className="text-yellow-500 text-sm">★★★★☆</p>

                    <p className="text-gray-600 text-sm mt-1">
                      Good product for this price. Delivery was quick.
                    </p>
                  </div>
                </div>
              </div>

              {/* ✍️ Write Review Section */}
              <div className="p-5 border border-gray-400 rounded-lg bg-gray-50 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Write a Review
                </h3>

                {/* Rating */}
                <div className="flex gap-1 text-yellow-500 text-xl cursor-pointer">
                  ★ ★ ★ ★ ★
                </div>

                {/* Input */}
                <textarea
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 border-gray-200 focus:ring-[#ff5252]"
                  rows={4}
                  placeholder="Share your experience..."
                />

                {/* Button */}
                <button className="px-6 py-2 bg-[#ff5252] text-white rounded-md hover:bg-[#ff3232] transition-all cursor-pointer">
                  Submit Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
