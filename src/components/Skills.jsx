export default function Skills() {
  const groups = [
    { title: "Programming", items: ["Python", "JavaScript", "Java", "PHP"] },
    { title: "Web", items: ["HTML5", "CSS3", "React.js", "WordPress"] },
    { title: "Databases", items: ["MySQL", "SQL fundamentals"] },
    { title: "Data / ML", items: ["Pandas", "NumPy", "scikit-learn", "TensorFlow (basics)"] },
    { title: "Practices", items: ["Version control (Git)", "Debugging", "API integration", "Responsive UI"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
              <ul className="mt-3 text-gray-700 space-y-1">
                {g.items.map((i) => (<li key={i}>{i}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
