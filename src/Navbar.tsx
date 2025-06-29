import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Navbar() {
  return (
    <nav className="mb-2 ml-2 mr-2 p-2">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight ubuntu-font" style={{ color: '#888a8f' }}>Rafael Laidlaw</span>
            <span className="text-base font-semibold leading-tight ubuntu-font tracking-wide -mt-1 self-center" style={{ color: '#b0b2b8' }}>Web Developer</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-lg font-semibold tracking-wide transition-colors hover:text-primary bg-transparent border-none cursor-pointer ubuntu-font" 
                    style={{ color: '#888a8f' }}
                  >
                    About
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <span className="mx-2 text-lg font-normal ubuntu-font" style={{ color: '#888a8f' }}>//</span>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('projects')} 
                    className="text-lg font-semibold tracking-wide transition-colors hover:text-primary bg-transparent border-none cursor-pointer ubuntu-font" 
                    style={{ color: '#888a8f' }}
                  >
                    Projects
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <span className="mx-2 text-lg font-normal ubuntu-font" style={{ color: '#888a8f' }}>//</span>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-lg font-semibold tracking-wide transition-colors hover:text-primary bg-transparent border-none cursor-pointer ubuntu-font" 
                    style={{ color: '#888a8f' }}
                  >
                    Contact
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[98%] -m-1 h-0.5 bg-[#c2c3c7]"></div>
      </div>
    </nav>
  );
} 