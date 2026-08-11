import { Phone, Mail, MapPin, ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Intro Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 tracking-wider uppercase">
              Available for projects & roles
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block text-stone-900">Nurul Fikri Falindi</span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">
                IT System Development
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-semibold text-stone-700">
              Senior Analyst & Developer
            </h2>
            
            <p className="text-stone-500 text-base sm:text-lg leading-relaxed max-w-2xl">
              IT System Development Senior Analyst with a proven track record of directing full-cycle application development and guiding high-performing technical teams. Specialized in Laravel, ReactJS, ASP, Power Platform, and enterprise-grade server infrastructure.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-amber-700 hover:from-emerald-600 hover:to-amber-600 text-white font-semibold text-sm uppercase tracking-wider shadow-sm hover:scale-[1.01] active:scale-[0.98] transition-all group"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-stone-50 border border-stone-200/80 hover:bg-stone-100 hover:border-stone-300/80 text-stone-800 font-semibold text-sm uppercase tracking-wider hover:scale-[1.01] active:scale-[0.98] transition-all"
              >
                <FileText className="mr-2 h-4 w-4 text-emerald-700" />
                View Work History
              </a>
            </div>

            {/* Quick stats contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-stone-200/60 text-stone-500">
              <div className="flex items-center space-x-3 hover:text-stone-800 transition-colors">
                <Mail className="h-5 w-5 text-emerald-700 shrink-0" />
                <a href="mailto:fikri.falindi@gmail.com" className="text-sm font-medium truncate">
                  fikri.falindi@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 hover:text-stone-800 transition-colors">
                <Phone className="h-5 w-5 text-emerald-700 shrink-0" />
                <a href="tel:+6285888293609" className="text-sm font-medium">
                  +62 858 8829 3609
                </a>
              </div>
              <div className="flex items-center space-x-3 hover:text-stone-800 transition-colors">
                <MapPin className="h-5 w-5 text-emerald-700 shrink-0" />
                <span className="text-sm font-medium">Bogor, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-stone-800 transition-colors">
                <svg className="h-5 w-5 text-emerald-700 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <a
                  href="https://linkedin.com/in/fikrifalindi"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium truncate"
                >
                  linkedin.com/in/fikrifalindi
                </a>
              </div>
            </div>
          </div>

          {/* Right Portrait Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group animate-float-slow">
              {/* Outer glowing frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600 to-amber-500 opacity-40 blur-sm group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white p-3 flex items-center justify-center border border-stone-200 shadow-lg">
                <img
                  src={`${import.meta.env.BASE_URL}profile_avatar.png`}
                  alt="Nurul Fikri Falindi"
                  className="w-full h-full object-cover rounded-2xl shadow-inner"
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl border border-stone-200/50 flex items-center space-x-2 shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-stone-700 tracking-wide uppercase">Bogor, ID</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
