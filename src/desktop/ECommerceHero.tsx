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
        {/* 3D angled image + reflection */}
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

        {/* Title */}
        <div
          className="-mt-12 mb-3 px-6 py-3 rounded-none text-center"
          style={{ background: "#ededed" }}
        >
          <h2
            className="text-3xl font-bold ubuntu-font mb-1"
            style={{ color: "#55575b" }}
          >
            React Storefront
          </h2>
          <p className="text-sm ubuntu-font" style={{ color: "#888a8f" }}>
            Fullstack E-Commerce Website
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-0">
          {([
            { label: "React", tip: "A React storefront for a local Toronto vendor." },
            { label: "TypeScript", tip: "Built with Type Safety in mind for better code quality." },
            { label: "GraphQL", tip: "In the end opted for Redux and Thunk for state management." },
            { label: "Hooks", tip: "Created a custom hook for the checkout form." },
            { label: "Stripe", tip: "Integration with Stripe for payment." },
            { label: "Firebase", tip: "Google Firebase to create the distribution API." },
            { label: "Redux", tip: "Started with GraphQL but opted for Redux for state management." },
            { label: "Thunk", tip: "Used in conjunction with Redux to manage side effects." },
            { label: "Saga", tip: "Used to make side effects." },
            { label: "React-Hook-Form", tip: "React-Hook-Form for building out the customer check out form." },
          ]).map(({ label, tip }) => (
            <span
              key={label}
              title={tip}
              className="inline-block border border-gray-400 text-gray-300 rounded px-3 py-1 font-bold text-xs ubuntu-font uppercase tracking-wide cursor-default"
            >
              {label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://cosmic-seahorse-cfa092.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-2 border border-white text-white font-semibold ubuntu-font text-sm rounded hover:bg-white hover:text-gray-800 transition-colors duration-200"
        >
          Visit Website
        </a>
      </div>
    </section>
  );
};

export default ECommerceHero;
