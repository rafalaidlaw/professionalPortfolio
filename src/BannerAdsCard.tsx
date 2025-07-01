import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
// @ts-ignore: No type declarations for InternetBanner.jsx
import InternetBanner from "./InternetBanner";

const BannerAdsCard = () => (
  <Card className="max-w-xl mx-auto">
    <CardHeader >
      <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Banner Ads</CardTitle>
      <CardDescription className="text-gray-600">
        Service work for Publicis and Tribal DDB implementing functional banner ads. Initially built with ActionScript we moved to Javascript to meet industry requirements. Building ads with reusable code saved on memory and allowed for quick production and updating of multiple iterations for evolving ad campaigns.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <InternetBanner />
    </CardContent>
  </Card>
);

export default BannerAdsCard; 