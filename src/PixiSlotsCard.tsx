import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

const PixiSlotsCard: React.FC = () => {
  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="ubuntu-font -mb-4" style={{ color: "#55575b" }}>
          PixiSlots
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="w-full max-w-xl mx-auto h-72 mb-2">
          <iframe
            src="https://rafalaidlaw.github.io/pixislots/"
            title="PixiSlots Slot Machine"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen
          />
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          A slot machine game built with PixiJS.
        </p>
      </CardContent>
    </Card>
  );
};

export default PixiSlotsCard;
