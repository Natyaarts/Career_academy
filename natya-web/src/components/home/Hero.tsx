'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 2.5 + i * 0.05, // Start after preloader (2.5s)
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    }),
} as any;

const SplitText = ({ text, className, delayOffset = 0 }: { text: string, className?: string, delayOffset?: number }) => {
    return (
        <span className={`inline-block whitespace-nowrap ${className}`}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    custom={i + delayOffset}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center bg-natya-crimson">
            {/* Background Image with Cinematic Parallax */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('/assets/hero-bg.png')` }}
                />
                {/* Cinematic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-natya-crimson/90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
            </motion.div>

            {/* INDEPENDENCE DAY THEME START: Ambient Tricolor Light Streaks */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[2] opacity-35">
                <style>{`
                    @keyframes floatStreak1 {
                        0% { transform: translate(-30%, -20%) scale(1); }
                        50% { transform: translate(15%, 15%) scale(1.25); }
                        100% { transform: translate(-30%, -20%) scale(1); }
                    }
                    @keyframes floatStreak2 {
                        0% { transform: translate(25%, 25%) scale(1.2); }
                        50% { transform: translate(-15%, -15%) scale(0.9); }
                        100% { transform: translate(25%, 25%) scale(1.2); }
                    }
                    .animate-streak-1 {
                        animation: floatStreak1 12s ease-in-out infinite;
                    }
                    .animate-streak-2 {
                        animation: floatStreak2 15s ease-in-out infinite;
                    }
                `}</style>
                {/* Saffron glow from top-left */}
                <div className="absolute -top-[15%] -left-[15%] w-[55%] h-[55%] rounded-full bg-[#FF9933]/25 blur-[100px] animate-streak-1" />
                {/* Green glow from bottom-right */}
                <div className="absolute -bottom-[15%] -right-[15%] w-[55%] h-[55%] rounded-full bg-[#128807]/20 blur-[100px] animate-streak-2" />
                {/* White/Saffron soft light center */}
                <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[90px] animate-pulse [animation-duration:8s]" />
            </div>
            {/* INDEPENDENCE DAY THEME END */}

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto flex flex-col items-center"
            >


                <motion.div
                    initial={{ opacity: 0, letterSpacing: "1em" }}
                    animate={{ opacity: 1, letterSpacing: "0.2em" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 2.8 }}
                    className="text-natya-gold font-medium uppercase tracking-[0.2em] mb-6 text-xs md:text-sm border border-natya-gold/30 px-4 py-2 rounded-full backdrop-blur-sm"
                >
                    Estd. 2020 &bull; Excellence in Arts
                </motion.div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[0.9] tracking-tight drop-shadow-2xl flex flex-col md:block items-center">
                    <SplitText text="Natya" />{" "}
                    <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#fff] to-[#b45309] animate-gradient-x">
                        <SplitText text="Career" delayOffset={5} />
                    </span>
                    <br className="hidden md:block" />{" "}
                    <SplitText text="Academy" delayOffset={11} />
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
                    className="text-lg md:text-2xl font-light tracking-wide mb-12 text-gray-100 max-w-2xl leading-relaxed opacity-90"
                >
                    Where classical arts become <span className="text-natya-gold font-serif italic">lifelong careers</span>.
                </motion.p>

                 <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 3.8 }}
                     className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                 >
                     <Link href="/course" className="w-full sm:w-auto">
                         <motion.button
                             whileHover={{ scale: 1.03, translateY: -2 }}
                             whileTap={{ scale: 0.98 }}
                             className="w-full sm:w-auto px-8 py-4 bg-natya-gold text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-natya-crimson transition-all duration-500 rounded-sm shadow-[0_0_20px_rgba(180,83,9,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer"
                         >
                             Explore Courses
                         </motion.button>
                     </Link>
                     <Link href="/contact" className="w-full sm:w-auto">
                         <motion.button
                             whileHover={{ scale: 1.03, translateY: -2 }}
                             whileTap={{ scale: 0.98 }}
                             className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors rounded-sm backdrop-blur-sm cursor-pointer"
                         >
                             View Admission
                         </motion.button>
                     </Link>
                 </motion.div>
             </motion.div>
 
             {/* Scroll indicator */}
             <motion.div
                 className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 4, duration: 1 }}
             >
                 <span className="text-[10px] uppercase tracking-[0.3em] text-natya-gold animate-pulse">Scroll</span>
                 <motion.div
                     animate={{ y: [0, 10, 0] }}
                     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                     className="w-[1px] h-12 bg-gradient-to-b from-natya-gold to-transparent"
                 />
             </motion.div>
        </section>
    );
}
