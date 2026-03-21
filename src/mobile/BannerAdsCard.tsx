import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
// @ts-ignore: No type declarations for InternetBanner.jsx
import InternetBanner from "./InternetBanner";

const BannerAdsCard = () => (
  <Card className="max-w-xl mx-auto">
    <CardHeader >
      <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Banner Ads</CardTitle>
      <span className="block text-xs text-gray-500 text-center mt-1">Hover To Play</span>
    </CardHeader>
    <CardContent >
      <div className="flex justify-center ">
        <div className="scale-70 origin-center -mt-8">
          <InternetBanner />
        </div>
      </div>
      <CardDescription className="text-gray-600 text-base text-left pt-2 pb-2">
        Service work for Publicis and Tribal DDB implementing functional banner ads. Initially built with ActionScript we moved to Javascript to meet industry requirements. Building ads with reusable code saved on memory and allowed for quick production and updating of multiple iterations for evolving ad campaigns.
      </CardDescription>
    </CardContent>
  </Card>
);

export default BannerAdsCard; 