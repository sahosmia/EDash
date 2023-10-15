import React from "react";
import { Link } from "react-router-dom";

export default function BreadCumbList({
  parentUrl,
  parentTitle,
  pageUrl,
  pageTitle,
}) {
  return (
    <div className="inline-flex items-center gap-2.5 flex-wrap">
      <Link
        role="button"
        className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-500 last:text-gray-500 font-medium last:pointer-events-none"
        to="/"
      >
        E-Commerce
      </Link>
      <span className="h-1 w-1 rounded-full bg-gray-300"></span>
      <Link
        role="button"
        className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-500 last:text-gray-500  font-medium last:pointer-events-none"
        to={parentUrl}
      >
        {parentTitle}
      </Link>
      <span className="h-1 w-1 rounded-full bg-gray-300"></span>
      <Link
        role="button"
        className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-500 last:text-gray-500  font-medium last:pointer-events-none"
        to={pageUrl}
      >
        {pageTitle}
      </Link>
    </div>
  );
}
