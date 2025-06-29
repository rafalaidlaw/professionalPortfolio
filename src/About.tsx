import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Skills from "./Skills"

interface AboutProps {
  hoverText: string;
  onMouseEnter: (text: string) => void;
  onMouseLeave: () => void;
}

const About = ({ hoverText, onMouseEnter, onMouseLeave }: AboutProps) => {
  return (
    <section id="about" className="container mx-auto px-8 pt-8 pb-16">
      <div className="flex gap-16">
        {/* Left: Text and Skills */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8 mb-8">
            {/* Skill cube to the left of title */}
            <Avatar className="h-24 w-20 rounded-none flex-shrink-0">
              <AvatarImage src="/skillcube_20-grey.gif" alt="Profile" className="h-24 w-20 object-contain rounded-none" />
              <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-none">
                RL
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-shrink-0 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight" style={{ color: '#55575b' }}>Rafael Laidlaw</h1>
              <p className="text-lg text-muted-foreground font-medium">Web Developer</p>
            </div>
            
            {/* About text in square stretching to end of screen */}
            <div className="h-24 md:border-l-2 md:border-l-gray-300 flex items-center justify-center flex-1 md:ml-4 px-4 py-4 md:pl-11 md:pr-8 w-full md:w-auto">
              <p className="text-sm text-gray-600 leading-tight text-left">
                I have contributed extensively to open source projects such as Altair GraphQL, Godot and PixiJS. I have experience with AI as a Javascript AI trainer for Outlier AI, and building projects using modern ai tools such as Claude, Fooocus, and Code Agent. I spent 3 years devloping banner ads for Publicis and Tribal DDB. I recently finished building a storefront for a local Toronto vendor that used Firebase API as its backend.
              </p>
            </div>
          </div>
          
          {/* Skills section moved here */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full h-12 border-2 border-white px-4 bg-white flex items-center justify-center rounded-lg mb-4">
              <p className="text-sm text-gray-700 leading-relaxed text-center flex-1 px-4">
                {hoverText}
              </p>
            </div>
            <Skills onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 