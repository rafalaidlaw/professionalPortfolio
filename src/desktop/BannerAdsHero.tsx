import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RafaCard from "./RafaCard";
import { useRafaCard } from "./RafaCardContext";

type BannerAd = {
  key: string;
  duration: number;
  images: { gif: string; still: string; className?: string }[];
  bubbleText: string;
};

const bannerAds: BannerAd[] = [
  // {
  //   key: "westAds",
  //   duration: 6000,
  //   images: [
  //     { gif: "/banners/bbWestAd.gif", still: "/banners/bbWestAd-STILL.png", className: "" },
  //     { gif: "/banners/longWestAd.gif", still: "/banners/longWestAd-STILL.png", className: "w-full" },
  //   ],
  // },
  // {
  //   key: "zooAd",
  //   duration: 7000,
  //   images: [{ gif: "/banners/zooAd.gif", still: "/banners/zooAd-STILL.png" }],
  // },
  // {
  //   key: "rogersSquare",
  //   duration: 6000,
  //   images: [{ gif: "/banners/rogersSquare.gif", still: "/banners/rogersSquare-STILL.png", className: "max-h-[150px]" }],
  // },
  // {
  //   key: "boskAd",
  //   duration: 6000,
  //   images: [{ gif: "/banners/boskAd.gif", still: "/banners/boskAd-STILL.png" }],
  // },
  {
    key: "grid1",
    duration: 5000,
    images: [{ gif: "/banners/grid1.gif", still: "/banners/grid1-STILL.png" }],
    bubbleText: "Delivered agency work for Publicis and Tribal DDB, engineering interactive front-end banner ads.",
  },
  {
    key: "grid-ad-5",
    duration: 5000,
    images: [{ gif: "/banners/grid-ad-5.gif", still: "/banners/grid-ad-5-STILL.png" }],
    bubbleText: "Integrated Google DoubleClick APIs to handle call-to-action events and managed version-controlled updates using Git.",
  },
  {
    key: "grid-ad-6",
    duration: 5000,
    images: [{ gif: "/banners/grid-ad-6.gif", still: "/banners/grid-ad-6-STILL.png" }],
    bubbleText: "Migrated legacy ActionScript codebase to JavaScript, rewriting animation logic, event handling, and interactive components.",
  },
  {
    key: "grid-ad-7",
    duration: 5000,
    images: [{ gif: "/banners/grid-ad-7.gif", still: "/banners/grid-ad-7-STILL.png" }],
    bubbleText: "Designed reusable logic to accelerate production, standardize campaign quality, and accurately match design mockups.",
  },
  {
    key: "grid-ad-8",
    duration: 5000,
    images: [{ gif: "/banners/grid-ad-8.gif", still: "/banners/grid-ad-8-STILL.png" }],
    bubbleText: "Built modular, memory-efficient components enabling dynamic, scalable updates across hundreds of ad variations.",
  },
  {
    key: "grid-ad-9",
    duration: 5000,
    images: [{ gif: "/banners/grid-ad-9.gif", still: "/banners/grid-ad-9-STILL.png" }],
    bubbleText: "Optimized performance by caching data, streamlining callback functions, array mapping, and adjusting asset resolution.",
  },
  {
    key: "grid-ad-10",
    duration: 5000,
    images: [{ gif: "/banners/grid-ad-10.gif", still: "/banners/grid-ad-10-STILL.png" }],
    bubbleText: "Developed bespoke systems, including custom particle effects and mini-games such as a block breaker and roulette experiences.",
  },
  {
    key: "grid-ad-11",
    duration: 5000,
    images: [{ gif: "/banners/grid-ad-11.gif", still: "/banners/grid-ad-11-STILL.png" }],
    bubbleText: "Delivered agency work for Publicis and Tribal DDB, engineering interactive front-end banner ads.",
  },
];

