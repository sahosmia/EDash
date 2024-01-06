import React from "react";
import { Link } from "react-router-dom";

export default function BackButton({ url }) {
  return (
    <Link
      to={url}
      className="inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm h-10 rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 w-full lg:w-auto dark:text-white"
      type="button"
    >
    
      Back
    </Link>
  );
}
