import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import React from "react";

const BannerAdsCard = () => (
  <Card className="max-w-xl mx-auto">
    <CardHeader >
      <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Banner Ads</CardTitle>
      <CardDescription className="text-gray-600">A showcase of banner ads built for clients at Publicis and Tribal DDB. (Content coming soon.)</CardDescription>
    </CardHeader>
    <CardContent>
      {/* Placeholder for future banner ad content */}
    </CardContent>
  </Card>
);

export default BannerAdsCard; 