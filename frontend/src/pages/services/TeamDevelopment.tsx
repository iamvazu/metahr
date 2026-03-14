import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollIndicator from '../../components/ScrollIndicator';

const TeamDevelopment = () => {
    return (
        <div className="relative overflow-x-hidden pt-0 bg-white">
            {/* Hero Section */}
            <section className="bg-navy relative overflow-hidden min-h-screen flex flex-col justify-center pt-40 md:pt-32 pb-24 text-white">

                <div className="absolute inset-0 z-0">
                    <img src="/team_development_abstract.png" alt="" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-navy/50"></div>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Service // Team_Development</span>
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        Build Aligned, <br />
                        <motion.span
                            className="font-serif italic font-bold text-skyBlue drop-shadow-[0_0_10px_rgba(200,217,230,0.8)] leading-tight inline-block"
                            animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        >
                            High-Performing Teams
                        </motion.span>
                    </h1>
                    <p className="text-base md:text-2xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
                        Using The Five Behaviors of a Cohesive Team framework, we help teams build deep trust, engage in healthy conflict, commit to clear decisions, hold one another accountable, and focus relentlessly on collective results.
                    </p>
                </div>
                <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20" color="white" />
                
                {/* Decorative Laser Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>




            {/* Main Content */}
            <section className="py-24 bg-beige/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-navy/5 relative overflow-hidden mb-20">
                        {/* Decorative image placeholder */}
                        <div className="w-full h-80 rounded-[3rem] overflow-hidden mb-12 shadow-xl bg-navy/5 relative">
                            <span className="absolute top-4 left-6 z-10 px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">Image Placement Area</span>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" alt="Team Collaboration" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        </div>

                        <h2 className="text-2xl md:text-5xl font-black text-navy mb-8 tracking-tighter">
But we don’t stop <span className="text-teal font-serif italic">at theory.</span></h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-10">We integrate:</p>

                        <ul className="space-y-6 mb-12">
                            {[
                                "DiSC to improve communication, reduce friction, and strengthen collaboration",
                                "Strengths-based team coaching powered by Gallup insights to help individuals leverage their natural talents for team success"
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
                            Through facilitated dialogue, experiential learning, and structured accountability systems, we transform groups of individuals into aligned, high-performing teams.
                        </p>

                        <div className="bg-teal text-white rounded-[3rem] p-10 md:p-16 relative shadow-3xl overflow-hidden ring-1 ring-white/10">
                            {/* Decorative image placeholder inside outcomes */}
                            <div className="absolute left-0 bottom-0 w-1/3 h-full mix-blend-overlay opacity-30 hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Collaboration" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black mb-10 tracking-tight">Outcomes You Can Expect:</h3>
                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                {[
                                    "Increased trust and psychological safety",
                                    "Constructive conflict instead of avoidance",
                                    "Clearer decision-making and ownership",
                                    "Stronger cross-functional collaboration",
                                    "Measurable improvement in team performance"
                                ].map((outcome, i) => (
                                    <motion.div key={i} whileHover={{ x: 10 }} className="flex items-center space-x-4 font-bold tracking-tight text-white/90">
                                        <div className="text-white"><CheckCircle size={20} /></div>
                                        <span>{outcome}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center max-w-4xl mx-auto py-12">
                        <p className="text-2xl text-navy/60 font-medium leading-relaxed mb-6">
                            At MetaHR, we don’t just improve teamwork — <br />
                            <span className="text-navy font-black">we build teams that execute strategy with clarity and confidence.</span>
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-10 tracking-tighter">
                            Ready to Build a <span className="text-teal font-serif italic">High-Performing Team?</span>
                        </h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-12">
                            If your team isn’t aligned, your strategy won’t execute.<br />
                            Let’s design a team experience that drives trust, accountability, and measurable results.
                        </p>

                        <Link to="/contact" className="inline-flex items-center justify-center space-x-4 bg-navy text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-teal hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                            <span>Schedule a Strategy Conversation</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default TeamDevelopment;
