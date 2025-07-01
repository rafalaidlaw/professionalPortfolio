import { Card } from "@/components/ui/card";
import React from "react";
import ECommerceFeature from "./ECommerceFeature";
import OpenSourceCard from "./OpenSourceCard";
import OutlierAICard from "./OutlierAICard";
import BannerAdsCard from "./BannerAdsCard";

const FeaturedProjects = () => (
  <section id="projects" className="container mx-auto mt-5 px-4 pb-4">
    <div className="text-center space-y-8">
      <div className="grid grid-cols-2 grid-rows-3 gap-2 items-stretch">
        {/* ECommerceFeature spans two rows, left column */}
        <div className="row-span-2 h-full col-start-1 row-start-1">
          <ECommerceFeature />
        </div>
        {/* Banner Ads, left column, below ECommerce */}
        <div className="col-start-1 row-start-3 -mt-18">
          <BannerAdsCard />
        </div>
        {/* Open Source Contributions, top right */}
        <div className="col-start-2 row-start-1">
          <OpenSourceCard />
        </div>
        {/* Outlier AI, bottom right */}
        <div className="col-start-2 row-start-2">
          <OutlierAICard />
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProjects; 