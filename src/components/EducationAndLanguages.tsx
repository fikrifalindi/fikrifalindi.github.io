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
      degree: "Bachelor of Information Technology",
      institution: "Gunadarma University",
      period: "2012 - 2016",
      location: "Depok, Indonesia"
    },
    {
      degree: "Vocational High School of Computer and Network Engineering",
      institution: "Informatika Bina Generasi",
      period: "2008 - 2011",
      location: "Bogor, Indonesia"
    }
  ];

  const languagesList: LanguageItem[] = [
    {
      name: "Bahasa Indonesia",
      proficiency: "Fluent / Native",
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Side */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                Education
              </h2>
            </div>
            
            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-slate-800 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center text-xs font-semibold text-violet-300 bg-violet-500/10 px-2.5 py-0.5 rounded-full">
                      <Calendar className="h-3 w-3 mr-1" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center text-xs text-slate-400">
                      <MapPin className="h-3 w-3 mr-1 text-cyan-400" />
                      {edu.location}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mt-2">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-sm text-cyan-400 font-semibold mt-1">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Side */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-600/20 text-cyan-400">
                <Languages className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                Languages
              </h2>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-slate-900/20 space-y-8">
              {languagesList.map((lang, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {lang.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {lang.proficiency}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-cyan-400">
                      {lang.percentage}%
                    </span>
                  </div>

                  {/* Circular/Linear Indicator */}
                  <div className="h-3 w-full bg-slate-950 rounded-full border border-white/5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              {/* Decorative Language Tip */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 mt-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dual-lingual capabilities allow for effective collaboration in cross-border projects, system support coordination, and vendor integrations.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
