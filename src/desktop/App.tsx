import Navbar from "./Navbar"
import About from "./About.tsx"
import { Separator } from "@/components/ui/separator"
import Games from "./Games"
import FeaturedProjects from "./FeaturedProjects"
// import BattleSwitchPrototype from "./battleSwitchPrototype"
// import BattlePrototype from "./battlePrototype"
import ECommerceHero from "./ECommerceHero"
import BannerAdsHero from "./BannerAdsHero"
import Profile from "./Profile"
import Contact from "./Contact"
import BoringSection from "./BoringSection"
import Footer from "./Footer"

function DesktopApp() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="pt-20">
        <About />

        <ECommerceHero />

        <BannerAdsHero />

        <div className="mt-16">
          <Separator />

          {/* Projects Section */}
          <FeaturedProjects />
        </div>

        <Separator />

        <Games />

        <Separator />

        <Profile />

        {/* Contact Section */}
        <div className="-mt-2 -mb-4">
          <Contact />
        </div>

        <BoringSection />

        <Footer />
        </div>
      </div>
      {/* <BattleSwitchPrototype /> */}
    </>
  )
}

export default DesktopApp
