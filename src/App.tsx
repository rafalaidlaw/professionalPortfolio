import Navbar from "./Navbar"
import About from "./About.tsx"
import { Separator } from "@/components/ui/separator"
import Games from "./Games"
import FeaturedProjects from "./FeaturedProjects"
// @ts-ignore: No type declarations for InternetBanner.jsx
import InternetBanner from "./InternetBanner"
<<<<<<< HEAD
import BattleSwitchPrototype from "./battleSwitchPrototype"
import Contact from "./Contact"
=======
>>>>>>> parent of 5f8b53c (preflight check)

function App() {
  return (
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
      <Contact />

      {/* Boring Section */}
      <section id="boring" className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <a
          href="https://rafaellaidlawportfolio.netlify.app/"
          className="mt-8 inline-block px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-semibold text-sm shadow hover:bg-gray-300 transition-colors text-center"
        >
          Think the site needs color? Click here to make it snazzy.
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Rafael Laidlaw. Built with React, TypeScript, and shadcn/ui.
          </p>
        </div>
      </footer>
      
    </div>
  )
}

export default App
