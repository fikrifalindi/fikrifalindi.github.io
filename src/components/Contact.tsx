import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import BentoCard from './BentoCard';

export default function ContactCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <BentoCard className="col-span-1 lg:col-span-5 min-h-[480px] flex flex-col justify-between" id="contact">
      <div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Let's Connect</h3>
        <p className="text-slate-400 text-xs sm:text-sm mb-6">
          Have an enterprise development project, server setup, or team leadership opportunity? Drop a message.
        </p>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-6">
            <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
              <CheckCircle className="h-8 w-8 animate-bounce" />
            </div>
            <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
            <p className="text-xs text-slate-300 max-w-xs">
              Thank you for reaching out, Fikri will respond to your inquiry shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
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
                className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/5 focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/40 text-slate-200 placeholder:text-slate-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
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
                className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/5 focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/40 text-slate-200 placeholder:text-slate-600 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Message Content
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Details about your system specifications, role description, or projects..."
                className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/5 focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/40 text-slate-200 placeholder:text-slate-600 outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium text-xs shadow-md transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <span>Transmitting message...</span>
              ) : (
                <>
                  <span>Transmit Message</span>
                  <Send className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <div className="text-[10px] text-slate-500 text-center mt-6 pt-4 border-t border-slate-900/60">
        © {new Date().getFullYear()} Nurul Fikri Falindi. Built with React + TypeScript + Tailwind.
      </div>
    </BentoCard>
  );
}
