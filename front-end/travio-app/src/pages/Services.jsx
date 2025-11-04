// src/pages/Services.jsx
import React from "react";

export default function Services() {
  const services = [
    {
      title: "Predictive Analytics",
      desc: "Leverage AI models to predict patient readmissions and help healthcare providers take proactive measures.",
      icon: "💡",
    },
    {
      title: "Medical Data Insights",
      desc: "Turn raw patient records into actionable insights using advanced data visualization and machine learning tools.",
      icon: "📊",
    },
    {
      title: "AI-Powered Diagnostics",
      desc: "Support clinical decision-making with ML models trained to identify patterns in medical imaging and test results.",
      icon: "🩺",
    },
    {
      title: "Healthcare Automation",
      desc: "Automate scheduling, follow-ups, and patient engagement through smart AI-driven workflows.",
      icon: "⚙️",
    },
    {
      title: "Model Calibration & Validation",
      desc: "Ensure your healthcare AI models provide reliable, calibrated probability estimates for real-world use.",
      icon: "✅",
    },
    {
      title: "Clinical Data Integration",
      desc: "Integrate EHR, lab, and sensor data seamlessly for unified patient intelligence and improved outcomes.",
      icon: "🔗",
    },
  ];

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Our Services
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16">
          Explore the innovative AI-driven solutions we offer to transform healthcare and enable better patient outcomes.
        </p>

        {/* Grid of service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
