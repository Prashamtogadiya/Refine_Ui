import React from "react";

const CommunitySection = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="not-prose w-full px-4 md:px-10">
        <h2 className="text-2xl sm:text-[32px] tracking-tight text-start p-0 dark:text-white text-gray-900">
          Feel the power of a{" "}
          <span className="font-semibold dark:text-cyan-400 dark:[text-shadow:0_0_30px_rgba(71,235,235,0.25)] text-blue-600 [text-shadow:0_0_30px_rgba(0,128,255,0.3)]">
            great community
          </span>
          .
        </h2>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-20 flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* GitHub Stars */}
          <a 
            href="https://github.com/refinedev/refine" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block not-prose p-4 sm:py-4 sm:px-10 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl no-underline hover:no-underline transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="whitespace-nowrap text-[40px] leading-[48px] sm:text-[64px] sm:leading-[72px] bg-gradient-to-r from-black via-gray-500 to-cyan-400 bg-clip-text text-transparent font-bold drop-shadow-2xl">
              32.1K
            </div>
            <div className="mt-2 sm:mt-6 text-base dark:text-gray-400 text-gray-600">
              Stars on GitHub
            </div>
          </a>

          {/* Production Projects */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block not-prose p-4 sm:py-4 sm:px-10 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl no-underline hover:no-underline transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="whitespace-nowrap text-[40px] leading-[48px] sm:text-[64px] sm:leading-[72px] bg-gradient-to-r from-black via-gray-500 to-cyan-400 bg-clip-text text-transparent font-bold drop-shadow-2xl">
              8K+
            </div>
            <div className="mt-2 sm:mt-6 text-base dark:text-gray-400 text-gray-600">
              Projects on production, including large enterprises
            </div>
          </a>

          {/* Active Developers */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block not-prose p-4 sm:py-4 sm:px-10 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl no-underline hover:no-underline transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="whitespace-nowrap text-[40px] leading-[48px] sm:text-[64px] sm:leading-[72px] bg-gradient-to-r from-black via-gray-500 to-cyan-400 bg-clip-text text-transparent font-bold drop-shadow-2xl">
              32K+
            </div>
            <div className="mt-2 sm:mt-6 text-base dark:text-gray-400 text-gray-600">
              Active developers in our open-source community
            </div>
          </a>

          {/* End Users */}
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block not-prose p-4 sm:py-4 sm:px-10 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl no-underline hover:no-underline transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="whitespace-nowrap text-[40px] leading-[48px] sm:text-[64px] sm:leading-[72px] bg-gradient-to-r from-black via-gray-500 to-cyan-400 bg-clip-text text-transparent font-bold drop-shadow-2xl">
              200K+
            </div>
            <div className="mt-2 sm:mt-6 text-base dark:text-gray-400 text-gray-600">
              End users are using apps built with Refine
            </div>
          </a>
        </div>

        {/* Investors Section */}
        <div className="w-full lg:w-[486px] not-prose flex-shrink-0 p-4 rounded-2xl sm:rounded-3xl dark:bg-gray-800 bg-gray-50">
          <img 
            className="w-full object-cover rounded-lg" 
            src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/investors-2.png" 
            alt="investors" 
            loading="lazy" 
            style={{ aspectRatio: "908 / 544" }}
          />
          <div className="mt-6 px-0 sm:px-6 text-base not-prose dark:text-gray-400 text-gray-600">
            Backed by{" "}
            <a 
              href="https://www.ycombinator.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dark:text-white text-gray-900 whitespace-nowrap no-underline hover:underline transition-all duration-200"
            >
              Y Combinator
            </a>{" "}
            (YC S23),{" "}
            <a 
              href="https://ee.500.co/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dark:text-white text-gray-900 whitespace-nowrap no-underline hover:underline transition-all duration-200"
            >
              500 Emerging Europe
            </a>{" "}
            and{" "}
            <a 
              href="https://senovo.vc/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="dark:text-white text-gray-900 whitespace-nowrap no-underline hover:underline transition-all duration-200"
            >
              Senovo
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
