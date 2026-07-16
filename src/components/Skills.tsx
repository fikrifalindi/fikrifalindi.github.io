import React from 'react';
import { Code2, Server, Briefcase, CheckCircle2 } from 'lucide-react';

interface SkillItem {
  name: string;
  level: string; // Beginner, Intermediate, Advanced, Expert
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  skills: SkillItem[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Software Development",
      icon: <Code2 className="h-6 w-6 text-violet-400" />,
      description: "Building modern responsive web layouts and clean MVC backend structures.",
      color: "from-violet-500/20 to-purple-500/5",
      skills: [
        { name: "Laravel", level: "Expert", percentage: 95 },
        { name: "ReactJS", level: "Advanced", percentage: 90 },
        { name: "ASP", level: "Advanced", percentage: 85 },
        { name: "TypeScript / JS", level: "Advanced", percentage: 88 },
        { name: "Power Platform (PowerApps/Flow)", level: "Advanced", percentage: 82 },
      ],
    },
    {
      title: "DevOps & Systems",
      icon: <Server className="h-6 w-6 text-cyan-400" />,
      description: "Managing server infrastructures, deployment automation, and cloud setups.",
      color: "from-cyan-500/20 to-blue-500/5",
      skills: [
        { name: "Microsoft Azure", level: "Advanced", percentage: 85 },
        { name: "Server Admin & Monitoring", level: "Expert", percentage: 92 },
        { name: "Deployment Pipelines (CI/CD)", level: "Advanced", percentage: 88 },
        { name: "Database Management (MySQL/MSSQL)", level: "Expert", percentage: 95 },
      ],
    },
    {
      title: "Strategy & Operations",
      icon: <Briefcase className="h-6 w-6 text-pink-400" />,
      description: "Strategic project scoping, timeline management, and process automation.",
      color: "from-pink-500/20 to-red-500/5",
      skills: [
        { name: "Team Leadership", level: "Expert", percentage: 90 },
        { name: "Project Timeline Development", level: "Expert", percentage: 95 },
        { name: "Security & Compliance", level: "Expert", percentage: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Skills & <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg">
            A comprehensive overview of my technical toolkit, software engineering capabilities, and project execution skills.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border border-white/5 bg-gradient-to-b ${category.color} relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300`}
            >
              {/* Card Title Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-300">
                      <span>{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}</span>
                    </div>
                    {/* Visual Bar */}
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Tags Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800/40 flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center text-[10px] font-semibold text-slate-300 bg-slate-950/60 px-2 py-1 rounded border border-white/5"
                  >
                    <CheckCircle2 className="h-2.5 w-2.5 text-cyan-500 mr-1" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
