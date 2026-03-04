import { motion } from 'framer-motion';
import FAQ from '../components/FAQ';

const FAQPage = () => {
    const faqItems = [
        {
            question: "What is MetaHR's core methodology?",
            answer: "Our methodology is centered on the 'Diagnose-Design-Deliver-Measure-Reinforce' loop. We leverage globally benchmarked wisdom from partners like The Leadership Challenge and Wiley to create custom, high-impact performance systems."
        },
        {
            question: "How long does a typical leadership development intervention take?",
            answer: "A standard intervention ranges from 3 to 12 months, depending on the organizational scope. We believe transformation isn't an event, but a sustained process involving assessment, workshops, and ongoing reinforcement coaching."
        },
        {
            question: "What tools do you use for leadership assessment?",
            answer: "We are certified practitioners of Everything DiSC, The Five Behaviors of a Cohesive Team, Hogan Assessments, and CliftonStrengths. We select the tool that best aligns with your specific organizational goals."
        },
        {
            question: "Do you offer services across India?",
            answer: "Yes, we serve top-tier enterprises and global captive centers (GCCs) in major hubs including Mumbai, Bangalore, Delhi NCR, Hyderabad, Pune, and Chennai."
        },
        {
            question: "How do you ensure the ROI of your programs?",
            answer: "We track 'Level 3 & 4' impact using pre-and-post behavior audits, peer feedback loops, and business KPI tracking to provide quantitative evidence of cultural and performance shifts."
        },
        {
            question: "Can these programs be delivered virtually?",
            answer: "Absolutely. We utilize high-engagement interactive platforms for virtual facilitation, ensuring remote teams receive the same level of depth and behavioral impact as in-person groups."
        }
    ];

    return (
        <div className="bg-white pt-20">
            {/* Hero Section */}
            <section className="bg-navy pt-32 pb-20 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Support // INTELLIGENCE_BASE</span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Frequently <span className="text-teal font-serif italic">Asked Questions</span></h1>
                    <p className="text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
                        Find answers to common inquiries about our methodologies, delivery systems, and measurable impact models.
                    </p>
                </div>
            </section>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <FAQ items={faqItems} title="MetaHR Operations & Philosophy" />
            </motion.div>

            {/* Support CTA */}
            <section className="pb-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-3xl">
                        <div className="absolute inset-0 bg-teal/5 border-t border-white/10"></div>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight relative z-10">Still have a <span className="text-teal font-serif italic">specific question?</span></h2>
                        <p className="text-white/60 mb-12 max-w-xl mx-auto font-light leading-relaxed relative z-10">
                            Our consultants are ready to discuss your specific organizational challenges and how our frameworks can be adapted to your reality.
                        </p>
                        <a href="/contact" className="inline-block bg-teal text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-300 relative z-10">
                            Book a Strategy Call
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
