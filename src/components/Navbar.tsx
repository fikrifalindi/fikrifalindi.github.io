import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#profile' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-3 group">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Fikri Falindi"
                className="h-8 w-auto rounded-lg shadow-sm border border-stone-200/50 group-hover:scale-105 transition-transform duration-250"
              />
              <span className="text-stone-800 font-semibold text-lg tracking-wider group-hover:text-emerald-700 transition-colors">
                FIKRI FALINDI
              </span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'text-emerald-700 bg-stone-100/80 border border-emerald-700/20'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50/50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-700 to-amber-700 hover:from-emerald-600 hover:to-amber-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-t border-stone-200/50 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider transition-all ${
                  activeSection === item.href.slice(1)
                    ? 'text-emerald-700 bg-stone-50 font-bold'
                    : 'text-stone-500 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-700 to-amber-700 text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
