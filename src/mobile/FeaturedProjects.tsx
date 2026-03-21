import ECommerceFeature from "./ECommerceFeature";
import OpenSourceCard from "./OpenSourceCard";
import OutlierAICard from "./OutlierAICard";
import BannerAdsCard from "./BannerAdsCard";
import MotionGraphicsCard from "./MotionGraphicsCard";
import ThreeJSProjectCard from "./ThreeJSProjectCard";
import PixiSlotsCard from "./PixiSlotsCard";

const FeaturedProjects = () => (
  <section id="projects" className="container mx-auto mt-5 px-4 pb-4">
    <div className="text-center">
      <div className="flex flex-col gap-4">
        <ECommerceFeature />
        <BannerAdsCard />
        <PixiSlotsCard />
        <OpenSourceCard />
        <OutlierAICard />
        <MotionGraphicsCard />
        <ThreeJSProjectCard />
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
