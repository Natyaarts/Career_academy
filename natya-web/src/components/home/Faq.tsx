'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: "Which is the best dance institute near me for diploma courses?",
        a: "Natya Career Academy in Nadakkave, Kozhikode is a leading Performing Arts Institute in Kerala offering certified Dance Diploma courses both offline and online."
    },
    {
        q: "Are online classical dance diploma courses available?",
        a: "Yes, we offer live interactive online batches for our Indian classical dance diploma course and classical dance PG programs for students globally."
    }
];

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
    }))
};

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-natya-crimson/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-natya-gold via-yellow-200 to-natya-gold">FAQs</span>
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`bg-white/5 border rounded-3xl backdrop-blur-sm transition-colors duration-300 ${
                                    isOpen ? 'border-natya-gold/40' : 'border-white/10 hover:border-white/20'
                                }`}
                            >
                                <h3>
                                    <button
                                        type="button"
                                        id={`faq-question-${i}`}
                                        aria-expanded={isOpen}
                                        aria-controls={`faq-answer-${i}`}
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="w-full flex items-center justify-between gap-6 text-left p-6 md:p-8"
                                    >
                                        <span className="text-lg md:text-2xl font-bold text-natya-gold">{faq.q}</span>
                                        <ChevronDown
                                            className={`w-6 h-6 shrink-0 text-natya-gold transition-transform duration-300 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                </h3>

                                {/* Answer stays in the DOM (good for SEO); it is only collapsed visually */}
                                <div
                                    id={`faq-answer-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-question-${i}`}
                                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 md:px-8 pb-6 md:pb-8 text-white/70 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}