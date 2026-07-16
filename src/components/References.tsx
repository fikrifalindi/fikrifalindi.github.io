import { Mail, Phone, Quote } from 'lucide-react';

export default function References() {
  return (
    <section id="references" className="py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Professional <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Endorsements</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg">
            Endorsement details from senior leadership representing projects and operations managed.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main Glowing Endorsement Card */}
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 opacity-30 blur group-hover:opacity-50 transition-opacity duration-300"></div>
            
            {/* Inner Content */}
            <div className="relative p-8 rounded-2xl bg-darkCard border border-white/5 space-y-6">
              
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-violet-600/10 text-violet-400">
                  <Quote className="h-8 w-8" />
                </div>
                <span className="inline-flex items-center text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full">
                  Verified Managerial Reference
                </span>
              </div>

              <blockquote className="text-slate-300 text-base sm:text-lg italic leading-relaxed">
                "Fikri demonstrates a strong ability to direct critical software development projects. His dual focus on high-performance coding and structured system administration provides exceptional support for key supply chain modules and deployment configurations."
              </blockquote>

              <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Muhammad Resya Elyasa
                  </h4>
                  <p className="text-sm text-slate-400 font-medium mt-0.5">
                    IT Supply Chain Associate Manager
                  </p>
                  <p className="text-xs text-cyan-400 font-semibold">
                    PT Heinz ABC Indonesia
                  </p>
                </div>

                {/* Contact options for the reference */}
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:elyasaresya@gmail.com"
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <Mail className="h-3 w-3 mr-2 text-cyan-400" />
                    elyasaresya@gmail.com
                  </a>
                  <a
                    href="tel:+6285643818737"
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-xs text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="h-3 w-3 mr-2 text-cyan-400" />
                    +62 856 4381 8737
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
