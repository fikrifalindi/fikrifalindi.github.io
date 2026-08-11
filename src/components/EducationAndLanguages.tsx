import { GraduationCap, Languages, Calendar, MapPin } from 'lucide-react';
import BentoCard from './BentoCard';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

interface LanguageItem {
  name: string;
  proficiency: string;
  percentage: number;
}

export default function EducationAndLanguagesCard() {
  const educationList: EducationItem[] = [
    {
      degree: "Bachelor of IT",
      institution: "Gunadarma University",
      period: "2012 - 2016",
      location: "Depok, ID"
    },
    {
      degree: "Vocational High School (Computer & Network)",
      institution: "Informatika Bina Generasi",
      period: "2008 - 2011",
      location: "Bogor, ID"
    }
  ];

  const languagesList: LanguageItem[] = [
    {
      name: "Bahasa Indonesia",
      proficiency: "Native / Fluent",
      percentage: 100
    },
    {
      name: "English",
      proficiency: "Intermediate",
      percentage: 70
    }
  ];

  return (
    <BentoCard className="col-span-1 lg:col-span-4 min-h-[420px] flex flex-col justify-between">
      {/* Education Group */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 border-b border-stone-200/60 pb-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 shrink-0">
            <GraduationCap className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-wide">
            Education
          </h3>
        </div>

        <div className="space-y-3">
          {educationList.map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-[10px] text-stone-500">
                <span className="inline-flex items-center">
                  <Calendar className="h-3 w-3 mr-1 text-emerald-700" />
                  {edu.period}
                </span>
                <span className="inline-flex items-center">
                  <MapPin className="h-3 w-3 mr-1 text-emerald-700" />
                  {edu.location}
                </span>
              </div>
              <h4 className="text-xs font-bold text-stone-900 leading-tight">
                {edu.degree}
              </h4>
              <p className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Group */}
      <div className="space-y-4 pt-4 border-t border-stone-200/60">
        <div className="flex items-center space-x-2 border-b border-stone-200/60 pb-2">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-700 border border-amber-500/20 shrink-0">
            <Languages className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-stone-900 tracking-wide">
            Languages
          </h3>
        </div>

        <div className="space-y-3">
          {languagesList.map((lang, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between items-center text-[10px] sm:text-xs">
                <div>
                  <span className="font-bold text-stone-900 block">{lang.name}</span>
                  <span className="text-[9px] text-stone-500 block uppercase tracking-wide">{lang.proficiency}</span>
                </div>
                <span className="font-bold text-emerald-700">{lang.percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-stone-100 rounded-full border border-stone-200/50 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-700 to-amber-600 rounded-full"
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
