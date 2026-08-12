import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/fikri.falindi@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Terjadi kesalahan jaringan. Silakan hubungi fikri.falindi@gmail.com secara langsung.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Let's <span className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-700 to-amber-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-stone-500 mt-6 text-base sm:text-lg">
            Have an enterprise development project, server setup, or team leadership opportunity? Drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Coordinates */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass p-6 rounded-2xl border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-sm shrink-0 text-emerald-700">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">Office Location</h3>
                <p className="text-sm text-stone-500 mt-1">Bogor, West Java, Indonesia</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-sm shrink-0 text-amber-700">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">Email Address</h3>
                <a href="mailto:fikri.falindi@gmail.com" className="text-sm text-emerald-700 font-semibold block mt-1 hover:underline">
                  fikri.falindi@gmail.com
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-sm shrink-0 text-emerald-700">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">Telephone / WA</h3>
                <a href="tel:+6285888293609" className="text-sm text-stone-500 font-medium block mt-1 hover:text-stone-900">
                  +62 858 8829 3609
                </a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-white border border-stone-200/80 shadow-sm shrink-0 text-amber-700">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-stone-900">Social Accounts</h3>
                <div className="flex space-x-3 mt-2">
                  <a
                    href="https://linkedin.com/in/fikrifalindi"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200/60 shadow-sm transition-all"
                  >
                    <svg className="h-4 w-4 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="lg:col-span-7">
            <div className="glass p-8 rounded-3xl border border-stone-200/50">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 bg-emerald-50/50 border border-emerald-200 rounded-2xl p-6">
                  <div className="p-3.5 rounded-full bg-emerald-500/10 text-emerald-700">
                    <CheckCircle className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">Message Transmitted!</h3>
                  <p className="text-sm text-stone-600 max-w-sm">
                    Thank you for reaching out. Fikri will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 text-left">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full text-sm px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-emerald-700/40 focus:ring-1 focus:ring-emerald-700/40 text-stone-800 placeholder:text-stone-400 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 text-left">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. johndoe@company.com"
                      className="w-full text-sm px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-emerald-700/40 focus:ring-1 focus:ring-emerald-700/40 text-stone-800 placeholder:text-stone-400 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 text-left">
                      Message Content
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Details about your system specifications, role description, or projects..."
                      className="w-full text-sm px-4 py-3 rounded-xl bg-white border border-stone-200 focus:border-emerald-700/40 focus:ring-1 focus:ring-emerald-700/40 text-stone-800 placeholder:text-stone-400 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-amber-700 hover:from-emerald-600 hover:to-amber-600 text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span>Transmitting message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        <div className="text-xs text-stone-400 text-center mt-20 pt-8 border-t border-stone-200/60">
          © {new Date().getFullYear()} Nurul Fikri Falindi. Built with React + TypeScript + Tailwind. All Rights Reserved.
        </div>

      </div>
    </section>
  );
}
