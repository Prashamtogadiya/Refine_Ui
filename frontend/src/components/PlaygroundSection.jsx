import React from "react";

const PlaygroundSection = () => {
  return (
    <div 
      id="playground" 
      className="flex flex-col w-[80%] mx-auto gap-8 sm:gap-12 md:gap-8" 
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-10">
        <h2 className="text-2xl sm:text-[32px] sm:leading-[40px] font-bold text-gray-900 dark:text-white">
          Get started now!
        </h2>
        <p className="text-base font-normal text-gray-600 dark:text-gray-400 sm:max-w-[446px]">
          Choose your way to scaffold your project and start developing in seconds.
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full rounded-2xl md:rounded-3xl relative overflow-hidden transition-[min-height,height] duration-300 ease-out">
        {/* Desktop Background Elements (Hidden on mobile) */}
        <div className="hidden w-full items-stretch h-auto md:flex">
          <div className="flex-1 bg-white dark:bg-gray-900 opacity-0 transition-[background-color,background,opacity] duration-150 ease-in-out" />
          
          {/* Iframe Container (Hidden/Collapsed on Desktop) */}
          <div className="box-content flex-shrink-0 rounded-2xl md:rounded-3xl bg-gray-50 dark:bg-gray-800 border border-solid transition-[border-color,width,height,opacity,background-color] mx-auto duration-300 ease-in-out overflow-hidden scrollbar-hidden pointer-events-none select-none md:border-transparent md:opacity-0 md:h-0 md:w-full">
            <iframe 
              src="https://refine.new/embed-form" 
              className="scrollbar-hidden transition-opacity duration-300 delay-300 opacity-0 w-full h-full border-none rounded-2xl md:rounded-3xl"
              title="Refine Playground"
            />
          </div>
          
          <div className="flex-1 bg-white dark:bg-gray-900 opacity-0 transition-[background-color,background,opacity] duration-150 ease-in-out" />
        </div>

        {/* Options Container */}
        <div className="relative flex flex-col md:flex-row w-full transition-[transform,opacity,margin-bottom] duration-300 ease-in-out">
          {/* Browser Option */}
          <div className="flex-1 rounded-2xl md:rounded-3xl md:rounded-tr-none md:rounded-br-none flex flex-col gap-6 sm:gap-10 pt-4 sm:pt-10 md:pt-16 px-4 sm:px-10 pb-14 sm:pb-20 md:pb-16 bg-gray-100 dark:bg-gray-800">
            <p className="text-base sm:text-xl md:text-base lg:text-xl font-semibold text-gray-600 dark:text-gray-400 md:max-w-[318px] lg:max-w-[446px]">
              Use our online GUI to create, customize, and download.
            </p>
            
            <button 
              type="button" 
              className="appearance-none focus:outline-none self-start rounded-3xl text-white dark:text-gray-900 bg-blue-600 dark:bg-cyan-400 py-3 px-6 flex items-center justify-center gap-2 hover:brightness-110 transition-[filter] duration-150 ease-in-out"
            >
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M6.63817 4.33485C7.45968 3.87698 8.46639 3.88939 9.2762 4.36769L18.4191 9.76769C19.21 10.2348 19.7 11.0807 19.7 12C19.7 12.9193 19.21 13.7652 18.4191 14.2323L9.2762 19.6323C8.46639 20.1106 7.45968 20.123 6.63817 19.6652C5.81527 19.2065 5.3 18.343 5.3 17.4V6.6C5.3 5.65703 5.81527 4.79348 6.63817 4.33485ZM8.46252 5.74534C8.14253 5.55634 7.74213 5.55128 7.4171 5.73244C7.09346 5.91282 6.9 6.24599 6.9 6.6V17.4C6.9 17.754 7.09346 18.0872 7.4171 18.2676C7.74213 18.4487 8.14253 18.4437 8.46252 18.2547L17.6054 12.8547C17.916 12.6712 18.1 12.3452 18.1 12C18.1 11.6548 17.916 11.3288 17.6054 11.1453L8.46252 5.74534Z" 
                  fill="currentColor"
                />
              </svg>
              <span className="text-base font-semibold">Try it in your browser</span>
            </button>
          </div>

          {/* Divider */}
          <div className="h-4 md:h-full w-full md:w-0 relative flex-shrink-0">
            <div className="hidden md:block absolute -left-2 skew-x-[14deg] top-0 h-[272px] w-2 bg-white dark:bg-gray-900" />
            <div className="absolute -top-6 left-8 md:top-32 md:-left-1 md:-translate-x-1/2 md:-translate-y-1/2 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 w-16 h-16 md:w-[78px] md:h-[78px] rounded-full text-base uppercase flex items-center justify-center">
              or
            </div>
          </div>

          {/* Terminal Option */}
          <div className="flex-1 rounded-2xl md:rounded-3xl flex flex-col md:rounded-tl-none md:rounded-bl-none pb-4 sm:pb-10 md:pb-16 px-4 sm:px-10 pt-14 sm:pt-20 md:pt-16 bg-gray-100 dark:bg-gray-800 md:items-end">
            <div className="md:max-w-[318px] lg:max-w-[446px] flex flex-col gap-6 sm:gap-10">
              <p className="text-base sm:text-xl md:text-base lg:text-xl font-semibold text-gray-600 dark:text-gray-400 lg:max-w-[446px]">
                Run the npm command in Terminal and follow the wizard instructions.
              </p>
              
              <button 
                type="button" 
                className="self-start appearance-none focus:outline-none border-none py-3 px-6 rounded-3xl bg-blue-600/10 dark:bg-cyan-400/10 text-blue-600 dark:text-cyan-400 text-xs leading-6 font-mono overflow-hidden relative group"
              >
                <div className="rounded-3xl absolute left-0 top-0 w-full h-full scale-[2] origin-center transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100 pointer-events-none bg-gradient-to-r from-blue-500/20 to-cyan-400/20 dark:from-cyan-400/20 dark:to-blue-500/20" />
                
                <span className="inline-block whitespace-pre duration-150 transition-opacity ease-in-out opacity-100 relative z-[1]">
                  <span className="text-gray-500 dark:text-white">$</span>
                  <span> npm create refine-app@latest</span>
                </span>
                
                <div className="z-[1] py-4 pr-4 absolute top-0 -right-8 duration-150 ease-out transition-transform">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
      </div>
    </div>
  );
};

export default PlaygroundSection;
