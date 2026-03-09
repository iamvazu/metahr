import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Target, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollIndicator from '../../components/ScrollIndicator';

const OrganizationalEffectiveness = () => {
    return (
        <div className="relative overflow-x-hidden pt-0 bg-white">
            {/* Hero Section */}
            <section className="bg-navy relative overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-24 text-white">

                <div className="absolute inset-0 z-0">
                    <img src="/org_effectiveness_abstract.png" alt="" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-navy/50"></div>
                </div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Service // Organizational_Effectiveness</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-tight">
                        Align Strategy. Activate Culture. <br />
                        <motion.span
                            className="font-serif italic font-bold text-skyBlue drop-shadow-[0_0_10px_rgba(200,217,230,0.8)] leading-tight inline-block"
                            animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        >
                            Execute with Discipline.
                        </motion.span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 font-light max-w-4xl mx-auto leading-relaxed">
                        Strategy fails not because it is wrong — but because leadership behaviors, culture, and systems are misaligned.
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
                        <div className="w-full h-80 rounded-[3rem] overflow-hidden mb-12 shadow-xl bg-navy/5 relative">
                            <span className="absolute top-4 left-6 z-10 px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-[9px] font-mono font-bold tracking-widest uppercase rounded-full">Image Placement Area</span>
                            <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1600" alt="Organizational Alignment" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                        </div>

                        <p className="text-xl text-navy/70 leading-relaxed font-light mb-12 border-l-4 border-teal pl-6 py-2">
                            At MetaHR, we help organizations close the gap between intent and execution by aligning leadership capability, team dynamics, performance systems, and cultural behaviors with strategic priorities.
                        </p>

                        <h2 className="text-3xl md:text-5xl font-black text-navy mb-4 tracking-tighter">Organizational effectiveness is <span className="text-teal font-serif italic">not a workshop.</span></h2>
                        <p className="text-xl text-teal font-medium mb-16">It is an integrated transformation journey.</p>

                        <h3 className="text-2xl font-black uppercase text-navy/40 tracking-[0.3em] mb-12 border-b border-navy/10 pb-4">Our Approach</h3>

                        {/* Step 1 */}
                        <div className="mb-16">
                            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
                                <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-navy/20">
                                    <Target size={28} />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-navy tracking-tight">1. Strategic Alignment & Leadership Calibration</h4>
                            </div>
                            <p className="text-navy/60 leading-relaxed font-light text-lg mb-6">We work with senior leadership teams to clarify:</p>
                            <ul className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Strategic priorities and success metrics",
                                    "Role clarity and decision rights",
                                    "Leadership behaviors required to execute strategy",
                                    "Accountability structures across functions"
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-col bg-beige/30 p-6 rounded-3xl border border-navy/10">
                                        <div className="w-2 h-2 rounded-full bg-teal mb-3"></div>
                                        <span className="text-navy font-bold leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-navy/70 italic text-lg border-l-2 border-teal/30 pl-4 py-2">
                                Grounded in frameworks such as The Leadership Challenge, we translate values into observable leadership behaviors.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="mb-16">
                            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
                                <div className="w-16 h-16 bg-teal text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-teal/20">
                                    <Users size={28} />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-navy tracking-tight">2. Culture & Team Effectiveness</h4>
                            </div>
                            <p className="text-navy/60 leading-relaxed font-light text-lg mb-6">Culture is shaped by what leaders tolerate, measure, and reward. Using tools such as The Five Behaviors of a Cohesive Team and behavioral insights from DiSC, we help organizations:</p>
                            <ul className="space-y-3 mb-8 ml-6">
                                {[
                                    "Build trust across leadership teams",
                                    "Encourage healthy conflict and decision quality",
                                    "Strengthen accountability and cross-functional ownership",
                                    "Reduce silos and political friction"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-navy font-medium">
                                        <CheckCircle size={16} className="text-teal" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Step 3 */}
                        <div className="mb-16">
                            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
                                <div className="w-16 h-16 bg-skyBlue text-navy rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-navy/5 border border-navy/10">
                                    <Settings size={28} />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-navy tracking-tight">3. Talent & Systems Alignment</h4>
                            </div>
                            <p className="text-navy/60 leading-relaxed font-light text-lg mb-6">Execution requires systems that reinforce the right behaviors. We align:</p>
                            <ul className="space-y-3 mb-8 ml-6">
                                {[
                                    "Leadership development pipelines",
                                    "High-potential identification frameworks",
                                    "Performance management systems",
                                    "Competency models and succession planning",
                                    "Learning impact measurement using ROI methodology"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-navy font-medium">
                                        <CheckCircle size={16} className="text-teal" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-navy/70 italic text-lg border-l-2 border-teal/30 pl-4 py-2">
                                Where relevant, we integrate psychometric insights from Hogan Assessments to ensure cultural fit and leadership readiness.
                            </p>
                        </div>

                        <div className="bg-navy text-white rounded-[3rem] p-10 md:p-16 relative shadow-3xl overflow-hidden ring-1 ring-white/10 mt-20">
                            {/* Decorative image placeholder inside outcomes */}
                            <div className="absolute right-0 top-0 w-1/3 h-full mix-blend-overlay opacity-20 hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" alt="Effectiveness" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-black mb-10 tracking-tight">What Organizations Experience:</h3>
                            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                {[
                                    "Faster strategic execution",
                                    "Stronger leadership alignment",
                                    "Reduced internal friction",
                                    "Higher engagement and ownership",
                                    "Sustainable performance growth"
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
                            Organizational effectiveness is not about adding programs. <br />
                            <span className="text-navy font-black">It is about removing misalignment.</span>
                        </p>
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-10 tracking-tighter">
                            At MetaHR, we help you build an organization where leadership behavior, culture, and systems <span className="text-teal font-serif italic">work in one direction</span> — toward strategic impact.
                        </h2>
                        <p className="text-xl text-navy/60 leading-relaxed font-light mb-12">
                            Stop managing symptoms.<br />
                            Fix the system.
                        </p>

                        <Link to="/contact" className="inline-flex items-center justify-center space-x-4 bg-teal text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:bg-navy hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                            <span>Book a Strategic Alignment Session</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default OrganizationalEffectiveness;
