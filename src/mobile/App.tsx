import Navbar from "./Navbar"
import About from "./About.tsx"
import { Separator } from "@/components/ui/separator"
import Games from "./Games"
import FeaturedProjects from "./FeaturedProjects"
import Contact from "./Contact"
import BoringSection from "./BoringSection"
import Footer from "./Footer"

function MobileApp() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="pt-[72px]">
          <About />

          <Separator />

          {/* Projects Section */}
          <FeaturedProjects />

          <Separator />

          <Games />

          <Separator />

          {/* Contact Section */}
          <div className="-mt-2 -mb-4">
            <Contact />
          </div>

          <BoringSection />

          <Footer />
        </div>
      </div>
    </>
  )
}

export default MobileApp
