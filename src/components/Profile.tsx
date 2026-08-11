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
        <h3 className="text-xl sm:text-2xl font-bold text-stone-950 tracking-wide">
          Who is Nurul Fikri Falindi?
        </h3>
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
          I am an **IT System Development Senior Analyst** with a proven track record of directing full-cycle application development and leading high-performing technical teams.
        </p>
        <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
          My expertise centers on bridging tactical developer execution with executive-level strategic targets. Whether designing database schemas, architecting clean web platform logic in React/Laravel, or hardening server infrastructures under tight security frameworks, I focus on delivering scalable, high-availability output.
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/50 mt-6">
        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Key Focus Area</span>
        <p className="text-stone-700 text-xs sm:text-sm mt-1">
          Optimizing enterprise-grade server infrastructure, database integrity, and rigorous security compliance.
        </p>
      </div>
    </BentoCard>
  );
}

export function MetricsCard() {
  const metrics: MetricItem[] = [
    {
      icon: <Award className="h-5 w-5 text-emerald-700" />,
      value: "10+ Years",
      label: "Experience",
      description: "Proven history in IT infrastructure.",
    },
    {
      icon: <Users className="h-5 w-5 text-amber-700" />,
      value: "Team Lead",
      label: "Leadership",
      description: "Directing software developments.",
    },
    {
      icon: <Cpu className="h-5 w-5 text-emerald-700" />,
      value: "Full Stack",
      label: "Expertise",
      description: "Laravel, ReactJS, ASP & databases.",
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-amber-700" />,
      value: "Security",
      label: "Compliance",
      description: "Managing enterprise systems.",
    },
  ];

  return (
    <BentoCard className="col-span-1 lg:col-span-3 min-h-[380px] flex flex-col justify-center">
      <h3 className="text-lg font-bold text-stone-950 mb-6">Key Professional Metrics</h3>
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl bg-stone-50/50 border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-2 w-fit rounded-lg bg-white border border-stone-200/80 mb-3 shadow-sm">
              {metric.icon}
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight">
                {metric.value}
              </h4>
              <span className="text-[10px] font-bold text-stone-500 block uppercase mt-0.5">
                {metric.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
