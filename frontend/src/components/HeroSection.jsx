import React from 'react';

const HeroSection = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="mx-4 sm:mx-8 pt-20 lg:pt-24 lg:mx-36 lg:pb-24">
        <div className="bg-[#C9D3E2] w-full px-6 py-6 sm:px-10 sm:py-12 relative z-[1] overflow-hidden rounded-3xl max-[375px]:rounded-none max-[375px]:w-screen max-[375px]:left-1/2 max-[375px]:-translate-x-1/2">
          {/* Content */}
          <div className="relative z-[4] ">
            <h2 className="text-2xl sm:text-[32px] sm:leading-10 tracking-[-0.02em] text-gray-600">
              The wait is over.
            </h2>
            <h2 className="text-[32px] leading-10 sm:text-[56px] sm:leading-[72px] tracking-[-0.02em] font-bold text-gray-900">
              Refine AI is here!
            </h2>
            <p className="max-w-[446px] text-gray-900 mt-4">
              Instantly transform your APIs into enterprise-grade admin panels, dashboards & internal tools.
            </p>
            <div className="flex items-center gap-10 mt-6 z-[4] relative">
              <button className="appearance-none bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white px-5 py-3 rounded-[48px] z-[4] transition-colors duration-200">
                Start for free!
              </button>
              <a className="text-indigo-600 underline z-[4] hover:text-indigo-700 transition-colors duration-200" href="/ai/">
                Learn more
              </a>
            </div>
          </div>

          {/* Noise Overlay */}
          <div className="absolute inset-0 z-[2]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
            opacity: 0.3
          }}></div>

          {/* Background Video */}
          <video 
            className="z-[1] absolute inset-0 w-full h-full object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
          >
            <source 
              type="video/mp4" 
              src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/ai-landing-page/ai-banner-bg-video.mp4"
            />
          </video>

          {/* Animated Logo Ball Video - percentage-based positioning */}
          <video 
            className="hidden md:block z-[3] absolute w-[50px] h-[50px] rounded-full object-cover"
            style={{
              top: '35%',
              right: '29%',
              transform: 'translate(25px, -25px)' // Half of width/height for center alignment
            }}
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
          >
            <source 
              type="video/mp4" 
              src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/ai-landing-page/ai-banner-logo-ball.mp4"
            />
          </video>

          {/* Background Logo Image */}
          <img 
            src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/ai-landing-page/ai-banner-logo.png" 
            alt="Refine AI Banner Logo" 
            className="hidden md:block absolute inset-0 w-full h-full object-cover z-[2]" 
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
