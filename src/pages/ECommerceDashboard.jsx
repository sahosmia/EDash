import React, { useEffect } from "react";
import { revinueDatas } from "../data/dummy";
import RevinueItem from "../components/dashboard/RevinueItem";
import PageTitle from "../components/core/PageTitle";
import { CreateButton } from "../data/component";

function ECommerceDashboard() {
  return (
    <>
      <PageTitle title="Ecommerce" />
      <div className="relative flex items-center justify-between rounded-lg p-5 sm:p-6 lg:p-7 border border-gray-200 dark:border-gray-600 bg-gray-0 pb-8 4xl:col-span-2 7xl:col-span-8 dark:bg-gray-800/30 lg:pb-9">
        <div className="2xl:max-w-[calc(100%-340px)]">
          <h2 className="mb-2 text-2xl sm:mb-3 md:text-3xl text-black dark:text-white">
            Good Morning, <br /> Cameron
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="inline-flex h-8 w-8"
            >
              <path
                fill="#fac036"
                d="M39.11 79.56c-1.1 1.03-2.21-.2-2.21-.2S18.42 59.78 17.22 58.9c-1.69-1.23-5.31-3.16-8.93.57-1.51 1.55-3.97 5 .6 10.56.99 1.2 29.78 31.54 31.46 33.18 0 0 13.3 12.94 21.35 17.81 2.23 1.35 4.74 2.78 7.67 3.78 2.92 1 6.22 1.69 9.7 1.69 3.48.04 7.09-.63 10.5-1.88 3.41-1.26 6.59-3.09 9.48-5.2.71-.54 1.43-1.08 2.1-1.66l1.94-1.6a58.67 58.67 0 0 0 3.82-3.53c2.43-2.42 4.62-5.01 6.55-7.66 1.92-2.66 3.55-5.41 4.85-8.15 1.3-2.74 2.21-5.49 2.76-8.09.58-2.59.74-5.04.65-7.18-.02-2.14-.45-3.97-.8-5.43-.4-1.46-.83-2.55-1.17-3.27-.33-.72-.51-1.1-.51-1.1-.46-1.29-.9-2.52-1.29-3.63a889.622 889.622 0 0 0-4.51-12.47l.01.03c-4.85-13.17-10.06-26.74-10.06-26.74-.79-2.39-3.7-3.22-5.84-1.68-6.18 4.44-8.07 10.92-5.89 17.83l5.59 15.32c.79 1.71-1.39 3.69-2.85 2.5-4.59-3.74-14.3-14.05-14.3-14.05-4.34-4.16-28.83-29.27-30.47-30.8-3.3-3.07-7.46-4.65-10.63-2.32-3.24 2.38-4.14 6.06-1.01 10.08.85 1.09 25.6 27.24 25.6 27.24 1.44 1.51-.26 3.65-1.85 2.18 0 0-30.79-32.12-32.18-33.62-3.15-3.42-8.21-4.17-11.21-1.35-2.93 2.75-2.86 7.26.34 10.8 1.02 1.12 22.71 24.02 31.39 33.4.58.63 1.03 1.47.17 2.26-.01.01-.88.95-2-.25-2.36-2.52-25.93-27.08-27.24-28.41-3.01-3.06-7.05-4.51-10.3-1.53-2.96 2.71-3.44 7.44-.04 10.78l28.55 30.18s.93 1.1-.11 2.07z"
              ></path>
              <path
                fill="#e48c15"
                d="m85.46 54.4 2.41 2.58s-13.79 13.31-4.39 33.75c0 0 1.22 2.59-.38 3.02 0 0-1.4.78-3-3.2 0-.01-9.49-19.42 5.36-36.15z"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="4"
                opacity="0.5"
                d="M63.28 10.2s5.81.88 11.19 6.64c5.38 5.77 7.87 13.18 7.87 13.18M77.44 3.5s4.87 2.45 8.63 8.5c3.76 6.05 4.67 13.05 4.67 13.05m-55.03 85.68s-5.86.39-12.35-4.09-10.52-11.18-10.52-11.18m18.69 25.1s-5.44.23-11.68-3.22-10.44-9.12-10.44-9.12"
              ></path>
            </svg>
          </h2>
          <p className="mb-5 text-sm leading-[1.6] text-gray-700 dark:text-gray-200 sm:mb-6 sm:text-base md:mb-8 lg:mb-10">
            Here’s What happening on your store today. See the statistics at
            once.
          </p>
          <CreateButton/>
        </div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revinueDatas.map((revinue, revinueI) => (
          <RevinueItem key={revinueI} itemData={revinue} />
        ))}
      </div>
    </>
  );
}

export default ECommerceDashboard;
