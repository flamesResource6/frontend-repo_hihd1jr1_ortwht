import Spline from "@splinetool/react-spline";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden pt-20 bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl bg-white/60 backdrop-blur rounded-xl p-6 ring-1 ring-black/5">
          <p className="text-sm font-medium text-gray-700">Vijayawada, Andhra Pradesh, India</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Full-Stack Developer | Python, Java, JavaScript
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            MCA graduate skilled in building reliable, user-focused solutions with strong communication and teamwork.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-blue-700 transition"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-2.5 text-sm font-medium shadow ring-1 ring-black/5 hover:bg-gray-50 transition"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-gray-700">
            <a href="mailto:ashokkumar.p1408@gmail.com" className="inline-flex items-center gap-2 hover:text-gray-900">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="tel:+919398156183" className="inline-flex items-center gap-2 hover:text-gray-900">
              <Phone className="h-4 w-4" /> Phone
            </a>
            <a href="https://linkedin.com/in/pandillaashokkumaryadav" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-gray-900">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  );
}