const BannerAdsHero = () => {
  const { visible: rafaVisible } = useRafaCard();
  const [rotation, setRotation] = useState(0);
  const [changeCount, setChangeCount] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleScale, setTitleScale] = useState(1);
  const [sectionHovered, setSectionHovered] = useState(false);

  const len = bannerAds.length;
  const angleStep = 360 / len;
  const radius = 250;

  // Derive currentIndex from rotation
  const currentIndex = ((Math.round(-rotation / angleStep) % len) + len) % len;

  const goNext = useCallback(() => {
    setRotation((r) => r - angleStep);
    setChangeCount((c) => c + 1);
  }, [angleStep]);

  const goPrev = useCallback(() => {
    setRotation((r) => r + angleStep);
    setChangeCount((c) => c + 1);
  }, [angleStep]);

  const goTo = useCallback(
    (index: number) => {
      setRotation((r) => {
        const current = ((Math.round(-r / angleStep) % len) + len) % len;
        let delta = index - current;
        // Take the shortest path around the cylinder
        if (delta > len / 2) delta -= len;
        if (delta < -len / 2) delta += len;
        return r - delta * angleStep;
      });
      setChangeCount((c) => c + 1);
    },
    [angleStep, len],
  );

  // Scroll-based title card zoom
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

  // Auto-advance after current ad's duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setRotation((r) => r - angleStep);
      setChangeCount((c) => c + 1);
    }, bannerAds[currentIndex].duration);
    return () => clearTimeout(timer);
  }, [currentIndex, changeCount, angleStep]);

  return (
    <section
      className="w-full py-10 relative"
      style={{ background: "#333437" }}
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Title card - left positioned (scroll-based scale) */}
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
          <div
            className="bg-white border border-[#999999] border-l-[10px] border-b-[5px] border-r-0 rounded-none shadow-sm px-4 py-3"
          >
            <h2
              className="text-xl font-bold ubuntu-font mb-1"
              style={{ color: "#55575b" }}
            >
              Banner Ads
            </h2>
            <p
              className="text-sm ubuntu-font leading-tight"
              style={{ color: "#888a8f" }}
            >
              Publicis and Tribal DDB
            </p>
          </div>
        </div>
        {/* Rafa */}
        {rafaVisible && (
        <div className="absolute bottom-10 z-20" style={{ right: "clamp(16px, calc(16px + (100vw - 768px) * 272 / 768), 288px)" }}>
          <RafaCard
            bubble={sectionHovered ? {
              title: "Banner Ads",
              description: bannerAds[currentIndex].bubbleText,
            } : null}
            bubblePosition="above"
            bubbleBorderSide="right"
            bubbleBorderColor="#999999"
            cardClassName="bg-white border border-[#999999] border-r-[10px] border-b-[5px] border-l-0 rounded-none shadow-sm p-3 flex flex-col items-center w-full h-full"
          />
        </div>
        )}

        {/* 3D Cylinder Carousel */}
        <div
          className="relative w-full h-[280px]"
          style={{ perspective: "1200px" }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
              transition: "transform 0.6s ease",
            }}
          >
            {bannerAds.map((ad, i) => {
              const angle = i * angleStep;
              const isCenter = i === currentIndex;
              return (
                <div
                  key={ad.key}
                  className="absolute flex items-center justify-center"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "hidden",
                    filter: isCenter ? "none" : "grayscale(1)",
                    opacity: isCenter ? 1 : 0.5,
                    transition: "filter 0.6s ease, opacity 0.6s ease",
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    {ad.images.map((img, j) => (
                      <img
                        key={
                          isCenter
                            ? ad.key + "-" + j + "-" + changeCount
                            : ad.key + "-" + j + "-still"
                        }
                        src={isCenter ? img.gif : img.still}
                        alt={`Banner ad: ${ad.key}`}
                        className={`max-h-[220px] max-w-[350px] object-contain ${img.className || ""}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left arrow */}
          <button
            type="button"
            aria-label="Previous ad"
            onClick={goPrev}
            className="absolute left-[25%] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Next ad"
            onClick={goNext}
            className="absolute right-[25%] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-2">
          {bannerAds.map((item, i) => (
            <button
              key={item.key}
              type="button"
              aria-label={`Go to ad ${i + 1}`}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                i === currentIndex
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerAdsHero;
