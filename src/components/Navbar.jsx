import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-gray-900 text-lg">My Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-900"><Github className="h-5 w-5" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
          <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-gray-900"><Mail className="h-5 w-5" /></a>
        </nav>
      </div>
    </header>
  );
}
