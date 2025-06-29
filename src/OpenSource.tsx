import React from "react";

const openSourceButtons = [
  { label: "Altair GraphQL", color: "bg-gray-200 text-gray-800" },
  { label: "Godot Engine", color: "bg-gray-300 text-gray-800" },
  { label: "PixiJS", color: "bg-gray-400 text-gray-900" },
  { label: "Outlier AI", color: "bg-gray-500 text-white" },
  { label: "Firebase", color: "bg-gray-700 text-white" },
];

const OpenSource = () => (
  <section className="container mx-auto px-4 py-12">
    <div className="text-left space-y-8">
      <h2 className="text-3xl font-bold ubuntu-font" style={{ color: '#55575b' }}>Open Source</h2>
      {/* Skewed, grayscale buttons row, always full text */}
      <div className="flex items-center mt-8 overflow-x-auto">
        <div className="skew-btn-group flex">
          {openSourceButtons.map((btn) => (
            <a
              key={btn.label}
              href="#"
              className={`skew-btn ${btn.color} font-bold px-8 py-4 mr-4 transition-all duration-300 overflow-hidden`}
            >
              <span className="skew-btn-inner block w-full text-center transition-all duration-300">
                {btn.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OpenSource; 