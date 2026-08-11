import { Code2, Server, Briefcase, CheckCircle2 } from 'lucide-react';
import BentoCard from './BentoCard';

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

export default function SkillsCard() {
  const categories: SkillCategory[] = [
    {
      title: "Software Development",
      icon: <Code2 className="h-4 w-4 text-emerald-700" />,
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
      icon: <Server className="h-4 w-4 text-amber-700" />,
      skills: [
        { name: "Microsoft Azure", level: "Advanced", percentage: 85 },
        { name: "Server Admin", level: "Expert", percentage: 92 },
        { name: "CI/CD Pipelines", level: "Advanced", percentage: 88 },
        { name: "Database Mgmt", level: "Expert", percentage: 95 },
      ],
    },
    {
      title: "Strategy & Operations",
      icon: <Briefcase className="h-4 w-4 text-emerald-700" />,
      skills: [
        { name: "Team Leadership", level: "Expert", percentage: 90 },
        { name: "Project Timelines", level: "Expert", percentage: 95 },
        { name: "Security & Compliance", level: "Expert", percentage: 92 },
      ],
    },
  ];

  return (
    <BentoCard className="col-span-1 lg:col-span-8 min-h-[420px] flex flex-col justify-between" id="skills">
      <div>
        <h3 className="text-xl font-bold text-stone-900 mb-2 tracking-wide">Skills & Expertise</h3>
        <p className="text-stone-500 text-xs sm:text-sm mb-6">
          A comprehensive overview of my technical toolkit, software engineering capabilities, and project execution skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-stone-200/50 pb-2">
                <div className="p-1.5 rounded-lg bg-stone-50 border border-stone-200/50 shrink-0">
                  {category.icon}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900 tracking-wide truncate">
                  {category.title}
                </h4>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between text-[10px] sm:text-xs font-semibold text-stone-700">
                      <span>{skill.name}</span>
                      <span className="text-emerald-700">{skill.level}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden border border-stone-200/50">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-700 to-amber-600 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-200/50 flex flex-wrap gap-1.5">
        <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mr-2 self-center">Competencies:</span>
        {categories.flatMap(c => c.skills).slice(0, 7).map((skill, sIdx) => (
          <span
            key={sIdx}
            className="inline-flex items-center text-[9px] font-bold text-stone-700 bg-stone-50/60 px-2 py-0.5 rounded border border-stone-200/60 uppercase"
          >
            <CheckCircle2 className="h-2.5 w-2.5 text-emerald-700 mr-1" />
            {skill.name}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
