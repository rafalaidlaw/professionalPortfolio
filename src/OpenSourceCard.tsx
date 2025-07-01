import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const openSourceProjects = [
  { label: "Altair GraphQL", desc: "Implemented search functionality for parsing collections." },
  { label: "Godot Engine", desc: "Longtime member of the bugsquad testing team." },
  { label: "PixiJS", desc: "Fixed issue with scale when window size changed." },
  { label: "BuddyJS", desc: "JavaScript testing tool" },
  { label: "Kota Co", desc: "Open source project" },
  { label: "One", desc: "Open source project" },
];

const OpenSourceCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Open Source Contributions</CardTitle>
      <CardDescription>
        I have contributed extensively to open source projects, including tools and engines used by developers worldwide.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <TooltipProvider>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {openSourceProjects.map((proj) => (
            <Tooltip key={proj.label}>
              <TooltipTrigger asChild>
                {proj.label === "Altair GraphQL" ? (
                  <a
                    href="https://github.com/altair-graphql"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 text-gray-600 rounded px-3 py-1 font-bold text-xs cursor-pointer"
                  >
                    {proj.label}
                  </a>
                ) : proj.label === "Godot Engine" ? (
                  <a
                    href="https://docs.godotengine.org/en/stable/contributing/workflow/bug_triage_guidelines.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 text-gray-600 rounded px-3 py-1 font-bold text-xs cursor-pointer"
                  >
                    {proj.label}
                  </a>
                ) : proj.label === "PixiJS" ? (
                  <a
                    href="https://pixijs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 text-gray-600 rounded px-3 py-1 font-bold text-xs cursor-pointer"
                  >
                    {proj.label}
                  </a>
                ) : proj.label === "BuddyJS" ? (
                  <a
                    href="https://buddyjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 text-gray-600 rounded px-3 py-1 font-bold text-xs cursor-pointer"
                  >
                    {proj.label}
                  </a>
                ) : proj.label === "Kota Co" ? (
                  <a
                    href="https://kota.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 text-gray-600 rounded px-3 py-1 font-bold text-xs cursor-pointer"
                  >
                    {proj.label}
                  </a>
                ) : proj.label === "One" ? (
                  <a
                    href="https://one.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-200 text-gray-600 rounded px-3 py-1 font-bold text-xs cursor-pointer"
                  >
                    {proj.label}
                  </a>
                ) : (
                  <span className="inline-block bg-gray-200 text-gray-600 rounded px-3 py-1 font-bold text-xs cursor-pointer">
                    {proj.label}
                  </span>
                )}
              </TooltipTrigger>
              <TooltipContent>
                {proj.desc}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </CardContent>
  </Card>
);

export default OpenSourceCard; 