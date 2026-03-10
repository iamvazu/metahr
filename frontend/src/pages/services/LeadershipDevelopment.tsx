import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../../components/FAQ';
import ScrollIndicator from '../../components/ScrollIndicator';

const LeadershipDevelopment = () => {
    return (
        <div className="relative overflow-x-hidden pt-0 bg-white">

            {/* Hero Section */}
            <section className="bg-navy relative overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-24 text-white">
                <div className="absolute inset-0 z-0">
                    <img src="/leadership_development_abstract.png" alt="" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-navy/50"></div>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Service // Leadership_Development</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        Develop Leaders Who <br />
                        <motion.span
                            className="font-serif italic font-bold text-skyBlue drop-shadow-[0_0_10px_rgba(200,217,230,0.8)] leading-tight inline-block"
                            animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        >
                            Drive Strategic Impact
                        </motion.span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
                        Grounded in The Leadership Challenge, we develop leaders who model values, inspire a shared vision, challenge the process, enable others to act, and encourage the heart.
                    </p>
                </div>
                <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20" color="white" />
                
                {/* Decorative Laser Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>




            {/* Main Content */}
            <section className="py-24 bg-beige/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-navy/5 relative overflow-hidden mb-20">
                        {/* Decorative image placeholder */}
                        <div className="w-full h-80 rounded-[3rem] overflow-hidden mb-12 shadow-xl bg-navy/5 relative border border-navy/5">
                            <span className="absolute top-4 left-6 z-10 px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">Protocol_Visual // COLLABORATION</span>
                            <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1600" alt="Executive team in Mumbai office undergoing leadership development workshop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 tracking-tighter">But leadership today requires more than inspiration <span className="text-teal font-serif italic">— it requires execution.</span></h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-10">Our methodology integrates globally recognized frameworks:</p>

                        <ul className="space-y-6 mb-12">
                            {[
                                "Everything DiSC Work of Leaders to help leaders craft vision, build alignment, and champion execution",
                                "Strengths-Based Leadership powered by Gallup to amplify natural talent and increase leadership effectiveness",
                                "High-Impact Performance Labs using experiential learning with MTa Insights to translate insight into real-world behavioral change"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-4 bg-beige/30 p-6 rounded-3xl border border-navy/5">
                                    <div className="w-6 h-6 mt-1 rounded-full bg-teal text-white flex items-center justify-center shrink-0">
                                        <CheckCircle size={14} />
                                    </div>
                                    <span className="text-navy font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-xl text-navy/70 leading-relaxed font-light mb-16 border-l-4 border-teal pl-6 py-2">
                            Through immersive workshops, executive dialogue, assessment-driven insight, and structured follow-through, we build leaders who move strategy forward — not just manage tasks.
                        </p>

                        <div className="bg-navy text-white rounded-[3rem] p-10 md:p-16 relative shadow-3xl overflow-hidden ring-1 ring-white/10">
                            {/* Decorative image placeholder inside outcomes */}
                            <div className="absolute right-0 top-0 w-1/3 h-full mix-blend-overlay opacity-20 hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Strategy Planning" className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-2xl md:text-4xl font-black mb-10 tracking-tight">Measurable Outcomes:</h3>
                            <div className="grid md:grid-cols-2 gap-6 relative z-10 text-sm md:text-base">
                                {[
                                    "Greater strategic clarity and direction",
                                    "Stronger alignment across functions",
                                    "Improved decision-making under pressure",
                                    "Higher ownership and accountability",
                                    "Measurable improvement in leadership effectiveness"
                                ].map((outcome, i) => (
                                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center space-x-4 font-bold tracking-tight text-white/90">
                                        <div className="text-teal"><CheckCircle size={20} /></div>
                                        <span>{outcome}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <FAQ items={[
                        {
                            question: "What leadership frameworks do you utilize?",
                            answer: "Our programs are grounded in 'The Leadership Challenge' by Kouzes and Posner that demonstrates the five exemplary leadership practices, and integrated with psychometric tools like LPI, CliftonStrengths, DiSC Work of Leaders and Hogan for a holistic development experience."
                        },
                        {
                            question: "Are your leadership programs suitable for CEO's and C-Suite executives?",
                            answer: "Absolutely. Our programs offer high-level leadership development programs, executive coaching and organizational strategy workshops specifically designed for the unique challenges of senior leadership in large-scale enterprises."
                        },
                        {
                            question: "How do you ensure the ROI of your programs?",
                            answer: "We track 'Level 3 & 4' impact using pre-and-post behavior audits, peer feedback loops, and business KPI tracking to provide quantitative evidence of measurable leadership improvement and business performance shifts."
                        }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto py-12">
                        <p className="text-2xl text-navy/60 font-medium leading-relaxed mb-6">
                            At MetaHR, leadership development isn’t a one-day event. <br />
                            <span className="text-navy font-black">It’s a performance system designed for sustained impact.</span>
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-10 tracking-tighter">
                            Leadership Isn’t Optional. <br /><span className="text-teal font-serif italic">High Performance Isn’t Accidental.</span>
                        </h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-12">
                            If your leaders aren’t aligned, your strategy will stall.<br />
                            Let’s build leadership capability that drives measurable business impact.
                        </p>

                        <Link to="/contact" className="inline-flex items-center justify-center space-x-4 bg-teal text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-navy hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                            <span>Get Started With Strategy</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};


export default LeadershipDevelopment;
