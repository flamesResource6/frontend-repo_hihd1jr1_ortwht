export default function Education() {
  const items = [
    {
      degree: "MCA, Web Technology",
      school: "Presidency College (Autonomous), Bengaluru",
      period: "Nov 2022–Dec 2024",
      details: "First Class Distinction, 70%. Focus: web development, software engineering.",
    },
    {
      degree: "B.Voc, Information Technology",
      school: "KBN College (Autonomous), Vijayawada",
      period: "Aug 2019–Jun 2022",
      details: "First Class Distinction, 71.5%. Focus: software development, networking, systems.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Education</h2>
        <div className="mt-8 grid gap-6">
          {items.map((e) => (
            <div key={e.degree} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{e.degree}</h3>
                <p className="text-sm text-gray-600">{e.period}</p>
              </div>
              <p className="text-gray-700">{e.school}</p>
              <p className="mt-1 text-gray-700">{e.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
