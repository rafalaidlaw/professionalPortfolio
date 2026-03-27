import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bannerAds = [
  {
    key: "longWestAd",
    gif: "/banners/longWestAd.gif",
    still: "/banners/longWestAd-STILL.png",
    duration: 6000,
  },
  {
    key: "bbWestAd",
    gif: "/banners/bbWestAd.gif",
    still: "/banners/bbWestAd-STILL.png",
    duration: 6000,
  },
  {
    key: "zooAd",
    gif: "/banners/zooAd.gif",
    still: "/banners/zooAd-STILL.png",
    duration: 7000,
  },
  {
    key: "rogersSquare",
    gif: "/banners/rogersSquare.gif",
    still: "/banners/rogersSquare-STILL.png",
    duration: 6000,
  },
  {
    key: "boskAd",
    gif: "/banners/boskAd.gif",
    still: "/banners/boskAd-STILL.png",
    duration: 6000,
  },
  {
    key: "grid1",
    gif: "/banners/grid1.gif",
    still: "/banners/grid1-STILL.png",
    duration: 5000,
  },
  {
    key: "grid-ad-5",
    gif: "/banners/grid-ad-5.gif",
    still: "/banners/grid-ad-5-STILL.png",
    duration: 5000,
  },
  {
    key: "grid-ad-6",
    gif: "/banners/grid-ad-6.gif",
    still: "/banners/grid-ad-6-STILL.png",
    duration: 5000,
  },
  {
    key: "grid-ad-7",
    gif: "/banners/grid-ad-7.gif",
    still: "/banners/grid-ad-7-STILL.png",
    duration: 5000,
  },
  {
    key: "grid-ad-8",
    gif: "/banners/grid-ad-8.gif",
    still: "/banners/grid-ad-8-STILL.png",
    duration: 5000,
  },
  {
    key: "grid-ad-9",
    gif: "/banners/grid-ad-9.gif",
    still: "/banners/grid-ad-9-STILL.png",
    duration: 5000,
  },
  {
    key: "grid-ad-10",
    gif: "/banners/grid-ad-10.gif",
    still: "/banners/grid-ad-10-STILL.png",
    duration: 5000,
  },
  {
    key: "grid-ad-11",
    gif: "/banners/grid-ad-11.gif",
    still: "/banners/grid-ad-11-STILL.png",
    duration: 5000,
  },
];

const BannerAdsHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [changeCount, setChangeCount] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setChangeCount((c) => c + 1);
  }, []);

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % bannerAds.length);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + bannerAds.length) % bannerAds.length);
  }, [currentIndex, goTo]);

  // Auto-advance after current ad's duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerAds.length);
      setChangeCount((c) => c + 1);
    }, bannerAds[currentIndex].duration);
    return () => clearTimeout(timer);
  }, [currentIndex, changeCount]);

  const ad = bannerAds[currentIndex];

  return (
    <section
      className="w-full py-20 relative"
      style={{ background: "#333437" }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Title */}
        <h2
          className="text-2xl font-bold ubuntu-font mb-2"
          style={{ color: "#ededed" }}
        >
          Banner Ads
        </h2>
        <p
          className="text-sm ubuntu-font mb-8 max-w-xl text-center"
          style={{ color: "#b0b2b5" }}
        >
          Service work for Publicis and Tribal DDB implementing functional
          banner ads. Initially built with ActionScript we moved to Javascript
          to meet industry requirements.
        </p>

        {/* Carousel */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left arrow */}
          <button
            type="button"
            aria-label="Previous ad"
            onClick={goPrev}
            className="absolute left-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* GIF viewport */}
          <div className="h-[500px] flex items-center justify-center">
            <img
              key={ad.key + "-" + changeCount}
              src={ad.gif}
              alt={`Banner ad: ${ad.key}`}
              className="max-h-full max-w-full object-contain animate-fade1"
            />
          </div>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Next ad"
            onClick={goNext}
            className="absolute right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-6">
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
