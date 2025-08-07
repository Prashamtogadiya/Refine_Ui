import React, { useState, useEffect } from 'react';

const IntegrationsShowcase = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Integration data with categories
  const integrations = {
    backends: [
      { name: 'Firebase', icon: '🔥', command: 'npm i refine-firebase' },
      { name: 'Ably', icon: '📡', command: 'npm i @refinedev/ably' },
      { name: 'Airtable', icon: '📊', command: 'npm i @refinedev/airtable' },
      { name: 'Appwrite', icon: '🚀', command: 'npm i @refinedev/appwrite' },
      { name: 'Directus', icon: '🎯', command: 'npm i @tspvivek/refine-directus' },
      { name: 'Elide', icon: '☁️', command: 'npm i elide-simple-rest' },
      { name: 'Elide GraphQL', icon: '🔗', command: 'npm i elide-simple-graphql' },
      { name: 'Hasura', icon: '⚡', command: 'npm i @refinedev/hasura' },
      { name: 'Supabase', icon: '🟢', command: 'npm i @refinedev/supabase' },
      { name: 'Strapi', icon: '🔷', command: 'npm i @refinedev/strapi-v4' },
      { name: 'Medusa', icon: '🐙', command: 'npm i @refinedev/medusa' },
      { name: 'REST', icon: '🌐', command: 'npm i @refinedev/simple-rest' },
      { name: 'GraphQL', icon: '📈', command: 'npm i @refinedev/graphql' },
    ],
    ui: [
      { name: 'Ant Design', icon: '🐜', command: 'npm i @refinedev/antd' },
      { name: 'Material UI', icon: '🎨', command: 'npm i @refinedev/mui' },
      { name: 'Mantine', icon: '🎪', command: 'npm i @refinedev/mantine' },
      { name: 'Chakra UI', icon: '⚡', command: 'npm i @refinedev/chakra-ui' },
      { name: 'shadcn/ui', icon: '🎭', command: 'npx shadcn-ui init' },
      { name: 'Tailwind CSS', icon: '💨', command: 'npx tailwindcss init' },
      { name: 'Headless UI', icon: '👻', command: 'npm i @headlessui/react' },
    ],
    forms: [
      { name: 'Hook Form', icon: '📝', command: 'npm i @refinedev/react-hook-form' },
    ],
    misc: [
      { name: 'Kbar', icon: '⌨️', command: 'npm i @refinedev/kbar' },
      { name: 'Next.js', icon: '▲', command: 'npm i @refinedev/nextjs-router' },
      { name: 'Remix', icon: '🎵', command: 'npm i @refinedev/remix-router' },
    ]
  };

  // Update the animation styles
  useEffect(() => {
    const styleId = 'integration-animations';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        
        .scroll-right-fast {
          animation: scrollRight 30s linear infinite;
        }
        
        .scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        
        .scroll-left-fast {
          animation: scrollLeft 30s linear infinite;
        }
        
        .scroll-container:hover .scroll-right,
        .scroll-container:hover .scroll-right-fast,
        .scroll-container:hover .scroll-left,
        .scroll-container:hover .scroll-left-fast {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const IntegrationCard = ({ item, index }) => (
    <div 
      className="group relative z-10 flex items-center justify-center gap-2 pl-4 pt-4 pb-4 pr-6 dark:bg-black bg-white rounded-full cursor-pointer transition-all duration-200 "
      onMouseEnter={() => setHoveredItem(index)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Icon */}
      <div className="text-2xl">
        {item.icon}
      </div>
      
      {/* Name */}
      <div className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
        {item.name}
      </div>
      
      {/* Tooltip */}
      <div className={`absolute z-20 top-[-48px] transition-transform origin-top duration-200 ${
        hoveredItem === index ? 'scale-100' : 'scale-0'
      }`}>
        <div className="relative text-sm dark:bg-gray-50 bg-gray-900 dark:text-gray-700 text-gray-300 rounded-full px-6 py-3 whitespace-nowrap">
          {item.command}
        </div>
        
        {/* Tooltip arrow */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="15" 
          fill="none" 
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 transition-transform origin-bottom duration-200 dark:text-gray-50 text-gray-900 ${
            hoveredItem === index ? 'scale-100' : 'scale-0'
          }`}
        >
          <path 
            fill="currentColor" 
            d="M17.73 13.664C18.238 14.5 19.089 15 20 15c.912 0 1.763-.501 2.27-1.336l3.025-4.992C26.306 7.002 28.01 7 29.833 7H40V0H0v7h10.167c1.823 0 3.527.003 4.538 1.672l3.026 4.992Z"
          />
        </svg>
      </div>
    </div>
  );

  // Update the ScrollingRow component
  const ScrollingRow = ({ items, direction = 'right', speed = 'slow' }) => {
    const animationClass = direction === 'right' 
      ? (speed === 'slow' ? 'scroll-right' : 'scroll-right-fast')
      : (speed === 'slow' ? 'scroll-left' : 'scroll-left-fast');

    return (
      <div className="relative flex  items-center justify-start overflow-hidden scroll-container h-22 mb-2">
        <div className={`flex items-center gap-[24px] ${animationClass}`} style={{ width: 'fit-content' }}>
          {/* Triple the items for smoother infinite scroll */}
          {[...items, ...items, ...items].map((item, index) => (
            <IntegrationCard key={`${item.name}-${index}`} item={item} index={`${item.name}-${index}`} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className=" mb-8 mt-24 mx-48">
        <h2 className="text-lg sm:text-3xl sm:text-balance lg:text-3xl font-medium text-gray-900 dark:text-white">
          Start <span className='text-sky-400 dark:text-green-500'>faster</span> , maintain <span className='text-sky-400 dark:text-cyan-400'>easier</span> ,
          manage <span className='text-sky-400 dark:text-red-500'>complexity</span> .
        </h2>
      </div>

      <div className="w-[80%] mx-auto relative mt-8 sm:mt-12 lg:mt-16 pb-4 md:pb-8 dark:bg-gray-900 bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden">
        
        {/* Enhanced gradient mask overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-gray-800/90 dark:via-transparent dark:to-gray-800/90 pointer-events-none z-10"></div>
        
        <div className="pt-4 md:pt-8">
          {/* First row - all backends (moving right) */}
          <ScrollingRow 
            items={integrations.backends} 
            direction="right" 
            speed="slow"
          />
          
          {/* Second row - UI libraries (moving left) */}
          <ScrollingRow 
            items={integrations.ui} 
            direction="left" 
            speed="slow"
          />
        </div>
        
        {/* Bottom section */}
        <div className="not-prose mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-10 relative z-20">
          <h6 className="p-0 font-semibold text-base sm:text-2xl dark:text-gray-300 text-gray-900">
            Seamless connectivity
          </h6>
          
          <div className="not-prose flex items-center justify-between flex-wrap gap-4 sm:gap-8">
            <p className="p-0 mt-2 sm:mt-4 text-base dark:text-gray-400 text-gray-600">
              Out-of-the box integrations for 15+ services including custom REST and GraphQL API's.
            </p>
            
            <a 
              href="/integrations/"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none group/cta-button relative no-underline rounded-full flex items-center justify-center gap-2 py-2 pr-2 pl-4 sm:py-3 sm:pr-4 sm:pl-6 text-xs sm:text-base font-semibold dark:text-cyan-400 text-blue-600 dark:bg-cyan-400/10 bg-blue-600/10 overflow-hidden transition-all duration-200 hover:scale-105"
            >
              All integrations
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
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
              
              {/* Hover effect overlay */}
              <div className="select-none rounded-3xl absolute left-0 top-0 w-full h-full scale-[2] origin-center transition-[opacity,transform] duration-300 ease-in-out opacity-0 group-hover/cta-button:opacity-100 group-hover/cta-button:scale-100 pointer-events-none bg-blue-100/50 dark:bg-cyan-400/20"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationsShowcase;
