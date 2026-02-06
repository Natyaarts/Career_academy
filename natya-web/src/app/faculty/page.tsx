'use client';

import { motion } from 'framer-motion';
import { Award, Star, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FacultyMember {
    id: number;
    name: string;
    role: string;
    specialty: string;
    years_experience: string;
    bio: string;
    image: string | null;
}

export default function Faculty() {
    const [faculty, setFaculty] = useState<FacultyMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Automatically use relative path in production, or localhost:8000 in dev
        const defaultApi = typeof window !== 'undefined' && window.location.hostname === 'localhost'
            ? 'http://127.0.0.1:8000'
            : '';
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApi;

        fetch(`${apiUrl}/api/faculty/`)
            .then(res => res.json())
            .then(data => {
                setFaculty(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching faculty:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-natya-gold animate-spin" />
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#050505] text-white selection:bg-natya-gold selection:text-black font-serif overflow-hidden">

            {/* Elegant Header */}
            <div className="relative pt-40 pb-32 border-b border-white/5">
                <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="text-natya-gold text-xs tracking-[0.5em] uppercase font-bold mb-8 block">The Master's Circle</span>
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12">
                            Royal <span className="text-natya-gold italic">Faculty</span>
                        </h1>
                        <div className="max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-natya-gold/50 to-transparent mb-12" />
                        <p className="text-gray-400 font-sans font-extralight text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed italic">
                            "Art is the signature of civilization. Our masters ensure that signature remains golden, pure, and eternal."
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Archive */}
            <div className="container mx-auto px-6 py-40">
                {faculty.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 font-sans italic text-xl">No faculty members found. Add them from the admin panel.</p>
                    </div>
                ) : (
                    <div className="space-y-64">
                        {faculty.map((member, i) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32`}
                            >
                                {/* The "Framed" Portrait */}
                                <div className="w-full lg:w-1/2 group">
                                    <div className="relative aspect-[4/5] bg-[#0a0a0a] border border-white/10 p-4 md:p-8 transition-all duration-700 hover:border-natya-gold/40">
                                        {/* Gold Corner Accents */}
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-natya-gold opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-natya-gold opacity-0 group-hover:opacity-100 transition-all duration-700" />

                                        <div className="w-full h-full bg-[#111] bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-natya-gold/5 to-transparent" />

                                            {/* Previous Design: Letter & Star */}
                                            <div className="text-center relative z-10">
                                                <span className="text-natya-gold text-[120px] md:text-[180px] font-bold opacity-10 group-hover:opacity-20 transition-all duration-700">
                                                    {member.name.split(' ').pop()?.[0]}
                                                </span>
                                                <div className="absolute inset-0 flex items-center justify-center translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                                    <Star className="w-12 h-12 text-natya-gold" strokeWidth={1} />
                                                </div>
                                            </div>

                                            {/* Dynamic Image from Backend */}
                                            {member.image && (
                                                <div className="absolute inset-0 z-20">
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="absolute -bottom-10 left-10 right-10 bg-[#050505] border border-white/5 py-6 px-8 text-center shadow-2xl">
                                            <p className="text-natya-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-1">{member.role}</p>
                                            <p className="text-white text-sm font-sans font-light tracking-wide">{member.specialty}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* The Detail Section */}
                                <div className="w-full lg:w-1/2 space-y-12">
                                    <div className="space-y-4">
                                        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{member.name}</h3>
                                        <div className="flex items-center gap-6">
                                            <div className="h-[2px] w-12 bg-natya-gold" />
                                            <span className="text-natya-gold font-sans font-bold uppercase tracking-[0.2em] text-xs transition-all hover:tracking-[0.4em] duration-300 cursor-default">
                                                Established Guru — {member.years_experience}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-xl md:text-2xl text-gray-400 font-sans font-light leading-relaxed">
                                        {member.bio}
                                    </p>

                                    <div className="pt-8 flex gap-8">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-white font-bold text-xs uppercase tracking-widest">Heritage</span>
                                            <span className="text-gray-500 font-sans text-sm">Traditional Lineage</span>
                                        </div>
                                        <div className="w-[1px] h-12 bg-white/10" />
                                        <div className="flex flex-col gap-2">
                                            <span className="text-white font-bold text-xs uppercase tracking-widest">Focus</span>
                                            <span className="text-gray-500 font-sans text-sm">Soulful Mastery</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Grand Finale Section */}
            <section className="py-40 border-t border-white/5 bg-[#020202] relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Award className="w-20 h-20 text-natya-gold mx-auto mb-12" strokeWidth={0.5} />
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Join The <span className="text-natya-gold italic">Grand Academy</span></h2>
                        <p className="text-gray-500 font-sans font-light text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                            Step into a legacy of artistic excellence. Our enrollment remains exclusive for those who seek the highest form of discipline.
                        </p>
                        <Link href="/contact">
                            <button className="px-12 py-5 border border-natya-gold text-natya-gold hover:bg-natya-gold hover:text-black transition-all duration-500 uppercase tracking-[0.3em] font-bold text-sm bg-transparent">
                                Inquire for Admission
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </section>
    );
}
