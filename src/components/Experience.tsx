import { useState, type MouseEvent } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoCard from './BentoCard';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  points: string[];
  isCurrent?: boolean;
}

export default function ExperienceCard() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "PT Heinz ABC Indonesia",
      role: "IT System Development Senior Analyst",
      period: "2020 - Present",
      isCurrent: true,
      points: [
        "Direct the full software development lifecycle (SDLC) for proprietary in-house applications, developing project timelines and guiding a high-performing team from initial concept to delivery.",
        "Serve as a lead developer for critical modules using Laravel, ReactJS, ASP, and Power Platform, stepping in during resource constraints to ensure all project milestones are met.",
        "Manage end-to-end deployment pipelines, ensuring the seamless transition of production-ready code to server environments.",
        "Oversee comprehensive server administration, including proactive performance monitoring, resource optimization, and the enforcement of security and compliance protocols.",
        "Administer enterprise-grade database systems, ensuring data integrity, high availability, and optimal query performance."
      ]
    },
    {
      id: 2,
      company: "PT Vidi Vici Digital (jendela360.com)",
      role: "Web Developer",
      period: "2016 - 2019",
      points: [
        "Engineered the core web platform using Laravel and ReactJS, delivering a seamless, high-performance user experience by managing both front-end and back-end development.",
        "Architected technical SEO frameworks within the site structure and metadata to significantly increase search engine visibility and organic reach.",
        "Spearheaded UI/UX brainstorming and design implementation, creating visually engaging and intuitive interfaces specifically aimed at maximizing user retention.",
        "Developed and optimized complex database schemas to support high-traffic real estate listings."
      ]
    },
    {
      id: 3,
      company: "PT Shippindo Teknologi Logistik (shipper.id)",
      role: "Web Backend Developer (Bootcamp)",
      period: "Oct '16 - Nov '16",
      points: [
        "Developed a custom Content Management System (CMS) using CodeIgniter to dynamically manage and update mobile application content.",
        "Engineered administrative interfaces for real-time content synchronization between the web CMS and mobile environment.",
        "Collaborated within an agile development team to build and refine core website features, focusing on modular code.",
        "Optimized back-end logic to handle content delivery, ensuring high availability and fast response times."
      ]
    },
    {
      id: 4,
      company: "PT Lyto Datarindo Fortuna",
      role: "IT Support",
      period: "2011 - 2012",
      points: [
        "Maintained high-availability game servers through rigorous daily monitoring and scheduled maintenance protocols.",
        "Coordinated on-site technical support for major company events, handling everything from hardware assembly to network troubleshooting."
      ]
    },
    {
      id: 5,
      company: "PT Nutrifood Indonesia",
      role: "IT Support (Internship)",
      period: "Oct '09 - Dec '09",
      points: [
        "Diagnosed and resolved hardware, software, and network connectivity issues for internal staff to maintain high operational uptime.",
        "Optimized meeting room infrastructure, configuring audiovisual hardware and stable network connections.",
        "Supported internal network administration, including LAN troubleshooting and workstation deployment."
      ]
    }
  ];

  // Keep track of which cards are expanded
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number, event: MouseEvent<HTMLDivElement>) => {
    const isCurrentlyExpanded = expandedId === id;
    setExpandedId(isCurrentlyExpanded ? null : id);

    if (!isCurrentlyExpanded) {
      const cardElement = event.currentTarget;
      // Scroll to the card element offset relative to the page
      setTimeout(() => {
        const rect = cardElement.getBoundingClientRect();
        const offsetTop = window.scrollY + rect.top - 90; // Adjusting for sticky header height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }, 350);
    }
  };

  return (
    <BentoCard className="col-span-1 lg:col-span-7 min-h-[480px] flex flex-col" id="experience">
      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Work Experience</h3>
      <p className="text-slate-400 text-xs sm:text-sm mb-6">
        A chronicle of my professional positions, from early support internships to enterprise system engineering.
      </p>

      {/* Scrollable Timeline Area */}
      <div className="flex-1 overflow-y-auto pr-1 max-h-[380px] relative space-y-8 scrollbar-thin">
        {/* Vertical timeline line */}
        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-800 pointer-events-none"></div>

        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div key={exp.id} className="relative pl-8">
              {/* Glowing Node Point */}
              <div className="absolute left-1.5 top-2 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center -translate-x-1/2 z-20">
                <div className={`w-1.5 h-1.5 rounded-full ${exp.isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-violet-500'}`}></div>
              </div>

              {/* Card Container */}
              <motion.div
                layout
                onClick={(e) => toggleExpand(exp.id, e)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  exp.isCurrent
                    ? 'bg-slate-900/60 border-cyan-500/20 shadow-md shadow-cyan-500/5'
                    : 'bg-slate-950/20 border-white/5 hover:border-slate-800'
                }`}
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className={`inline-flex items-center text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1.5 ${
                      exp.isCurrent 
                        ? 'text-cyan-400 bg-cyan-500/10' 
                        : 'text-violet-400 bg-violet-500/10'
                    }`}>
                      {exp.period}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {exp.company}
                    </h4>
                    <p className="text-xs text-slate-300 font-medium mt-0.5">{exp.role}</p>
                  </div>
                  <button className="text-slate-400 hover:text-white p-1 rounded bg-slate-900/60 border border-white/5 shrink-0">
                    {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* Collapsible Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-3 pt-3 border-t border-slate-800/60 space-y-1.5 text-slate-400 text-xs leading-relaxed">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start">
                            <span className={`mr-2 font-bold shrink-0 ${exp.isCurrent ? 'text-cyan-400' : 'text-violet-400'}`}>•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
}
