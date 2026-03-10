import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FAQ from '../components/FAQ';
import ScrollIndicator from '../components/ScrollIndicator';


const FAQPage = () => {
    const faqItems = [
        {
            question: "What makes MetaHR different from other HR consultancies in India?",
            answer: "MetaHR combines globally recognized methodologies and tools with a deep understanding of Indian corporate culture. Our solutions are highly customizable and designed to deliver Level 3 & 4 impact—focusing on measurable behavior change and tangible business ROI, not just training satisfaction."
        },
        {
            question: "What is MetaHR's Core Methodology?",
            answer: "Our methodology follows a Diagnose – Design – Deliver – Measure – Reinforce loop. We combine this with globally benchmarked adult learning practices to ensure our programs are practical, relevant, and drive measurable improvements in leadership effectiveness and business performance."
        },
        {
            question: "How long does a typical leadership development intervention take?",
            answer: "While standard development journey interventions range from 3 to 12 months, depending on the organizational scope, we believe transformation isn't an event, but a sustained process involving assessment, workshops, and ongoing reinforcement coaching."
        },
        {
            question: "Which Industries do you serve?",
            answer: "MetaHR partners with mid-size organizations and large enterprises across industries where leadership capability and organizational effectiveness are critical to performance. Our experience spans Technology, Manufacturing, Financial Services, Consulting, Global Capability Centers (GCCs), and high-growth organizations."
        },
        {
            question: "Do you offer services across India?",
            answer: "Yes, we serve top-tier enterprises and global captive centers (GCCs) in major hubs including Mumbai, Bangalore, Delhi NCR, Hyderabad, Pune, and Chennai."
        },
        {
            question: "What tools do you use for leadership assessment?",
            answer: "We are certified practitioners of CliftonStrengths, Everything DiSC, Leadership Preference Index (LPI) and Hogan Assessments. We select the tool that best aligns with your specific organizational goals."
        },
        {
            question: "How do you ensure the ROI of your programs?",
            answer: "We use a multi-phase framework that includes pre-assessment benchmarking, defined KPIs (such as turnover, decision speed, and engagement scores), and 180°/360° and post-intervention assessments to clearly measure 'Level 3 & 4' business impact."
        },
        {
            question: "Can these programs be delivered virtually?",
            answer: "Absolutely. We utilize high-engagement digital platforms and virtual simulations to ensure that remote and hybrid teams receive the same high-impact development and behavioral depth as in-person cohorts."
        },
        {
            question: "How do I get started with MetaHR?",
            answer: "Simply book a free 30-minute discovery call via our website. We'll discuss your organization's current business reality and identify potential leverage points for performance improvement."
        }
    ];

    return (
        <div className="relative overflow-x-hidden pt-0 bg-white">
            {/* Hero Section */}
            <section className="bg-navy relative overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-24">

                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <img src="/faq_hero_bg.png" alt="" className="w-full h-full object-cover opacity-20 scale-105" />
                    <div className="absolute inset-0 bg-navy/60 z-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Support // INTELLIGENCE_BASE</span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black !text-white mb-8 tracking-tighter leading-tight">
                            Frequently <br />
                            <span className="text-skyBlue font-serif italic text-gradient uppercase block mt-2">Asked Questions.</span>
                        </h1>

                        <p className="text-xl text-beige/60 font-light max-w-2xl mx-auto leading-relaxed">
                            Find answers to common inquiries about our methodologies, delivery systems, and measurable impact models.
                        </p>
                    </motion.div>
                </div>

                <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20" color="white" />
                
                {/* Decorative Laser Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <FAQ items={faqItems} title="MetaHR Operations & Philosophy" />
            </motion.div>

            {/* Support CTA */}
            <section className="pb-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto bg-navy rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-3xl group">
                        {/* Background Detail */}
                        <div className="absolute inset-0 z-0">
                            <img src="/business_reality_quote_bg.png" alt="" className="w-full h-full object-cover opacity-10 grayscale group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-navy/60"></div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                                Still have a <br />
                                <span className="text-skyBlue font-serif italic lowercase tracking-normal text-4xl md:text-6xl mt-2 block">specific question?</span>
                            </h2>

                            <p className="text-beige/60 mb-16 max-w-xl mx-auto font-light text-lg leading-relaxed">
                                Our consultants are ready to discuss your specific organizational challenges and how our frameworks can be adapted to your reality.
                            </p>
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center justify-center space-x-6 bg-teal text-white px-12 py-7 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-navy transition-all shadow-2xl active:scale-95 group/btn"
                            >
                                <span>Book a Strategy Call</span>
                                <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FAQPage;
