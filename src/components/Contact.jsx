import { Mail, Phone, Linkedin, Send, Download } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-600">I respond quickly—reach out by form or via the details below.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-gray-50 p-6">
            <div className="space-y-4 text-gray-800">
              <a href="mailto:ashokkumar.p1408@gmail.com" className="flex items-center gap-3 hover:underline">
                <Mail className="h-5 w-5" /> ashokkumar.p1408@gmail.com
              </a>
              <a href="tel:+919398156183" className="flex items-center gap-3 hover:underline">
                <Phone className="h-5 w-5" /> +91 93981 56183
              </a>
              <a href="https://linkedin.com/in/pandillaashokkumaryadav" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:underline">
                <Linkedin className="h-5 w-5" /> LinkedIn Profile
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm" aria-label="Contact form">
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-lg font-medium text-gray-900">Thanks! Your message has been received.</p>
                <p className="text-sm text-gray-600 mt-1">For this demo, the form doesn’t send, but the UI is ready.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="How can I help?" required />
                </div>
                <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition">
                  <Send className="h-4 w-4" aria-hidden /> Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
