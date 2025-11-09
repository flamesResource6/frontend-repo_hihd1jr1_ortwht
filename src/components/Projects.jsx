export default function Projects() {
  const projects = [
    {
      title: "Rescue Dispatch Management System",
      period: "Jul 2024 – Oct 2024",
      purpose: "Coordinate emergency response and resource allocation.",
      contribution: "Designed core CRUD flows, resource tracking, and admin views.",
      stack: "PHP, MySQL",
      outcome: "Faster task assignment and clearer status visibility for dispatch teams.",
      learned: ["Designing efficient DB schemas", "Role-based UI flows", "Operational clarity"],
      code: "#",
    },
    {
      title: "Email Spam Detector",
      period: "Mar 2024",
      purpose: "Classify emails as spam or legitimate.",
      contribution: "Built an ML pipeline with preprocessing and model evaluation.",
      stack: "Python, scikit-learn, TensorFlow, NLP",
      outcome: "Demonstrated end-to-end model building and validation.",
      learned: ["Text preprocessing", "Model evaluation", "Pipeline orchestration"],
      code: "#",
    },
    {
      title: "Online Teaching System Website",
      period: "Jan 2022 – May 2022",
      purpose: "Virtual classrooms, course management, and student engagement.",
      contribution: "Implemented UI, course pages, and basic admin features.",
      stack: "HTML5, CSS3, JavaScript, ASP.NET",
      outcome: "Centralized learning flows with simple content delivery.",
      learned: ["UI structure", "Content flow", "Basic admin patterns"],
      code: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <header>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.period}</p>
              </header>
              <dl className="mt-3 text-sm text-gray-700 space-y-1">
                <div><dt className="font-medium inline">Purpose:</dt> <dd className="inline">{p.purpose}</dd></div>
                <div><dt className="font-medium inline">Contribution:</dt> <dd className="inline">{p.contribution}</dd></div>
                <div><dt className="font-medium inline">Stack:</dt> <dd className="inline">{p.stack}</dd></div>
                <div><dt className="font-medium inline">Outcome:</dt> <dd className="inline">{p.outcome}</dd></div>
              </dl>
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-900">What I learned</p>
                <ul className="mt-1 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {p.learned.map((l, idx) => (<li key={idx}>{l}</li>))}
                </ul>
              </div>
              <div className="mt-5">
                <a href={p.code} className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition">View code</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
