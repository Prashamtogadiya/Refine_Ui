import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I find CRUD boring, but Refine makes it fun for developers again!",
      author: "Zeno Rocha",
      title: "CEO - Resend",
      image: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/zeno-rocha.png",
      url: "https://twitter.com/zenorocha"
    },
    {
      quote: "Refine perfectly aligns with the philosophy of React Hook Form, and they work seamlessly together.",
      author: "Beier Luo",
      title: "Author of React Hook Form",
      image: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/beier-luo.png",
      url: "https://twitter.com/HookForm"
    },
    {
      quote: "Refine has codemod support for major version transitions, making it easy for users to integrate new versions into their existing codebases seamlessly.",
      author: "Daniel Del Core",
      title: "Sr. Software Engineer at Atlassian",
      image: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/testimonials/daniel-del-core.png",
      url: "https://twitter.com/danieldelcore"
    }
  ];

  const TestimonialCard = ({ testimonial, className = "" }) => (
    <div className={`border dark:border-gray-700 border-gray-200 rounded-3xl h-auto ${className}`}>
      <div className="not-prose h-full flex flex-col justify-between gap-6 p-10">
        <div className="text-base dark:text-white text-gray-900">
          {testimonial.quote}
        </div>
        <a 
          href={testimonial.url}
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex gap-4 items-center appearance-none no-underline hover:no-underline transition-all duration-200"
        >
          <img 
            src={testimonial.image}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col">
            <div className="text-sm dark:text-gray-400 text-gray-600">
              {testimonial.author}
            </div>
            <div className="text-sm dark:text-gray-400 text-gray-600">
              {testimonial.title}
            </div>
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-[80%] mx-auto mt-16 flex flex-col items-center">
      <div className="not-prose w-full px-4 md:px-10">
        <h2 className="text-2xl sm:text-[32px] tracking-tight text-start p-0 dark:text-white text-gray-900">
          The{" "}
          <span className="font-semibold dark:text-cyan-400 dark:[text-shadow:0_0_30px_rgba(71,235,235,0.25)] text-blue-600 [text-shadow:0_0_30px_rgba(0,128,255,0.3)]">
            difference
          </span>{" "}
          that Refine makes
        </h2>
      </div>

      <div className="mt-8 sm:mt-12 lg:mt-20 grid grid-cols-12 gap-6 items-stretch">
        {/* Desktop (lg) - 3 columns */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`desktop-${index}`}
            testimonial={testimonial}
            className="block md:hidden lg:block col-span-full lg:col-span-4"
          />
        ))}

        {/* Tablet (md) - 2 columns, only show first 2 testimonials */}
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <TestimonialCard
            key={`tablet-${index}`}
            testimonial={testimonial}
            className="hidden md:block lg:hidden col-span-6"
          />
        ))}
      </div>

      {/* Show More Button */}
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cursor-pointer mt-6 select-none group relative no-underline rounded-full flex items-center justify-center gap-2 py-2 pr-2 pl-4 sm:py-3 sm:pr-4 sm:pl-6 text-xs sm:text-base font-semibold dark:text-cyan-400 text-blue-600 dark:bg-cyan-400/10 bg-blue-600/10 overflow-hidden hover:no-underline transition-all duration-200"
      >
        Show more
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path 
            fill="currentColor" 
            d="M10.354 10.646a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L12.5 12.793l-2.146-2.147Z"
          />
          <path 
            fill="currentColor" 
            fillRule="evenodd" 
            d="M20.5 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" 
            clipRule="evenodd"
          />
        </svg>
        
        {/* Hover effect background */}
        <div className="select-none rounded-3xl absolute left-0 top-0 w-full h-full scale-[2] origin-center transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100 pointer-events-none bg-gradient-to-r from-blue-500/20 to-cyan-400/20 dark:from-cyan-400/20 dark:to-blue-500/20" />
      </a>
    </div>
  );
};

export default TestimonialsSection;
