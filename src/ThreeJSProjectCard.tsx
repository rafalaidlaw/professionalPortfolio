import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

const ThreeJSProjectCard: React.FC = () => {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="ubuntu-font -mb-4" style={{ color: '#55575b' }}>ThreeJS</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="w-full h-64 mb-2">
          <iframe
            src="https://rafalaidlaw.github.io/Three.js-Gameboy-Mods/"
            title="Three.js Project"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen
          />
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Custom Modded Gameboy Builder. Shoppers can build and visualize their modded Gameboy, as well as see the price, then add the gameboy to their cart.
        </p>
      </CardContent>
    </Card>
  );
};

export default ThreeJSProjectCard; 