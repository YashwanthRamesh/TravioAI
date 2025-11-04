// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-sky-500 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
           Discover Indian with AI powered itinerary Planner
          </h1>
          <p className="text-lg text-indigo-100">
            Our intelligent readmission prediction system helps tourists
            make better travel decisions — improving outcomes
            and reducing costs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
                onClick={() =>
                    document.getElementById("get-started")?.scrollIntoView({
                    behavior: "smooth",
                    })
                }
              href="#get-started"
              className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-indigo-100 transition-all"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 border border-white rounded-full hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Image or Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://illustrations.popsy.co/amber/looking-at-the-map.svg"
            alt="Healthcare illustration"
            className="w-80 md:w-96 drop-shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
