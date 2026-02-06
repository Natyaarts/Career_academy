import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="inline-block relative w-64 h-24">
                            <Image
                                src="/img/logo.png"
                                alt="Natya Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Natya Career Academy stands as a beacon for classical arts, providing professional training that honors tradition while embracing the future.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="https://www.facebook.com/natyaartslearning/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-natya-gold hover:border-natya-gold hover:text-black transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/natyaartslearning/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-natya-gold hover:border-natya-gold hover:text-black transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="https://x.com/natyalearning?lang=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-natya-gold hover:border-natya-gold hover:text-black transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2 md:col-start-7">
                        <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-natya-gold">Programs</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/course" className="hover:text-white transition-colors">Short term course</Link></li>
                            <li><Link href="/course" className="hover:text-white transition-colors">Diploma course</Link></li>
                            <li><Link href="/course" className="hover:text-white transition-colors">Degree course</Link></li>
                            <li><Link href="/course" className="hover:text-white transition-colors">Masters course</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-natya-gold">Academy</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/faculty" className="hover:text-white transition-colors">Faculty</Link></li>
                            <li><Link href="/affiliated" className="hover:text-white transition-colors">Affiliations</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-natya-gold">Visit Us</h4>
                        <address className="not-italic text-gray-400 text-sm space-y-4">
                            <p>SG Arcade, KT Gopalan Rd,<br />Kottooli, Kozhikode, Kerala 673016</p>
                            <p className="text-white">+91 755 986 1455</p>
                            <p className="text-white">info@natyacareer.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
                    <p>&copy; {new Date().getFullYear()} Natya Career Academy. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
