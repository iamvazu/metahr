import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadershipDevelopment = () => {
    return (
        <div className="bg-white pt-0">
            {/* Hero Section */}
            <section className="bg-navy pt-40 pb-24 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Service // Leadership_Development</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        Develop Leaders Who <br /><span className="font-serif italic text-teal">Drive Strategic Impact</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
                        Grounded in The Leadership Challenge, we develop leaders who model values, inspire a shared vision, challenge the process, enable others to act, and encourage the heart.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-beige/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-navy/5 relative overflow-hidden mb-20">
                        {/* Decorative image placeholder */}
                        <div className="w-full h-80 rounded-[3rem] overflow-hidden mb-12 shadow-xl bg-navy/5 relative">
                            <span className="absolute top-4 left-6 z-10 px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">Image Placement Area</span>
                            <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1600" alt="Leadership Meeting" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 tracking-tighter">But leadership today requires more than inspiration <span className="text-teal font-serif italic">— it requires execution.</span></h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-10">We integrate:</p>

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
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Strategy" className="w-full h-full object-cover" />
                            </div>

                            <h3 className="text-2xl md:text-4xl font-black mb-10 tracking-tight">Outcomes You Can Expect:</h3>
                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
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

                        <Link to="/contact" className="inline-flex items-center space-x-4 bg-teal text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-navy hover:-translate-y-1 transition-all duration-300">
                            <span>Schedule a Leadership Strategy Conversation</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default LeadershipDevelopment;
