import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/store.jsx";

function Navbar() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      className={`${isDark ? "dark" : ""} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={{
        backgroundColor: isScrolled 
          ? (isDark ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)') 
          : (isDark ? 'rgba(17, 24, 39, 1)' : 'transparent'),
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="relative z-[1] p-4 sm:px-8 md:py-5">
        <div className="mx-auto flex items-center justify-between max-w-[896px] lg:max-w-[1200px]">
          {/* Logo Section */}
          <div className="w-[130px] lg:w-[200px]">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="24"
                viewBox="0 0 80 24"
                fill="none"
                className={`transition-colors duration-300 ${
                  isDark 
                    ? (isScrolled ? "text-gray-100" : "text-gray-200") 
                    : (isScrolled ? "text-gray-900" : "text-gray-900")
                }`}
              >
                {/* SVG paths remain the same */}
                <path
                  fill="currentColor"
                  d="M57.863 17.974V8.996h2.403v8.978h-2.403ZM59.07 7.838a1.28 1.28 0 0 1-.92-.368 1.214 1.214 0 0 1-.377-.894c0-.343.126-.637.378-.883a1.27 1.27 0 0 1 .92-.374c.357 0 .661.125.913.374.256.246.384.54.384.883 0 .347-.128.645-.384.894a1.262 1.262 0 0 1-.914.368ZM64.594 17.974v-5.19c.004-.386.074-.716.209-.989.139-.276.33-.487.575-.63.248-.145.534-.217.858-.217.481 0 .86.156 1.134.467.274.308.41.737.406 1.287v5.272h2.403v-5.717c0-.697-.124-1.297-.372-1.8a2.745 2.745 0 0 0-1.044-1.17c-.448-.272-.972-.408-1.574-.408-.643 0-1.19.154-1.641.462a2.49 2.49 0 0 0-.965 1.239h-.102V8.996h-2.29v8.978h2.403Z"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M73.721 17.588c.643.374 1.41.561 2.302.561.714 0 1.344-.113 1.89-.339.549-.23.996-.55 1.342-.958a3.19 3.19 0 0 0 .694-1.45l-2.222-.152a1.53 1.53 0 0 1-.362.573 1.513 1.513 0 0 1-.57.35 2.201 2.201 0 0 1-.733.117c-.402 0-.75-.087-1.043-.263a1.77 1.77 0 0 1-.683-.748c-.158-.323-.237-.707-.237-1.151v-.006H80v-.684c0-.764-.103-1.43-.31-2-.207-.572-.497-1.047-.869-1.425a3.527 3.527 0 0 0-1.298-.848 4.38 4.38 0 0 0-1.596-.286c-.85 0-1.59.195-2.223.584a3.923 3.923 0 0 0-1.46 1.631c-.347.698-.52 1.508-.52 2.432 0 .947.173 1.767.52 2.46.345.69.838 1.224 1.477 1.602Zm.38-5.01c.015-.322.095-.616.24-.882a1.8 1.8 0 0 1 1.625-.959c.35 0 .657.08.92.24.267.156.476.372.626.649.15.277.226.594.226.953H74.1Z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="M56.395 10.866v-1.87h-1.727v-.602c0-.304.07-.54.209-.708.14-.171.386-.257.739-.257.143 0 .282.014.417.041.14.027.256.057.35.088l.429-1.87c-.15-.047-.38-.1-.688-.158a5.372 5.372 0 0 0-1.01-.088c-.545 0-1.032.107-1.461.321a2.39 2.39 0 0 0-1.016.965c-.244.429-.366.968-.366 1.619v.649h-1.224v1.87h1.224v7.108h2.397v-7.108h1.727Z"
                ></path>
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M46.19 18.15c-.892 0-1.659-.188-2.302-.562a3.788 3.788 0 0 1-1.478-1.602c-.346-.693-.519-1.514-.519-2.46 0-.924.173-1.734.52-2.432a3.923 3.923 0 0 1 1.46-1.63c.632-.39 1.373-.585 2.223-.585a4.38 4.38 0 0 1 1.596.286c.497.187.93.47 1.298.848.372.378.662.853.869 1.426.207.569.31 1.235.31 1.999v.684h-5.9v.006c0 .444.078.828.236 1.151.162.324.39.573.683.748.293.176.64.263 1.043.263.267 0 .512-.039.734-.116.222-.078.411-.195.57-.351a1.53 1.53 0 0 0 .36-.573l2.223.152a3.19 3.19 0 0 1-.694 1.45c-.346.409-.793.728-1.342.958-.546.226-1.176.34-1.89.34Zm-1.922-5.571h3.637c0-.359-.075-.676-.226-.953a1.647 1.647 0 0 0-.626-.649c-.263-.16-.57-.24-.92-.24a1.8 1.8 0 0 0-1.624.96c-.146.265-.226.56-.24.882ZM32 6.003v11.97h2.443V13.73h1.783l2.188 4.244h2.697l-2.451-4.65.104-.05a3.259 3.259 0 0 0 1.439-1.309c.33-.573.496-1.257.496-2.052 0-.79-.164-1.478-.49-2.063a3.293 3.293 0 0 0-1.417-1.362c-.617-.323-1.361-.485-2.234-.485H32Zm4.101 5.693h-1.658V8.072h1.647c.47 0 .86.072 1.168.217.312.14.543.346.694.62.154.272.23.607.23 1.004 0 .394-.076.723-.23.988-.15.265-.38.464-.689.597-.308.132-.695.198-1.162.198ZM13.789.422a4 4 0 0 0-3.578 0l-8 4A4 4 0 0 0 0 8v8a4 4 0 0 0 2.211 3.578l8 4a4 4 0 0 0 3.578 0l8-4A4 4 0 0 0 24 16V8a4 4 0 0 0-2.211-3.578l-8-4ZM8 8a4 4 0 1 1 8 0v8a4 4 0 0 1-8 0V8Z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="currentColor"
                  d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                ></path>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`transition-colors duration-300 block md:hidden ${
              isDark 
                ? (isScrolled ? "text-gray-100" : "text-gray-200") 
                : (isScrolled ? "text-gray-900" : "text-gray-900")
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M4 10a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM4 16a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM5 21a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2H5Z"
              ></path>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center gap-8">
            {/* Resources Dropdown */}
            <div className="relative inline-flex items-center">
              <button
                className="inline-flex items-center text-sm leading-6 font-normal whitespace-nowrap"
                type="button"
              >
                <span className={`transition-colors duration-300 inline-block ${
                  isDark 
                    ? (isScrolled ? "text-gray-200" : "text-gray-300") 
                    : (isScrolled ? "text-gray-900" : "text-gray-900")
                }`}>
                  Resources
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition duration-300 -mr-2 ${
                    isDark 
                      ? (isScrolled ? "text-gray-400" : "text-gray-500") 
                      : (isScrolled ? "text-gray-500" : "text-gray-500")
                  }`}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M15.707 9.793a1 1 0 0 0-1.414 0L12 12.086 9.707 9.793a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Refine AI Link */}
            <a
              className={`inline-flex items-center gap-2 text-sm leading-6 font-normal transition-colors duration-300 no-underline hover:no-underline ${
                isDark 
                  ? (isScrolled ? "text-gray-200 hover:text-white" : "text-gray-300 hover:text-white") 
                  : (isScrolled ? "text-gray-900 hover:text-gray-700" : "text-gray-900 hover:text-gray-700")
              }`}
              href="/ai/"
            >
              Refine AI
              <div className="relative flex items-center justify-center rounded-full overflow-hidden p-px dark:bg-[#1b4b19] bg-[#b7dbff]">
                <div className="z-[1] absolute inset-0 dark:bg-new-badge-border-dark bg-new-badge-border-light animate-new-badge-border"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="14"
                  viewBox="0 0 31 14"
                  fill="none"
                  className="z-[2] dark:bg-[#76e0ab] bg-gray-0 rounded-full"
                >
                  <rect
                    width="31"
                    height="14"
                    x="0"
                    y="0"
                    fill="#0080ff"
                    fillOpacity="0.1"
                    rx="6.5"
                  ></rect>
                  <path
                    fill="#0080ff"
                    d="M11.433 4.182V10h-.937L7.754 6.037h-.048V10H6.652V4.182h.943l2.739 3.966h.05V4.182h1.05ZM12.582 10V4.182h3.784v.883h-2.73v1.58h2.534v.883h-2.534v1.588h2.753V10h-3.807Zm6.084 0-1.643-5.818h1.134l1.048 4.275h.054l1.12-4.275h1.03l1.123 4.278h.051l1.048-4.278h1.134L23.123 10h-1.04l-1.165-4.082h-.045L19.705 10h-1.04Z"
                  ></path>
                </svg>
              </div>
            </a>

            {/* Enterprise Link */}
            <a
              className={`inline-flex items-center gap-2 text-sm leading-6 font-normal transition-colors duration-300 no-underline hover:no-underline ${
                isDark 
                  ? (isScrolled ? "text-gray-200 hover:text-white" : "text-gray-300 hover:text-white") 
                  : (isScrolled ? "text-gray-900 hover:text-gray-700" : "text-gray-900 hover:text-gray-700")
              }`}
              href="/enterprise/"
            >
              Enterprise
            </a>

            {/* Company Dropdown */}
            <div className="relative inline-flex items-center">
              <button
                className="inline-flex items-center text-sm leading-6 font-normal whitespace-nowrap"
                type="button"
              >
                <span className={`transition-colors duration-300 inline-block ${
                  isDark 
                    ? (isScrolled ? "text-gray-200" : "text-gray-300") 
                    : (isScrolled ? "text-gray-900" : "text-gray-900")
                }`}>
                  Company
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition duration-300 -mr-2 ${
                    isDark 
                      ? (isScrolled ? "text-gray-400" : "text-gray-500") 
                      : (isScrolled ? "text-gray-500" : "text-gray-500")
                  }`}
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M15.707 9.793a1 1 0 0 0-1.414 0L12 12.086 9.707 9.793a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center justify-end gap-2 w-[314px]">
            {/* Search Button */}
            <button
              type="button"
              className={`flex items-center gap-2 text-sm transition-all duration-300 rounded-full border border-solid py-2.5 pr-2.5 pl-3 justify-between rounded-[32px] ${
                isDark 
                  ? (isScrolled ? "border-gray-600 text-gray-200" : "border-gray-700 text-gray-400") 
                  : (isScrolled ? "border-gray-300 text-gray-700" : "border-gray-300 text-gray-500")
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="w-3 h-3 md:w-4 md:h-4"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10.438 6.188a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0Zm-.909 4.049a5.25 5.25 0 1 1 .707-.707l2.68 2.679a.5.5 0 0 1-.707.707l-2.68-2.68Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-left pr-2.5 lg:pr-0">
                Search
              </span>
              <div className={`hidden lg:block py-0.5 px-1.5 rounded-2xl text-xs ${
                isDark 
                  ? (isScrolled ? "bg-gray-700 text-gray-300" : "bg-gray-700 text-gray-300") 
                  : (isScrolled ? "bg-gray-100 text-gray-500" : "bg-gray-100 text-gray-500")
              }`}>
                ⌘K
              </div>
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/refinedev/refine"
              target="_blank"
              rel="noreferrer"
              className={`flex gap-2 items-center justify-center font-normal text-sm leading-6 hover:no-underline transition-colors duration-300 w-[88px] h-10 border rounded-full border-solid ${
                isDark 
                  ? (isScrolled ? "text-gray-300 hover:text-gray-200 border-gray-600" : "text-gray-400 hover:text-gray-300 border-gray-700") 
                  : (isScrolled ? "text-gray-600 hover:text-gray-500 border-gray-300" : "text-gray-500 hover:text-gray-400 border-gray-300")
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.053 0A10.904 10.904 0 0 0 3.89 2.685 11.34 11.34 0 0 0 .142 9.472a11.48 11.48 0 0 0 1.456 7.65 11.087 11.087 0 0 0 5.964 4.86c.556.103.752-.25.752-.547v-1.918C5.23 20.202 4.58 18 4.58 18a3.012 3.012 0 0 0-1.227-1.655c-.997-.692.081-.692.081-.692.35.05.683.18.975.382.293.202.536.469.713.78.15.278.352.523.595.721a2.312 2.312 0 0 0 2.618.221c.042-.57.283-1.105.678-1.509-2.454-.284-5.03-1.253-5.03-5.539a4.415 4.415 0 0 1 1.132-3.025A4.194 4.194 0 0 1 5.224 4.7s.928-.305 3.036 1.156c1.81-.508 3.72-.508 5.531 0 2.108-1.46 3.03-1.156 3.03-1.156.406.936.455 1.993.135 2.963a4.415 4.415 0 0 1 1.132 3.026c0 4.334-2.582 5.282-5.043 5.538.264.271.468.597.598.955.13.358.182.741.155 1.122V21.4c0 .367.196.65.759.54a11.093 11.093 0 0 0 5.88-4.878 11.481 11.481 0 0 0 1.419-7.6 11.34 11.34 0 0 0-3.71-6.746A10.907 10.907 0 0 0 11.053 0Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="flex items-center w-10 h-6">
                <span>32.1K</span>
              </div>
            </a>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={handleToggleTheme}
              className={`appearance-none focus:outline-none relative w-10 h-10 rounded-full border border-solid transition-colors duration-300 overflow-hidden flex-shrink-0 group ${
                isDark 
                  ? (isScrolled ? "border-gray-600 text-gray-400" : "border-gray-700 text-gray-500") 
                  : (isScrolled ? "border-gray-300 text-gray-500" : "border-gray-300 text-gray-500")
              }`}
            >
              <div className="absolute w-full h-full flex items-center justify-center flex-shrink-0 top-10 translate-y-0 dark:-translate-y-10 duration-200 ease-in-out transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M8 5.818c1.2 0 2.182.982 2.182 2.182S9.2 10.182 8 10.182 5.818 9.2 5.818 8 6.8 5.818 8 5.818Zm0-1.454A3.638 3.638 0 0 0 4.364 8 3.638 3.638 0 0 0 8 11.636 3.638 3.638 0 0 0 11.636 8 3.638 3.638 0 0 0 8 4.364ZM.727 8.727h1.455A.73.73 0 0 0 2.909 8a.73.73 0 0 0-.727-.727H.727A.73.73 0 0 0 0 8c0 .4.327.727.727.727Zm13.091 0h1.455A.73.73 0 0 0 16 8a.73.73 0 0 0-.727-.727h-1.455a.73.73 0 0 0-.727.727c0 .4.327.727.727.727Zm-6.545-8v1.455c0 .4.327.727.727.727a.73.73 0 0 0 .727-.727V.727A.73.73 0 0 0 8 0a.73.73 0 0 0-.727.727Zm0 13.091v1.455c0 .4.327.727.727.727a.73.73 0 0 0 .727-.727v-1.455A.73.73 0 0 0 8 13.091a.73.73 0 0 0-.727.727ZM3.629 2.604a.724.724 0 1 0-1.025 1.025l.77.771A.724.724 0 1 0 4.4 3.375l-.77-.771Zm8.997 8.996a.724.724 0 1 0-1.026 1.026l.77.77a.724.724 0 1 0 1.025-1.025l-.77-.771Zm.77-7.97a.724.724 0 1 0-1.025-1.025l-.771.77A.724.724 0 1 0 12.626 4.4l.77-.77ZM4.4 12.624A.724.724 0 1 0 3.375 11.6l-.771.772a.724.724 0 1 0 1.025 1.025l.771-.77Z"
                  ></path>
                </svg>
              </div>
              <div className="absolute w-full h-full flex items-center justify-center flex-shrink-0 top-10 -translate-y-10 dark:translate-y-0 duration-200 ease-in-out transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.563 1.66a6.5 6.5 0 1 0 7.778 7.777A5.5 5.5 0 0 1 6.563 1.66ZM0 8A8 8 0 0 1 9.526.146a.75.75 0 0 1 .033 1.465A4.002 4.002 0 0 0 10.5 9.5a4.002 4.002 0 0 0 3.889-3.06.75.75 0 0 1 1.466.034A8 8 0 1 1 0 8Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
