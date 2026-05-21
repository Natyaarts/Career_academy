'use client';

import { motion } from 'framer-motion';
import { Loader2, Calendar, User, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    featured_image: string | null;
    author_name: string;
    author_avatar: string | null;
    published_date: string;
}

export default function BlogList() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const defaultApi = typeof window !== 'undefined' && window.location.hostname === 'localhost'
            ? 'http://127.0.0.1:8000'
            : '';
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApi;

        fetch(`${apiUrl}/api/blog/`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blog posts:', err);
                setLoading(false);
            });
    }, []);

    const getImageUrl = (url: string | null) => {
        if (!url) return 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop';
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        const defaultApi = typeof window !== 'undefined' && window.location.hostname === 'localhost'
            ? 'http://127.0.0.1:8000'
            : '';
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApi;
        return `${apiUrl}${url.startsWith('/') ? '' : '/'}${url}`;
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-natya-gold animate-spin" />
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#050505] text-white selection:bg-natya-gold selection:text-black font-serif overflow-hidden">
            {/* Header section with radial background */}
            <div className="relative pt-40 pb-24 border-b border-white/5 bg-[#020202]">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-natya-gold/5 via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20" />
                
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="text-natya-gold text-xs tracking-[0.5em] uppercase font-bold mb-6 block">Insights & Wisdom</span>
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tight mb-8">
                            The Academy <span className="text-natya-gold italic">Chronicle</span>
                        </h1>
                        <div className="max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-natya-gold/50 to-transparent mb-8" />
                        <p className="text-gray-400 font-sans font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Delve into stories, guidance, and historical deep-dives curated by our esteemed gurus and scholars of the classical arts.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Grid of posts */}
            <div className="container mx-auto px-6 py-24 relative z-10">
                {posts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 font-sans italic text-xl">No articles found. Add them from the admin panel.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group flex flex-col h-full bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-natya-gold/30 hover:bg-[#0F0F0F] transition-all duration-500 hover:-translate-y-2 shadow-2xl relative"
                            >
                                {/* Gold Corner Accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-natya-gold/0 group-hover:border-natya-gold/40 transition-all duration-500" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-natya-gold/0 group-hover:border-natya-gold/40 transition-all duration-500" />

                                {/* Featured Image */}
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-black">
                                    <img
                                        src={getImageUrl(post.featured_image)}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 saturate-50 group-hover:saturate-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-65" />
                                </Link>

                                {/* Content Details */}
                                <div className="p-8 flex flex-col flex-1 space-y-6">
                                    {/* Author & Date Metadata */}
                                    <div className="flex items-center justify-between text-xs text-natya-gold/70 font-sans tracking-wide">
                                        <div className="flex items-center gap-2">
                                            <User size={14} className="text-natya-gold" />
                                            <span>{post.author_name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} className="text-natya-gold" />
                                            <span>{formatDate(post.published_date)}</span>
                                        </div>
                                    </div>

                                    {/* Title & Short Description */}
                                    <div className="space-y-4 flex-1">
                                        <Link href={`/blog/${post.slug}`} className="block group/title">
                                            <h2 className="text-2xl font-serif font-bold text-white group-hover/title:text-natya-gold transition-colors duration-300 leading-snug">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <p className="text-gray-400 font-sans font-light text-sm leading-relaxed line-clamp-3">
                                            {post.short_description}
                                        </p>
                                    </div>

                                    {/* Footer Arrow Link */}
                                    <div className="pt-4 border-t border-white/5">
                                        <Link href={`/blog/${post.slug}`} className="group/btn flex items-center gap-3 text-white hover:text-natya-gold transition-colors font-sans text-xs uppercase tracking-widest font-bold">
                                            <span>Read Article</span>
                                            <ArrowRight size={14} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>

        </section>
    );
}
