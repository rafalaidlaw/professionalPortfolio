import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import "./animations.css";

const badgeDescriptions: { [key: string]: string } = {
  React: "A React storefront for a local Toronto vendor.",
  TypeScript: "Built with Type Safety in mind for better code quality.",
  GraphQL: "In the end opted for Redux and Thunk for state management.",
  Hooks: "Created a custom hook for the checkout form.",
  Stripe: "Integration with Stripe for payment.",
  Firebase: "Google Firebasebase to create the distribution API.",
  Redux: "Started with GraphQL but opted for Redux for state management.",
  Thunk: "Used in conjunction with Redux to manage side effects.",
  Saga: "Used to make side effects.",
  "React-Hook-Form": "React-Hook-Form for building out the customer check out form."
};

const ECommerceFeature = () => {
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setAnimate(true);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHovered(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    setAnimate(false);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHovered(false);
  };

  return (
    <Card className="max-w-xl mx-auto shadow-lg">
      <h3 className=" font-bold ubuntu-font -mb-3" style={{ color: '#55575b' }}>
        E-Commerce Website
      </h3>
      <CardContent>
        <TooltipProvider>
          <div className="md:flex md:flex-row gap-6 items-stretch">
            {/* Screenshot with hover effect */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center" style={{ overflow: 'visible' }}>
              <button
                type="button"
                aria-label="Visit E-Commerce Website"
                onClick={() => window.open('https://cosmic-seahorse-cfa092.netlify.app/', '_blank')}
                className="focus:outline-none"
                style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
              >
                <img
                  src={hovered ? "/Retro_Mod_Site.gif" : "/Retro_Still_Image.png"}
                  alt="E-Commerce Website Screenshot"
                  className={`object-contain bg-white ${animate ? 'scale-up-down z-20' : ''} ${!hovered ? 'opacity-50' : 'opacity-100'}`}
                  style={{ }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </button>
              <span className="block text-xs text-gray-500 text-center">Hover to Play || Click to Visit.</span>
            </div>
            {/* Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="text-lg text-muted-foreground font-medium text-center">MADE WITH</div>
                <div className="flex flex-col gap-1 w-full mb-4">
                  <div className="flex gap-1 w-full">
                    {["React", "TypeScript"].map((label) => (
                      <Tooltip key={label}>
                        <TooltipTrigger asChild>
                          <span className="flex-1 bg-gray-200 text-gray-600" style={{borderRadius:'0.4rem', padding:'0.1875rem 0', fontWeight:'bold', fontSize:'0.6875rem', textAlign:'center', textTransform:'uppercase', letterSpacing:'0.05em'}}>{label}</span>
                        </TooltipTrigger>
                        <TooltipContent>{badgeDescriptions[label as keyof typeof badgeDescriptions]}</TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <div className="flex gap-1 w-full">
                    {["GraphQL", "Hooks"].map((label) => (
                      <Tooltip key={label}>
                        <TooltipTrigger asChild>
                          <span className="flex-1 bg-gray-200 text-gray-600" style={{borderRadius:'0.4rem', padding:'0.1875rem 0', fontWeight:'bold', fontSize:'0.6875rem', textAlign:'center', textTransform:'uppercase', letterSpacing:'0.05em'}}>{label}</span>
                        </TooltipTrigger>
                        <TooltipContent>{badgeDescriptions[label as keyof typeof badgeDescriptions]}</TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <div className="flex gap-1 w-full">
                    {["Stripe", "Firebase"].map((label) => (
                      <Tooltip key={label}>
                        <TooltipTrigger asChild>
                          <span className="flex-1 bg-gray-200 text-gray-600" style={{borderRadius:'0.4rem', padding:'0.1875rem 0', fontWeight:'bold', fontSize:'0.6875rem', textAlign:'center', textTransform:'uppercase', letterSpacing:'0.05em'}}>{label}</span>
                        </TooltipTrigger>
                        <TooltipContent>{badgeDescriptions[label as keyof typeof badgeDescriptions]}</TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <div className="flex gap-1 w-full">
                    {["Redux", "Thunk", "Saga"].map((label) => (
                      <Tooltip key={label}>
                        <TooltipTrigger asChild>
                          <span className="flex-1 bg-gray-200 text-gray-600" style={{borderRadius:'0.4rem', padding:'0.1875rem 0', fontWeight:'bold', fontSize:'0.6875rem', textAlign:'center', textTransform:'uppercase', letterSpacing:'0.05em'}}>{label}</span>
                        </TooltipTrigger>
                        <TooltipContent>{badgeDescriptions[label as keyof typeof badgeDescriptions]}</TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                  <div className="flex w-full">
                    <Tooltip key="React-Hook-Form">
                      <TooltipTrigger asChild>
                        <span className="flex-1 bg-gray-200 text-gray-600" style={{borderRadius:'0.4rem', padding:'0.1875rem 0', fontWeight:'bold', fontSize:'0.6875rem', textAlign:'center', textTransform:'uppercase', letterSpacing:'0.05em'}}>React-Hook-Form</span>
                      </TooltipTrigger>
                      <TooltipContent>{badgeDescriptions["React-Hook-Form" as keyof typeof badgeDescriptions]}</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TooltipProvider>
        <div className="mt-6">
          <p className="text-sm text-gray-600 text-center">
            React storefront for local Toronto vendor. 
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ECommerceFeature; 