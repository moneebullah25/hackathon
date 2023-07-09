"use client";

import { useState } from "react";

const QtyCounter = () => {
  const [qty, setQty] = useState<number>(1);

  return (
    <div className="flex flex-row space-x-6 justify-center items-center">
      <div
        className="flex justify-center w-10 h-10 rounded-full cursor-pointer select-none items-center bg-gray-200"
        onClick={() => {
          if (qty - 1 === 0) return;
          setQty(qty - 1);
        }}
      >
        -
      </div>
      <div>{qty}</div>
      <div
        className="flex justify-center w-10 h-10 rounded-full cursor-pointer select-none bg-gray-200 items-center border-black border-2"
        onClick={() => {
          setQty(qty + 1);
        }}
      >
        +
      </div>
    </div>
  );
};

export default QtyCounter;
