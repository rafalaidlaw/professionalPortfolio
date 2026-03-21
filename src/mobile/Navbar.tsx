import { useState, useEffect, useRef, useCallback } from "react";
import { Github, Linkedin, Menu, X, ExternalLink } from "lucide-react";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

function scrollToSection(sectionId: string, closeMenu?: () => void) {
  if (closeMenu) {
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Scroll-based hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape key closes menu
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (menuOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-30 bg-background transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span
                className="text-xl font-bold leading-tight ubuntu-font"
                style={{ color: "#888a8f" }}
              >
                Rafael Laidlaw
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 bg-transparent border-none cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={24} color="#888a8f" />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[98%] -m-1 h-0.5 bg-[#c2c3c7]"></div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`mobile-menu-panel ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="p-2 bg-transparent border-none cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} color="#888a8f" />
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6">
          <a
            href="/Rafael_Laidlaw_Resume_2025.pdf"
            download
            onClick={closeMenu}
            className="flex items-center gap-2 py-3 text-lg font-semibold ubuntu-font no-underline"
            style={{ color: "#888a8f" }}
          >
            Resumé <FiDownload size={13} />
          </a>
          <button
            onClick={() => scrollToSection("about", closeMenu)}
            className="text-left py-3 text-lg font-semibold ubuntu-font bg-transparent border-none cursor-pointer"
            style={{ color: "#888a8f" }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects", closeMenu)}
            className="text-left py-3 text-lg font-semibold ubuntu-font bg-transparent border-none cursor-pointer"
            style={{ color: "#888a8f" }}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact", closeMenu)}
            className="text-left py-3 text-lg font-semibold ubuntu-font bg-transparent border-none cursor-pointer"
            style={{ color: "#888a8f" }}
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("games", closeMenu)}
            className="flex items-center gap-2 text-left py-3 text-lg font-semibold ubuntu-font bg-transparent border-none cursor-pointer"
            style={{ color: "#888a8f" }}
          >
            Games <MdOutlineVideogameAsset size={20} />
          </button>
          <a
            href="https://github.com/rafalaidlaw"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-2 py-3 text-lg font-semibold ubuntu-font no-underline"
            style={{ color: "#888a8f" }}
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rafalaidlaw/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-2 py-3 text-lg font-semibold ubuntu-font no-underline"
            style={{ color: "#888a8f" }}
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
