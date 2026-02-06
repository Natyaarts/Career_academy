'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section ref={ref} className="py-32 bg-[#fff9f5] overflow-hidden relative">
            {/* Dynamic Background Pattern */}
            <motion.div
                style={{ rotate }}
                className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] opacity-[0.03] pointer-events-none"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#881337" d="M44.5,-76.4C58.9,-69.7,71.8,-59.1,82.4,-46.9C93,-34.7,101.3,-20.9,100.9,-7.3C100.5,6.3,91.5,19.7,80.7,30.8C69.9,41.9,57.3,50.7,46.1,59.3C34.9,67.9,25.1,76.3,13.8,79.8C2.5,83.3,-10.3,81.9,-22.3,77.3C-34.3,72.7,-45.5,64.9,-55.5,55.3C-65.5,45.7,-74.3,34.3,-79.8,21.1C-85.3,7.9,-87.5,-7.1,-82.9,-19.8C-78.3,-32.5,-66.9,-42.9,-54.6,-50.2C-42.3,-57.5,-29.1,-61.7,-16.4,-64.8C-3.7,-67.9,8.5,-69.9,20.7,-70.9C32.9,-71.9,45.1,-71.9,44.5,-76.4Z" transform="translate(100 100)" />
                </svg>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Images Section - Editorial Layering */}
                    <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-center justify-center">
                        {/* Back Image */}
                        <motion.div
                            style={{ y: y1 }}
                            className="absolute top-0 right-10 w-3/4 h-[80%] z-10"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl">
                                <Image
                                    src="/assets/about-img.png"
                                    alt="Classical Dance Class"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Front Image (Overlay) */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute bottom-0 left-10 w-2/3 h-[60%] z-20"
                        >
                            <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl border-4 border-white">
                                <Image
                                    src="/assets/program-mudra.png"
                                    alt="Detailed Mudra"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Gold Accent Box */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-natya-gold z-30" />
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-10 pl-0 lg:pl-10">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold tracking-[0.3em] text-natya-gold uppercase mb-4 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-natya-gold" /> About Natya
                            </h2>

                            <h3 className="text-4xl md:text-8xl font-serif font-bold text-gray-200 leading-[0.9] overflow-hidden">
                                <motion.span
                                    className="block"
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                >
                                    Nurturing
                                </motion.span>
                                <motion.span
                                    className="block text-transparent bg-clip-text bg-gradient-to-r from-natya-gold to-yellow-600 italic lg:ml-20 pb-2"
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                                >
                                    The Soul
                                </motion.span>
                                <motion.span
                                    className="block lg:ml-40"
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                                >
                                    Of Art.
                                </motion.span>
                            </h3>
                        </motion.div>

                        <motion.p
                            className="text-gray-600 leading-loose text-lg font-light text-justify border-l-2 border-natya-gold/30 pl-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <span className="text-2xl font-serif text-natya-gold mr-1">"</span>
                            Natya Career Academy is a premier institution dedicated to nurturing the next generation of performing artists with a global vision. Founded with a passion for preserving and promoting India’s rich classical arts heritage, Natya offers structured training.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div>
                                <h4 className="text-4xl font-serif font-bold text-natya-crimson mb-2">12+</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Years of Legacy</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-serif font-bold text-natya-crimson mb-2">100%</h4>
                                <p className="text-xs uppercase tracking-widest text-gray-500">Student Success</p>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-gray-900 text-white overflow-hidden rounded-sm"
                        >
                            <span className="relative z-10 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                Discover Our Story <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </span>
                            <div className="absolute inset-0 bg-natya-crimson transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
