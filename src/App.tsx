import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Download, Code, Palette, Smartphone } from "lucide-react"

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight ubuntu-font text-stroke" style={{ color: '#ededed' }}>Rafael Laidlaw</span>
              <span className="text-base font-semibold leading-tight ubuntu-font tracking-wide -mt-1 self-center" style={{ color: '#c2c3c7' }}>Web Developer</span>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button 
                      onClick={() => scrollToSection('about')} 
                      className="text-sm font-medium transition-colors hover:text-primary bg-transparent border-none cursor-pointer"
                    >
                      About
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button 
                      onClick={() => scrollToSection('projects')} 
                      className="text-sm font-medium transition-colors hover:text-primary bg-transparent border-none cursor-pointer"
                    >
                      Projects
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button 
                      onClick={() => scrollToSection('contact')} 
                      className="text-sm font-medium transition-colors hover:text-primary bg-transparent border-none cursor-pointer"
                    >
                      Contact
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-8">
          <Avatar className="h-32 w-24 rounded-none">
            <AvatarImage src="/skillcube_20-grey.gif" alt="Profile" className="h-32 w-24 object-contain rounded-none" />
            <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground rounded-none">
              RL
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Rafael Laidlaw</h1>
            <p className="text-lg text-muted-foreground font-medium">Web Developer</p>
            <p className="text-base max-w-xl leading-snug">
              Web Developer specializing in Redux, TypeScript, Phaser, NextJS, Angular, and Node.js. Creating engaging web experiences and interactive applications with modern technologies.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Redux</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>NextJS</Badge>
                  <Badge>Angular</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Game Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Phaser</Badge>
                  <Badge>HTML5 Canvas</Badge>
                  <Badge>Game Design</Badge>
                  <Badge>Interactive Media</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Backend & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Git</Badge>
                  <Badge>VSCode</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>
                  A modern e-commerce platform built with React and Node.js
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>
                  A collaborative task management application with real-time updates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Socket.io</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Website</CardTitle>
                <CardDescription>
                  A responsive portfolio website built with modern web technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vite</Badge>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
    </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground">
              I'm always interested in new opportunities and exciting projects.
        </p>
      </div>
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
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
