import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle,  } from "@/components/ui/card";

const games = [
  {
    title: "Dinogame",
    src: "https://itch.io/embed-upload/13151521?color=333333",
    type: "iframe",
    width: 1020,
    height: 380,
    link: "https://retromodgod.itch.io/dinogame-clone"
  },
  {
    title: "Flappy Bird",
    src: "https://itch.io/embed-upload/13147234?color=333333",
    type: "iframe",
    width: 415,
    height: 535,
    link: "https://itch.io/embed-upload/13147234?color=333333"
  },
  {
    title: "Boy With Stick",
    src: "https://itch.io/embed-upload/13145428?color=333333",
    type: "iframe",
    width: 960,
    height: 560,
    link: "https://itch.io/embed-upload/13145428?color=333333"
  },
  // Example structure for future games:
  // {
  //   title: "Space Invaders Clone",
  //   src: "https://your-game-url.com/space-invaders",
  //   type: "iframe",
  // },
];

const Games = () => {
  const [selected, setSelected] = useState(0);
  const game = games[selected];

  // Fixed height for the game area should be about half the greatest height among all games
  const maxHeight = Math.max(...games.map(g => g.height));
  const displayHeight = Math.round(maxHeight / 2);
  const scale = displayHeight / game.height;
  const maxWidth = Math.max(...games.map(g => g.width));

  return (
    <Card id="games" className="w-full max-w-[1020px] mx-auto my-8">
      <CardHeader>
        <CardTitle className="ubuntu-font text-center" style={{ color: '#55575b' }}>Games built with Unity, Godot and PhaserJS</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full flex flex-col items-center">
          {/* Centered WebGL game area with fixed dimensions */}
          <div
            style={{ width: maxWidth, height: displayHeight, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
            className="mx-auto"
          >
            <iframe
              src={game.src}
              title={game.title}
              width={game.width}
              height={game.height}
              frameBorder="0"
              className="border rounded shadow"
              allowFullScreen
              style={{ transform: `scale(${scale})`, transformOrigin: 'top center', display: 'block' }}
            />
          </div>
          {/* Game-specific description below the game */}
          <div className="mt-4 mb-4 flex flex-col items-center w-full">
            {game.title === "Flappy Bird" ? (
              <span className="text-gray-600 text-base text-center w-full">Flappy bird like game. Click mouse or Spacebar to jump. Built with Phaser JS.</span>
            ) : game.title === "Dinogame" ? (
              <span className="text-gray-600 text-base text-center w-full">To start the game press jump. Press space to jump. Press down to duck. Made with PhaserJs.</span>
            ) : game.title === "Boy With Stick" ? (
              <span className="text-gray-600 text-base text-center w-full">Use WASD or Arrow Keys to move around, click mouse to swing stick.</span>
            ) : (
              <span className="text-gray-600 text-base text-center w-full">Play on itch.io</span>
            )}
          </div>
          {/* Horizontal row of game selection buttons beneath everything */}
          <div className="skew-btn-group flex flex-row gap-4 justify-center items-center w-full mt-2">
            {games.map((g, idx) => (
              <button
                key={g.title}
                onClick={() => setSelected(idx)}
                className={`skew-btn font-bold mx-8 px-4 py-2 transition-all duration-300 overflow-hidden ${selected === idx ? 'bg-gray-700 text-gray-300' : 'bg-gray-300 text-gray-700'}`}
                style={{ border: 'none', outline: 'none' }}
              >
                <span className="skew-btn-inner block w-full text-center transition-all duration-300">
                  {g.title}
                </span>
              </button>
            ))}
            {/* <a href={game.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center ml-2">
              <FaItchIo className="hover-icon" />
            </a> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Games; 