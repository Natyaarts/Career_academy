'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, ScrollText, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const programs = [
    {
        id: "01",
        title: "Short Term",
        subtitle: "Certificate Course",
        description: "Ideal for beginners. Master the fundamentals of Adavus, Talam, and basic functional choreography in a focused 6-month intensive.",
        icon: BookOpen,
    },
    {
        id: "02",
        title: "Diploma",
        subtitle: "Professional Training",
        description: "A comprehensive 2-year program covering Margam, Abhinaya, and Nattuvangam. Designed for serious dancers aiming for the stage.",
        icon: ScrollText,
    },
    {
        id: "03",
        title: "Degree",
        subtitle: "Bachelor of Arts",
        description: "3-year UGC recognized degree. Deep dive into Natyashastra, Indian Art History, and advanced performance techniques.",
        icon: GraduationCap,
    },
    {
        id: "04",
        title: "Masters",
        subtitle: "Postgraduate Research",
        description: "Advanced research, choreography, and teaching pedagogy. For established artists looking to become Gurus and scholars.",
        icon: Award,
    }
];

export default function Programs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-[#0f0a0a] text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.15),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-natya-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4"
                    >
                        Academic Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
                    >
                        Our Programs
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className={`relative group bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-sm border border-white/5 p-8 h-[400px] flex flex-col justify-between overflow-hidden transition-all duration-500 rounded-sm cursor-pointer ${hoveredIndex === index ? 'z-10 scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'scale-100'} ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50 blur-[1px]' : 'opacity-100'}`}
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-natya-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div>
                                <h4 className="text-natya-gold/50 font-serif text-6xl opacity-20 font-bold mb-8 group-hover:opacity-100 group-hover:text-natya-gold transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    {program.id}
                                </h4>

                                <h3 className="text-2xl font-serif font-medium text-white mb-2 group-hover:text-natya-gold transition-colors duration-300">
                                    {program.title}
                                </h3>
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-6 group-hover:text-white transition-colors">
                                    {program.subtitle}
                                </p>

                                <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {program.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-end border-t border-white/10 pt-6 mt-auto">
                                <program.icon className="text-gray-400 group-hover:text-natya-gold transition-colors duration-300" size={24} />
                                <ArrowUpRight className="text-gray-600 group-hover:text-white transform group-hover:rotate-45 transition-all duration-300" size={20} />
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-natya-gold rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
