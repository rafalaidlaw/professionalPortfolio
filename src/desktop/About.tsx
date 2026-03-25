import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null);

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
    >
      {/* ThreeJS Bubble App */}
      <div className="w-full relative">
        {/* Speech bubble - appears on hover */}
        {project && (
          <div
            className="absolute bottom-64 z-20 bg-white border border-[#cccccc] border-r-[6px] border-b-[4px] rounded-none shadow-md px-4 py-3 ubuntu-font"
            style={{ width: "200px", right: "calc(6rem + 80px - 200px)" }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold block hover:text-primary transition-colors"
              style={{ color: "#55575b" }}
            >
              {project.label}
            </a>
            <p className="text-xs mt-1" style={{ color: "#888a8f" }}>
              {project.description}
            </p>
            {/* Triangle tail */}
            <div
              className="absolute left-8"
              style={{
                bottom: "-26px",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "11px solid transparent",
                borderTop: "26px solid #cccccc",
              }}
            />
            <div
              className="absolute left-8"
              style={{
                bottom: "-22px",
                width: 0,
                height: 0,
                borderLeft: "7px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "23px solid #fff",
              }}
            />
          </div>
        )}

        {/* Rafa card - bottom right */}
        <div
          className="absolute bottom-34 right-24 z-10 bg-white border border-[#cccccc] border-r-[6px] border-b-[4px] rounded-none shadow-sm p-3 flex flex-col items-center"
          style={{ width: "80px", height: "80px" }}
        >
          <Avatar className="h-10 w-10">
            <AvatarFallback className="text-xs text-gray-400 bg-gray-100">
              RL
            </AvatarFallback>
          </Avatar>
          <span
            className="text-xs font-medium mt-1"
            style={{ color: "#55575b" }}
          >
            Rafa
          </span>
        </div>

        <iframe
          src="https://rafalaidlaw.github.io/Bubble-ThreeJS/"
          title="Bubble ThreeJS"
          className="w-full border-none"
          style={{ height: "600px", background: "transparent" }}
          allow="accelerometer; autoplay"
          allowTransparency={true}
        />
      </div>
    </section>
  );
};

export default About;
