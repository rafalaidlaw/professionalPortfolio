import { useState, useEffect, useRef } from "react";
import RafaCard from "./RafaCard";
import { useRafaCard } from "./RafaCardContext";

const ThreeJSHero = () => {
  const { visible: rafaVisible } = useRafaCard();
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleScale, setTitleScale] = useState(1);
  const [sectionHovered, setSectionHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = titleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const shrinkStart = vh * 0.2;
      const growEnd = vh * 0.75;

      if (rect.top <= 0) {
        setTitleScale(0);
      } else if (rect.top < shrinkStart) {
        setTitleScale(rect.top / shrinkStart);
      } else if (rect.top > vh) {
        setTitleScale(0);
      } else if (rect.top > growEnd) {
        setTitleScale((vh - rect.top) / (vh - growEnd));
      } else {
        setTitleScale(1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full pt-32 pb-20 relative"
      style={{ background: "#000000" }}
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Title card */}
        <div
          ref={titleRef}
          className="absolute top-10 z-20"
          style={{
            left: "clamp(16px, calc(16px + (100vw - 768px) * 272 / 768), 288px)",
            transform: `scale(${titleScale})`,
            transformOrigin: "center center",
            transition: "transform 0.12s ease-out",
          }}
        >
          <div className="bg-white border border-[#999999] border-l-[10px] border-b-[5px] border-r-0 rounded-none shadow-sm px-4 py-3">
            <h2 className="text-xl font-bold ubuntu-font mb-1" style={{ color: "#55575b" }}>
              ThreeJS
            </h2>
            <p className="text-sm ubuntu-font leading-tight" style={{ color: "#888a8f" }}>
              Gameboy Modder
            </p>
          </div>
        </div>

        {/* RafaCard */}
        {rafaVisible && (
          <div
            className="absolute bottom-10 z-20"
            style={{
              right: "clamp(16px, calc(16px + (100vw - 768px) * 272 / 768), 288px)",
            }}
          >
            <RafaCard
              bubble={
                sectionHovered
                  ? {
                      title: "ThreeJS Gameboy",
                      description:
                        "WIP: Custom Modded Gameboy Builder. Shoppers can build and visualize their modded Gameboy, see the price, then add it to cart.",
                    }
                  : null
              }
              bubblePosition="above"
              bubbleBorderSide="right"
              bubbleBorderColor="#999999"
              cardClassName="bg-white border border-[#999999] border-r-[10px] border-b-[5px] border-l-0 rounded-none shadow-sm p-3 flex flex-col items-center w-full h-full"
            />
          </div>
        )}

        {/* ThreeJS iframe */}
        <div className="w-full max-w-2xl h-[400px] overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://rafalaidlaw.github.io/Three.js-Gameboy-Mods/"
            title="Three.js Gameboy Modder"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeJSHero;
