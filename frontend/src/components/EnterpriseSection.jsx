import React from "react";

const EnterpriseSection = () => {
  return (
    <div className="not-prose w-[82%] mx-auto px-4 md:px-10">
      <h2 className="text-2xl sm:text-[32px] sm:leading-[40px] tracking-tight text-start p-0 dark:text-white text-gray-900">
        Enterprise developers{" "}
        <span className="font-sans text-[#FE251B] [text-shadow:0_0_30px_rgba(254,37,27,0.3)]">
          ❤️
        </span>{" "}
        <span className="font-semibold dark:text-cyan-400 dark:[text-shadow:0_0_30px_rgba(71,235,235,0.25)] text-blue-600 [text-shadow:0_0_30px_rgba(0,128,255,0.3)]">
          Refine
        </span>
        .
      </h2>
      <p className="mt-4 sm:mt-6 max-w-md text-base dark:text-gray-400 text-gray-600">
        Refine is designed to target the specific pain points of larger organizations by giving top priority to{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          security
        </span>
        .
      </p>
    </div>
  );
};

export default EnterpriseSection;
