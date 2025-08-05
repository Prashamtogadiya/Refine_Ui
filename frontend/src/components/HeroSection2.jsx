import React, { useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

const HeroSection2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tabs = [
    "CRM Application",
    "E-Commerce Application",
    "HR Application",
    "DevOps Dashboard",
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm create refine-app@latest");
  };

  return (
    <div className="flex flex-col w-full gap-4 sm:gap-12 md:gap-[59px] lg:gap-20 mt-8">
      {/* Main Hero Content */}
      <div className="px-2 mx-auto sm:px-0  flex w-[80%] relative min-h-[360px] lg:min-h-[480px] py-4">
        {/* Left Content */}
        <div className="sm:pl-10 flex flex-col justify-center gap-6 z-[1] lg:justify-between lg:py-8">
          {/* GitHub Stars Badge */}
          <a
            href="https://github.com/refinedev/refine"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start relative rounded-3xl p-px hover:no-underline w-auto bg-gray-200 dark:bg-gray-700 transform-gpu"
          >
            <div className="absolute inset-0 overflow-hidden rounded-3xl transform-gpu">
              <div className="hidden dark:block absolute -top-8 -left-8 animate-pulse w-24 h-24 rounded-full bg-orange-400 opacity-40 blur-xl"></div>
            </div>
            <div className="hidden dark:block absolute -left-3 -top-3 z-[0] w-12 h-12 blur-lg bg-orange-400 rounded-full opacity-[0.15] animate-pulse"></div>
            <div className="relative z-[1] rounded-[23px] py-[7px] pl-2 pr-4 flex gap-2 items-center justify-center bg-gray-50 dark:bg-gray-900">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-none dark:drop-shadow-lg"
              >
                <path
                  d="M8.00102 1.77396e-07C8.15222 -0.000102159 8.30043 0.0440742 8.42887 0.127529C8.55731 0.210984 8.66086 0.330385 8.72779 0.472218L10.7601 4.78205L15.3065 5.47343C15.456 5.49615 15.5965 5.56217 15.712 5.66403C15.8276 5.76589 15.9135 5.89953 15.9603 6.04985C16.007 6.20016 16.0126 6.36115 15.9765 6.51462C15.9403 6.6681 15.8639 6.80793 15.7557 6.91832L12.4664 10.2736L13.2428 15.0093C13.268 15.165 13.2511 15.325 13.1941 15.4712C13.1371 15.6174 13.0422 15.7441 12.9201 15.837C12.798 15.9299 12.6535 15.9852 12.503 15.9969C12.3524 16.0085 12.2017 15.976 12.0679 15.9029L8.00102 13.6661L3.93415 15.9029C3.80045 15.9763 3.64978 16.0092 3.49916 15.9978C3.34854 15.9864 3.20397 15.9311 3.08177 15.8383C2.95958 15.7455 2.86462 15.6188 2.80762 15.4725C2.75063 15.3262 2.73387 15.1662 2.75923 15.0104L3.53675 10.2724L0.245243 6.91832C0.136786 6.80798 0.0600411 6.66806 0.0237055 6.51442C-0.0126301 6.36078 -0.0071037 6.19957 0.0396584 6.04905C0.0864206 5.89853 0.172549 5.76472 0.288283 5.66278C0.404018 5.56084 0.544731 5.49486 0.694478 5.4723L5.24082 4.78205L7.27426 0.472218C7.34119 0.330385 7.44473 0.210984 7.57317 0.127529C7.70162 0.0440742 7.84982 -0.000102159 8.00102 1.77396e-07Z"
                  fill="#FF9933"
                />
              </svg>
              <span className="font-normal text-xs text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-orange-400 dark:to-yellow-300">
                <span className="font-semibold">32.1K</span> GitHub stars so far
              </span>
            </div>
          </a>

          {/* Main Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[48px] leading-[40px] tracking-[-0.5%] sm:text-[56px] sm:leading-[72px] sm:max-w-[588px] sm:tracking-[-2%] font-bold text-gray-900 dark:text-gray-100">
              Open-source Retool for Enterprise
            </h1>
            <p className="font-normal text-base text-balance text-gray-600 dark:text-gray-300 xs:max-w-[384px]">
              Build React-based internal tools, admin panels,
              <br /> dashboards & B2B apps with unmatched flexibility.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-start gap-4 lg:gap-6">
            <a
              className="self-start rounded-3xl text-gray-100 dark:!text-gray-900 bg-blue-500 dark:bg-cyan-400 transition-[filter] duration-150 ease-in-out hover:brightness-110 py-3 pl-3 pr-5 w-[200px] sm:w-max flex items-center justify-center gap-2 hover:!no-underline no-underline"
              href="/docs/"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.63817 4.33485C7.45968 3.87698 8.46639 3.88939 9.2762 4.36769L18.4191 9.76769C19.21 10.2348 19.7 11.0807 19.7 12C19.7 12.9193 19.21 13.7652 18.4191 14.2323L9.2762 19.6323C8.46639 20.1106 7.45968 20.123 6.63817 19.6652C5.81527 19.2065 5.3 18.343 5.3 17.4V6.6C5.3 5.65703 5.81527 4.79348 6.63817 4.33485ZM8.46252 5.74534C8.14253 5.55634 7.74213 5.55128 7.4171 5.73244C7.09346 5.91282 6.9 6.24599 6.9 6.6V17.4C6.9 17.754 7.09346 18.0872 7.4171 18.2676C7.74213 18.4487 8.14253 18.4437 8.46252 18.2547L17.6054 12.8547C17.916 12.6712 18.1 12.3452 18.1 12C18.1 11.6548 17.916 11.3288 17.6054 11.1453L8.46252 5.74534Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-base font-semibold">See Docs</span>
            </a>

            <button
              type="button"
              onClick={copyToClipboard}
              className="self-start appearance-none focus:outline-none border-none py-3 px-6 rounded-3xl bg-blue-600 dark:bg-cyan-400 bg-opacity-10 dark:bg-opacity-10 text-blue-600 dark:text-cyan-400 text-[12px] leading-5 font-mono overflow-hidden relative group/copy-button hidden sm:block hover:bg-opacity-20 dark:hover:bg-opacity-20 transition-all duration-200"
            >
              <div className="rounded-3xl absolute left-0 top-0 w-full h-full scale-[2] origin-center transition-[opacity,transform] opacity-100 duration-300 ease-in-out  group-hover/copy-button:opacity-100 group-hover/copy-button:scale-100 pointer-events-none bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900"></div>
              <span className="inline-block whitespace-pre duration-150 transition-opacity ease-in-out opacity-100 relative z-[1]">
                npm create refine-app@latest
              </span>
              <div className="z-[1] py-4 pr-4 absolute top-0 -right-8 duration-150 ease-out transition-transform">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L7 8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.70711 10.7071C7.31658 11.0976 6.68342 11.0976 6.29289 10.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right Side - Animated Grid Background */}
        <div className="hidden md:block absolute top-0 right-0">
          <div className="relative w-min">
            {/* Grid Background SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="704"
              height="536"
              viewBox="0 0 704 536"
              fill="none"
              className="bg-gray-50 dark:bg-gray-800 duration-150 ease-in-out transition-colors rounded-3xl w-[404px] h-[360px] lg:w-[690px] lg:h-[480px]"
            >
              <defs>
                <radialGradient
                  id="maskGradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -268 352 0 352 268)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".475" stopColor="#303450" />
                  <stop offset="1" stopColor="#303450" stopOpacity="0" />
                </radialGradient>
              </defs>
              <mask
                id="bgMask"
                width="704"
                height="536"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
              >
                <path fill="url(#maskGradient)" d="M0 0h704v536H0z" />
              </mask>
              <g mask="url(#bgMask)" className="animate-pulse">
                {/* Generate grid pattern */}
                {Array.from({ length: 19 }, (_, col) =>
                  Array.from({ length: 14 }, (_, row) => (
                    <rect
                      key={`grid-${col}-${row}`}
                      x={10 + col * 36}
                      y={17 + row * 36}
                      width="36"
                      height="36"
                      fill="none"
                      className="stroke-gray-300 dark:stroke-gray-600"
                      strokeWidth="1"
                    />
                  ))
                )}
              </g>
            </svg>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
              <img
                src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/landing-hero-animation/center-logo-light.png"
                alt="Refine Logo"
                className="block dark:hidden w-32 h-32"
              />
              <img
                src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/landing-hero-animation/center-logo-dark.png"
                alt="Refine Logo"
                className="hidden dark:block w-32 h-32"
              />
            </div>

            {/* Integration Cards - Top */}
            <div className="hidden lg:flex absolute left-0 top-0 bottom-0 right-0 w-full h-full py-12 px-[89px] flex-col items-start justify-between">
              <div className="w-full flex items-start justify-between">
                {/* Vite Card */}
                <div className="min-w-[207px] rounded-[64px] bg-white dark:bg-gray-900 dark:bg-opacity-50 border border-gray-300 dark:border-gray-700 flex items-center relative">
                  <div className="flex-shrink-0 w-16 h-[62px] relative p-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">V</span>
                    </div>
                  </div>
                  <div className="flex-1 py-[14px] pr-6">
                    <div className="font-bold text-gray-500 uppercase text-xs">
                      React Platform
                    </div>
                    <div className="font-medium text-xs text-gray-900 dark:text-white">
                      Vite
                    </div>
                  </div>
                </div>

                {/* Ant Design Card */}
                <div className="min-w-[207px] rounded-[64px] bg-white dark:bg-gray-900 dark:bg-opacity-50 border border-gray-300 dark:border-gray-700 flex items-center relative flex-row-reverse">
                  <div className="flex-shrink-0 w-16 h-[62px] relative p-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">A</span>
                    </div>
                  </div>
                  <div className="flex-1 py-[14px] pl-6">
                    <div className="font-bold text-gray-500 uppercase text-xs text-right">
                      UI Framework
                    </div>
                    <div className="font-medium text-xs text-gray-900 dark:text-white text-right">
                      Ant Design
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="w-full flex items-end justify-between">
                {/* Supabase Card */}
                <div className="min-w-[207px] rounded-[64px] bg-white dark:bg-gray-900 dark:bg-opacity-50 border border-gray-300 dark:border-gray-700 flex items-center relative">
                  <div className="flex-shrink-0 w-16 h-[62px] relative p-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-400 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                  </div>
                  <div className="flex-1 py-[14px] pr-6">
                    <div className="font-bold text-gray-500 uppercase text-xs">
                      Backend
                    </div>
                    <div className="font-medium text-xs text-gray-900 dark:text-white">
                      Supabase
                    </div>
                  </div>
                </div>

                {/* Auth Card */}
                <div className="min-w-[207px] rounded-[64px] bg-white dark:bg-gray-900 dark:bg-opacity-50 border border-gray-300 dark:border-gray-700 flex items-center relative flex-row-reverse">
                  <div className="flex-shrink-0 w-16 h-[62px] relative p-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">O</span>
                    </div>
                  </div>
                  <div className="flex-1 py-[14px] pl-6">
                    <div className="font-bold text-gray-500 uppercase text-xs text-right">
                      Authentication
                    </div>
                    <div className="font-medium text-xs text-gray-900 dark:text-white text-right">
                      Okta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Section */}
      <div className="bg-gray-50 dark:bg-gray-800 flex flex-col w-full rounded-2xl sm:rounded-[32px] gap-2 sm:gap-4 p-2 sm:p-4 relative group/showcase lg:overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex w-full gap-2">
          <div className="rounded-3xl overflow-y-auto flex w-full gap-2 snap-x snap-mandatory">
            <div className="rounded-3xl flex w-auto lg:w-full items-center justify-start gap-2 relative bg-white dark:bg-gray-900">
              <div
                className="hidden sm:block flex-1 rounded-3xl h-full bg-gray-200 dark:bg-gray-700 absolute left-0 top-0 transition-transform duration-150 ease-out"
                style={{
                  width: "calc((100% - (3 * 8px)) / 4)",
                  minWidth: "244px",
                  transform: `translateX(calc((100% + 8px) * ${activeTab})) translateZ(0px)`,
                }}
              />
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`z-[1] snap-start appearance-none focus:outline-none border-none flex-1 whitespace-nowrap sm:min-w-[244px] py-2 sm:py-3.5 px-4 rounded-3xl transition-colors ease-in-out duration-150 text-xs sm:text-sm ${
                    activeTab === index
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-0 sm:bg-transparent dark:sm:bg-transparent"
                      : "bg-transparent text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Demo Preview */}
         <div className="rounded-lg mx-20 overflow-hidden shadow-sm shadow-gray-200 dark:shadow-none relative group/showcase-inner">
      <div className="w-[1330px] h-[863px] transition-colors duration-150 ease-in-out bg-gray-50 dark:bg-gray-900 relative rounded-lg overflow-hidden">
        
        {/* Base Background Image - Bottom Layer with blur effect */}
        <div 
          className="absolute inset-0 z-[1] transition-all duration-300"
          style={{
            filter: hoveredIndex !== null ? 'blur(5px) ' : 'none'
          }}
        >
          <img
            src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/base-render.png"
            alt="CRM Dashboard Base"
            className="w-full h-full object-cover rounded-lg dark:opacity-100"
          />
        </div>

        {/* Overlay Images Container */}
        <div className="absolute inset-0 z-[10] pointer-events-auto">
          
          {/* Left Sidebar Navigation with HoverCard */}
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <div 
                className="absolute left-2 top-[112px] w-[212px] h-[420px] cursor-pointer transition-all duration-300 z-[20]"
                style={{
                  filter: hoveredIndex !== null && hoveredIndex !== 0 ? 'blur(5px) ' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/sidebar_navigation.png"
                  alt="Sidebar Navigation"
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                />
              </div>
            </HoverCard.Trigger>
            <HoverCard.Content
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl max-w-md z-[100]"
              sideOffset={5}
            >
              <div className="space-y-2">
                <pre className="bg-gray-800 rounded p-3 text-sm text-white overflow-x-auto">
                  {`import { useMenu } from "@refinedev/core";
import { Link } from "react-router";

const { menuItems } = useMenu();

return menuItems.map((item) => (
    <Link to={item.route}>
        {item.icon}
        {item.label}
    </Link>
));`}
                </pre>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Search Bar with HoverCard */}
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <div 
                className="absolute left-[514px] top-4 w-[322px] h-10 cursor-pointer transition-all duration-300 z-[20]"
                style={{
                  filter: hoveredIndex !== null && hoveredIndex !== 1 ? 'blur(5px) ' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/search_bar.png"
                  alt="Search Bar"
                  className="w-full h-full object-cover rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-200"
                />
              </div>
            </HoverCard.Trigger>
            <HoverCard.Content
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl max-w-md z-[100]"
              sideOffset={5}
            >
              <div className="space-y-2">
                <pre className="bg-gray-800 rounded p-3 text-sm text-white overflow-x-auto">
                  {`import { RefineKbar } from "@refinedev/kbar";

<RefineKbar />`}
                </pre>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* User Avatar with HoverCard */}
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <div 
                className="absolute right-0 top-4.5 w-13 h-9 cursor-pointer transition-all duration-300 z-[20]"
                style={{
                  filter: hoveredIndex !== null && hoveredIndex !== 2 ? 'blur(5px) ' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-11 h-11 ml-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200">
                  <span className="text-white text-xs font-semibold">U</span>
                </div>
              </div>
            </HoverCard.Trigger>
            <HoverCard.Content
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl max-w-md z-[100]"
              sideOffset={5}
            >
              <div className="space-y-2">
                <pre className="bg-gray-800 rounded p-3 text-sm text-white overflow-x-auto">
                  {`import { useGetIdentity } from "@refinedev/core";

const { data: identity } = useGetIdentity();`}
                </pre>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Number of Companies Card with HoverCard */}
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <div 
                className="absolute left-[241px] top-[105px] w-[348px] h-[154px] cursor-pointer transition-all duration-300 z-[20]"
                style={{
                  filter: hoveredIndex !== null && hoveredIndex !== 3 ? 'blur(5px) ' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/number_of_companies.png"
                  alt="Number of Companies"
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl duration-200 hover:scale-100 transition-transform"
                />
              </div>
            </HoverCard.Trigger>
            <HoverCard.Content
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl max-w-md z-[100]"
              sideOffset={5}
            >
              <div className="space-y-2">
                <pre className="bg-gray-800 rounded p-3 text-sm text-white overflow-x-auto">
                  {`import { useList } from "@refinedev/core";

const { data: { total } } = useList({
    resource: "companies"
});`}
                </pre>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Upcoming Events Card with HoverCard */}
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <div 
                className="absolute left-[242px] top-[270px] w-[347px] h-[567px] cursor-pointer transition-all duration-300 z-[20]"
                style={{
                  filter: hoveredIndex !== null && hoveredIndex !== 4 ? 'blur(5px) ' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(4)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/upcoming_events.png"
                  alt="Upcoming Events"
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 hover:scale-100 transition-transform"
                />
              </div>
            </HoverCard.Trigger>
            <HoverCard.Content
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl max-w-md z-[100]"
              sideOffset={5}
            >
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-sm">Events List Component</h3>
                <pre className="bg-gray-800 rounded p-3 text-sm text-white overflow-x-auto">
                  {`import { useList } from "@refinedev/core";

const { data } = useList({
    resource: "events",
    sorters: [
        { field: "start_date", order: "asc" },
    ],
});`}
                </pre>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Latest Activities Card with HoverCard */}
          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <div 
                className="absolute left-[607px] top-[270px] w-[715px] h-[567px] cursor-pointer transition-all duration-300 z-[20]"
                style={{
                  filter: hoveredIndex !== null && hoveredIndex !== 5 ? 'blur(5px) ' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(5)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/latest_activities.png"
                  alt="Latest Activities"
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 hover:scale-100 transition-transform"
                />
              </div>
            </HoverCard.Trigger>
            <HoverCard.Content
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl max-w-md z-[100]"
              sideOffset={5}
            >
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-sm">Activities Feed Component</h3>
                <pre className="bg-gray-800 rounded p-3 text-sm text-white overflow-x-auto">
                  {`import { useTable } from "@refinedev/core";

const { data } = useTable({
    resource: "activities",
    pagination: {
        current: 1,
        pageSize: 5,
    },
});`}
                </pre>
              </div>
            </HoverCard.Content>
          </HoverCard.Root>

          {/* Additional Visual Elements */}
          <div className="absolute inset-0 z-[5] pointer-events-none">
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 dark:to-black/5"></div>

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full opacity-30 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-2 left-2 w-2 h-2 bg-purple-500 rounded-full opacity-25 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Responsive Scroll Container for smaller screens */}
        <div className="block lg:hidden absolute inset-0 bg-gray-100 dark:bg-gray-800 z-[20] flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              CRM Dashboard
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              View on desktop for full experience
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Screen too small for optimal viewing
            </p>
          </div>
        </div>
      </div>

      {/* Demo Button */}
      <div className="flex items-center justify-center lg:-mb-4">
        <a
          href="https://example.crm.refine.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex lg:opacity-0 lg:translate-y-8 lg:group-hover/showcase-inner:opacity-100 lg:group-hover/showcase-inner:translate-y-0 duration-150 delay-75 ease-in-out transition-all hover:no-underline z-[30] py-2 sm:py-4 pl-4 pr-4 sm:pl-6 sm:pr-4 rounded-[32px] sm:rounded-[48px] items-center justify-center gap-2 bg-blue-600 dark:bg-cyan-400 bg-opacity-10 dark:bg-opacity-10 lg:bg-opacity-100 dark:lg:bg-opacity-100 text-blue-600 dark:text-cyan-400 lg:text-white dark:lg:text-gray-900 hover:brightness-125 lg:hover:scale-105"
        >
          <span className="text-xs sm:text-base font-semibold">See live demo</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.64645 10.1464C6.45118 10.3417 6.45118 10.6583 6.64645 10.8536C6.84171 11.0488 7.15829 11.0488 7.35355 10.8536L9.85355 8.35355C10.0488 8.15829 10.0488 7.84171 9.85355 7.64645L7.35355 5.14645C7.15829 4.95118 6.84171 4.95118 6.64645 5.14645C6.45118 5.34171 6.45118 5.65829 6.64645 5.85355L8.79289 8L6.64645 10.1464Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 -3.49691e-07C12.4183 -5.4282e-07 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 -1.56562e-07 12.4183 -3.49691e-07 8C-5.4282e-07 3.58172 3.58172 -1.56562e-07 8 -3.49691e-07ZM8 1C11.866 0.999999 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C0.999999 4.13401 4.13401 1 8 1Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HeroSection2;
