import { Award, ShieldAlert, Cpu, Users } from 'lucide-react';
import BentoCard from './BentoCard';

interface MetricItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export function AboutCard() {
  return (
    <BentoCard className="col-span-1 lg:col-span-5 flex flex-col justify-between min-h-[380px]" id="profile">
      <div className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          Who is Nurul Fikri Falindi?
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          I am an **IT System Development Senior Analyst** with a proven track record of directing full-cycle application development and leading high-performing technical teams.
        </p>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          My expertise centers on bridging tactical developer execution with executive-level strategic targets. Whether designing database schemas, architecting clean web platform logic in React/Laravel, or hardening server infrastructures under tight security frameworks, I focus on delivering scalable, high-availability output.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-slate-950/40 border border-white/5 mt-6">
        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Key Focus Area</span>
        <p className="text-slate-300 text-xs sm:text-sm mt-1">
          Optimizing enterprise-grade server infrastructure, database integrity, and rigorous security compliance.
        </p>
      </div>
    </BentoCard>
  );
}

export function MetricsCard() {
  const metrics: MetricItem[] = [
    {
      icon: <Award className="h-5 w-5 text-violet-400" />,
      value: "10+ Years",
      label: "Experience",
      description: "Proven history in IT infrastructure.",
    },
    {
      icon: <Users className="h-5 w-5 text-cyan-400" />,
      value: "Team Lead",
      label: "Leadership",
      description: "Directing software developments.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-pink-400" />,
      value: "Full Stack",
      label: "Expertise",
      description: "Laravel, ReactJS, ASP & databases.",
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-yellow-400" />,
      value: "Security",
      label: "Compliance",
      description: "Managing enterprise systems.",
    },
  ];

  return (
    <BentoCard className="col-span-1 lg:col-span-3 min-h-[380px] flex flex-col justify-center">
      <h3 className="text-lg font-bold text-white mb-6">Key Professional Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-slate-950/40 border border-white/5 hover:border-slate-800 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-2 w-fit rounded-lg bg-slate-900 border border-white/5 mb-3">
              {metric.icon}
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                {metric.value}
              </h4>
              <span className="text-[10px] font-bold text-slate-400 block uppercase mt-0.5">
                {metric.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
