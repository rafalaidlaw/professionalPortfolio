import { Link } from "react-router-dom";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="w-full border-b border-[#c2c3c7] bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/blog"
            className="text-xl font-bold ubuntu-font no-underline"
            style={{ color: "#888a8f" }}
          >
            Blog
          </Link>
          <Link
            to="/"
            className="text-sm ubuntu-font no-underline transition-colors hover:text-primary"
            style={{ color: "#888a8f" }}
          >
            Back to Portfolio
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}
