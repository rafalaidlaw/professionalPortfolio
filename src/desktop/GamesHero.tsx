import { useState, useEffect, useRef } from "react";
import RafaCard from "./RafaCard";
import { useRafaCard } from "./RafaCardContext";

const games = [
  {
    title: "Dinogame",
    src: "https://itch.io/embed-upload/13151521?color=333333",
    width: 1020,
    height: 380,
    description: "To start the game press jump. Press space to jump. Press down to duck. Made with PhaserJs.",
  },
  {
    title: "Flappy Bird",
    src: "https://itch.io/embed-upload/14941047?color=333333",
    width: 435,
    height: 555,
    description: "Flappy bird like game. Click mouse or Spacebar to jump. Built with Phaser JS.",
  },
  {
    title: "Boy With Stick",
    src: "https://itch.io/embed-upload/13145428?color=333333",
    width: 960,
    height: 560,
    description: "Use WASD or Arrow Keys to move around, click mouse to swing stick.",
  },
];

const bubbleTexts = [
  "A Chrome Dino-style runner built with PhaserJS. Jump and duck to avoid obstacles!",
  "A Flappy Bird clone built with PhaserJS. Simple but addictive gameplay.",
  "A top-down action game built with Unity. Move around and swing your stick!",
];

const GamesHero = () => {
  const { visible: rafaVisible } = useRafaCard();
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleScale, setTitleScale] = useState(1);
  const [sectionHovered, setSectionHovered] = useState(false);
  const [selected, setSelected] = useState(0);

  const game = games[selected];
  const maxHeight = Math.max(...games.map((g) => g.height));
  const displayHeight = Math.round(maxHeight / 2);
  const scale = displayHeight / game.height;
  const maxWidth = Math.max(...games.map((g) => g.width));

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
      className="w-full py-10 relative"
      style={{ background: "#4a4d52" }}
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
              Games
            </h2>
            <p className="text-sm ubuntu-font leading-tight" style={{ color: "#888a8f" }}>
              Unity, Godot & PhaserJS
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
                      title: game.title,
                      description: bubbleTexts[selected],
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

        {/* Game iframe */}
        <div
          style={{
            width: maxWidth,
            height: displayHeight,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <iframe
            src={game.src}
            title={game.title}
            width={game.width}
            height={game.height}
            frameBorder="0"
            className="border rounded shadow"
            allowFullScreen
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              display: "block",
            }}
          />
        </div>

        {/* Game description */}
        <div className="mt-4 mb-4">
          <span className="text-gray-300 text-base text-center ubuntu-font">
            {game.description}
          </span>
        </div>

        {/* Game selection buttons */}
        <div className="skew-btn-group flex flex-row gap-4 justify-center items-center w-full mt-2">
          {games.map((g, idx) => (
            <button
              key={g.title}
              onClick={() => setSelected(idx)}
              className={`skew-btn font-bold mx-8 px-4 py-2 transition-all duration-300 overflow-hidden ${
                selected === idx
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-300 text-gray-700"
              }`}
              style={{ border: "none", outline: "none" }}
            >
              <span className="skew-btn-inner block w-full text-center transition-all duration-300">
                {g.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesHero;
