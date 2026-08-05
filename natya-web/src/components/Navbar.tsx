'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/course' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Affiliated', href: '/affiliated' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent',
                    isScrolled
                        ? 'bg-transparent py-3 shadow-none'
                        : 'bg-transparent py-6'
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="group relative z-50 block">
                        <div className="relative w-48 h-20 md:w-80 md:h-36 -my-4 md:-my-8">
                             {/* INDEPENDENCE DAY THEME START: Premium Realistic Waving Silk Flag Image inside logo container */}
                             <div style={{ position: 'absolute' }} className="top-[2px] left-[4px] md:top-[0px] md:left-[6px] select-none pointer-events-none z-0 w-[210px] md:w-[360px] h-[101px] md:h-[173px] overflow-visible drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]">
                                 <style>{`
                                     @keyframes flagRipple {
                                         0% { transform: translateY(0px) skewY(0deg); }
                                         50% { transform: translateY(-2px) skewY(-0.8deg); }
                                         100% { transform: translateY(0px) skewY(0deg); }
                                     }
                                     .animate-flag-ripple {
                                         animation: flagRipple 4.5s ease-in-out infinite;
                                     }
                                 `}</style>
                                 <Image
                                     src="/img/waving_indian_flag_ribbon_v3.png"
                                     alt="Waving Indian Flag"
                                     fill
                                     className="object-contain animate-flag-ripple [filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.65))]"
                                 />
                             </div>

                            <Image
                                src="/img/logo.png"
                                alt="Natya Logo"
                                fill
                                className="object-contain transition-all duration-300 [filter:drop-shadow(0_1px_4px_rgba(255,255,255,0.4))]"
                            />
                            {/* Backlighting Glow behind Logo to pop dark text */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FF9933]/15 via-white/20 to-[#128807]/15 blur-xl rounded-full scale-95 pointer-events-none select-none" />
                            {/* INDEPENDENCE DAY THEME END */}
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    'text-sm font-medium transition-all duration-300 relative group tracking-wide uppercase text-[11px]',
                                    pathname === item.href
                                        ? 'text-natya-gold'
                                        : 'text-gray-200 hover:text-white'
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-[1px] bg-natya-gold transition-all duration-300 group-hover:w-full",
                                    pathname === item.href ? "w-full" : ""
                                )} />
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={cn(
                                "px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border",
                                isScrolled
                                    ? "bg-natya-crimson text-white border-natya-crimson hover:bg-natya-crimson/90"
                                    : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-natya-crimson backdrop-blur-sm"
                            )}
                        >
                            Enquire Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "md:hidden p-2 z-50 transition-colors",
                            isScrolled ? "text-gray-900" : "text-white"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-natya-crimson/95 backdrop-blur-3xl md:hidden flex items-center justify-center"
                    >
                        <motion.div
                            className="flex flex-col space-y-8 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-serif font-bold text-white hover:text-natya-gold transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-8">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-8 py-4 rounded-full bg-white text-natya-crimson font-bold text-sm uppercase tracking-widest hover:bg-natya-gold hover:text-white transition-colors"
                                >
                                    Enquire Now
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
