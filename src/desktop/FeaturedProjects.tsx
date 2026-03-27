import OutlierAICard from "./OutlierAICard";
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
        <div className="min-w-0 space-y-4">
          <PixiSlotsCard />
        </div>
        {/* Right column */}
        <div className="min-w-0 space-y-4">
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
