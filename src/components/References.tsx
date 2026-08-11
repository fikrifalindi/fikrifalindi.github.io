import { Mail, Phone, Quote } from 'lucide-react';
import BentoCard from './BentoCard';

export default function ReferencesCard() {
  return (
    <BentoCard className="col-span-1 lg:col-span-4 min-h-[380px] flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
            <Quote className="h-5 w-5" />
          </div>
          <span className="inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
            Endorsement
          </span>
        </div>

        <blockquote className="text-stone-700 text-xs sm:text-sm italic leading-relaxed">
          "Fikri demonstrates a strong ability to direct critical software development projects. His dual focus on high-performance coding and structured system administration provides exceptional support for key supply chain modules and deployment configurations."
        </blockquote>
      </div>

      <div className="border-t border-stone-200/60 pt-4 space-y-3">
        <div>
          <h4 className="text-sm font-bold text-stone-900">
            Muhammad Resya Elyasa
          </h4>
          <p className="text-[10px] text-stone-500 font-semibold mt-0.5 uppercase tracking-wide">
            IT Supply Chain Associate Manager
          </p>
          <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">
            PT Heinz ABC Indonesia
          </p>
        </div>

        {/* Contact links */}
        <div className="flex flex-col gap-1.5 pt-1">
          <a
            href="mailto:elyasaresya@gmail.com"
            className="inline-flex items-center text-xs text-stone-500 hover:text-stone-800 transition-colors truncate"
          >
            <Mail className="h-3.5 w-3.5 mr-2 text-emerald-700 shrink-0" />
            elyasaresya@gmail.com
          </a>
          <a
            href="tel:+6285643818737"
            className="inline-flex items-center text-xs text-stone-500 hover:text-stone-800 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 mr-2 text-emerald-700 shrink-0" />
            +62 856 4381 8737
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
