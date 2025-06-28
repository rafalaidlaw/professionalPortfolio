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
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <a href="#about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">About</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn more about my background and experience.
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#projects" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Projects</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View my latest work and projects.
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href="#contact" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Contact</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get in touch with me.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Avatar className="h-32 w-32 border-4 border-primary/10">
            <AvatarImage src="" alt="Profile" />
            <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
              RL
            </AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Rafael Laidlaw</h1>
            <p className="text-xl text-muted-foreground">Web Developer</p>
            <p className="text-lg max-w-2xl">
              Web Developer specializing in Redux, TypeScript, Phaser, NextJS, Angular, and Node.js. 
              Creating engaging web experiences and interactive applications with modern technologies.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <a href="/Rafael_Laidlaw_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/rafalaidlaw" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
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
                <Button variant="outline" className="w-full">
                  View Project
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
                <Button variant="outline" className="w-full">
                  View Project
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
                <Button variant="outline" className="w-full">
                  View Project
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
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
              </div>
              <Button className="w-full" asChild>
                <a href="mailto:rafalaidlaw@gmail.com?subject=Portfolio Contact - New Message&body=Hello Rafael,%0D%0A%0D%0AI'm interested in connecting with you regarding your work.%0D%0A%0D%0ABest regards,">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with React, TypeScript, and shadcn/ui.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
