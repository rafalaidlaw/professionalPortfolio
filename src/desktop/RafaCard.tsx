import { useState, useEffect, useRef } from "react";

interface RafaCardProps {
  bubble?: { title: string; description: string; url?: string } | null;
  bubblePosition?: "above" | "below";
  bubbleBorderSide?: "right" | "left";
  bubbleBorderColor?: string;
  cardClassName?: string;
  cardStyle?: React.CSSProperties;
}

const RafaCard = ({
  bubble,
  bubblePosition = "above",
  bubbleBorderSide = "right",
  bubbleBorderColor,
  cardClassName,
  cardStyle,
}: RafaCardProps) => {
  const borderColor = bubbleBorderColor || "#cccccc";
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const shrinkStart = vh * 0.2; // start shrinking at 1/5 from top
      const growEnd = vh * 0.8; // finish growing at 4/5 from top

      if (rect.top <= 0) {
        setScale(0);
      } else if (rect.top < shrinkStart) {
        // shrink as it approaches the top
        setScale(rect.top / shrinkStart);
      } else if (rect.top > vh) {
        setScale(0);
      } else if (rect.top > growEnd) {
        // grow as it enters from the bottom
        setScale((vh - rect.top) / (vh - growEnd));
      } else {
        setScale(1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const bubbleEl = bubble && (
    <div
      className="relative z-20 bg-white border rounded-none shadow-md px-4 py-4 ubuntu-font"
      style={{
        width: "200px",
        borderColor,
        borderRightWidth: bubbleBorderSide === "right" ? "10px" : "1px",
        borderLeftWidth: bubbleBorderSide === "left" ? "10px" : "1px",
        borderBottomWidth: bubbleBorderSide === "left" ? "5px" : "4px",
      }}
    >
      {bubble.url ? (
        <a
          href={bubble.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-bold block hover:text-primary transition-colors"
          style={{ color: "#55575b" }}
        >
          {bubble.title}
        </a>
      ) : (
        <span
          className="text-base font-bold block"
          style={{ color: "#55575b" }}
        >
          {bubble.title}
        </span>
      )}
      <p className="text-sm mt-1" style={{ color: "#888a8f" }}>
        {bubble.description}
      </p>

      {/* Triangle tail */}
      {bubblePosition === "above" && (
        <>
          <div
            className="absolute"
            style={{
              left: "28.5px",
              bottom: "-26px",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "11px solid transparent",
              borderTop: `26px solid ${borderColor}`,
            }}
          />
          <div
            className="absolute"
            style={{
              left: "29.5px",
              bottom: "-22px",
              width: 0,
              height: 0,
              borderLeft: "7px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "23px solid #fff",
            }}
          />
        </>
      )}
      {bubblePosition === "below" && (
        <>
          <div
            className="absolute"
            style={{
              left: "28.5px",
              top: "-26px",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "11px solid transparent",
              borderBottom: `26px solid ${borderColor}`,
            }}
          />
          <div
            className="absolute"
            style={{
              left: "29.5px",
              top: "-22px",
              width: 0,
              height: 0,
              borderLeft: "7px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "23px solid #fff",
            }}
          />
        </>
      )}
    </div>
  );

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{
        width: "60px",
        height: "60px",
        transform: `scale(${scale})`,
        opacity: scale,
        transformOrigin: "center center",
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
      }}
    >
      {/* Bubble - absolutely positioned */}
      {bubblePosition === "above" && (
        <div className="absolute bottom-full left-0 mb-7">{bubbleEl}</div>
      )}

      {/* Rafa card */}
      <div
        className={
          cardClassName ||
          "bg-white border border-[#cccccc] border-r-[10px] border-b-[4px] rounded-none shadow-sm p-3 flex flex-col items-center w-full h-full"
        }
        style={cardStyle}
      >
        <div className="flex flex-col items-center justify-center select-none h-full" style={{ color: "#aaa" }}>
          {bubble ? (
            <>
              <span className="text-xs tracking-[0.3em]">° °</span>
              <span className="text-xs">O</span>
            </>
          ) : (
            <>
              <span className="text-xs tracking-[0.3em]">⌣&nbsp;&nbsp;⌣</span>
              <span className="text-xs">_</span>
            </>
          )}
        </div>
      </div>

      {/* Bubble - below */}
      {bubblePosition === "below" && (
        <div className="absolute top-full left-0 mt-7">{bubbleEl}</div>
      )}
    </div>
  );
};

export default RafaCard;
