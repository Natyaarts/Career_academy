'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Loader2, Calendar, User, ArrowLeft, Facebook, Twitter, Link as LinkIcon, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    content: string;
    featured_image: string | null;
    author_name: string;
    author_avatar: string | null;
    published_date: string;
}

export default function BlogPostDetail() {
    const params = useParams();
    const slug = params.slug as string;

    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!slug) return;

        const defaultApi = typeof window !== 'undefined' && window.location.hostname === 'localhost'
            ? 'http://127.0.0.1:8000'
            : '';
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || defaultApi;

        fetch(`${apiUrl}/api/blog/${slug}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Post not found');
                }
                return res.json();
            })
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching blog post:', err);
                setLoading(false);
            });
    }, [slug]);

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

    const handleCopyLink = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-natya-gold animate-spin" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white p-6">
                <h2 className="text-4xl font-serif font-bold mb-4">Article Not Found</h2>
                <p className="text-gray-400 font-sans mb-8">The blog post you are looking for does not exist or has been removed.</p>
                <Link href="/blog">
                    <button className="px-6 py-3 border border-natya-gold text-natya-gold hover:bg-natya-gold hover:text-black transition-all duration-300 uppercase tracking-widest font-sans text-xs font-bold bg-transparent">
                        Back to Blog
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#050505] text-white selection:bg-natya-gold selection:text-black font-serif overflow-hidden pb-32">
            
            {/* Top Bar Navigation */}
            <div className="container mx-auto px-6 pt-36 pb-8 relative z-20">
                <Link href="/blog" className="group flex items-center gap-3 text-gray-400 hover:text-natya-gold transition-colors font-sans text-xs uppercase tracking-widest font-bold">
                    <ArrowLeft size={16} className="transform group-hover:-translate-x-1.5 transition-transform" />
                    <span>Back to Chronicle</span>
                </Link>
            </div>

            {/* Editorial Header */}
            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 mb-12"
                >
                    <span className="text-natya-gold text-xs tracking-[0.4em] uppercase font-bold font-sans">
                        Art & Heritage
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white font-serif">
                        {post.title}
                    </h1>
                    
                    {/* Metadata bar */}
                    <div className="flex items-center justify-center gap-8 pt-4 border-y border-white/5 py-4 max-w-lg mx-auto text-xs text-gray-400 font-sans tracking-wide">
                        <div className="flex items-center gap-2">
                            <User size={14} className="text-natya-gold" />
                            <span className="text-white font-bold">{post.author_name}</span>
                        </div>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-natya-gold" />
                            <span>{formatDate(post.published_date)}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Framed Feature Image Banner */}
            <div className="container mx-auto px-6 max-w-5xl mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="relative aspect-[21/9] bg-[#0A0A0A] border border-white/10 p-2 md:p-4 rounded-3xl shadow-2xl overflow-hidden group"
                >
                    {/* Gold corner accents inside frame */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-natya-gold/30 group-hover:border-natya-gold transition-colors duration-500" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-natya-gold/30 group-hover:border-natya-gold transition-colors duration-500" />

                    <div className="w-full h-full relative overflow-hidden rounded-2xl">
                        <img
                            src={getImageUrl(post.featured_image)}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </motion.div>
            </div>

            {/* Editorial Body Content */}
            <div className="container mx-auto px-6 max-w-3xl relative z-10 flex flex-col md:flex-row gap-12">
                
                {/* Left Side: Share Tools */}
                <div className="md:w-12 flex md:flex-col items-center gap-4 py-4 md:sticky md:top-32 h-fit border-b md:border-b-0 md:border-r border-white/5 pb-6 md:pb-0 md:pr-6">
                    <span className="text-gray-500 font-sans text-[10px] uppercase tracking-widest md:rotate-270 md:mb-8 md:whitespace-nowrap">Share</span>
                    <button 
                        onClick={handleCopyLink} 
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-natya-gold hover:border-natya-gold hover:text-black text-gray-400 transition-all cursor-pointer relative group bg-transparent"
                    >
                        <LinkIcon size={16} />
                        {copied && (
                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-natya-gold text-black text-[10px] uppercase font-bold py-1 px-2 rounded tracking-widest whitespace-nowrap shadow-md">
                                Copied!
                            </span>
                        )}
                    </button>
                    <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-natya-gold hover:border-natya-gold hover:text-black text-gray-400 transition-all"
                    >
                        <Facebook size={16} />
                    </a>
                    <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-natya-gold hover:border-natya-gold hover:text-black text-gray-400 transition-all"
                    >
                        <Twitter size={16} />
                    </a>
                </div>

                {/* Right Side: Article Body Text */}
                <div className="flex-1 min-w-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-sans font-light text-base md:text-lg text-gray-300 leading-relaxed space-y-8"
                    >
                        <div 
                            dangerouslySetInnerHTML={{ __html: post.content }} 
                            className="blog-content-html"
                        />
                    </motion.div>
                </div>

            </div>

        </section>
    );
}
