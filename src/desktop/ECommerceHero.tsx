import { useState, useRef } from "react";

const ECommerceHero = () => {
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setAnimate(true);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHovered(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    setAnimate(false);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHovered(false);
  };

  return (
    <section className="w-full pt-32 pb-20" style={{ background: "#63666a" }}>
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* 3D angled image + reflection + title card */}
        <div className="relative">
          <div
            className="flex flex-col items-center"
            style={{
              perspective: "1200px",
              transform: animate ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Main image */}
            <button
              type="button"
              aria-label="Visit E-Commerce Website"
              onClick={() =>
                window.open(
                  "https://cosmic-seahorse-cfa092.netlify.app/",
                  "_blank",
                )
              }
              className="focus:outline-none cursor-pointer bg-transparent border-none p-0 m-0"
              style={{
                transform: animate
                  ? "rotateY(0deg) rotateX(0deg)"
                  : "rotateY(-20deg) rotateX(5deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hovered ? "/Retro_Mod_Site.gif" : "/Retro_Still_Image.png"}
                alt="E-Commerce Website Screenshot"
                className={`max-w-lg w-full shadow-2xl transition-all duration-300 block ${!hovered ? "opacity-80" : "opacity-100"}`}
              />
            </button>

            {/* Reflection */}
            <div
              className="max-w-lg w-full"
              style={{
                transform: animate
                  ? "rotateY(0deg) rotateX(0deg) scaleY(-1)"
                  : "rotateY(-20deg) rotateX(-5deg) scaleY(-1)",
                transformStyle: "preserve-3d",
                transition: "transform 0.5s ease",
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,0.25), transparent 60%)",
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,0.25), transparent 60%)",
                marginTop: "0px",
              }}
            >
              <img
                src={hovered ? "/Retro_Mod_Site.gif" : "/Retro_Still_Image.png"}
                alt=""
                className="w-full block"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Title - positioned to the right */}
          <div
            className="absolute bottom-24 px-4 py-2 rounded-none text-left"
            style={{
              background: "#ededed",
              right: "-440px",
              borderRight: "10px solid #444444",
              borderBottom: "5px solid #444444",
            }}
          >
            <h2
              className="text-xl font-bold ubuntu-font mb-2"
              style={{ color: "#55575b" }}
            >
              React
              <br />
              Storefront
            </h2>
            <p
              className="text-sm ubuntu-font leading-tight"
              style={{ color: "#888a8f" }}
            >
              Fullstack
              <br />
              E-Commerce
              <br />
              Website
            </p>
          </div>
        </div>

        {/* CTA hint */}
        <span className="-mt-16 mb-4 relative z-10 inline-block px-6 py-2 text-white ubuntu-font text-sm">
          Hover || Click
        </span>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-0">
          {[
            {
              label: "React",
              tip: "A React storefront for a local Toronto vendor.",
            },
            {
              label: "TypeScript",
              tip: "Built with Type Safety in mind for better code quality.",
            },
            {
              label: "GraphQL",
              tip: "In the end opted for Redux and Thunk for state management.",
            },
            {
              label: "Hooks",
              tip: "Created a custom hook for the checkout form.",
            },
            { label: "Stripe", tip: "Integration with Stripe for payment." },
            {
              label: "Firebase",
              tip: "Google Firebase to create the distribution API.",
            },
            {
              label: "Redux",
              tip: "Started with GraphQL but opted for Redux for state management.",
            },
            {
              label: "Thunk",
              tip: "Used in conjunction with Redux to manage side effects.",
            },
            { label: "Saga", tip: "Used to make side effects." },
            {
              label: "React-Hook-Form",
              tip: "React-Hook-Form for building out the customer check out form.",
            },
          ].map(({ label, tip }) => (
            <span
              key={label}
              className="group relative inline-block border border-gray-400 text-gray-300 rounded px-3 py-1 font-bold text-xs ubuntu-font uppercase tracking-wide cursor-default transition-colors duration-200 hover:bg-[#ededed] hover:text-[#55575b] hover:border-[#55575b]"
            >
              {label}
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-[#ededed] text-[#55575b] text-xs ubuntu-font normal-case tracking-normal font-medium rounded shadow-md whitespace-nowrap z-50 pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150">
                {tip}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECommerceHero;
