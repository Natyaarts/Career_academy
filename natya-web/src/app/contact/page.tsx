'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Twitter, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile_number: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
            const response = await fetch(`${apiUrl}/api/contact-requests/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ first_name: '', last_name: '', email: '', mobile_number: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                const data = await response.json();
                setStatus('error');
                setErrorMessage(Object.values(data).flat().join(', ') || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage('Could not connect to the server. Please check if the backend is running.');
        }
    };

    return (
        <section className="relative min-h-screen text-white font-serif selection:bg-natya-gold selection:text-black">

            {/* Full Screen Map Background */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.986348633367!2d75.79549307489569!3d11.262174988916325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6596e00000001%3A0x6b40660600000000!2sKottooli%2C%20Kozhikode%2C%20Kerala%20673016!5e0!3m2!1sen!2sin!4v1709600000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale invert-[0.9] hue-rotate-180 contrast-[1.1] brightness-[0.4]"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex min-h-screen items-center justify-center lg:justify-end py-32">

                {/* floating "Estate Card" */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-lg bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 shadow-2xl rounded-none md:rounded-2xl"
                >
                    <div className="mb-10">
                        <span className="text-natya-gold text-xs tracking-[0.3em] uppercase font-bold mb-4 block font-sans">Reach Out</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
                        <p className="text-gray-400 font-sans font-light leading-relaxed">
                            Visit our campus or send us a digital inquiry. We are always open to aspiring artists.
                        </p>
                    </div>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-green-500/10 border border-green-500/20 p-8 text-center rounded-lg mb-6"
                        >
                            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-gray-400 font-sans text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-natya-gold text-xs uppercase tracking-widest font-bold hover:text-white transition-colors"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                            {status === 'error' && (
                                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-sm text-red-400 text-xs">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-6">
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-natya-gold focus:bg-white/10 outline-none transition-all rounded-sm"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-natya-gold focus:bg-white/10 outline-none transition-all rounded-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-natya-gold focus:bg-white/10 outline-none transition-all rounded-sm"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="mobile_number"
                                        value={formData.mobile_number}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-natya-gold focus:bg-white/10 outline-none transition-all rounded-sm"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 block font-bold">Message</label>
                                <textarea
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-natya-gold focus:bg-white/10 outline-none transition-all rounded-sm resize-none"
                                />
                            </div>

                            <button
                                disabled={status === 'loading'}
                                className="w-full bg-natya-gold text-black font-bold uppercase tracking-[0.2em] py-4 hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    )}

                    <div className="mt-12 pt-8 border-t border-white/10 font-sans">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-natya-gold shrink-0 mt-1" />
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    <span className="text-white font-bold block mb-1">Natya Career Academy</span>
                                    SG Arcade, KT Gopalan Rd, Kottooli, Kozhikode, Kerala 673016
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-natya-gold shrink-0 mt-1" />
                                <p className="text-white text-sm font-bold mt-1">+91 755 986 1455</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-natya-gold shrink-0 mt-1" />
                                <p className="text-white text-sm font-bold mt-1">info@natyacareer.com</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8 pt-8 border-t border-white/5">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-natya-gold hover:border-natya-gold transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
