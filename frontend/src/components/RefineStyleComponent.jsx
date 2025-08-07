import React, { useState, useEffect } from 'react';

const SweetSpotInteractiveSection = () => {
  const [activeTab, setActiveTab] = useState(2); // Charts is active by default (index 2)

  const features = [
    {
      name: 'Tables',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
          <path fill="currentColor" d="M6 6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6ZM5 12a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5ZM12 7a1 1 0 0 1 1-1h5a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V7ZM13 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a2 2 0 0 0 2-2v-3a1 1 0 0 0-1-1h-6Z"></path>
        </svg>
      ),
      uiImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-ui-light.png',
      codeImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-code.png'
    },
    {
      name: 'List',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
          <path fill="currentColor" d="M7.5 6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3h-6ZM7.5 10.5a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 1 0 0-3h-9ZM7.5 15a1.5 1.5 0 1 0 0 3h3a1.5 1.5 0 1 0 0-3h-3Z"></path>
        </svg>
      ),
      uiImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-ui-light.png',
      codeImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-code.png'
    },
    {
      name: 'Charts',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="dark:text-[#F9D51F] text-[#FF9F1A]">
          <path fill="currentColor" d="M10 5.5A1.5 1.5 0 0 1 11.5 4h1A1.5 1.5 0 0 1 14 5.5V17h-4V5.5ZM9 8.5A1.5 1.5 0 0 0 7.5 7h-1A1.5 1.5 0 0 0 5 8.5V16a1 1 0 0 0 1 1h3V8.5ZM19 19a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1ZM19 11.5a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5V17h3a1 1 0 0 0 1-1v-4.5Z"></path>
        </svg>
      ),
      uiImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-ui-light.png',
      codeImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-code.png'
    },
    {
      name: 'Forms',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
          <path fill="currentColor" fillRule="evenodd" d="M8 5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1Zm0 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H9Z" clipRule="evenodd"></path>
          <path fill="currentColor" d="M13 4a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Z"></path>
        </svg>
      ),
      uiImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-ui-light.png',
      codeImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-code.png'
    },
    {
      name: 'Wizards',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
          <path fill="currentColor" d="M15.77 11.964a.75.75 0 0 0 .92-.419l.666-1.498a.665.665 0 0 1 .534-.391l1.443-.16a.75.75 0 0 0 .447-1.276l-1.2-1.201a.665.665 0 0 1-.18-.615l.332-1.491a.75.75 0 0 0-1.13-.799l-1.25.781a.665.665 0 0 1-.704 0l-1.25-.781a.75.75 0 0 0-1.13.799l.331 1.491a.665.665 0 0 1-.179.615l-1.2 1.2a.75.75 0 0 0 .447 1.276l1.443.16a.665.665 0 0 1 .534.392l.666 1.498a.747.747 0 0 0 .46.419ZM11.344 9.827a5.016 5.016 0 0 0 2.829 2.829l-6.759 6.758a2 2 0 1 1-2.828-2.828l6.758-6.759Z"></path>
        </svg>
      ),
      uiImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-ui-light.png',
      codeImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-code.png'
    },
    {
      name: 'Authentication',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-500">
          <path fill="currentColor" fillRule="evenodd" d="m12 7.077-3.974 1.59c.155 2.038.99 4.083 1.956 5.694.532.886 1.084 1.607 1.543 2.094.188.2.349.347.475.447V7.077Zm.743-2.934a2 2 0 0 0-1.486 0l-5 2A2 2 0 0 0 5 8c0 2.992 1.179 5.852 2.41 7.904.624 1.04 1.302 1.94 1.932 2.609a7 7 0 0 0 .994.89c.244.175.864.597 1.664.597.8 0 1.42-.422 1.664-.597.346-.247.683-.56.994-.89.63-.668 1.308-1.57 1.932-2.609C17.821 13.852 19 10.992 19 8a2 2 0 0 0-1.257-1.857l-5-2Z" clipRule="evenodd"></path>
        </svg>
      ),
      uiImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-ui-light.png',
      codeImage: 'https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-code.png'
    }
  ];

  // Auto-rotate functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className=" mx-24 mt-8 sm:mt-12 lg:mt-20">
      <div className="select-none relative h-[752px] sm:h-[874px] md:h-[984px] lg:h-[688px] pt-4 sm:pt-10 lg:pt-20 pb-4 lg:pb-0 pl-4 sm:pl-10 dark:bg-gray-800 bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background glow effect */}
        <div 
          className="absolute inset-0 z-0 bg-gradient-radial from-yellow-200/30 via-yellow-100/20 to-transparent dark:from-yellow-400/20 dark:via-yellow-600/10 dark:to-transparent"
          style={{ 
            backgroundRepeat: 'repeat, no-repeat',
            opacity: 1,
            backgroundSize: '800px 600px',
            backgroundPosition: 'center 20%'
          }}
        ></div>

        <div className="relative z-[1] h-full w-full flex flex-col lg:grid lg:grid-cols-12">
          {/* Left Content */}
          <div className="pr-6 sm:pr-0 sm:max-w-[540px] md:max-w-[760px] lg:max-w-[416px] lg:col-span-5 lg:mt-16">
            <h3 className="text-base sm:text-xl font-semibold dark:text-gray-300 text-gray-700">
              Business applications not only share fundamental UI elements, but also the underlying logic.
            </h3>
            
            <p className="mt-6 text-base dark:text-gray-400 text-gray-600">
              Stop writing repetitive code for CRUD, security and state management. 
              Let Refine automatically transform your UI elements to enterprise-grade:
            </p>

            {/* Feature Buttons */}
            <div className="mt-4 sm:mt-10 w-max grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 sm:gap-x-2 gap-y-4">
              {features.map((feature, index) => (
                <button
                  key={feature.name}
                  onClick={() => setActiveTab(index)}
                  className={`appearance-none focus:outline-none cursor-pointer w-max flex items-center justify-start gap-1 px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                    activeTab === index
                      ? 'dark:bg-gray-900 bg-gray-0'
                      : 'dark:bg-gray-900/50 bg-gray-0/50'
                  }`}
                >
                  <div>{feature.icon}</div>
                  <div className={`${
                    activeTab === index 
                      ? 'dark:text-gray-0 text-gray-900' 
                      : 'dark:text-gray-400 text-gray-600'
                  }`}>
                    {feature.name}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - UI Preview */}
          <div className="relative h-full mt-4 sm:mt-[72px] lg:mt-0 flex lg:col-start-7 lg:col-end-13">
            <div className="w-full h-full z-[1] lg:absolute top-0 right-0">
              {/* UI Images */}
              {features.map((feature, index) => (
                <img
                  key={`ui-${index}`}
                  src={feature.uiImage}
                  alt={`UI of refine - ${feature.name}`}
                  className={`block object-cover object-left-top w-full md:w-[874px] lg:w-full h-full lg:h-[464px] md:pl-20 lg:pl-0 absolute top-0 right-0 transition-[transform,opacity] duration-500 ease-in-out ${
                    activeTab === index
                      ? 'delay-300 translate-x-0 opacity-100'
                      : 'translate-x-full opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Code Preview */}
            {features.map((feature, index) => (
              <div
                key={`code-${index}`}
                className={`block z-[112] w-[328px] sm:w-[488px] absolute bottom-0 sm:bottom-[4px] lg:bottom-[78px] -left-2 lg:-left-20 rounded-xl dark:bg-gray-900 bg-gray-0 shadow-2xl transition-[transform,opacity] duration-500 ease-in-out ${
                  activeTab === index
                    ? 'delay-300 translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                }`}
              >
                <img
                  src={feature.codeImage}
                  alt={`Code of refine - ${feature.name}`}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetSpotInteractiveSection;
