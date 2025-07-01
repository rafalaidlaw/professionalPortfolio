const openSourceButtons = [
  { label: "Altair GraphQL", color: "bg-gray-700 text-gray-300" },
  { label: "Godot Engine", color: "bg-gray-600 text-gray-300" },
  { label: "PixiJS", color: "bg-gray-500 text-gray-300" },
  { label: "BuddyJS", color: "bg-gray-400 text-gray-300" },
  { label: "Kota Co", color: "bg-gray-300 text-gray-200" },
  { label: "One", color: "bg-gray-200 text-gray-400" },
  
];

const OpenSource = () => (
  <section className="container mx-auto px-4 ml-2">
    <div className="text-left space-y-8">
      <h2 className="text-2xl font-bold ubuntu-font" style={{ color: '#6b6d71' }}>Open Source</h2>
      {/* Skewed, grayscale buttons row, always full text */}
      <div className="flex items-center mt-8 w-full">
        <div className="skew-btn-group flex gap-x-8 justify-start items-center w-full">
          {openSourceButtons.map((btn) => (
            <a
              key={btn.label}
              href="#"
              className={`skew-btn ${btn.color} font-bold px-4 py-2 transition-all duration-300 overflow-hidden`}
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