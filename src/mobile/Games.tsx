import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const games = [
  {
    title: "Dinogame",
    link: "https://retromodgod.itch.io/dinogame-clone",
    mobileDescription: "Chrome dino-style runner built with PhaserJS.",
  },
  {
    title: "Flappy Bird",
    link: "https://retromodgod.itch.io/fbird-clone-demo",
    mobileDescription: "Flappy bird clone built with PhaserJS.",
  },
  {
    title: "Boy With Stick",
    link: "https://retromodgod.itch.io/boy-with-a-stick",
    mobileDescription: "Top-down action game built with Godot Engine.",
  },
];

const Games = () => {
  return (
    <Card id="games" className="w-full max-w-[1020px] mx-auto">
      <CardHeader>
        <CardTitle
          className="ubuntu-font text-center"
          style={{ color: "#55575b" }}
        >
          Games built with Unity, Godot and PhaserJS
        </CardTitle>
        <p className="text-sm text-muted-foreground text-center mt-1">
          Play these games on itch.io — desktop recommended for the best experience.
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          {games.map((g) => (
            <a
              key={g.title}
              href={g.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 no-underline transition-all hover:border-gray-400 hover:shadow-sm"
            >
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-bold ubuntu-font"
                  style={{ color: "#55575b" }}
                >
                  {g.title}
                </span>
                <span className="text-sm text-gray-500">
                  {g.mobileDescription}
                </span>
              </div>
              <ExternalLink size={18} className="text-gray-400 flex-shrink-0 ml-3" />
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Games;
