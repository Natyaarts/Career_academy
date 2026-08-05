'use client';

import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Programs from '@/components/home/Programs';
import WhyChoose from '@/components/home/WhyChoose';

// INDEPENDENCE DAY THEME START
import IndependenceDayDecorations from '@/components/home/IndependenceDayDecorations';
// INDEPENDENCE DAY THEME END

export default function Home() {
  return (
    <div className="overflow-hidden relative">
       <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; filter: drop-shadow(0 0 1px rgba(255,255,255,0.3)); }
          50% { opacity: 1; filter: drop-shadow(0 0 3px rgba(255,255,255,0.7)); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }
      `}</style>

       <Hero />
 
       {/* INDEPENDENCE DAY THEME START: Section Divider */}
       <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9933]/20 via-white/30 via-[#128807]/20 to-transparent relative select-none pointer-events-none animate-pulse-glow" />
       {/* INDEPENDENCE DAY THEME END */}
 
       <About />
 
       {/* INDEPENDENCE DAY THEME START: Section Divider */}
       <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9933]/20 via-white/30 via-[#128807]/20 to-transparent relative select-none pointer-events-none animate-pulse-glow" />
       {/* INDEPENDENCE DAY THEME END */}
 
       <Programs />
 
       {/* INDEPENDENCE DAY THEME START: Section Divider */}
       <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9933]/20 via-white/30 via-[#128807]/20 to-transparent relative select-none pointer-events-none animate-pulse-glow" />
       {/* INDEPENDENCE DAY THEME END */}
 
       <WhyChoose />
 
       {/* INDEPENDENCE DAY THEME START: Page decorations & watermarks */}
       <IndependenceDayDecorations />
       {/* INDEPENDENCE DAY THEME END */}
     </div>
   );
}
