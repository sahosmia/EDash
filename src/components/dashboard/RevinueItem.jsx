import React from "react";
import Progressbar from "../core/Progressbar";
function RevinueItem({ itemData }) {
  return (
    <div className="bg-white p-4 rounded shadow flex items-center justify-between">
      <div>
        <h4 className="font-bold text-sm text-gray-400 pb-5">{itemData.title}</h4>
        <h3
          className="text-xl md:text-2xl lg:text-3xl  font-bold"
          style={{ color: `${itemData.color}` }}
        >
          {itemData.val}
        </h3>
      </div>
      <div className="w-24">
        <Progressbar percentage={itemData.progressVal} color={itemData.color} />
      </div>
    </div>
  );
}

export default RevinueItem;
