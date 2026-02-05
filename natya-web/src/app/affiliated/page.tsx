'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ShieldCheck, Globe, Link as LinkIcon, Crown, Loader2 } from 'lucide-react';

interface Affiliation {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    logo: string | null;
}

export default function Affiliated() {
    const [affiliations, setAffiliations] = useState<Affiliation[]>([]);
    const [loading, setLoading] = useState(true);
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/affiliations/')
            .then(res => res.json())
            .then(data => {
                setAffiliations(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching affiliations:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#020202] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-natya-gold animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-[#020202] min-h-screen text-white overflow-hidden selection:bg-natya-gold selection:text-black font-serif">

            {/* Hero Section - The Decree */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
                    {/* Abstract Gold Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-natya-gold/10 via-[#020202] to-[#020202]" />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-block mb-6"
                    >
                        <Crown className="w-12 h-12 text-natya-gold mx-auto mb-6" strokeWidth={1} />
                        <span className="text-natya-gold text-xs tracking-[0.5em] uppercase font-bold border-y border-natya-gold/30 py-2 px-6">
                            Verified & Accredited
                        </span>
                    </motion.div>
                    <h1 className="text-6xl md:text-9xl font-bold text-white mb-8 tracking-tight">
                        Our Official<br />
                        <span className="italic font-light text-natya-gold/80">Affiliations</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-sans font-light max-w-2xl mx-auto leading-relaxed">
                        We uphold the highest standards of artistic and academic excellence through our partnerships with India's leading educational bodies.
                    </p>
                </div>
            </section>

            {/* The List - Royal Docket Style */}
            <section className="py-32 container mx-auto px-6 relative z-10">
                <div className="flex flex-col space-y-32">
                    {affiliations.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-500 font-sans italic text-xl">No affiliations found. Add them from the admin panel.</p>
                        </div>
                    ) : (
                        affiliations.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8 }}
                                className="group relative"
                            >
                                {/* Decorative Line */}
                                <div className="absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-natya-gold/50 transition-all duration-1000" />

                                <div className="flex flex-col lg:flex-row items-baseline gap-12 lg:gap-24 relative z-10 pt-8 px-4 lg:px-12">
                                    {/* Number */}
                                    <div className="text-natya-gold/20 text-6xl md:text-8xl font-bold tracking-tighter group-hover:text-natya-gold/40 transition-colors duration-500 font-sans min-w-[120px]">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                                            <div className="w-16 h-16 rounded-full border border-natya-gold/30 flex items-center justify-center text-natya-gold bg-natya-gold/5 overflow-hidden">
                                                {item.logo ? (
                                                    <img src={item.logo} alt={item.title} className="w-full h-full object-contain p-2" />
                                                ) : (
                                                    <Award strokeWidth={1} className="w-8 h-8" />
                                                )}
                                            </div>
                                            <div>
                                                <span className="text-natya-gold text-xs tracking-[0.2em] uppercase font-bold mb-1 block font-sans">
                                                    {item.subtitle}
                                                </span>
                                                <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-natya-gold transition-colors duration-500">
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl ml-auto lg:ml-24 border-l border-white/10 pl-8 group-hover:border-natya-gold/50 transition-colors duration-500 font-sans">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </section>

            {/* Why Choose Us - Prestige Monolith Grid */}
            <section className="py-40 bg-[#080808] relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-natya-gold text-xs tracking-[0.4em] uppercase font-bold mb-4 block">Institutional Standard</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            The Natya <span className="text-natya-gold">Promise</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Main Feature - Spans 2 cols on LG */}
                        <div className="lg:col-span-2 group relative p-10 md:p-14 bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-natya-gold/40 transition-colors duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-natya-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div className="mb-8">
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Job-Ready<br />Education</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                                        We aim to empower students with practical skills and recognized certifications to support their career growth. Our curriculum is designed to meet strict industry demands.
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-natya-gold/60 group-hover:text-natya-gold transition-colors">
                                    <div className="h-[1px] w-12 bg-current" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Practical Mastery</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative p-10 md:p-14 bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-natya-gold/40 transition-colors duration-700">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Recognized<br />Standards</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    Affiliated with STED Council and Skill India Mission, ensuring our programs meet established national benchmarks.
                                </p>
                                <ShieldCheck className="w-8 h-8 text-natya-gold/40 group-hover:text-natya-gold transition-colors" />
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative p-10 md:p-14 bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-natya-gold/40 transition-colors duration-700">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Career<br />Pathways</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    Through partnerships, students access certified training that improves employability and valuable qualifications.
                                </p>
                                <Award className="w-8 h-8 text-natya-gold/40 group-hover:text-natya-gold transition-colors" />
                            </div>
                        </div>

                        {/* Feature 4 - Excellence/Integrity */}
                        <div className="lg:col-span-2 group relative p-10 md:p-14 bg-[#0A0A0A] border border-white/5 overflow-hidden hover:border-natya-gold/40 transition-colors duration-700 flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Excellence & Integrity</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We are committed to maintaining transparency and continuous improvement in education. Our goal is to help every student move closer to a successful professional future.
                                </p>
                            </div>
                            <div className="w-24 h-24 rounded-full border border-natya-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                <Crown className="w-10 h-10 text-natya-gold" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
