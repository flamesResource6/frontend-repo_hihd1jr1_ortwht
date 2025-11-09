import { Linkedin, Mail, Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-gray-900 text-lg">Pandilla Ashok Kumar Yadav</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#experience" className="hover:text-gray-900">Experience</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#education" className="hover:text-gray-900">Education</a>
          <a href="#certificates" className="hover:text-gray-900">Certificates</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-white font-medium hover:bg-blue-700 transition"
          >
            <Download className="h-4 w-4" /> <span className="hidden lg:inline">Download Resume</span>
          </a>
          <a href="mailto:ashokkumar.p1408@gmail.com" aria-label="Email" className="hover:text-gray-900"><Mail className="h-5 w-5" /></a>
          <a href="https://linkedin.com/in/pandillaashokkumaryadav" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
        </nav>
      </div>
    </header>
  );
}
