import React from 'react';

const TrustedBySection = () => {
  const companies = [
    {
      name: 'Amazon',
      logo: 'https://logos-world.net/wp-content/uploads/2020/06/Amazon-Logo.png'
    },
    {
      name: 'Autodesk',
      logo: 'https://images.seeklogo.com/logo-png/46/2/autodesk-logo-png_seeklogo-468221.png'
    },
    {
      name: 'IBM',
      logo: 'https://images.vexels.com/media/users/3/140583/isolated/svg/905dd25934b7a05516389863f7cb9417.svg'
    },
    {
      name: 'Intel',
      logo: 'https://images.seeklogo.com/logo-png/38/2/intel-new-2020-logo-png_seeklogo-386226.png'
    },
    {
      name: 'Cisco',
      logo: 'https://partnersforinnovation.org/wp-content/uploads/2021/11/cisco-logo-black-transparent.png'
    },
    {
      name: 'Meta',
      logo: 'https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
        <h3 className="text-gray-600 dark:text-gray-300 text-2xl font-medium mb-8 transition-colors duration-300">
          Trusted by developers from
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              title={company.name}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-12 w-auto object-contain max-w-24 filter dark:invert dark:brightness-0 dark:contrast-100"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.error(`Failed to load ${company.name} logo`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
        <div className=" mb-16 mt-16">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-3xl lg:text-3xl  text-gray-900 dark:text-white mb-6 transition-colors duration-300">
          The{' '}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            sweet spot
          </span>{' '}
          between low-code and full-code.
        </h1>
        
        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-full mx-auto leading-relaxed transition-colors duration-300">
          Drag-and-drop tools shine initially but collapse under the <br/>weight of complexity. 
          Refine offers comparable speed at <br/>the start and infinite scaling in the long run.
        </p>
      </div>
    </div>
  );
};

export default TrustedBySection;
