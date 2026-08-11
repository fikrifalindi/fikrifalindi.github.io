import { useState, type MouseEvent } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
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
      location: "Jakarta, Indonesia",
      isCurrent: true,
      points: [
        "Direct full software development lifecycle (SDLC) and deployment pipelines for a portfolio of 35+ proprietary enterprise applications spanning Supply Chain, Logistics, Plant Operations, Finance, and Commercial functions.",
        "Served as Lead Developer for critical modules using Laravel, ReactJS, ASP, and Power Platform, stepping in during resource constraints to guarantee 100% on-time project milestone delivery.",
        "Architected and managed a portfolio of 35+ enterprise applications across 5 core business pillars (detailed in the Portfolio section below).",
        "Managed business continuity, legacy data transitions, and structured decommissioning of multiple internal applications following a major corporate ERP migration.",
        "Oversee comprehensive server administration and proactive performance monitoring, optimizing server resource utilization, enforcing security protocols, and maintaining maximum uptime.",
        "Administer enterprise-grade database systems, enforcing data integrity, query performance optimization, and strict security compliance across all active platforms."
      ]
    },
    {
      id: 2,
      company: "PT Vidi Vici Digital (jendela360.com)",
      role: "Web Developer",
      period: "2016 - 2019",
      location: "Jakarta, Indonesia",
      points: [
        "Engineered core web platform features using Laravel and ReactJS, delivering seamless front-end and back-end architectures for high-traffic real estate listings.",
        "Architected technical SEO frameworks within site structure and metadata, significantly increasing search engine visibility and organic reach.",
        "Spearheaded UI/UX brainstorming sessions and design implementation, creating intuitive interfaces aimed at maximizing user retention.",
        "Designed and optimized complex database schemas to support high-traffic real estate listings and efficient data management."
      ]
    },
    {
      id: 3,
      company: "PT Shippindo Teknologi Logistik (shipper.id)",
      role: "Web Backend Developer (Bootcamp Project)",
      period: "Oct '16 - Nov '16",
      location: "Jakarta, Indonesia",
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
      location: "Jakarta, Indonesia",
      points: [
        "Maintained high-availability game servers through daily monitoring and scheduled maintenance protocols to ensure an optimal gaming experience and minimize downtime.",
        "Coordinated on-site technical support for major company events, handling everything from hardware assembly to complex network troubleshooting under tight deadlines."
      ]
    },
    {
      id: 5,
      company: "PT Nutrifood Indonesia",
      role: "IT Support (Internship)",
      period: "Oct '09 - Dec '09",
      location: "Jakarta, Indonesia",
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
    <section id="experience" className="py-20 relative overflow-hidden bg-stone-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Work <span className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-700 to-amber-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-stone-500 mt-6 text-base sm:text-lg">
            A chronicle of my professional positions, from early support internships to enterprise system engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2"></div>

          {/* Experience list */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Glowing Node Point */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border border-stone-300 flex items-center justify-center -translate-x-1/2 z-20 shadow-sm transition-transform">
                    <div className={`w-3.5 h-3.5 rounded-full ${exp.isCurrent ? 'bg-emerald-600 animate-pulse' : 'bg-amber-500'}`}></div>
                  </div>

                  {/* Left Side Column - Contains Even Items in 1-based order (idx 0, 2, 4) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 flex justify-start md:justify-end md:order-1">
                    {isEven && (
                      <motion.div
                        layout
                        onClick={(e) => toggleExpand(exp.id, e)}
                        className={`w-full max-w-md p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                          exp.isCurrent
                            ? 'bg-emerald-50/20 border-emerald-700/20 shadow-sm shadow-emerald-700/2'
                            : 'glass border-stone-200/50 hover:border-stone-300/80'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full mb-2 uppercase tracking-wide">
                              {exp.period} | {exp.location}
                            </span>
                            <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-stone-600 text-xs font-semibold mt-0.5">{exp.role}</p>
                          </div>
                          <button className="text-stone-500 hover:text-stone-800 p-1.5 rounded bg-white border border-stone-200/80 shadow-sm shrink-0">
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
                              <ul className="mt-4 pt-4 border-t border-stone-200/60 space-y-2 text-stone-500 text-xs leading-relaxed">
                                {exp.points.map((pt, pIdx) => (
                                  <li key={pIdx} className="flex items-start">
                                    <span className="mr-2 text-emerald-700 font-bold shrink-0">•</span>
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
                        className="w-full max-w-md p-6 rounded-2xl border glass border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mb-2 uppercase tracking-wide">
                              {exp.period} | {exp.location}
                            </span>
                            <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-stone-600 text-xs font-semibold mt-0.5">{exp.role}</p>
                          </div>
                          <button className="text-stone-500 hover:text-stone-800 p-1.5 rounded bg-white border border-stone-200/80 shadow-sm shrink-0">
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
                              <ul className="mt-4 pt-4 border-t border-stone-200/60 space-y-2 text-stone-500 text-xs leading-relaxed">
                                {exp.points.map((pt, pIdx) => (
                                  <li key={pIdx} className="flex items-start">
                                    <span className="mr-2 text-amber-700 font-bold shrink-0">•</span>
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
