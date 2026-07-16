import React from 'react';
import { Award, ShieldAlert, Cpu, Users } from 'lucide-react';

interface MetricCard {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export default function Profile() {
  const metrics: MetricCard[] = [
    {
      icon: <Award className="h-6 w-6 text-violet-400" />,
      value: "10+ Years",
      label: "Industry Experience",
      description: "Proven history in IT infrastructure and application lifecycles.",
    },
    {
      icon: <Users className="h-6 w-6 text-cyan-400" />,
      value: "Team Lead",
      label: "Strategic Leadership",
      description: "Directing software developments (SDLC) and cross-functional teams.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-pink-400" />,
      value: "Full Stack",
      label: "Framework Expertise",
      description: "Expert in Laravel, ReactJS, ASP, and database architectures.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-yellow-400" />,
      value: "Security",
      label: "Compliance & Servers",
      description: "Managing enterprise systems with strict compliance policies.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Professional <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Profile</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg">
            Balancing strategic project management with expert-level technical execution to build robust, enterprise-grade solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Summary / Bio Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Who is Nurul Fikri Falindi?
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I am an **IT System Development Senior Analyst** with a proven track record of directing full-cycle application development and leading high-performing technical teams.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My expertise centers on bridging tactical developer execution with executive-level strategic targets. Whether designing database schemas, architecting clean web platform logic in React/Laravel, or hardening server infrastructures under tight security frameworks, I focus on delivering scalable, high-availability output.
            </p>
            <div className="p-4 rounded-xl glass border border-white/5 bg-slate-900/40">
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">Key Focus Area</span>
              <p className="text-slate-300 text-sm mt-1">
                Optimizing enterprise-grade server infrastructure, database integrity, and rigorous security compliance.
              </p>
            </div>
          </div>

          {/* Metrics Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl glass hover:bg-slate-900/50 transition-all duration-300 hover:scale-[1.02] border border-white/5 flex flex-col justify-between"
              >
                {/* Visual hover background glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                <div>
                  <div className="p-3 w-fit rounded-xl bg-slate-800/80 mb-4 group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  <h4 className="text-2xl font-extrabold text-white tracking-tight">
                    {metric.value}
                  </h4>
                  <span className="text-sm font-semibold text-slate-300 block mt-1">
                    {metric.label}
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
