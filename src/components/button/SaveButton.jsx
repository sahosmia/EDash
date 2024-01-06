import React from "react";
import { Link } from "react-router-dom";

export default function SaveButton() {
  return (
    <button type="submit">
      <span className="inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm h-10 rounded-md border border-transparent focus-visible:ring-offset-2 bg-gray-900 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0 w-full lg:w-auto dark:bg-gray-800 text-white">
        Save
      </span>
    </button>
  );
}
