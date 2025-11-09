export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About</h2>
        <p className="mt-4 text-gray-700 max-w-3xl">
          I’m an MCA graduate specializing in web technology. I build clean, efficient web apps using Python, Java, JavaScript, and SQL.
          I work well across teams, translate requirements into working features, and focus on practical impact and usability.
        </p>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Soft skills</h3>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2 text-gray-700">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Problem solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
