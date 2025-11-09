import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5">Tech • Interactive • Modern</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Hi, Im <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your Name</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I build playful, modern web experiences with a focus on performance and delightful interactions.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-gray-800 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-2.5 text-sm font-medium shadow ring-1 ring-black/5 hover:bg-gray-50 transition">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  );
}
