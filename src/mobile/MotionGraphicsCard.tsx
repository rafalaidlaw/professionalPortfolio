import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React, { useState, useCallback } from "react";

// Type for animation projects
interface AnimationProject {
  title: string;
  description: string;
  video: string;
  type: "youtube" | "vimeo";
}

const animationProjects: AnimationProject[] = [
  {
    title: "Attic Jump",
    description: "Music video for local Toronto jazz musician. I handled every aspect of the project, from storyboard, design, rigging and animation.",
    video: "https://www.youtube.com/embed/vgr5Pq0kLN8?si=gYfY2kDIHfRKmQqL",
    type: "youtube"
  },
  {
    title: "Television Demo-Reel",
    description: "A compilation of TV animation work. I have done service work for all the major Toronto Studios, working on everything from Disney to Sesame street.",
    video: "https://player.vimeo.com/video/950860369?badge=0&autopause=0&player_id=0&app_id=58479",
    type: "vimeo"
  },
  {
    title: "Way Too Good",
    description: "Animated music video that was shown in festivals including the International Animation Festivals in Ottawa and Singapore.",
    video: "https://www.youtube.com/embed/g9r4KwkOkuY?si=0ImXNd0I7sd8pdUw",
    type: "youtube"
  }
];

const MotionGraphicsCard: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<AnimationProject>(animationProjects[0]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const [playing, setPlaying] = useState(false);

  const getVideoUrl = useCallback((project: AnimationProject, idx: number) => {
    if (!shouldAutoplay) return project.video;
    const baseUrl = project.video;
    const hasParams = baseUrl.includes("?");
    const separator = hasParams ? "&" : "?";
    if (project.type === "youtube") {
      if (idx === 2) {
        return `${baseUrl}${separator}autoplay=1&start=3`;
      }
      return `${baseUrl}${separator}autoplay=1`;
    } else if (project.type === "vimeo") {
      return `${baseUrl}${separator}autoplay=1`;
    }
    return baseUrl;
  }, [shouldAutoplay]);

  const getActiveStill = (): string => {
    const idx = animationProjects.findIndex(p => p === activeVideo);
    return idx === 0 ? "/banners/attic-cover-sprite.png" : idx === 1 ? "/banners/anim-demo-sprite.png" : "/way-too-good-cover-sprite.png";
  };

  const getCardImage = useCallback((idx: number): string => {
    if (hoveredIdx === idx) {
      return idx === 0 ? "/banners/attic-gif-export.gif" : idx === 1 ? "/banners/anim-gif-download-export.gif" : "/way-gif-refactored.gif";
    }
    return idx === 0 ? "/banners/attic-cover-sprite.png" : idx === 1 ? "/banners/anim-demo-sprite.png" : "/way-too-good-cover-sprite.png";
  }, [hoveredIdx]);

  const handleCardHover = useCallback((project: AnimationProject, idx: number) => {
    setActiveVideo(project);
    setHoveredIdx(idx);
    setShouldAutoplay(false);
    setPlaying(false);
  }, []);

  const handleCardLeave = useCallback(() => {
    setHoveredIdx(null);
  }, []);

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Motion Graphics</CardTitle>
        
      </CardHeader>
      <CardContent className="pt-0">
        <div className="rounded-2xl relative z-20 overflow-visible">
          <div className="align-element relative z-10 max-w-7xl mx-auto overflow-visible">
            <div className="flex justify-center mb-1 mt-1">
              <div className="w-full max-w-2xl relative flex flex-col items-stretch">
                <div className="w-64 flex flex-col mx-auto pb-4">
                  <div className={`relative  h-3.5 bg-gray-200 flex items-center justify-center rounded-t-lg transition-colors duration-300`}>
                    <div className="absolute  inset-0 flex justify-between px-2 py-1 w-full">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={`w-5 h-2 bg-gray-300 rounded-sm flex items-center justify-center transition-colors duration-300`}>
                          <div className={`w-5 h-2 bg-gray-700 rounded-sm transition-colors duration-300`} style={{transform: 'scale(0.9)'}}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`w-64 h-24 overflow-hidden shadow-lg bg-gray-50 transition-colors duration-300`}>
                    {activeVideo.type === "youtube" ? (
                      <div className="relative w-full h-full aspect-video">
                        {!playing && (
                          <button
                            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 z-20"
                            style={{ cursor: 'pointer' }}
                            onClick={() => { setShouldAutoplay(true); setPlaying(true); }}
                            aria-label="Play video"
                          >
                            <img
                              src={getActiveStill()}
                              alt="Video thumbnail"
                              className="w-full h-full object-cover grayscale"
                              style={{ pointerEvents: 'none' }}
                            />
                            <span className="absolute text-4xl text-white/80 ubuntu-font z-30" style={{ pointerEvents: 'none' }}>▶</span>
                          </button>
                        )}
                        {(playing || shouldAutoplay) && (
                          <iframe
                            width="100%"
                            height="100%"
                            src={getVideoUrl(activeVideo, animationProjects.findIndex(p => p === activeVideo))}
                            title="Animation Reel"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full absolute top-0 left-0"
                          />
                        )}
                      </div>
                    ) : (
                      <div className="relative w-full h-full aspect-video">
                        {activeVideo.type === "vimeo" && !playing && (
                          <button
                            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/30 z-20"
                            style={{ cursor: 'pointer' }}
                            onClick={() => { setShouldAutoplay(true); setPlaying(true); }}
                            aria-label="Play video"
                          >
                            <img
                              src={getActiveStill()}
                              alt="Video thumbnail"
                              className="w-full h-full object-cover grayscale"
                              style={{ pointerEvents: 'none' }}
                            />
                            <span className="absolute text-4xl text-white/80 ubuntu-font z-30" style={{ pointerEvents: 'none' }}>▶</span>
                          </button>
                        )}
                        {(activeVideo.type !== "vimeo" || playing || shouldAutoplay) && (
                          <iframe
                            width="100%"
                            height="100%"
                            src={getVideoUrl(activeVideo, animationProjects.findIndex(p => p === activeVideo))}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                            title="Rafael Laidlaw Animation Demo Reel"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        )}
                      </div>
                    )}
                  </div>
                  <div className={`relative h-3.5 bg-gray-200 flex items-center justify-center rounded-b-lg transition-colors duration-300`}>
                    <div className="absolute inset-0 flex justify-between px-2 py-1 w-full">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={`w-5 h-2 bg-gray-300 rounded-sm flex items-center justify-center transition-colors duration-300`}>
                          <div className={`w-5 h-2 bg-gray-700 rounded-sm transition-colors duration-300`} style={{transform: 'scale(0.9)'}}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-2 mt-4 justify-items-center px-0 overflow-visible">
                {animationProjects.map((project, idx) => (
                  <div className="relative" key={idx}>
                    <button
                      type="button"
                      className="flex flex-col items-center w-full max-w-xs mx-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                      onClick={() => { setShouldAutoplay(true); setPlaying(true); }}
                      onMouseEnter={() => handleCardHover(project, idx)}
                      onMouseLeave={handleCardLeave}
                      tabIndex={0}
                      aria-label={`Play video for ${project.title}`}
                      style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                    >
                      <article
                        className={`animation-card border-2 border-gray-300 rounded-xl flex flex-col items-center w-full shadow-md relative overflow-hidden transition-all duration-300`}
                        style={{ zIndex: 10 - idx }}
                      >
                        <img
                          src={getCardImage(idx)}
                          alt={project.title}
                          width={192}
                          height={52}
                          className={`w-[192px] h-[52px] object-cover rounded-t mb-0 border-b border-gray-400 relative z-20 transition-colors duration-300 ${hoveredIdx !== idx ? 'grayscale' : ''}`}
                        />
                      </article>
                    </button>
                    {hoveredIdx === idx && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-50 bg-gray-800 text-gray-100 text-xs rounded px-3 py-2 shadow-lg ubuntu-font whitespace-pre-line w-64 text-center pointer-events-none">
                        {project.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="ubuntu-font text-gray-500 text-center mt-4 text-xs">
                Hover to Preview || Click to Play
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MotionGraphicsCard; 