import Navbar from "./Navbar"
import About from "./About.tsx"
import { Separator } from "@/components/ui/separator"
import Games from "./Games"
import FeaturedProjects from "./FeaturedProjects"
// @ts-ignore: No type declarations for InternetBanner.jsx
import InternetBanner from "./InternetBanner"
// import BattleSwitchPrototype from "./battleSwitchPrototype"
// import BattlePrototype from "./battlePrototype"
import Contact from "./Contact"
import BoringSection from "./BoringSection"
import Footer from "./Footer"

function App() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />

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
      {/* <BattleSwitchPrototype /> */}
    </>
  )
}

export default App
