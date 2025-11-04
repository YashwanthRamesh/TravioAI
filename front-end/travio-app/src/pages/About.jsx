// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="https://illustrations.popsy.co/pink/searching-location-on-the-phone.svg"
              alt="About us illustration"
              className="w-80 md:w-96 drop-shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right: Text content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              About Our Mission
            </h1>
            <p className="text-slate-600 leading-relaxed mb-6">
              At TravioAI, we’re redefining how people plan their journeys. Our AI-driven travel assistant creates personalized, detailed itineraries based on your interests, time, and budget — whether you crave adventure, cultural exploration, or peaceful getaways. By combining smart technology with deep travel insights, we ensure every trip feels effortless, enjoyable, and uniquely yours.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Travel is more than just movement — it’s about discovery, connection, and experience. At TravioAI, we harness technology to make travel planning effortless.
            </p>

            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
