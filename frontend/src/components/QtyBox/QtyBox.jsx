import React from "react";
const QtyBox = () => {
  const [qty, setQty] = React.useState(1);

  return (
    <div className="flex items-center gap-3 mt-8">

      <span className="font-semibold text-gray-800">Qty</span>

      <div className="flex items-center gap-2">
        <button
          onClick={() => qty > 1 && setQty(qty - 1)}
          className="w-9 h-9 rounded-md border flex items-center justify-center hover:bg-[#ff5252]  hover:text-white transition-all  text-[22px]"
        >
          −
        </button>

        <span className="min-w-8 text-center font-semibold text-lg">
          {qty}
        </span>

        <button
          onClick={() => setQty(qty + 1)}
          className="w-9 h-9 rounded-md border flex items-center justify-center hover:bg-[#ff5252] text-[22px]  hover:text-white transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QtyBox