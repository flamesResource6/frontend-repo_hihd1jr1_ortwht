export default function Certificates() {
  const items = [
    "Google Data Analytics",
    "Crash Course with Python",
    "Data Science",
    "Introduction to Cyber Security Awareness",
    "Learning Java",
    "Google Cloud IAM and Networking for AWS Professionals",
    "Full Stack Development",
    "Generative AI",
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Certificates</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {items.map((c) => (
            <span key={c} className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium border border-blue-200">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
