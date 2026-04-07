import { useState, useEffect, useRef } from "react";
import RafaCard from "./RafaCard";
import { useRafaCard } from "./RafaCardContext";

const OutlierAIHero = () => {
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
      className="w-full py-16 relative"
      style={{ background: "#55575b" }}
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
              Outlier AI
            </h2>
            <p className="text-sm ubuntu-font leading-tight" style={{ color: "#888a8f" }}>
              AI Training
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
                      title: "Outlier AI",
                      description:
                        "Evaluate JavaScript datasets to train machine learning models for code understanding and analysis.",
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

        {/* Content */}
        <div className="max-w-xl w-full bg-white border border-[#c2c3c7] rounded-none shadow-sm">
          <div className="px-6 py-5">
            <div className="flex flex-col items-center w-full">
              <img
                src="/favicon-32x32.svg"
                alt="Outlier AI Logo"
                className="w-10 h-10 mb-3"
                style={{ filter: "grayscale(1)", transform: "scale(0.9)" }}
              />
              <p className="text-sm ubuntu-font text-gray-200 leading-relaxed text-center">
                Evaluate JavaScript-related datasets to train machine learning models for code
                understanding and analysis. My role includes annotating code snippets, identifying
                patterns, and creating training scenarios that help improve model performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutlierAIHero;
