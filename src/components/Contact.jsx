import { Mail, Send } from "lucide-react";
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
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-600">Have a project in mind or just want to say hi? Id love to hear from you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:hello@example.com" className="font-medium text-gray-900 hover:underline">hello@example.com</a>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600">I typically respond within one business day.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-lg font-medium text-gray-900">Thanks! Your message has been noted.</p>
                <p className="text-sm text-gray-600 mt-1">For this demo, the form doesnt send, but the UI is ready.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
