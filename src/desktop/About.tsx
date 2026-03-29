import { useState, useEffect, useRef } from "react";
import RafaCard from "./RafaCard";
import { useRafaCard } from "./RafaCardContext";

const openSourceProjects: Record<
  string,
  { label: string; url: string; description: string }
> = {
  PixiJS: {
    label: "PixiJS",
    url: "https://github.com/pixijs/pixijs/pull/11761",
    description:
      "Updated XML font parsing to support version 3 fonts using regex instead of direct comparison; extended existing test coverage for font XML parsing.",
  },
  Crawlee: {
    label: "Crawlee",
    url: "https://github.com/apify/crawlee/pull/3237",
    description:
      "Fixed an issue where the max requests per crawl limit displayed an undefined info message.",
  },
  Hoppscotch: {
    label: "Hoppscotch",
    url: "https://github.com/hoppscotch/hoppscotch/pull/5231",
    description:
      "Resolved an issue related to authentication query parameters.",
  },
  "Altair GraphQL": {
    label: "Altair GraphQL",
    url: "https://github.com/altair-graphql",
    description:
      "Implemented Feature Request search functionality for parsing collections.",
  },
  "Godot Engine": {
    label: "Godot Engine",
    url: "https://docs.godotengine.org/en/stable/contributing/workflow/bug_triage_guidelines.html",
    description:
      "Recreated and documented a bug to support validation and testing by the bug squad.",
  },
};

const About = () => {
  const { visible: rafaVisible } = useRafaCard();
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null);
  const ossRef = useRef<HTMLDivElement>(null);
  const [ossScale, setOssScale] = useState(1);
  const [ossReady, setOssReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOssReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = ossRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const shrinkStart = vh * 0.1; // 1/10 from top
      const growEnd = vh * 0.9; // 1/10 from bottom

      if (rect.top <= 0) {
        setOssScale(0);
      } else if (rect.top < shrinkStart) {
        setOssScale(rect.top / shrinkStart);
      } else if (rect.top > vh) {
        setOssScale(0);
      } else if (rect.top > growEnd) {
        setOssScale((vh - rect.top) / (vh - growEnd));
      } else {
        setOssScale(1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "bubble-hover") {
        setHoveredBubble(e.data.label);
      } else if (e.data?.type === "bubble-leave") {
        setHoveredBubble(null);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const project = hoveredBubble ? openSourceProjects[hoveredBubble] : null;

  return (
    <section
      id="about"
      className="container mx-auto px-4 pt-16 overflow-visible"
      style={{ paddingBottom: "clamp(40px, 8vh, 120px)" }}
    >
      {/* ThreeJS Bubble App */}
      <div className="w-full relative">
        {/* Open Source Contributions label - left */}
        <div
          ref={ossRef}
          className="absolute top-1/5 z-10 bg-white border border-[#cccccc] rounded-none shadow-sm flex items-center justify-center ubuntu-font"
          style={{
            left: "clamp(-80px, calc(-80px + (100vw - 768px) * 144 / 512), 64px)",
            width: "160px",
            height: "160px",
            borderLeftWidth: "10px",
            borderBottomWidth: "5px",
            transform: `scale(${ossScale})`,
            opacity: ossReady ? ossScale : 0,
            transformOrigin: "center center",
            transition: "transform 0.1s ease-out, opacity 0.5s ease-out",
          }}
        >
          <h3 className="text-lg font-bold leading-tight" style={{ color: "#55575b" }}>
            Open
            <br />
            Source
            <br />
            Contributions
          </h3>
        </div>

        {/* Rafa card - bottom right */}
        {rafaVisible && (
        <div
          className="absolute bottom-14 z-10"
          style={{
            right: "clamp(16px, calc(16px + (100vw - 768px) * 80 / 512), 96px)",
            opacity: ossReady ? 1 : 0,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <RafaCard
            bubble={project ? { title: project.label, description: project.description, url: project.url } : null}
            bubblePosition="above"
          />
        </div>
        )}

        <iframe
          src="https://rafalaidlaw.github.io/Bubble-ThreeJS/"
          title="Bubble ThreeJS"
          className="w-full border-none"
          style={{ height: "clamp(400px, 60vh, 700px)", background: "transparent" }}
          allow="accelerometer; autoplay"
          allowTransparency={true}
        />
      </div>

    </section>
  );
};

export default About;
