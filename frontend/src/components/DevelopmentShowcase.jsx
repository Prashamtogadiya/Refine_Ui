import React from "react";

const DevelopmentShowcase = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-6 mt-24 w-[80%] mx-auto">
      {/* Left Section - Wheel Already Invented */}
      <div className="w-full md:w-1/2 lg:w-[538px]">
        <div className="h-full flex-shrink-0 p-2 sm:p-4 rounded-2xl sm:rounded-3xl dark:bg-gray-800 bg-gray-50">
          <div className="h-[288px] bg-gray-0 dark:bg-gray-900 w-full bg-no-repeat bg-right flex flex-col rounded-lg overflow-hidden py-[23px] px-[15px] relative border-t border-gray-200 dark:border-gray-700 border-opacity-60 dark:border-opacity-60 shadow-sm">
            {/* Background Effects */}
            <div className="pointer-events-none absolute left-0 top-0 dark:opacity-35 w-full h-full bg-cover bg-right-top">
              <div className="w-full h-full bg-gradient-to-br from-yellow-300/20 via-orange-300/10 to-transparent dark:from-blue-400/20 dark:via-cyan-400/10"></div>
            </div>

            <div className="w-full h-full flex relative">
              {/* Grid Pattern */}
              <div className="pointer-events-none z-0 absolute left-0 top-0 dark:opacity-20 w-full h-full bg-repeat bg-[size:16px] dark:mix-blend-overlay opacity-30">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='16' height='16' patternUnits='userSpaceOnUse'%3e%3cpath d='M 16 0 L 0 0 0 16' fill='none' stroke='%23374151' stroke-width='0.5' opacity='0.3'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`,
                  }}
                ></div>
              </div>

              {/* Bottom Chart Lines */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="578"
                height="122"
                fill="none"
                className="absolute left-0 bottom-[29px] w-full h-[122px]"
                viewBox="0 0 578 122"
              >
                <defs>
                  <linearGradient
                    id="rows-light"
                    x1="1"
                    x2="577"
                    y1="21"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity="0.05" stopColor="#fff" />
                    <stop offset="0.15" stopOpacity="0.75" stopColor="#fff" />
                    <stop offset="1" stopOpacity="0.1" stopColor="#fff" />
                  </linearGradient>
                  <linearGradient
                    id="rows-dark"
                    x1="1"
                    x2="577"
                    y1="21"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopOpacity="0.05" />
                    <stop offset="0.15" stopOpacity="0.2" />
                    <stop offset="1" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#rows-light)"
                  className="opacity-100 dark:opacity-0"
                  d="M1 41V1l576 .038V41H1Z"
                />
                <path
                  fill="url(#rows-dark)"
                  className="opacity-0 dark:opacity-100"
                  d="M1 41V1l576 .038V41H1Z"
                />
                <path
                  className="stroke-gray-400/30 dark:stroke-gray-0 dark:mix-blend-overlay"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.5"
                  d="M1 1h576M1 41h576M1 81h576M1 121h576"
                />
              </svg>

              {/* Left Side Text Records */}
              <div className="absolute left-0 bottom-[27px] sm:left-0 text-gray-900 dark:text-gray-0 text-xs font-mono">
                <div className="space-y-6">
                  <div className="opacity-80">
                    <div className="mb-1">Record #1</div>
                  </div>
                  <div className="opacity-40">
                    <div className="mb-1">Record #2</div>
                  </div>
                  <div className="opacity-80">
                    <div className="mb-1">Record #3</div>
                  </div>
                </div>
              </div>

              {/* Right Side Context Menu */}
              <div className="absolute right-[37px] top-[17px] hidden dark:block">
                <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-4 text-white text-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Add new record</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>View</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </div>
                      <span>Edit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-gradient-to-r from-red-400 to-pink-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Light Mode Context Menu */}
              <div className="absolute right-[37px] top-[17px] block dark:hidden">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-4 text-gray-900 text-sm shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Add new record</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center text-white">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>View</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </div>
                      <span>Edit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>Delete</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Dots */}
              <div className="absolute right-0 bottom-[34px]">
                <div className="w-8 h-8 rounded-2xl bg-gray-0 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 lg:mt-10 px-4 sm:px-6">
            <h6 className="p-0 font-semibold text-base sm:text-2xl dark:text-gray-300 text-gray-900">
              Wheel? Already invented.
            </h6>
            <div className="flex items-center justify-between flex-wrap gap-4 sm:gap-8 mb-4 sm:mb-6">
              <p className="h-auto md:h-[72px] lg:h-auto p-0 mt-2 sm:mt-4 text-base dark:text-gray-400 text-gray-600">
                Start with a well-structured boilerplate, built around the
                industry's best practices.
              </p>
              <a
                href="/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="select-none group/cta-button relative no-underline rounded-full flex items-center justify-center gap-2 py-2 pr-2 pl-4 sm:py-3 sm:pr-4 sm:pl-6 text-xs sm:text-base font-semibold dark:text-cyan-400 text-blue-600 dark:bg-cyan-400/10 bg-blue-600/10 overflow-hidden transition-all duration-200 hover:scale-105"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M10.646 14.146a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L12.793 12l-2.147 2.146Z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="select-none rounded-3xl absolute left-0 top-0 w-full h-full scale-[2] origin-center transition-[opacity,transform] duration-300 ease-in-out opacity-0 group-hover/cta-button:opacity-100 group-hover/cta-button:scale-100 pointer-events-none bg-blue-100/50 dark:bg-cyan-400/20"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - 100% Pure React Code */}
      <div className="w-full md:w-1/2 lg:w-[640px]">
        <div className="h-full flex-shrink-0 p-2 sm:p-4 rounded-2xl sm:rounded-3xl dark:bg-gray-800 bg-gray-50">
          <div className="relative flex flex-col rounded-lg sm:aspect-[560/240] md:aspect-[624/240] lg:aspect-[607/299] dark:bg-gray-900 bg-gray-50 border-t border-gray-200 dark:border-gray-700 border-opacity-60 dark:border-opacity-60 shadow-sm">
            {/* Code Editor */}
            <div className="rounded-lg dark:bg-gray-900 bg-gray-0">
              <div className="text-[10px] leading-[16px] h-[268px] md:h-[299px] font-mono select-none overflow-hidden relative z-[1px] dark:text-gray-200 text-gray-900">
                <div className="p-2 space-y-1">
                  {/* Code Lines */}
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      1
                    </span>
                    <span className="text-cyan-400">import</span>
                    <span className="ml-1">React</span>
                    <span className="ml-1 text-cyan-400">from</span>
                    <span className="ml-1 text-green-400">"react"</span>
                    <span className="text-purple-400">;</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      2
                    </span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      3
                    </span>
                    <span className="text-cyan-400">import</span>
                    <span className="ml-1 text-purple-400">{"{"}</span>
                    <span className="ml-1">useList</span>
                    <span className="ml-1 text-purple-400">{"}"}</span>
                    <span className="ml-1 text-cyan-400">from</span>
                    <span className="ml-1 text-green-400">
                      "@refinedev/core"
                    </span>
                    <span className="text-purple-400">;</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      4
                    </span>
                    <span>...</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      5
                    </span>
                    <span className="text-cyan-400">export</span>
                    <span className="ml-1 text-cyan-400">const</span>
                    <span className="ml-1">List</span>
                    <span className="text-cyan-400">:</span>
                    <span className="ml-1">React</span>
                    <span className="text-purple-400">.</span>
                    <span className="text-blue-400">FC</span>
                    <span className="ml-1 text-cyan-400">=</span>
                    <span className="ml-1 text-purple-400">()</span>
                    <span className="ml-1 text-cyan-400">=</span>
                    <span className="ml-1 text-purple-400">{"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      6
                    </span>
                    <span className="ml-2 text-cyan-400">const</span>
                    <span className="ml-1 text-purple-400">{"{"}</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      7
                    </span>
                    <span className="ml-4">data</span>
                    <span className="text-cyan-400">:</span>
                    <span className="ml-1 text-purple-400">{"{"}</span>
                    <span className="ml-1">data</span>
                    <span className="text-purple-400">,</span>
                    <span className="ml-1">total</span>
                    <span className="ml-1 text-purple-400">{"},"}</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      8
                    </span>
                    <span className="ml-4">isLoading</span>
                    <span className="text-purple-400">,</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      9
                    </span>
                    <span className="ml-2 text-purple-400">{"}"}</span>
                    <span className="ml-1 text-cyan-400">=</span>
                    <span className="ml-1 text-blue-400">useList</span>
                    <span className="text-purple-400">();</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      10
                    </span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      11
                    </span>
                    <span className="ml-2 text-cyan-400">if</span>
                    <span className="ml-1 text-purple-400">(</span>
                    <span>isLoading</span>
                    <span className="text-purple-400">)</span>
                    <span className="ml-1 text-cyan-400">return</span>
                    <span className="ml-1 text-purple-400">&lt;</span>
                    <span className="text-cyan-400">div</span>
                    <span className="text-purple-400">&gt;</span>
                    <span>Loading...</span>
                    <span className="text-purple-400">&lt;/</span>
                    <span className="text-cyan-400">div</span>
                    <span className="text-purple-400">&gt;;</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      12
                    </span>
                    <span>...</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      13
                    </span>
                    <span className="ml-2 text-cyan-400">return</span>
                    <span className="ml-1 text-purple-400">(</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      14
                    </span>
                    <span className="ml-4 text-purple-400">&lt;</span>
                    <span className="text-cyan-400">div</span>
                    <span className="text-purple-400">&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="dark:text-gray-600 text-gray-500 pr-2 w-6">
                      15
                    </span>
                    <span className="ml-6 text-purple-400">&lt;</span>
                    <span className="text-cyan-400">h1</span>
                    <span className="text-purple-400">&gt;</span>
                    <span>Products</span>
                    <span className="text-purple-400">&lt;/</span>
                    <span className="text-cyan-400">h1</span>
                    <span className="text-purple-400">&gt;</span>
                  </div>
                </div>
              </div>

              {/* React Logo */}
              <div className="w-12 h-12 absolute bottom-4 right-4 rounded-lg z-0">
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="-11.5 -10.23174 23 20.46348"
                    fill="currentColor"
                  >
                    <circle cx="0" cy="0" r="2.05" />
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 lg:mt-10 px-4 sm:px-6">
            <h6 className="p-0 font-semibold text-base sm:text-2xl dark:text-gray-300 text-gray-900">
              100% Pure React code
            </h6>
            <div className="flex items-center justify-between flex-wrap gap-4 sm:gap-8 mb-4 sm:mb-6">
              <p className="p-0 mt-2 sm:mt-4 text-base dark:text-gray-400 text-gray-600">
                Don't get locked-in to proprietary, black-box solutions. With
                Refine you have always 100% control over your project.
              </p>
              <a
                href="https://github.com/refinedev/refine"
                target="_blank"
                rel="noopener noreferrer"
                className="select-none group/cta-button relative no-underline rounded-full flex items-center justify-center gap-2 py-2 pr-2 pl-4 sm:py-3 sm:pr-4 sm:pl-6 text-xs sm:text-base font-semibold dark:text-cyan-400 text-blue-600 dark:bg-cyan-400/10 bg-blue-600/10 overflow-hidden transition-all duration-200 hover:scale-105"
              >
                Refine on GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M10.646 14.146a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L12.793 12l-2.147 2.146Z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="select-none rounded-3xl absolute left-0 top-0 w-full h-full scale-[2] origin-center transition-[opacity,transform] duration-300 ease-in-out opacity-0 group-hover/cta-button:opacity-100 group-hover/cta-button:scale-100 pointer-events-none bg-blue-100/50 dark:bg-cyan-400/20"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentShowcase;
