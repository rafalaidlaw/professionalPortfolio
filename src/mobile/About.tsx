import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Skills from "./Skills";
import { useState } from "react";

const DEFAULT_TAGLINE =
  "Web Developer working in JavaScript, React, TypeScript, Tailwind, GraphQL, Redux, CSS and Firebase.";

const About = () => {
  const [hoverText, setHoverText] = useState(DEFAULT_TAGLINE);

  const handleMouseEnter = (text: string) => {
    setHoverText(text);
  };
  const handleMouseLeave = () => {
    setHoverText(DEFAULT_TAGLINE);
  };

  return (
    <section id="about" className="container mx-auto px-6 pt-10">
      {/* Centered vertical stack for mobile */}
      <div className="flex flex-col items-center gap-3 mb-4 rounded-lg p-3 w-full">
        {/* Skill cube */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Avatar className="h-20 w-16 rounded-none flex-shrink-0">
            <AvatarImage
              src="/skillcube_20-grey.gif"
              alt="Profile"
              className="h-20 w-16 object-contain rounded-none"
            />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-none">
              RL
            </AvatarFallback>
          </Avatar>
        </div>
        {/* Name and Title */}
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-3xl font-bold tracking-tight ubuntu-font text-center"
            style={{ color: "#55575b" }}
          >
            Rafael Laidlaw
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            Web Developer
          </p>
        </div>
        {/* About Text */}
        <div className="flex items-center px-1">
          <p className="text-sm ubuntu-font text-gray-700 leading-relaxed text-center">
            I have contributed to open source projects such as Altair GraphQL,
            Hoppscotch, Godot Engine and Mermaid-js. Experience with AI as a
            Javascript trainer for Outlier AI. I spent 3 years developing banner
            ads for Publicis and Tribal DDB. I recently finished building a
            React website for my e-commerce business. I have also built a few
            games using Unity, Godot and Phaser. Currently working on a custom
            modded Gameboy Builder using ThreeJS.
          </p>
        </div>
      </div>
      {/* Tagline Box */}
      <div className="w-full flex justify-center mb-2">
        <div className="w-full bg-white rounded-lg py-2 px-4">
          <p
            className="text-sm text-center font-medium"
            style={{ color: "#55575b" }}
          >
            {hoverText}
          </p>
        </div>
      </div>
      {/* Skills Row */}
      <div className="w-full flex justify-center mt-0">
        <Skills
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </section>
  );
};

export default About;
