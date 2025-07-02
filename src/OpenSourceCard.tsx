import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const openSourceProjects = [
  { label: "Altair GraphQL", desc: "Implemented search functionality for parsing collections." },
  { label: "Godot Engine", desc: "Longtime member of the bugsquad testing team." },
  { label: "PixiJS", desc: "Fixed issue with scale when window size changed." },
  { label: "BuddyJS", desc: "JavaScript testing tool" },
];

const OpenSourceCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Open Source Contributions</CardTitle>
    </CardHeader>
    <CardContent>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {openSourceProjects.map((proj) => (
            <Tooltip key={proj.label}>
              <TooltipTrigger asChild>
                {proj.label === "Altair GraphQL" ? (
                  <a
                    href="https://github.com/altair-graphql"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white border border-gray-300 text-gray-500 rounded px-3 py-1 font-bold text-xs cursor-pointer hover:border-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    {proj.label}
                  </a>
                ) : proj.label === "Godot Engine" ? (
                  <a
                    href="https://docs.godotengine.org/en/stable/contributing/workflow/bug_triage_guidelines.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white border border-gray-300 text-gray-500 rounded px-3 py-1 font-bold text-xs cursor-pointer hover:border-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    {proj.label}
                  </a>
                ) : proj.label === "PixiJS" ? (
                  <a
                    href="https://pixijs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white border border-gray-300 text-gray-500 rounded px-3 py-1 font-bold text-xs cursor-pointer hover:border-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    {proj.label}
                  </a>
                ) : proj.label === "BuddyJS" ? (
                  <a
                    href="https://buddyjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white border border-gray-300 text-gray-500 rounded px-3 py-1 font-bold text-xs cursor-pointer hover:border-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    {proj.label}
                  </a>
                ) : (
                  <span className="inline-block bg-white border border-gray-300 text-gray-500 rounded px-3 py-1 font-bold text-xs cursor-pointer hover:border-gray-500 hover:text-gray-700 transition-colors duration-200">
                    {proj.label}
                  </span>
                )}
              </TooltipTrigger>
              <TooltipContent className="absolute left-1/2 -translate-x-1/2 -top-10 z-50 bg-gray-800 text-gray-100 text-xs rounded px-3 py-2 shadow-lg ubuntu-font w-64 text-center pointer-events-none">
                {proj.desc}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
      <CardDescription className="text-base text-left pt-2 pb-2">
        I have contributed extensively to open source projects, including tools and engines used by developers worldwide.
      </CardDescription>
    </CardContent>
  </Card>
);

export default OpenSourceCard; 