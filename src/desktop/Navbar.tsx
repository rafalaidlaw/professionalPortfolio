import { useState, useEffect, useCallback } from "react";
import { Github, Linkedin, Menu, X, Settings, FileCode, Gamepad2 } from "lucide-react";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { RiCellphoneLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { useScrollDirection } from "@/hooks/useScrollDirection";

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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { visible } = useScrollDirection();

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const closeSettings = useCallback(() => setSettingsOpen(false), []);

  const anyOpen = menuOpen || settingsOpen;

  // Escape key closes menus + body scroll lock
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        closeSettings();
      }
    };
    if (anyOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [anyOpen, closeMenu, closeSettings]);

  return (
    <>
      {/* Fixed navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-30 flex justify-center pt-3 px-4 transition-transform duration-300 navbar-3d-wrapper ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className={`w-full max-w-2xl bg-white border border-[#c2c3c7] border-b-[8px] px-5 py-3 ${menuOpen || settingsOpen ? "border-b-0" : "navbar-cube"}`}>
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
            <button
              onClick={() => setSettingsOpen(true)}
              className="p-2 bg-transparent border-none cursor-pointer"
              aria-label="Open settings"
            >
              <Settings size={22} color="#888a8f" />
            </button>
          </div>
        </nav>
      </div>

      {/* Blur backdrop (shared for both menus) */}
      <div
        className={`fixed inset-0 z-35 backdrop-blur-sm transition-opacity duration-300 ${
          anyOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => { closeMenu(); closeSettings(); }}
      />

      {/* Main navigation menu */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center py-3 px-4 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-2xl h-full bg-white border border-[#c2c3c7] flex flex-col">
          {/* Header row */}
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
              <Settings size={22} color="#888a8f" />
            </div>
          </div>

          <div className="w-full h-px bg-[#c2c3c7]" />

          {/* Nav items */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5">
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
            <a
              href="/Rafael_Laidlaw_Resume_2025.pdf"
              download
              onClick={closeMenu}
              className="flex items-center gap-2 text-xl font-semibold ubuntu-font no-underline transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              Resumé <FiDownload size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Settings menu */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center py-3 px-4 transition-all duration-300 ease-in-out ${
          settingsOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-2xl h-full bg-white border border-[#c2c3c7] flex flex-col">
          {/* Header row */}
          <div className="flex items-center justify-between px-5 py-3">
            <div className="p-2">
              <Menu size={22} color="#888a8f" />
            </div>
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
            <button
              onClick={closeSettings}
              className="p-2 bg-transparent border-none cursor-pointer"
              aria-label="Close settings"
            >
              <X size={22} color="#888a8f" />
            </button>
          </div>

          <div className="w-full h-px bg-[#c2c3c7]" />

          {/* Settings options */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            <a
              href="?view=mobile"
              onClick={closeSettings}
              className="flex items-center gap-3 text-xl font-semibold ubuntu-font no-underline transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              <RiCellphoneLine size={22} />
              View Mobile App
            </a>
            <a
              href="/noscript/"
              onClick={closeSettings}
              className="flex items-center gap-3 text-xl font-semibold ubuntu-font no-underline transition-colors duration-200 hover:text-primary"
              style={{ color: "#888a8f" }}
            >
              <FileCode size={22} />
              Turn Off JavaScript
            </a>
            <div
              className="flex flex-col items-center gap-1"
              style={{ opacity: 0.4 }}
            >
              <span
                className="flex items-center gap-3 text-xl font-semibold ubuntu-font"
                style={{ color: "#888a8f" }}
              >
                <Gamepad2 size={22} />
                View Portfolio on Gameboy
              </span>
              <span
                className="text-sm ubuntu-font"
                style={{ color: "#b0b2b8" }}
              >
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
