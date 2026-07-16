import { Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-300 tracking-wider uppercase">
              Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block text-white">Hi, I'm</span>
              <span className="block mt-2 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Nurul Fikri Falindi
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
              IT System Development Senior Analyst
            </h2>
            
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              IT System Development Senior Analyst with a proven track record of directing full-cycle application development and high-performing technical teams. Specialized in Laravel, ReactJS, ASP, Power Platform, and enterprise-grade server infrastructure.
            </p>

            {/* Quick Contact & Resume Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium shadow-lg shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileText className="mr-2 h-4 w-4 text-cyan-400" />
                View Work History
              </a>
            </div>

            {/* Contact Card Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0 text-left border-t border-slate-800">
              <div className="flex items-center space-x-3 text-slate-400 hover:text-slate-200 transition-colors">
                <div className="p-2 rounded-lg bg-slate-800/50 text-cyan-400">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:fikri.falindi@gmail.com" className="text-sm font-medium">
                  fikri.falindi@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 hover:text-slate-200 transition-colors">
                <div className="p-2 rounded-lg bg-slate-800/50 text-cyan-400">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+6285888293609" className="text-sm font-medium">
                  +62 858 8829 3609
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 hover:text-slate-200 transition-colors">
                <div className="p-2 rounded-lg bg-slate-800/50 text-cyan-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">
                  Bogor, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 hover:text-slate-200 transition-colors">
                <div className="p-2 rounded-lg bg-slate-800/50 text-cyan-400">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <a
                  href="https://linkedin.com/in/fikrifalindi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium"
                >
                  linkedin.com/in/fikrifalindi
                </a>
              </div>
            </div>
          </div>

          {/* Right Image/Graphic Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group animate-float-slow">
              {/* Outer glowing frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass p-3 flex items-center justify-center">
                <img
                  src="/profile_avatar.png"
                  alt="Nurul Fikri Falindi"
                  className="w-full h-full object-cover rounded-2xl shadow-inner border border-white/10"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-2 shadow-lg">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-200">Available for Projects</span>
              </div>

              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-2 shadow-lg">
                <span className="text-xs font-semibold text-slate-200">Bogor, ID</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

