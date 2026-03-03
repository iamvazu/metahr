import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExecutiveCoaching = () => {
    return (
        <div className="bg-white pt-0">
            {/* Hero Section */}
            <section className="bg-navy pt-40 pb-24 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Service // Executive_Coaching</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        Unlock Leadership Potential <br /><span className="font-serif italic text-teal">at the Individual Level</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
                        Our executive coaching is data-driven, insight-rich, and performance-focused.
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
                            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600" alt="Executive Coaching" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        </div>

                        <p className="text-xl text-navy/70 leading-relaxed font-light mb-12 border-l-4 border-teal pl-6 py-2">
                            We integrate strengths-based development powered by Gallup with science-backed insights from Hogan Assessments to accelerate leadership growth at both conscious and unconscious levels.
                        </p>

                        <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 tracking-tighter">But insight alone doesn’t create transformation <span className="text-teal font-serif italic">— application does.</span></h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-10">Our coaching methodology includes:</p>

                        <ul className="space-y-6 mb-16">
                            {[
                                "Strengths-Based Coaching to amplify natural talent and increase confidence under pressure",
                                "Hogan personality insights to uncover derailers, motivators, and values",
                                "DiSC 363 for Leaders (a multi-rater behavioral feedback tool) to provide 360° insight into leadership impact and blind spots",
                                "Neuro-Linguistic Programming (NLP) techniques to shift mindset, strengthen influence, and improve executive presence"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start space-x-4 bg-beige/30 p-6 rounded-3xl border border-navy/5">
                                    <div className="w-6 h-6 mt-1 rounded-full bg-teal text-white flex items-center justify-center shrink-0">
                                        <CheckCircle size={14} />
                                    </div>
                                    <span className="text-navy font-medium leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-navy text-white rounded-[3rem] p-10 md:p-16 relative shadow-3xl overflow-hidden ring-1 ring-white/10">
                            {/* Decorative image placeholder inside outcomes */}
                            <div className="absolute right-0 top-0 w-1/3 h-full mix-blend-overlay opacity-20 hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" alt="Coaching" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-tight">Measurable Impact:</h3>
                            <p className="text-white/60 mb-10 font-light text-lg">Through structured goal-setting, behavioral experimentation, and measurable performance tracking, we help leaders:</p>
                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                {[
                                    "Increase strategic clarity",
                                    "Improve decision-making under pressure",
                                    "Strengthen stakeholder influence",
                                    "Enhance executive presence",
                                    "Sustain performance during growth and change"
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
                            This is not developmental coaching alone — <br />
                            <span className="text-navy font-black">it is performance acceleration aligned to business outcomes.</span>
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-10 tracking-tighter">
                            At MetaHR, executive coaching is where <br /><span className="text-teal font-serif italic">self-awareness meets execution.</span>
                        </h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-12">
                            High-performing organizations don’t leave leadership to chance.<br />
                            They invest in measurable growth.
                        </p>

                        <Link to="/contact" className="inline-flex items-center space-x-4 bg-teal text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-navy hover:-translate-y-1 transition-all duration-300">
                            <span>Book an Executive Coaching Consultation</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ExecutiveCoaching;
