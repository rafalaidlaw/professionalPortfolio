import { useState, useEffect } from "react"
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

const PRELOAD_IMAGES = [
  "/Retro_Still_Image.png",
  "/Retro_Mod_Site.gif",
  "/banners/longWestAd.gif",
  "/banners/longWestAd-STILL.png",
  "/banners/attic-cover-sprite.png",
  "/banners/anim-demo-sprite.png",
  "/way-too-good-cover-sprite.png",
  "/skillcube_20-grey.gif",
]

function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () => resolve()
          img.src = src
        })
    )
  )
}

function DesktopApp() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    preloadImages(PRELOAD_IMAGES).then(() => setLoaded(true))
  }, [])

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}

      {loaded && (
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
      )}
      {/* <BattleSwitchPrototype /> */}
    </>
  )
}

export default DesktopApp
