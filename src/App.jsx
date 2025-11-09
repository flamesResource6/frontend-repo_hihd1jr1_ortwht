import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-600">
          <div className="mx-auto max-w-7xl px-4">
            <nav className="flex flex-wrap items-center justify-center gap-4 text-gray-700">
              <a href="#hero" className="hover:text-gray-900">Home</a>
              <a href="#about" className="hover:text-gray-900">About</a>
              <a href="#projects" className="hover:text-gray-900">Projects</a>
              <a href="#skills" className="hover:text-gray-900">Skills</a>
              <a href="#education" className="hover:text-gray-900">Education</a>
              <a href="#certificates" className="hover:text-gray-900">Certificates</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
              <a href="/resume.pdf" download className="text-blue-600 hover:underline">Download Resume</a>
            </nav>
            <p className="mt-4">© {new Date().getFullYear()} Pandilla Ashok Kumar Yadav. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
