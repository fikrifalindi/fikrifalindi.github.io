import { useState, type MouseEvent } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  points: string[];
  isCurrent?: boolean;
}

export default function Experience() {
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
        "Oversee comprehensive server administration, including proactive performance monitoring, resource optimization, and the enforcement of rigorous security and compliance protocols to mitigate vulnerabilities.",
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
        "Developed and optimized complex database schemas to support high-traffic real estate listings and efficient data management."
      ]
    },
    {
      id: 3,
      company: "PT Shippindo Teknologi Logistik (shipper.id)",
      role: "Web Backend Developer (Bootcamp)",
      period: "Oct '16 - Nov '16",
      points: [
        "Developed a custom Content Management System (CMS) using CodeIgniter to dynamically manage and update mobile application content, ensuring a streamlined administrative workflow.",
        "Engineered administrative interfaces that allowed for real-time content synchronization between the web-based CMS and the mobile app environment.",
        "Collaborated within an agile development team to build and refine core website features, focusing on modular code and cross-platform compatibility.",
        "Optimized back-end logic to handle content delivery, ensuring high availability and fast response times for mobile end-users."
      ]
    },
    {
      id: 4,
      company: "PT Lyto Datarindo Fortuna",
      role: "IT Support",
      period: "2011 - 2012",
      points: [
        "Maintained high-availability game servers through rigorous daily monitoring and scheduled maintenance protocols to ensure an optimal gaming experience for users.",
        "Coordinated on-site technical support for major company events, handling everything from hardware assembly to complex network troubleshooting."
      ]
    },
    {
      id: 5,
      company: "PT Nutrifood Indonesia",
      role: "IT Support (Internship)",
      period: "Oct '09 - Dec '09",
      points: [
        "Diagnosed and resolved hardware, software, and network connectivity issues for internal staff to maintain high operational uptime.",
        "Optimized meeting room infrastructure, configuring audiovisual hardware and stable network connections to ensure seamless high-stakes online conferences.",
        "Supported internal network administration, including LAN troubleshooting and workstation deployment for new team members."
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
      // Wait for layout shifts (300ms Framer collapse) to finish before measuring
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
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Work <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg">
            A chronicle of my professional positions, from early support internships to enterprise system engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2"></div>

          {/* Experience list */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Glowing Node Point */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center -translate-x-1/2 z-20 shadow-lg group-hover:scale-110 transition-transform">
                    <div className={`w-3.5 h-3.5 rounded-full ${exp.isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-violet-500'}`}></div>
                  </div>

                  {/* Left Side Column - Contains Even Items in 1-based order (idx 0, 2, 4) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 flex justify-start md:justify-end md:order-1">
                    {isEven && (
                      <motion.div
                        layout
                        onClick={(e) => toggleExpand(exp.id, e)}
                        className={`w-full max-w-md p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          exp.isCurrent
                            ? 'bg-slate-900/90 border-cyan-500/30 shadow-lg shadow-cyan-500/5'
                            : 'glass border-white/5 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-flex items-center text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full mb-2">
                              {exp.period}
                            </span>
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-slate-300 text-sm font-medium mt-0.5">{exp.role}</p>
                          </div>
                          <button className="text-slate-400 hover:text-white p-1 rounded bg-slate-800/50">
                            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </button>
                        </div>

                        {/* Animated Dropdown list points */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-slate-400 text-sm">
                                {exp.points.map((pt, pIdx) => (
                                  <li key={pIdx} className="flex items-start">
                                    <span className="mr-2 text-cyan-400 font-bold">•</span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side Column - Contains Odd Items in 1-based order (idx 1, 3) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-12 flex justify-start md:order-2">
                    {!isEven && (
                      <motion.div
                        layout
                        onClick={(e) => toggleExpand(exp.id, e)}
                        className="w-full max-w-md p-6 rounded-2xl border glass border-white/5 hover:border-slate-700 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-flex items-center text-xs font-semibold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full mb-2">
                              {exp.period}
                            </span>
                            <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-slate-300 text-sm font-medium mt-0.5">{exp.role}</p>
                          </div>
                          <button className="text-slate-400 hover:text-white p-1 rounded bg-slate-800/50">
                            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </button>
                        </div>

                        {/* Animated Dropdown list points */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-slate-400 text-sm">
                                {exp.points.map((pt, pIdx) => (
                                  <li key={pIdx} className="flex items-start">
                                    <span className="mr-2 text-violet-400 font-bold">•</span>
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
