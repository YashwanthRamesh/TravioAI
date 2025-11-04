// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! Your message has been submitted.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Contact Us
            </h2>
            <p className="text-slate-600 mb-6">
              We'd love to hear from you! Whether you have questions about our
              healthcare AI tools, need support, or want to collaborate — feel
              free to reach out.
            </p>
            <p className="text-slate-700 font-semibold">
              📍 Address:
              <span className="font-normal"> Bengaluru, India</span>
            </p>
            <p className="text-slate-700 font-semibold">
              📞 Phone:
              <span className="font-normal"> +91 98765 43210</span>
            </p>
            <p className="text-slate-700 font-semibold">
              ✉️ Email:
              <span className="font-normal"> contact@TravioAI.com</span>
            </p>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-slate-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
