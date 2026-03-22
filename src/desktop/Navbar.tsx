import { useState, useEffect, useCallback } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { useScrollDirection } from "@/hooks/useScrollDirection";

function FlipPhoneIcon({ size = 22, color = "#888a8f" }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-9v11.5a6.5 6.5 0 1 0 13 0V8c0-1.886 0-2.828-.586-3.414S16.386 4 14.5 4Z"/>
      <path d="M11 18h2"/>
      <path d="M8.5 8.429c0-.4 0-.599.056-.76a1 1 0 0 1 .614-.613C9.33 7 9.53 7 9.929 7h4.142c.4 0 .599 0 .76.056a1 1 0 0 1 .613.614c.056.16.056.36.056.759V9c0 .464 0 .697-.03.891a2.5 2.5 0 0 1-2.079 2.078C13.197 12 12.464 12 12 12s-1.197 0-1.391-.03A2.5 2.5 0 0 1 8.53 9.89C8.5 9.697 8.5 9.464 8.5 9z"/>
      <path d="M5.5 4V2"/>
    </svg>
  );
}

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
  const { visible } = useScrollDirection();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Escape key closes menu + body scroll lock
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (menuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      {/* Fixed navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 flex justify-center pt-3 px-4 transition-transform duration-300 navbar-3d-wrapper ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className={`w-full max-w-2xl bg-background border border-[#c2c3c7] px-5 py-3 ${menuOpen ? "border-b-0" : "navbar-cube"}`}>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 bg-transparent border-none cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={22} color="#888a8f" />
            </button>
            <div className="flex flex-col items-center">
              <span
                className="text-xl font-bold leading-tight ubuntu-font"
                style={{ color: "#888a8f" }}
              >
                Rafael Laidlaw
              </span>
              <span
                className="text-sm font-semibold leading-tight ubuntu-font tracking-wide -mt-0.5"
                style={{ color: "#b0b2b8" }}
              >
                Web Developer
              </span>
            </div>
            <div className="p-2">
              <FlipPhoneIcon />
            </div>
          </div>
        </nav>
      </div>

      {/* Blur backdrop */}
      <div
        className={`fixed inset-0 z-35 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Floating dropdown menu */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center py-3 px-4 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-2xl h-full bg-background border border-[#c2c3c7] flex flex-col">
          {/* Header row matching navbar layout */}
          <div className="flex items-center justify-between px-5 py-3">
            <button
              onClick={closeMenu}
              className="p-2 bg-transparent border-none cursor-pointer"
              aria-label="Close menu"
            >
              <X size={22} color="#888a8f" />
            </button>
            <div className="flex flex-col items-center">
              <span
                className="text-xl font-bold leading-tight ubuntu-font"
                style={{ color: "#888a8f" }}
              >
                Rafael Laidlaw
              </span>
              <span
                className="text-sm font-semibold leading-tight ubuntu-font tracking-wide -mt-0.5"
                style={{ color: "#b0b2b8" }}
              >
                Web Developer
              </span>
            </div>
            <div className="p-2">
              <FlipPhoneIcon />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#c2c3c7]" />

          {/* Nav items — centered in remaining space */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5">
            <a
              href="/Rafael_Laidlaw_Resume_2025.pdf"
              download
              onClick={closeMenu}
              className="flex items-center gap-2 text-xl font-semibold ubuntu-font no-underline transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              Resumé <FiDownload size={16} />
            </a>
            <button
              onClick={() => scrollToSection("about", closeMenu)}
              className="text-xl font-semibold ubuntu-font bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects", closeMenu)}
              className="text-xl font-semibold ubuntu-font bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact", closeMenu)}
              className="text-xl font-semibold ubuntu-font bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("games", closeMenu)}
              className="flex items-center gap-2 text-xl font-semibold ubuntu-font bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              Games <MdOutlineVideogameAsset size={22} />
            </button>
            <a
              href="https://github.com/rafalaidlaw"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-2 text-xl font-semibold ubuntu-font no-underline transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              GitHub <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafalaidlaw/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-2 text-xl font-semibold ubuntu-font no-underline transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              LinkedIn <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
