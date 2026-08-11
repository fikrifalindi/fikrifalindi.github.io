import { type ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function BentoCard({ children, className = '', id }: BentoCardProps) {
  return (
    <div
      id={id}
      className={`glass rounded-3xl p-6 sm:p-8 relative overflow-hidden group border border-stone-200/50 hover:border-stone-300/80 transition-all duration-300 ${className}`}
    >
      {/* Background Sheen Gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>
      
      {/* Glow highlight node */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-emerald-600/15 to-amber-500/15 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
