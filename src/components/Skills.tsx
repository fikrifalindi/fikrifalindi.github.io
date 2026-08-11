import { Code2, Server, Briefcase, CheckCircle2 } from 'lucide-react';

interface SkillItem {
  name: string;
  level: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Software Development",
      icon: <Code2 className="h-5 w-5 text-emerald-700" />,
      skills: [
        { name: "Laravel", level: "Expert", percentage: 95 },
        { name: "ReactJS", level: "Advanced", percentage: 90 },
        { name: "ASP", level: "Advanced", percentage: 85 },
        { name: "TypeScript / JS", level: "Advanced", percentage: 88 },
        { name: "Power Platform", level: "Advanced", percentage: 82 },
      ],
    },
    {
      title: "DevOps & Systems",
      icon: <Server className="h-5 w-5 text-amber-700" />,
      skills: [
        { name: "Microsoft Azure", level: "Advanced", percentage: 85 },
        { name: "Server Admin", level: "Expert", percentage: 92 },
        { name: "CI/CD Pipelines", level: "Advanced", percentage: 88 },
        { name: "Database Mgmt", level: "Expert", percentage: 95 },
      ],
    },
    {
      title: "Strategy & Operations",
      icon: <Briefcase className="h-5 w-5 text-emerald-700" />,
      skills: [
        { name: "Team Leadership", level: "Expert", percentage: 90 },
        { name: "Project Timelines", level: "Expert", percentage: 95 },
        { name: "Security & Compliance", level: "Expert", percentage: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Skills & <span className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-700 to-amber-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-stone-500 mt-6 text-base sm:text-lg">
            A comprehensive overview of my technical toolkit, software engineering capabilities, and project execution skills.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="glass p-6 sm:p-8 rounded-2xl border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3 border-b border-stone-200/60 pb-3">
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-sm shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-wide truncate">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-stone-700">
                        <span>{skill.name}</span>
                        <span className="text-emerald-700">{skill.level}</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden border border-stone-200/50">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-700 to-amber-600 rounded-full"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto pt-6 border-t border-stone-200/60">
          {categories.flatMap(c => c.skills).map((skill, sIdx) => (
            <span
              key={sIdx}
              className="inline-flex items-center text-xs font-bold text-stone-700 bg-white px-3 py-1 rounded-lg border border-stone-200/60 shadow-sm uppercase"
            >
              <CheckCircle2 className="h-3 w-3 text-emerald-700 mr-1.5" />
              {skill.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
