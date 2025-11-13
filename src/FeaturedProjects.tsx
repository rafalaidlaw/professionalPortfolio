import ECommerceFeature from "./ECommerceFeature";
import OpenSourceCard from "./OpenSourceCard";
import OutlierAICard from "./OutlierAICard";
import BannerAdsCard from "./BannerAdsCard";
import MotionGraphicsCard from "./MotionGraphicsCard";
import ThreeJSProjectCard from "./ThreeJSProjectCard";
import PixiSlotsCard from "./PixiSlotsCard";
// @ts-ignore: No type declarations for battlePrototype.tsx
// import ErrorExample from "./battlePrototype";

const FeaturedProjects = () => (
  <section id="projects" className="container mx-auto mt-5 px-4 pb-4">
    <div className="text-center">
      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="space-y-4">
          <ECommerceFeature />
          <BannerAdsCard />
          <PixiSlotsCard />
        </div>
        {/* Right column */}
        <div className="space-y-4">
          <OpenSourceCard />
          <OutlierAICard />
          <MotionGraphicsCard />
          <ThreeJSProjectCard />
          {/* <ErrorExample /> */}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
