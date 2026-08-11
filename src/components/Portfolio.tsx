import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Landmark, ShoppingBag, Factory, Settings } from 'lucide-react';

interface AppItem {
  code: string;
  name: string;
}

interface PortfolioCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  apps: AppItem[];
}

export default function Portfolio() {
  const categories: PortfolioCategory[] = [
    {
      id: "supply-chain",
      title: "Supply Chain & Logistics",
      icon: <Truck className="h-4 w-4" />,
      apps: [
        { code: "ASN", name: "Auto Shipping Notice" },
        { code: "BPS", name: "Barcode Pallet System" },
        { code: "FC3", name: "Freight System" },
        { code: "OLVA", name: "Optimus Logistics Vendor Appointment" },
        { code: "RTP", name: "Receiver Ticket Print" }
      ]
    },
    {
      id: "finance",
      title: "Finance & Accounting",
      icon: <Landmark className="h-4 w-4" />,
      apps: [
        { code: "AEP", name: "Advance & Exception Payment" },
        { code: "EIT", name: "Extend Invoice ToP Customer" },
        { code: "BTE", name: "Bank Transfer Encryption" },
        { code: "BDEW", name: "Blackline Data Export Wizard" },
        { code: "CC", name: "Closing Checklist" },
        { code: "ERA", name: "Exchange Rate Automation" },
        { code: "IGN", name: "Import of Goods Notification" },
        { code: "MJW", name: "MJ Workflow" },
        { code: "SS", name: "Sentosa System" },
        { code: "SRM", name: "Vendor SRM" }
      ]
    },
    {
      id: "commercial",
      title: "Commercial & Sales",
      icon: <ShoppingBag className="h-4 w-4" />,
      apps: [
        { code: "RMS", name: "B2B RMS" },
        { code: "OOH", name: "OOH Workflow" },
        { code: "OSR", name: "Optimus Sales Recognition" },
        { code: "EXS", name: "Export System" },
        { code: "CNO", name: "Credit Note (CN) Online (Indonesia & SSEA)" }
      ]
    },
    {
      id: "manufacturing",
      title: "Manufacturing & QC",
      icon: <Factory className="h-4 w-4" />,
      apps: [
        { code: "LPS", name: "Line Performance System" },
        { code: "MR", name: "Manufacturing Recording" },
        { code: "IMA", name: "Item Master Automation" },
        { code: "CMMS", name: "Sparepart Management" },
        { code: "CPC", name: "Customer Product Complaint" },
        { code: "BAPBS", name: "BAPBS HB/DC + Plant" },
        { code: "CCM", name: "Copacker Claim" },
        { code: "IMC", name: "Import Claim" },
        { code: "SJPBB", name: "SJPBB (Sales of Scrap)" },
        { code: "VMA", name: "Vendor Master Automation" },
        { code: "POW", name: "PO Contract & Workflow" }
      ]
    },
    {
      id: "administration",
      title: "Workflow & Admin",
      icon: <Settings className="h-4 w-4" />,
      apps: [
        { code: "UAR", name: "User Access Request" },
        { code: "IWC", name: "Indonesia Webcenter" }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState<string>("supply-chain");

  const currentCategory = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Application <span className="bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-700 to-amber-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-stone-500 mt-6 text-base sm:text-lg">
            Interactive dashboard detailing the 35+ enterprise applications designed, architected, and managed at PT Heinz ABC Indonesia.
          </p>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto bg-stone-100/50 p-2 rounded-2xl border border-stone-200/50 backdrop-blur-md">
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-350 cursor-pointer ${
                  isActive ? 'text-emerald-800' : 'text-stone-500 hover:text-stone-850'
                }`}
              >
                {/* Active highlight background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-white rounded-xl border border-stone-250/50 shadow-sm z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 shrink-0">{category.icon}</span>
                <span className="relative z-10 truncate">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Grid display with AnimatePresence */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {currentCategory.apps.map((app, index) => (
                <div
                  key={index}
                  className="glass p-5 rounded-2xl border border-stone-200/50 hover:border-stone-300/80 hover:scale-[1.01] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded uppercase tracking-wider mb-3">
                      {app.code}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 leading-snug">
                      {app.name}
                    </h4>
                  </div>
                  
                  <div className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider mt-4 pt-3 border-t border-stone-100 flex justify-between items-center">
                    <span>Divisional System</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
