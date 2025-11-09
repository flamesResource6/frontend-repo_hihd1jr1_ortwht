const items = [
  {
    title: "Interactive 3D Landing Page",
    description: "A Spline-powered hero with smooth scroll and subtle parallax.",
    tags: ["React", "Spline", "Tailwind"],
    link: "#"
  },
  {
    title: "Realtime Chat App",
    description: "Fast, reliable chat with optimistic UI and presence.",
    tags: ["FastAPI", "WebSockets", "MongoDB"],
    link: "#"
  },
  {
    title: "Design System",
    description: "A cohesive component library with tokens and docs.",
    tags: ["shadcn/ui", "Radix", "Storybook"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-2 text-gray-600">A selection of work that blends design, code, and interaction.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a key={item.title} href={item.link} className="group rounded-xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
