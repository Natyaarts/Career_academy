'use client';

import { motion } from 'framer-motion';
import { Star, Users, Trophy, Heart, CheckCircle2, Music, GraduationCap, Globe } from 'lucide-react';

const features = [
    {
        title: "Expert Faculty",
        description: "Learn from award-winning gurus and performing artists.",
        icon: Users,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-natya-crimson to-black"
    },
    {
        title: "Global Recognition",
        description: "Certification recognized worldwide.",
        icon: Globe,
        colSpan: "md:col-span-1",
        bg: "bg-neutral-900"
    },
    {
        title: "Live Performance",
        description: "Regular stage opportunities for all students.",
        icon: Music,
        colSpan: "md:col-span-1",
        bg: "bg-neutral-900"
    },
    {
        title: "Holistic Growth",
        description: "Focus on theory, history, and stage presence.",
        icon: Heart,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-natya-gold to-yellow-900"
    }
];

export default function WhyChoose() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-natya-crimson/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-natya-gold/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-natya-gold via-yellow-200 to-natya-gold animate-gradient-x">Natya?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
                    >
                        Experience the perfect blend of traditional Gurukula values and modern artistic excellence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Main Feature - Bento Grid Style */}
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`${feature.colSpan} ${feature.bg} p-8 rounded-3xl relative overflow-hidden group border border-white/10 shadow-2xl flex flex-col justify-between min-h-[250px]`}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 scale-150 transform translate-x-4 -translate-y-4">
                                <feature.icon size={120} />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                                    <feature.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-white/70 leading-relaxed max-w-xs">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Stats Section blended in */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-10 mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center backdrop-blur-sm"
                    >
                        {[
                            { label: "Years Excellence", value: "10+" },
                            { label: "Graduates", value: "500+" },
                            { label: "Awards", value: "50+" },
                            { label: "Dedication", value: "100%" }
                        ].map((stat, idx) => (
                            <div key={idx} className="space-y-2">
                                <div className="text-4xl md:text-5xl font-serif font-bold text-natya-gold">{stat.value}</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
