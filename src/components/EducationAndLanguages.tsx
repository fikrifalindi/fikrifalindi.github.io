import { GraduationCap, Languages, Calendar, MapPin } from 'lucide-react';

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

export default function EducationAndLanguages() {
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
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="flex items-center space-x-3 pb-3 border-b border-stone-200/60">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 shrink-0">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                Education & Credentials
              </h2>
            </div>

            <div className="space-y-6 relative pl-6">
              {/* Timeline side line */}
              <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-stone-200"></div>

              {educationList.map((edu, idx) => (
                <div key={idx} className="relative space-y-2">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-white border border-stone-300"></div>
                  
                  <div className="flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
                    <span className="inline-flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-emerald-700" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1.5 text-emerald-700" />
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 leading-snug">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-sm text-emerald-700 font-bold uppercase tracking-wider">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="flex items-center space-x-3 pb-3 border-b border-stone-200/60">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/20 shrink-0">
                <Languages className="h-5 w-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                Language Proficiency
              </h2>
            </div>

            <div className="space-y-6">
              {languagesList.map((lang, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 space-y-3"
                >
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-bold text-stone-900 text-base block">{lang.name}</span>
                      <span className="text-xs text-stone-500 block uppercase tracking-wide mt-0.5">{lang.proficiency}</span>
                    </div>
                    <span className="font-bold text-emerald-700">{lang.percentage}%</span>
                  </div>
                  {/* Gauge bar track */}
                  <div className="h-2 w-full bg-stone-100 rounded-full border border-stone-200/50 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-700 to-amber-600 rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
