import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-muted-foreground">
        © {new Date().getFullYear()} Rafael Laidlaw
      </p>
      <div className="flex justify-center gap-4 mt-3">
        <a
          href="https://github.com/rafalaidlaw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/rafalaidlaw/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
