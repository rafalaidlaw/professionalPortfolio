import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Skills from "./Skills"
import { useState } from "react"

const DEFAULT_TAGLINE = "Web Developer working in JavaScript, React, TypeScript, Tailwind, GraphQL, Redux, CSS and Firebase.";

const About = () => {
  const [hoverText, setHoverText] = useState(DEFAULT_TAGLINE);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (text: string) => {
    setHoverText(text);
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setHoverText(DEFAULT_TAGLINE);
    setIsHovering(false);
  };

  return (
    <section id="about" className="container mx-auto px-4 pt-6">
      {/* Main Row: Skill Cube | Name/Title | Divider | About Text */}
      <div className="flex flex-row items-center gap-4 mb-4 rounded-lg p-3 w-full">
        {/* Skill cube */}
        <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 pr-6">
          <Avatar className="h-24 w-20 rounded-none flex-shrink-0">
            <AvatarImage src="/skillcube_20-grey.gif" alt="Profile" className="h-24 w-20 object-contain rounded-none" />
            <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-none">
              RL
            </AvatarFallback>
          </Avatar>
        </div>
        {/* Name and Title */}
        <div className="flex flex-col justify-center min-w-[220px] h-24 pr-6">
          <h1 className="text-4xl font-bold tracking-tight ubuntu-font" style={{ color: '#55575b' }}>Rafael Laidlaw</h1>
          <p className="text-xl text-muted-foreground font-medium">Web Developer</p>
        </div>
        {/* Vertical Divider */}
        <div className="h-24 border-l-2 border-gray-300 mx-0" />
        {/* About Text */}
        <div className="flex-1 flex items-center h-24 pl-6">
          <p className="text-sm ubuntu-font text-gray-700 leading-relaxed text-left">
            I have contributed extensively to open source projects such as Altair GraphQL, Godot and PixiJS. Experience with AI as a Javascript AI trainer for Outlier AI, and building projects using modern tools such as Claude, Fooocus, and Code Agent. I spent 3 years developing banner ads for Publicis and Tribal DDB. I recently finished building a storefront for a local Toronto vendor that used Firebase API as its backend. I have also built a few games using Unity, Godot and Phaser.
          </p>
        </div>
      </div>
      {/* Tagline Box (now dynamic) */}
      <div className="w-full flex justify-center mb-2">
        <div className="w-full md:w-4/5 bg-white rounded-lg py-2 px-4">
          <p className="text-sm text-center font-medium" style={{ color: '#55575b' }}>
            {hoverText}
          </p>
        </div>
      </div>
      {/* Skills Row */}
      <div className="w-full flex justify-center mt-0">
        <Skills onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      </div>
    </section>
  );
};

export default About; 