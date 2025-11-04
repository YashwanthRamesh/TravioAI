// src/components/GetStarted.jsx
import React, { useState } from "react";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    destination: "",
    preferredPlace: "",
    startDate: "",
    endDate: "",
    travelType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      `Generating itineraries for ${formData.destination} from ${formData.startDate} to ${formData.endDate}!`
    );
  };

  return (
    <section id="get-started" className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Get Started With Your Journey ✈️
          </h2>
          <p className="text-slate-600">
            Tell us your preferences and we’ll create your perfect travel
            itinerary using AI.
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Destination State */}
          <div>
            <label
              htmlFor="destination"
              className="block text-slate-700 font-medium mb-2"
            >
              Destination State
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Kerala"
              className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Preferred Place */}
          <div>
            <label
              htmlFor="preferredPlace"
              className="block text-slate-700 font-medium mb-2"
            >
              Preferred Place
            </label>
            <input
              type="text"
              id="preferredPlace"
              name="preferredPlace"
              value={formData.preferredPlace}
              onChange={handleChange}
              placeholder="e.g. Munnar, Kochi, Wayanad"
              className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label
              htmlFor="startDate"
              className="block text-slate-700 font-medium mb-2"
            >
              Starting Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label
              htmlFor="endDate"
              className="block text-slate-700 font-medium mb-2"
            >
              Ending Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Travel Type */}
          <div className="md:col-span-2">
            <label
              htmlFor="travelType"
              className="block text-slate-700 font-medium mb-2"
            >
              Travel Type
            </label>
            <select
              id="travelType"
              name="travelType"
              value={formData.travelType}
              onChange={handleChange}
              className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select travel type</option>
              <option value="solo">Solo</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="couple">Couple</option>
              <option value="business">Business</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all"
            >
              Generate Itineraries
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
