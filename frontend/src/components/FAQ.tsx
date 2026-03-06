import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

import { Link } from 'react-router-dom';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
    subtitle?: string;
    className?: string;
    dark?: boolean;
    showLabel?: boolean;
    footerLinkText?: string;
    footerLinkHref?: string;
}

const FAQ = ({ 
    items, 
    title,
    subtitle,
    className = "bg-white",
    dark = false,
    showLabel = false,
    footerLinkText,
    footerLinkHref
}: FAQProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className={`py-32 relative overflow-hidden ${className}`}>
            {dark && (
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            )}
            
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-20">
                    {showLabel && (
                        <span className={`text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block`}>Inquiry.Module // DEEP_DIVE</span>
                    )}
                    
                    <h2 className="flex flex-col items-center justify-center text-4xl md:text-7xl font-black tracking-tighter leading-tight mb-8">
                        {title ? (
                            <span className={dark ? 'text-white' : 'text-navy'}>{title}</span>
                        ) : (
                            <>
                                <span className={dark ? 'text-white' : 'text-navy'}>Frequently</span>
                                <span className="text-teal font-serif italic mt-[-0.1em]">Asked Questions.</span>
                            </>
                        )}
                    </h2>

                    {subtitle && (
                        <p className={`text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mt-8 ${dark ? 'text-white/40' : 'text-navy/40'}`}>
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="space-y-6">
                    {items.map((item, index) => (
                        <div 
                            key={index} 
                            className={`border rounded-[3rem] overflow-hidden transition-all duration-500 hover:scale-[1.01] ${
                                dark 
                                ? 'border-white/10 bg-white/5 hover:border-teal/30' 
                                : 'border-navy/5 bg-beige/5 hover:border-teal/30 shadow-xl shadow-navy/5'
                            }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-10 py-8 flex items-center justify-between text-left group"
                            >
                                <span className={`text-xl font-bold tracking-tight transition-colors ${
                                    activeIndex === index 
                                    ? 'text-teal' 
                                    : dark ? 'text-white' : 'text-navy'
                                }`}>
                                    {item.question}
                                </span>
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                    activeIndex === index 
                                    ? 'bg-teal text-white rotate-180 shadow-lg shadow-teal/20' 
                                    : dark ? 'bg-white/10 text-white/20 group-hover:bg-teal group-hover:text-white' : 'bg-white text-navy/20 group-hover:bg-navy group-hover:text-white shadow-md'
                                }`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className={`px-10 pb-10 text-lg font-medium leading-relaxed ${dark ? 'text-white/60' : 'text-navy/60'}`}>
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {footerLinkText && footerLinkHref && (
                    <div className="mt-20 text-center">
                        <Link 
                            to={footerLinkHref}
                            className={`inline-flex items-center px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all ${
                                dark 
                                ? 'bg-white text-navy hover:bg-teal hover:text-white' 
                                : 'bg-navy text-white hover:bg-teal'
                            } shadow-2xl hover:-translate-y-1`}
                        >
                            {footerLinkText}
                        </Link>
                    </div>
                )}
            </div>

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </section>
    );
};

export default FAQ;
