import React, { useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useStateContext } from "../../contexts/ContextProvider";

function SearchCard() {
  const { setSearchCard } = useStateContext();

  return (
    <>
      <IoClose
        className="absolute top-4 right-4"
        onClick={() => setSearchCard(false)}
      />
      <div className="pb-5">
        <h6 className="text-gray-400 font-semibold pb-2 text-xs uppercase">
          Recent Search
        </h6>
        <ul className="flex gap-2">
          <li className="text-xs font-medium rounded-full px-3 py-1 text-white bg-gray-300 bg-half-transparent ">
            Bangladesh
          </li>
          <li className="text-xs font-medium rounded-full px-3 py-1 text-white bg-gray-300 bg-half-transparent">
            html
          </li>
        </ul>
      </div>
      <div className="pb-5">
        <h6 className="text-gray-400 font-semibold pb-2 text-xs uppercase">
          Category
        </h6>
        <ul className="flex flex-col gap-2">
          <li className="text-sm font-medium  py-1 text-neutral-800 ">
            Home Appliance
          </li>
          <li className="text-sm font-medium  py-1 text-neutral-800 ">
            Sports Instument
          </li>
          <li className="text-sm font-medium  py-1 text-neutral-800 ">
            Home Appliance
          </li>
          <li className="text-sm font-medium  py-1 text-neutral-800 ">
            Sports Instument
          </li>
        </ul>
      </div>
      <div className="pb-5">
        <h6 className="text-gray-400 font-semibold pb-2 text-xs uppercase">
          Page
        </h6>
        <ul className="flex flex-col gap-2">
          <li className="text-sm font-medium  py-1 text-neutral-800 ">
            Product
          </li>
          <li className="text-sm font-medium  py-1 text-neutral-800 ">
            User List
          </li>
          <li className="text-sm font-medium  py-1 text-neutral-800 ">
            Product
          </li>
          <li className="text-sm font-medium  py-1 text-neutral-800 ">
            User List
          </li>
        </ul>
      </div>
    </>
  );
}

export default SearchCard;
