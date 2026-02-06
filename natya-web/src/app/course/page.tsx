'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, GraduationCap, Award, CheckCircle2, Music, Video, ArrowRight, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- content data ---
const uspPoints = [
    { title: "Structured Curriculum", desc: "Progressive levels blending theory and practice.", icon: BookOpen },
    { title: "Esteemed Instructors", desc: "Expert gurus with deep lineage and mastery.", icon: GraduationCap },
    { title: "Official Certifications", desc: "Recognized diplomas and stage-ready credentials.", icon: Award },
    { title: "Holistic Growth", desc: "Regular recitals, wellness, and holistic training.", icon: Music }
];

const diplomaCourses = [
    {
        title: "Bharatanatyam",
        subtitle: "Diploma • Online & Offline",
        description: "Build a strong classical foundation training in adavus, jatis, varnams, and theoretical concepts.",
        image: "/img/bharatanatyam.png"
    },
    {
        title: "Mohiniyattam",
        subtitle: "Diploma • Online & Offline",
        description: "Develop graceful technique and expressive depth in Kerala’s classical dance tradition.",
        image: "/img/mohiniyattam.png"
    },
    {
        title: "Kuchipudi",
        subtitle: "Diploma • Online & Offline",
        description: "Master adavus, jatis, tarangams, and repertoire items with formal certification.",
        image: "/img/kuchipudi.png"
    },
    {
        title: "Carnatic Music",
        subtitle: "Diploma • Online & Offline",
        description: "Strengthen your musical foundation in sruti, swara, raga, tala, and kritis.",
        image: "/img/carnatic.png"
    },
    {
        title: "Yoga",
        subtitle: "Diploma • Online Only",
        description: "Build a strong foundation in asanas, pranayama, meditation, and yogic philosophy.",
        image: "/img/yoga.png"
    }
];

const degreeCourses = [
    {
        title: "Bharatanatyam Degree",
        description: "A comprehensive 3-year program offering in-depth training in technique, repertoire, Natyashastra, and choreography.",
        image: "/img/bharatanatyam.png"
    },
    {
        title: "Carnatic Music Degree",
        description: "Deep dive into vocal techniques, ragas, talas, compositions, musicology and performance studies.",
        image: "/img/carnatic.png"
    }
];

const mastersCourses = [
    {
        title: "Masters in Bharatanatyam",
        description: "Advanced postgraduate program focused on abhinaya, choreography, research, and teaching pedagogy.",
        image: "/img/bharatanatyam.png"
    },
    {
        title: "Masters in Carnatic Music",
        description: "Refine your artistry with advanced studies in manodharma, compositions, and research.",
        image: "/img/carnatic.png"
    }
];



