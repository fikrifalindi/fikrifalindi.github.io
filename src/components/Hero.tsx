import { Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react';
import BentoCard from './BentoCard';

export function IntroCard() {
  return (
    <BentoCard className="col-span-1 lg:col-span-8 flex flex-col justify-between min-h-[400px]" id="hero">
      <div className="space-y-6">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-300 tracking-wider uppercase w-fit">
          Welcome to my portfolio
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          <span className="block text-white">Hi, I'm</span>
          <span className="block mt-2 bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
            Nurul Fikri Falindi
          </span>
        </h1>
        
        <h2 className="text-lg sm:text-xl font-semibold text-slate-300">
          IT System Development Senior Analyst
        </h2>
        
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
          IT System Development Senior Analyst with a proven track record of directing full-cycle application development and high-performing technical teams. Specialized in Laravel, ReactJS, ASP, Power Platform, and enterprise-grade server infrastructure.
        </p>
      </div>

      {/* Quick Contact & Action Buttons */}
      <div className="mt-8 space-y-6">
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium text-sm shadow-md hover:scale-[1.01] active:scale-[0.98] transition-all group"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium text-sm hover:scale-[1.01] active:scale-[0.98] transition-all"
          >
            <FileText className="mr-2 h-4 w-4 text-cyan-400" />
            View Work History
          </a>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800/60 text-slate-400">
          <div className="flex items-center space-x-3 hover:text-slate-200 transition-colors">
            <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
            <a href="mailto:fikri.falindi@gmail.com" className="text-xs sm:text-sm font-medium truncate">
              fikri.falindi@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3 hover:text-slate-200 transition-colors">
            <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
            <a href="tel:+6285888293609" className="text-xs sm:text-sm font-medium">
              +62 858 8829 3609
            </a>
          </div>
          <div className="flex items-center space-x-3 hover:text-slate-200 transition-colors">
            <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">
              Bogor, Indonesia
            </span>
          </div>
          <div className="flex items-center space-x-3 hover:text-slate-200 transition-colors">
            <svg className="h-4 w-4 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <a
              href="https://linkedin.com/in/fikrifalindi"
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-medium truncate"
            >
              linkedin.com/in/fikrifalindi
            </a>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

export function ProfileCard() {
  return (
    <BentoCard className="col-span-1 lg:col-span-4 flex items-center justify-center min-h-[400px]">
      <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] group/profile">
        {/* Outer glowing frame */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 opacity-60 blur-sm group-hover/profile:opacity-95 transition-opacity duration-500"></div>
        
        {/* Main container */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-950 p-2 flex items-center justify-center border border-white/10">
          <img
            src={`${import.meta.env.BASE_URL}profile_avatar.png`}
            alt="Nurul Fikri Falindi"
            className="w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </div>

        {/* Floating status tags */}
        <div className="absolute -bottom-3 -left-3 glass px-3 py-1.5 rounded-xl border border-white/10 flex items-center space-x-2 shadow-lg">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold text-slate-200 tracking-wide uppercase">Open to Work</span>
        </div>

        <div className="absolute -top-3 -right-3 glass px-3 py-1.5 rounded-xl border border-white/10 flex items-center shadow-lg">
          <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wide">Bogor, ID</span>
        </div>
      </div>
    </BentoCard>
  );
}
