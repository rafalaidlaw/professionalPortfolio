import { useState, useEffect, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { LiaRingSolid } from "react-icons/lia";
import { GiLibertyWing } from "react-icons/gi";
import { useRafaCard } from "./RafaCardContext";

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
  const { reviveKey, reportDismiss } = useRafaCard();
  const borderColor = bubbleBorderColor || "#cccccc";
  const cardRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [dismissing, setDismissing] = useState(false);
  const [fading, setFading] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Bubble text transition state
  const [displayedBubble, setDisplayedBubble] = useState(bubble);
  const [bubblePhase, setBubblePhase] = useState<"visible" | "out" | "in">(
    "visible",
  );
  const cardFullyVisible = scale >= 1;

  useEffect(() => {
    if (bubble?.description === displayedBubble?.description) return;
    if (!cardFullyVisible) {
      // Card not visible yet, just swap silently
      setDisplayedBubble(bubble);
      return;
    }

    // Appearing from nothing — skip "out", go straight to "in" with squash+fade
    if (!displayedBubble && bubble) {
      setDisplayedBubble(bubble);
      setBubblePhase("in");
      const inTimer = setTimeout(() => {
        setBubblePhase("visible");
      }, 350);
      return () => clearTimeout(inTimer);
    }

    // Phase 1: fade out old bubble (up + fade away)
    setBubblePhase("out");

    const outTimer = setTimeout(() => {
      // Phase 2: swap content and fade in new bubble
      setDisplayedBubble(bubble);
      if (bubble) {
        setBubblePhase("in");
        const inTimer = setTimeout(() => {
          setBubblePhase("visible");
        }, 350);
        return () => clearTimeout(inTimer);
      } else {
        setBubblePhase("visible");
      }
    }, 300);

    return () => clearTimeout(outTimer);
  }, [bubble?.description, cardFullyVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const shrinkStart = vh * 0.2;
      const growEnd = vh * (5 / 7);

      const offScreen = rect.top <= 0 || rect.top > vh;
      if (offScreen && dismissed) {
        setDismissed(false);
        setDismissing(false);
        setFading(false);
      }

      if (rect.top <= 0) {
        setScale(0);
      } else if (rect.top < shrinkStart) {
        setScale(rect.top / shrinkStart);
      } else if (rect.top > vh) {
        setScale(0);
      } else if (rect.top > growEnd) {
        setScale((vh - rect.top) / (vh - growEnd));
      } else {
        setScale(1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);
  const bubbleTransformStyle = (() => {
    switch (bubblePhase) {
      case "out":
        return {
          opacity: 0,
          transform: "translateY(-12px) scaleY(0.92)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        };
      case "in":
        return {
          opacity: 1,
          transform: "translateY(0px) scaleY(1)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        };
      default:
        return {
          opacity: 1,
          transform: "translateY(0px) scaleY(1)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        };
    }
  })();

  const bubbleEl = displayedBubble && (
    <div
      className="relative z-20 bg-white border rounded-none shadow-md px-4 py-4 ubuntu-font"
      style={{
        width: "200px",
        borderColor,
        borderRightWidth: bubbleBorderSide === "right" ? "10px" : "1px",
        borderLeftWidth: bubbleBorderSide === "left" ? "10px" : "1px",
        borderBottomWidth: bubbleBorderSide === "left" ? "5px" : "4px",
        ...bubbleTransformStyle,
        transformOrigin: "bottom center",
      }}
    >
      {displayedBubble.url ? (
        <a
          href={displayedBubble.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-bold block hover:text-primary transition-colors"
          style={{ color: "#55575b" }}
        >
          {displayedBubble.title}
        </a>
      ) : (
        <span
          className="text-base font-bold block"
          style={{ color: "#55575b" }}
        >
          {displayedBubble.title}
        </span>
      )}
      <p className="text-sm mt-1" style={{ color: "#888a8f" }}>
        {displayedBubble.description}
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

  // Reset when reviveAll is triggered
  useEffect(() => {
    setDismissing(false);
    setFading(false);
    setDismissed(false);
  }, [reviveKey]);

  if (dismissed) return <div ref={cardRef} style={{ width: 60, height: 60, visibility: "hidden" }} />;

  const handleDismiss = () => {
    setDismissing(true);
    setTimeout(() => {
      setFading(true);
    }, 250);
    setTimeout(() => {
      setDismissed(true);
      reportDismiss();
    }, 850);
  };

  const dismissStyle = fading
    ? {
        transform: "scale(0)",
        opacity: 0,
        transition: "transform 0.5s ease-in, opacity 0.5s ease-in",
      }
    : dismissing
    ? {
        transform: `scale(${scale})`,
        opacity: scale,
        transition: "none",
      }
    : {
        transform: `scale(${scale})`,
        opacity: scale,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
      };

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{
        width: "60px",
        height: "60px",
        ...dismissStyle,
        transformOrigin: "center center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bubble - absolutely positioned */}
      {!dismissing && bubblePosition === "above" && (
        <div
          className="absolute bottom-full left-0 mb-7"
          style={{
            transform: cardFullyVisible ? "scale(1)" : "scale(0)",
            opacity: cardFullyVisible ? 1 : 0,
            transformOrigin: "bottom left",
            transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
          }}
        >
          {bubbleEl}
        </div>
      )}

      {/* Halo */}
      {dismissing && (
        <span
          className="absolute select-none"
          style={{ top: "-26px", left: "50%", color: "#aaa", transform: "translateX(-50%) rotateX(60deg) scale(2.5)" }}
        ><LiaRingSolid size={20} /></span>
      )}

      {/* Wings */}
      {dismissing && (
        <>
          <span
            className="absolute select-none"
            style={{ top: "50%", left: "-20px", color: "#aaa", transform: "translateY(-50%) scaleX(-1)", zIndex: -1 }}
          ><GiLibertyWing size={24} /></span>
          <span
            className="absolute select-none"
            style={{ top: "50%", right: "-20px", color: "#aaa", transform: "translateY(-50%)", zIndex: -1 }}
          ><GiLibertyWing size={24} /></span>
        </>
      )}

      {/* Rafa card */}
      <div
        className={`relative ${
          cardClassName ||
          "bg-white border border-[#cccccc] border-r-[10px] border-b-[4px] rounded-none shadow-sm p-3 flex flex-col items-center w-full h-full"
        }`}
        style={cardStyle}
      >
        <div
          className="flex flex-col items-center justify-center select-none h-full whitespace-nowrap"
          style={{ color: "#aaa" }}
        >
          {dismissing ? (
            <>
              <span className="text-xs">x{"\u2003"}x</span>
              <span className="text-xs">.</span>
            </>
          ) : bubble ? (
            <>
              <span className="text-xs">°{"\u2003"}°</span>
              <span className="text-xs">O</span>
            </>
          ) : (
            <>
              <span className="text-xs">⌣{"\u2003\u2003"}⌣</span>
              <span className="text-xs">_</span>
            </>
          )}
        </div>

        {/* Close button */}
        <button
          type="button"
          aria-label="Dismiss assistant"
          onClick={handleDismiss}
          className="absolute cursor-pointer bg-transparent border-none p-0"
          style={{
            bottom: "-8px",
            ...(bubbleBorderSide === "left"
              ? { left: "-16px" }
              : { right: "-16px" }),
            zIndex: 30,
            opacity: hovered && !dismissing ? 1 : 0,
            transition: "opacity 0.2s ease",
            pointerEvents: hovered && !dismissing ? "auto" : "none",
          }}
        >
          <IoCloseCircle size={22} color="#000" />
        </button>
      </div>

      {/* Bubble - below */}
      {!dismissing && bubblePosition === "below" && (
        <div
          className="absolute top-full left-0 mt-7"
          style={{
            transform: cardFullyVisible ? "scale(1)" : "scale(0)",
            opacity: cardFullyVisible ? 1 : 0,
            transformOrigin: "top left",
            transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
          }}
        >
          {bubbleEl}
        </div>
      )}
    </div>
  );
};

export default RafaCard;
