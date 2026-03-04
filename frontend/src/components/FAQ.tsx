import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
}

const FAQ = ({ items, title = "Frequently Asked Questions" }: FAQProps) => {
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
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-4 block underline decoration-teal/30 underline-offset-8">Support // INTELLIGENCE_BASE</span>
                    <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tighter">{title}</h2>
                </div>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="border border-navy/5 rounded-[2rem] overflow-hidden bg-beige/5 hover:border-teal/30 transition-all">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg font-bold tracking-tight transition-colors ${activeIndex === index ? 'text-teal' : 'text-navy'}`}>
                                    {item.question}
                                </span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeIndex === index ? 'bg-navy text-white' : 'bg-white text-navy/20 group-hover:text-teal'}`}>
                                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <div className="px-8 pb-8 text-navy/60 font-medium leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </section>
    );
};

export default FAQ;
