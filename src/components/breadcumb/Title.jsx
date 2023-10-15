import React from "react";

export default function Title({ title }) {
  return (
    <h2 className="mb-2 text-[22px] lg:text-2xl 4xl:text-[26px] dark:text-gray-100">
      {title}
    </h2>
  );
}
