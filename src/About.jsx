import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Skills from "./Skills"

interface AboutProps {
  hoverText: string;
  onMouseEnter: (text: string) => void;
  onMouseLeave: () => void;
}

const About = ({ hoverText, onMouseEnter, onMouseLeave }: AboutProps) => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <div className="flex gap-16">
        {/* Left: Text and Skills */}
        <div className="flex-1">
          <div className="flex items-center gap-8 mb-8">
            {/* Skill cube to the left of title */}
            <Avatar className="h-24 w-20 rounded-none flex-shrink-0">
              <AvatarImage src="/skillcube_20-grey.gif" alt="Profile" className="h-24 w-20 object-contain rounded-none" />
              <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-none">
                RL
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h1 className="text-3xl font-bold tracking-tight" style={{ color: '#55575b' }}>Rafael Laidlaw</h1>
              <p className="text-lg text-muted-foreground font-medium">Web Developer</p>
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