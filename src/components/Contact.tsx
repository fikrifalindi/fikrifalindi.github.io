import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get In <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg">
            Let's collaborate on application development, cloud architectures, database design, or system operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-slate-900/20">
                <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Email Me</span>
                  <a href="mailto:fikri.falindi@gmail.com" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    fikri.falindi@gmail.com
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-slate-900/20">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Call Me</span>
                  <a href="tel:+6285888293609" className="text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                    +62 858 8829 3609
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-slate-900/20">
                <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Location</span>
                  <span className="text-sm font-bold text-white">
                    Perum. Damara Village - Bogor, Indonesia
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-slate-900/20">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Connect on LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/fikrifalindi"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    linkedin.com/in/fikrifalindi
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Panel */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-slate-900/30 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-400">Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-400">Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="your.email@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-400">Subject</label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="Describe your project, timeline, and requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all text-sm ${
                    isSent
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white active:scale-[0.98]'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : isSent ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Footer info inside contact view container to stay aligned */}
        <div className="mt-20 pt-8 border-t border-slate-900 text-center space-y-4 max-w-5xl mx-auto">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Nurul Fikri Falindi. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-2 text-[10px] text-slate-600 font-semibold">
            <span>Built with React JS</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
