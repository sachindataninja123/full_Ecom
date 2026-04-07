import React, { useState } from "react";

const MyOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders] = useState([
    {
      orderId: "651f8c9a4d3b2f1a9c7e6d21",
      paymentId: "652a7b3c9e1d4f8a6c2b9d12",
      name: "Sachin Kumar",
      phone: "9643990046",
      email: "sachin@gmail.com",
      userId: "651f8c9a4d3b2f1a9c7e6d21",
      address:
        "H No 222 Street No 6 Adarsh Mohalla Maujpur Delhi near shivam medical",
      pincode: "110053",
      totalAmount: 3800,
      status: "Pending",
      date: "06 April 2026",
      products: [
        {
          id: "64fa12bc98de45ab67cd8910",
          title: "Wireless Bluetooth Headphones",
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&q=80",
          qty: 1,
          price: 2500,
        },
        {
          id: "64fa12bc98de45ab67cd8910",
          title: "USB-C Charging Cable 2m",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=80",
          qty: 2,
          price: 650,
        },
      ],
    },
    {
      orderId: "651f8c9a4d3b2f1a9c7e6d21",
      paymentId: "651f8c9a4d3b2f1a9c7e6d21",
      name: "Lorem Ipsum",
      phone: "9643990046",
      email: "lorem@gmail.com",
      userId: "651f8c9a4d3b2f1a9c7e6d21",
      address:
        "H No 222 Street No 6 Adarsh Mohalla Maujpur Delhi near shivam medical, extended address line here",
      pincode: "110053",
      totalAmount: 3800,
      status: "Delivered",
      date: "06 April 2026",
      products: [
        {
          id: "651f8c9a4d3b2f1a9c7e6d21",
          title: "Mechanical Keyboard TKL",
          image:
            "https://images.unsplash.com/photo-1595225476474-87563907a212?w=120&q=80",
          qty: 1,
          price: 3200,
        },
        {
          id: "651f8c9a4d3b2f1a9c7e6d21",
          title: "Mouse Pad XL",
          image:
            "https://images.unsplash.com/photo-1527814050087-3793815479db?w=120&q=80",
          qty: 1,
          price: 600,
        },
      ],
    },
    {
      orderId: "651f8c9a4d3b2f1a9c7e6d21",
      paymentId: "651f8c9a4d3b2f1a9c7e6d21",
      name: "Raj Sharma",
      phone: "9812345678",
      email: "raj@gmail.com",
      userId: "651f8c9a4d3b2f1a9c7e6d21",
      address:
        "H No 222 Street No 6 Adarsh Mohalla Maujpur Delhi near shivam medical.",
      pincode: "110053",
      totalAmount: 3800,
      status: "Shipped",
      date: "06 April 2026",
      products: [
        {
          id: "651f8c9a4d3b2f1a9c7e6d21",
          title: "Smart Watch Series 5",
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&q=80",
          qty: 1,
          price: 3800,
        },
      ],
    },
  ]);

  const getInitials = (name) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

   const statusStyles = {
    Pending: { badge: "bg-red-100 text-red-700", dot: "bg-red-500" },
    Delivered: { badge: "bg-green-100 text-green-700", dot: "bg-green-500" },
    Shipped: { badge: "bg-blue-100 text-blue-700", dot: "bg-blue-500" },
  };

  return (
    <section className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="container mx-auto">
        <div>
          <h1 className="text-[22px] text-gray-600 font-bold">My Orders 📦</h1>
          <p>
            <span className="text-[#ff5252] font-semibold ">
              {orders.length}
            </span>{" "}
            item(s) in your Orders
          </p>
          {/* Table */}
          <div className="bg-white border mt-6 border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-275 border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    {[
                      "Order / Payment",
                      "Customer",
                      "Email",
                      "User ID",
                      "Address",
                      "Pincode",
                      "Amount",
                      "Status",
                      "Date",
                      "Details",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left text-[12px] uppercase tracking-wider text-gray-500 font-medium px-4 py-3 whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => {
                    const st =
                      statusStyles[order.status] ?? statusStyles.Shipped;
                    return (
                      <tr
                        key={i}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                      >
                        {/* Order / Payment */}
                        <td className="px-4 py-4">
                          <p className="font-mono text-xs font-medium text-blue-700">
                            {order.orderId}
                          </p>
                          <p className="font-mono text-xs text-gray-400 mt-0.5">
                            {order.paymentId}
                          </p>
                        </td>

                        {/* Customer */}
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[11px] font-medium text-blue-800 shrink-0">
                              {getInitials(order.name)}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">
                                {order.name}
                              </p>
                              <p className="text-[11px] text-gray-400 mt-0.5">
                                {order.phone}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Email */}
                        <td className="px-4 py-4 max-w-35">
                          <span className="text-[13px] text-gray-600 break-all">
                            {order.email}
                          </span>
                        </td>

                        {/* User ID */}
                        <td className="px-4 py-4">
                          <span className="font-mono text-xs text-[#ff5252]">
                            {order.userId}
                          </span>
                        </td>

                        {/* Address */}
                        <td className="px-4 py-4 max-w-50">
                          <span className="text-xs text-gray-500 leading-relaxed">
                            {order.address}
                          </span>
                        </td>

                        {/* Pincode */}
                        <td className="px-4 py-4 font-medium text-gray-900">
                          {order.pincode}
                        </td>

                        {/* Amount */}
                        <td className="px-4 py-4">
                          <span className="text-sm font-medium text-blue-700">
                            ₹{order.totalAmount.toLocaleString("en-IN")}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${st.badge}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${st.dot}`}
                            />
                            {order.status}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="px-4 py-4 text-xs text-gray-400 whitespace-nowrap">
                          {order.date}
                        </td>

                        {/* View Details Button */}
                        <td className="px-4 py-4">
                          <button
                            onClick={() => setSelectedOrder(order)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-3.5 h-3.5"
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <rect
                                x="2"
                                y="3"
                                width="12"
                                height="10"
                                rx="1.5"
                              />
                              <path d="M5 7h6M5 10h4" />
                            </svg>
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedOrder && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={(e) =>
            e.target === e.currentTarget && setSelectedOrder(null)
          }
        >
          <div className="bg-white rounded-xl border border-gray-200 w-full max-w-md overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div>
                <h2 className="text-[17px] font-medium text-gray-900">
                  Product details
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  {selectedOrder.orderId} · {selectedOrder.paymentId}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#ff5252] hover:text-white transition-all cursor-pointer"
              >
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>

            {/* Products List */}
            <div className="p-4 flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
              {selectedOrder.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-200 shrink-0 bg-white"
                    onError={(e) => (e.target.style.background = "#f3f4f6")}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.title}
                    </p>
                    <p className="font-mono text-xs text-gray-400 mt-0.5">
                      {product.id}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-full">
                        Qty: {product.qty}
                      </span>
                      <span className="text-sm font-medium text-blue-700 ml-auto">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-[#ff5252]  cursor-pointer hover:text-white transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyOrders;
