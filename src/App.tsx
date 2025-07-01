import Navbar from "./Navbar"
import About from "./About.tsx"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"
import Games from "./Games"
import FeaturedProjects from "./FeaturedProjects"

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
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold ubuntu-font" style={{ color: '#55575b' }}>Get In Touch</h2>
            <p className="text-muted-foreground">
              I'm always interested in new opportunities and exciting projects.
        </p>
      </div>
          <Card>
            <CardHeader>
              <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Send me a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/success" className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <input name="bot-field" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[120px]" required />
                </div>
                <Button type="submit" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

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
