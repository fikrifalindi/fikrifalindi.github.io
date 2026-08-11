import Navbar from './components/Navbar';
import { IntroCard, ProfileCard } from './components/Hero';
import { AboutCard, MetricsCard } from './components/Profile';
import SkillsCard from './components/Skills';
import ExperienceCard from './components/Experience';
import EducationAndLanguagesCard from './components/EducationAndLanguages';
import ReferencesCard from './components/References';
import ContactCard from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-darkBg text-stone-700 overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-900">
      
      {/* Dynamic Background Graphics matching the User's Mockup */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        
        {/* Soft, warm mesh gradient orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-amber-200/10 via-emerald-100/10 to-transparent blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[30%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-stone-200/15 via-amber-100/10 to-transparent blur-[130px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-emerald-100/15 via-stone-200/10 to-transparent blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[5%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-amber-200/10 via-emerald-100/10 to-transparent blur-[110px] animate-pulse-slow"></div>

        {/* Vector Curvy Topographic Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12] stroke-stone-300 stroke-[1.5] fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,150 C300,50 600,350 900,100 C1200,-150 1400,250 1900,150" />
          <path d="M-50,250 C350,150 650,450 950,200 C1250,-50 1450,350 1950,250" />
          <path d="M-150,350 C250,250 550,550 850,300 C1150,50 1350,450 1850,350" />
          <path d="M-200,450 C150,350 450,650 750,400 C1050,150 1250,550 1750,450" />
          
          <path d="M-50,850 C350,750 650,1050 950,800 C1250,550 1450,950 1950,850" />
          <path d="M-150,950 C250,850 550,1150 850,900 C1150,650 1350,1050 1850,950" />
        </svg>

        {/* Floating 3D Torus Ring - Top Left */}
        <svg className="absolute top-[12%] left-[3%] w-56 h-56 opacity-20 animate-float-slow" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803d" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#166534" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          <path d="M 100 20 A 80 80 0 1 0 100 180 A 80 80 0 1 0 100 20 Z M 100 50 A 50 50 0 1 1 100 150 A 50 50 0 1 1 100 50 Z" fill="url(#ringGrad1)" filter="drop-shadow(0px 15px 20px rgba(22,101,52,0.15))" />
        </svg>

        {/* Floating 3D Torus Ring - Bottom Right */}
        <svg className="absolute bottom-[15%] right-[2%] w-64 h-64 opacity-15 animate-float-slow" style={{ animationDelay: '3s' }} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b45309" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#15803d" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M 100 20 A 80 80 0 1 0 100 180 A 80 80 0 1 0 100 20 Z M 100 50 A 50 50 0 1 1 100 150 A 50 50 0 1 1 100 50 Z" fill="url(#ringGrad2)" filter="drop-shadow(0px 15px 20px rgba(180,83,9,0.1))" />
        </svg>

        {/* Floating Glossy 3D Capsule - Middle Left */}
        <svg className="absolute top-[45%] left-[-4%] w-48 h-24 opacity-15 rotate-[35deg] animate-float-slow" style={{ animationDelay: '1.5s' }} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="capsuleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803d" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="180" height="80" rx="40" fill="url(#capsuleGrad1)" filter="drop-shadow(0px 10px 15px rgba(21,128,61,0.1))" />
          <rect x="25" y="18" width="150" height="12" rx="6" fill="white" fillOpacity="0.4" />
        </svg>

        {/* Floating Glossy 3D Capsule - Bottom Left */}
        <svg className="absolute bottom-[8%] left-[8%] w-40 h-20 opacity-15 rotate-[-25deg] animate-float-slow" style={{ animationDelay: '4.5s' }} viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="capsuleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b45309" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#15803d" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="180" height="80" rx="40" fill="url(#capsuleGrad2)" filter="drop-shadow(0px 10px 15px rgba(180,83,9,0.1))" />
          <rect x="25" y="18" width="150" height="12" rx="6" fill="white" fillOpacity="0.4" />
        </svg>

      </div>

      {/* Universal Floating Navbar */}
      <Navbar />

      {/* Main Bento Grid layout */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-6">
        
        {/* Row 1: Intro Card (8) & Profile Card (4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <IntroCard />
          <ProfileCard />
        </div>

        {/* Row 2: About Me (5) & Professional Metrics (3) & Reference (4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <AboutCard />
          <MetricsCard />
          <ReferencesCard />
        </div>

        {/* Row 3: Skills & Competencies (8) & Credentials (4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <SkillsCard />
          <EducationAndLanguagesCard />
        </div>

        {/* Row 4: Timeline Experience (7) & Contact message form (5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <ExperienceCard />
          <ContactCard />
        </div>

      </main>
    </div>
  );
}