export default function Course() {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    return (
        <div className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-natya-gold selection:text-black font-sans">

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
                    <Image
                        src="/img/bharatanatyam.png"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />
                </motion.div>

                <div className="text-center px-6 relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-6"
                    >
                        <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter text-white mb-6 leading-none">
                            Discover.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-natya-gold to-yellow-600">Perform.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
                    >
                        Explore our diverse range of classical arts programs designed to nurture your talent.
                        From foundational diplomas to advanced degrees.
                    </motion.p>
                </div>
            </section>

            {/* Diploma Section - Vertical Editorial Scroll */}
            <section className="py-32 container mx-auto px-6 relative z-10">
                <div className="mb-32 text-center max-w-3xl mx-auto">
                    <span className="text-natya-gold text-sm tracking-[0.3em] uppercase font-bold mb-6 block">Foundational Studies</span>
                    <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8">Diploma<br />Programs</h2>
                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                        Embark on a journey of discipline and grace. Our diploma courses offer a structured pathway to mastering the classical arts, blending ancient lineage with modern pedagogy.
                    </p>
                </div>

                <div className="space-y-40">
                    {diplomaCourses.map((course, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className={cn(
                                "flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
                                i % 2 === 1 ? "lg:flex-row-reverse" : ""
                            )}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px] group overflow-hidden rounded-2xl md:rounded-[40px] border border-white/10">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

                                {/* Badge Overlay */}
                                <div className="absolute top-8 left-8">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 text-white font-serif text-xl border-dashed animate-[spin_10s_linear_infinite]">
                                        {i + 1}
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left">
                                <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                    {course.title}
                                </h3>
                                <div className="w-12 h-1 bg-natya-gold mb-8 mx-auto lg:mx-0" />
                                <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                                    {course.description}
                                </p>

                                <div className="flex flex-col lg:flex-row items-center gap-6">
                                    <span className="px-4 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-natya-gold">
                                        {course.subtitle}
                                    </span>

                                    <button className="group flex items-center gap-3 text-white hover:text-natya-gold transition-colors">
                                        <span className="text-sm font-bold uppercase tracking-widest border-b border-transparent group-hover:border-natya-gold pb-0.5 transition-all">View Curriculum</span>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Degree & Masters - Cinematic Panels */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6 space-y-32">

                    {/* Degree Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0A0A0A]"
                    >
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/img/bharatanatyam.png"
                                alt="Degree Background"
                                fill
                                className="object-cover opacity-20 hover:scale-105 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0A0A0A]/90 to-transparent" />
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-20 items-center">
                            <div>
                                <span className="text-natya-gold text-sm tracking-[0.3em] uppercase font-bold mb-4 block">Academic Excellence</span>
                                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Degree<br />Programs</h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                                    A rigorous 3-year collegiate program designed for serious aspirants. We blend traditional Gurukul training with modern academic structure.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {degreeCourses.map((course, i) => (
                                    <div key={i} className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-natya-gold/30 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer flex items-center justify-between">
                                        <div>
                                            <h4 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-natya-gold transition-colors">{course.title}</h4>
                                            <p className="text-gray-500 text-sm line-clamp-1">{course.description}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-natya-gold group-hover:text-black transition-all">
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Masters Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0A0A0A]"
                    >
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/img/carnatic.png"
                                alt="Masters Background"
                                fill
                                className="object-cover opacity-20 hover:scale-105 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-black via-[#0A0A0A]/90 to-transparent" />
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-20 items-center">
                            <div className="order-2 lg:order-1 space-y-4">
                                {mastersCourses.map((course, i) => (
                                    <div key={i} className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-natya-gold/30 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer flex items-center justify-between">
                                        <div>
                                            <h4 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-natya-gold transition-colors">{course.title}</h4>
                                            <p className="text-gray-500 text-sm line-clamp-1">{course.description}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-natya-gold group-hover:text-black transition-all">
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="order-1 lg:order-2 text-right">
                                <span className="text-natya-gold text-sm tracking-[0.3em] uppercase font-bold mb-4 block">Postgraduate Studies</span>
                                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Masters<br />Excellence</h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md ml-auto">
                                    For the virtuoso. Advanced research, choreography, and performance studies designed for future Gurus and professional performers.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* USP Section - Luxe Feature Grid */}
            <section className="py-32 border-t border-white/5 relative z-10 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-natya-gold text-sm tracking-[0.3em] uppercase font-bold mb-4 block">Why Choose Natya</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">The Natya Advantage</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {uspPoints.map((point, i) => (
                            <div key={i} className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-natya-gold/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-natya-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-natya-gold group-hover:scale-110 group-hover:bg-natya-gold group-hover:text-black transition-all duration-500">
                                        <point.icon strokeWidth={1.5} className="w-7 h-7" />
                                    </div>

                                    <h4 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-natya-gold transition-colors">{point.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{point.desc}</p>
                                </div>

                                {/* Watermark Number */}
                                <div className="absolute -bottom-4 -right-4 text-8xl font-serif font-bold text-white/[0.02] group-hover:text-natya-gold/[0.05] transition-colors select-none pointer-events-none">
                                    0{i + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Enrollment CTA Section */}
            <section className="py-40 border-t border-white/5 bg-[#020202] relative overflow-hidden text-center z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Award className="w-20 h-20 text-natya-gold mx-auto mb-12" strokeWidth={0.5} />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Enroll in Our <span className="text-natya-gold italic">Classical Programs</span></h2>
                        <p className="text-gray-500 font-sans font-light text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                            Embark on your artistic journey today. Our admissions are currently open for the upcoming academic session.
                        </p>
                        <Link href="/contact">
                            <button className="px-12 py-5 border border-natya-gold text-natya-gold hover:bg-natya-gold hover:text-black transition-all duration-500 uppercase tracking-[0.3em] font-bold text-sm bg-transparent">
                                Enquire Now
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
