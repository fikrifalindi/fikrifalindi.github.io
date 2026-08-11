import { Mail, Phone, Quote } from 'lucide-react';

export default function References() {
  return (
    <section id="references" className="py-20 relative overflow-hidden bg-stone-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Quote graphic decorator */}
        <div className="p-3.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 w-fit mx-auto mb-8 shadow-sm">
          <Quote className="h-6 w-6" />
        </div>

        {/* Quote card */}
        <div className="glass p-8 sm:p-12 rounded-3xl border border-stone-200/50 relative">
          <span className="absolute -top-3 left-6 inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
            Professional Recommendation
          </span>

          <blockquote className="text-stone-700 text-base sm:text-lg italic leading-relaxed text-center">
            "Fikri demonstrates a strong ability to direct critical software development projects. His dual focus on high-performance coding and structured system administration provides exceptional support for key supply chain modules and deployment configurations."
          </blockquote>

          <div className="border-t border-stone-200/60 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                Muhammad Resya Elyasa
              </h3>
              <p className="text-xs text-stone-500 font-semibold mt-0.5 uppercase tracking-wide">
                IT Supply Chain Associate Manager
              </p>
              <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mt-0.5">
                PT Heinz ABC Indonesia
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-2 bg-stone-50/60 border border-stone-200/60 p-4 rounded-xl shrink-0">
              <a
                href="mailto:elyasaresya@gmail.com"
                className="inline-flex items-center text-xs text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2 text-emerald-700" />
                elyasaresya@gmail.com
              </a>
              <a
                href="tel:+6285643818737"
                className="inline-flex items-center text-xs text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2 text-emerald-700" />
                +62 856 4381 8737
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
