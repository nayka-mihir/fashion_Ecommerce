import React from "react";

function SizeAndAction() {
  return (
    <div>
        <div>

      <div>
        Select Size <span>Size guide ›</span>
      </div>
      <div className="flex gap-3 text-lg font-bold">
        <button className="p-2 px-3 border rounded-lg">XS</button>
        <button className="p-2 px-3 border rounded-lg">M</button>
        <button className="p-2 px-3 border rounded-lg">S</button>
        <button className="p-2 px-3 border rounded-lg">L</button>
        <button className="p-2 px-3 border rounded-lg">XL</button>
        <button className="p-2 px-3 border rounded-lg">2XL</button>
        <button className="p-2 px-3 border rounded-lg">3XL</button>
      </div>
      <div className="p-2">Model is wearing size M. For a relaxed fit choose one size up.</div>
        </div>

        <div className="py-4 px-2 flex gap-5">
            <button className="bg-[#f6b734] p-2 px-3 font-medium rounded-xl">ADD TO BAG</button>
            <button className="p-2 px-3 border rounded-sm">♡</button>
        </div>
    </div>
  );
}

export default SizeAndAction;
