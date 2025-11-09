export default function Experience() {
  const items = [
    {
      role: "Python Development Intern",
      org: "Techno Hacks EduTech",
      period: "Aug 2024–Sep 2024",
      location: "Remote/Bengaluru",
      bullets: [
        "Built automation scripts and small data-driven web modules using Python, Pandas, and NumPy.",
        "Contributed to features and debugging with a focus on correctness and readability.",
      ],
    },
    {
      role: "Junior React Developer Trainee",
      org: "Merry InfoTech & New Gen EduCare",
      period: "Mar 2024–Jun 2024",
      location: "Bengaluru",
      bullets: [
        "Assisted on responsive React.js interfaces with HTML5/CSS3/JavaScript.",
        "Supported API integration, UI improvements, and issue triage in an Agile setup.",
      ],
    },
    {
      role: "Cloud Computing Intern",
      org: "VXL IT Solutions",
      period: "Jan 2022–Feb 2022",
      location: "Vijayawada",
      bullets: [
        "Practiced Java for cloud-based applications and deployment best practices.",
      ],
    },
    {
      role: "Campus Ambassador",
      org: "Lyriclious EduTech",
      period: "Jan 2022–Dec 2022",
      location: "Remote/Vijayawada",
      bullets: [
        "Led outreach, events, and brand promotion to drive campus engagement.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Experience</h2>
        <div className="mt-8 grid gap-6">
          {items.map((item) => (
            <div key={item.role} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.role} — <span className="text-gray-700">{item.org}</span></h3>
                <p className="text-sm text-gray-600">{item.period} • {item.location}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
                {item.bullets.map((b, idx) => (<li key={idx}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
