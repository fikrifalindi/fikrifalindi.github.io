import { Award, ShieldAlert, Cpu, Users } from 'lucide-react';

interface MetricItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export default function Profile() {
  const metrics: MetricItem[] = [
    {
      icon: <Award className="h-6 w-6 text-emerald-700" />,
      value: "10+ Years",
      label: "Experience",
      description: "Proven history in IT infrastructure management.",
    },
    {
      icon: <Users className="h-6 w-6 text-amber-700" />,
      value: "Team Lead",
      label: "Leadership",
      description: "Directing software developments and technical analysts.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-emerald-700" />,
      value: "Full Stack",
      label: "Expertise",
      description: "Laravel, ReactJS, ASP, Power Platform & database engines.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-amber-700" />,
      value: "Security",
      label: "Compliance",
      description: "Managing enterprise configurations and server deployments.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-stone-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              Who is <span className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">Nurul Fikri Falindi</span>?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-700 to-amber-600 rounded-full"></div>
            
            <p className="text-stone-700 text-base leading-relaxed">
              I am an **IT System Development Senior Analyst** with a proven track record of directing full-cycle application development and leading high-performing technical teams.
            </p>
            <p className="text-stone-500 text-sm leading-relaxed">
              My expertise centers on bridging tactical developer execution with executive-level strategic targets. Whether designing database schemas, architecting clean web platform logic in React/Laravel, or hardening server infrastructures under tight security frameworks, I focus on delivering scalable, high-availability output.
            </p>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/60 shadow-sm mt-8">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Key Focus Area</span>
              <p className="text-stone-700 text-sm mt-1">
                Optimizing enterprise-grade server infrastructure, database integrity, and rigorous security compliance.
              </p>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-2xl border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="p-3 w-fit rounded-xl bg-white border border-stone-200/80 mb-4 shadow-sm">
                    {metric.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                      {metric.value}
                    </h3>
                    <span className="text-xs font-bold text-stone-500 block uppercase mt-1">
                      {metric.label}
                    </span>
                    <p className="text-stone-400 text-xs mt-2 leading-relaxed">
                      {metric.description}
                    </p>
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
