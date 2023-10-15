import React from "react";

export default function ExportButton() {
  return (
    <button
      className="inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm h-10 rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 w-full lg:w-auto dark:text-white"
      type="button"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 256 256"
        className="me-1.5 h-[17px] w-[17px]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M47.51,112.49a12,12,0,0,1,17-17L116,147V32a12,12,0,0,1,24,0V147l51.51-51.52a12,12,0,0,1,17,17l-72,72a12,12,0,0,1-17,0ZM216,204H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
      </svg>
      Export
    </button>
  );
}
