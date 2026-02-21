import { motion } from 'framer-motion';
import { Globe, Target, Award, ShieldCheck, Zap, Users, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white">
            {/* Section 1: The Bio-Hero (The Authority) */}
            <section className="relative overflow-hidden bg-navy min-h-[90vh] flex items-center pt-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white z-10"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-8"
                            >
                                <span className="px-6 py-2 rounded-full border border-teal/60 text-teal text-[10px] font-mono font-bold tracking-[0.4em] uppercase bg-black/40 backdrop-blur-xl animate-status-beat">
                                    AUTHORITY.PROFILE // GLOBAL_REACH
                                </span>
                            </motion.div>

                            <h1 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter !text-white">
                                26 Years of <br />
                                <span className="font-serif italic text-teal">Global HR Excellence.</span>
                            </h1>

                            <div className="space-y-8 text-lg text-beige/60 font-light leading-relaxed max-w-xl">
                                <p>
                                    Ian Kishander is an accomplished HR Consultant, Facilitator, and Coach dedicated to strengthening leadership capability and building high-trust teams.
                                </p>
                                <p>
                                    With extensive experience coaching leaders across the Americas, Europe, MENA, and Asia Pacific, Ian brings a truly global perspective to MetaHR.
                                </p>
                                <div className="pt-8">
                                    <div className="p-8 bg-white/5 border-l-4 border-teal rounded-r-[2rem] backdrop-blur-sm">
                                        <Quote size={24} className="text-teal/40 mb-4" />
                                        <span className="text-white font-serif italic text-xl">Known for deep diagnostic capability and translating complex insights into immediate action.</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative h-[600px] lg:h-[700px] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/50"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                                alt="Ian Kishander - Global HR Consultant"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent"></div>

                            {/* Decorative Artifact Overlay */}
                            <div className="absolute bottom-10 right-10">
                                <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl">
                                    <span className="block text-[10px] font-mono font-bold text-teal tracking-[0.3em] uppercase mb-1 animate-pulse">Status // ACTIVE</span>
                                    <span className="block text-white text-xs font-bold uppercase tracking-widest">Benchmarking_Leadership</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Decorative Laser Lines */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>

            {/* Section 2: The "Meta" Philosophy (The Core) */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-24"
                        >
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Philosophy.Manifesto // The_Core</span>
                            <h2 className="text-4xl md:text-7xl font-black text-navy mb-10 tracking-tighter leading-none">Why "Meta"? <br />Because We Look <span className="text-teal font-serif italic">Beyond.</span></h2>
                            <p className="text-xl md:text-2xl text-navy/50 leading-relaxed font-light">
                                The word Meta means <span className="text-navy font-bold underline decoration-teal/40 decoration-4 underline-offset-8">beyond</span>.
                                We look beyond standard policies and job descriptions to understand what truly drives your people.
                                We believe that while skill is important, performance is fueled by purpose, environment, and culture.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { title: "People", desc: "Unlocking untapped individual potential.", icon: <Users size={32} />, label: "INDIV_SCIENCE" },
                                { title: "Culture", desc: "Creating engaging, high-performance environments.", icon: <Globe size={32} />, label: "SYSTEM_DESIGN" },
                                { title: "Strategy", desc: "Aligning human capital with business objectives.", icon: <Target size={32} />, label: "GOAL_ALIGN" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-12 rounded-[4rem] border border-navy/5 bg-beige/10 hover:border-teal/30 hover:shadow-3xl transition-all duration-700 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-full -mr-12 -mt-12 group-hover:bg-teal/20 transition-all duration-700"></div>
                                    <div className="w-20 h-20 rounded-3xl bg-white shadow-2xl shadow-navy/5 flex items-center justify-center text-teal mb-10 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-navy/20 block mb-4 tracking-widest">{item.label}</span>
                                    <h4 className="text-2xl font-black text-navy mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-navy/50 leading-relaxed font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Our Commitment (The Proof) */}
            <section className="py-32 bg-navy text-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Protocol.Execution // The_Proof</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">Our Commitment <br />to <span className="text-teal font-serif italic">Excellence.</span></h2>
                            <p className="text-lg text-white/40 mb-16 leading-relaxed max-w-xl font-light">
                                We partner with organizations that are ready to move past the superficial and tackle the foundational drivers of performance.
                            </p>

                            <div className="space-y-10">
                                {[
                                    { title: "Diagnostic First", desc: "We use tools like Hogan and CliftonStrengths to find root causes, not just symptoms.", icon: <ShieldCheck className="text-teal" size={32} /> },
                                    { title: "Business-First", desc: "Solutions are designed to be realistic and directly aligned with your specific organizational goals.", icon: <Zap className="text-teal" size={32} /> },
                                    { title: "Sustainable Change", desc: "We build the capability within your team to solve challenges long after our engagement ends.", icon: <Award className="text-teal" size={32} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex space-x-8 group">
                                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal group-hover:border-teal transition-all duration-500">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h4>
                                            <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-white rounded-[5rem] p-16 md:p-24 shadow-3xl text-navy relative z-10 border border-white/10 ring-1 ring-white/20">
                                <div className="absolute top-0 right-0 p-10">
                                    <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal animate-pulse">
                                        <Zap size={24} />
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Ready to <br /><span className="text-teal font-serif italic">evolve?</span></h3>
                                <p className="text-navy/50 text-xl mb-12 leading-relaxed font-light">
                                    Whether you are a startup scaling for the first time or an established enterprise looking for a culture reset, we provide the precision you need.
                                </p>
                                <Link
                                    to="/contact"
                                    className="bg-navy text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center group hover:bg-teal transition-all shadow-2xl shadow-navy/20"
                                >
                                    Book Your Alignment Call
                                    <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                            {/* Background Decorative Rings */}
                            <div className="absolute -inset-10 border border-white/5 rounded-[6rem] -z-10 rotate-3"></div>
                            <div className="absolute -inset-20 border border-white/5 rounded-[7rem] -z-10 -rotate-2"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: Credentials & Accreditations (The Trust) */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Benchmarked_Wisdom // Credentials</span>
                        <h2 className="text-4xl md:text-7xl font-black text-navy mb-8 tracking-tighter">Globally Benchmarked <span className="text-teal font-serif italic leading-tight">Expertise.</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            "SHRM-Senior Certified Professional (SHRM-SCP)",
                            "Gallup Global Strengths Coach",
                            "Hogan Assessments Certified Practitioner",
                            "The Leadership Challenge Licensed User",
                            "Everything DiSC® Certified Facilitator"
                        ].map((badge, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-12 rounded-[3rem] border border-navy/5 text-center flex flex-col items-center justify-center shadow-3xl shadow-navy/5 hover:border-teal/30 hover:scale-[1.03] transition-all duration-500 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-beige flex items-center justify-center text-teal mb-8 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                                    <Award size={32} />
                                </div>
                                <p className="text-navy font-bold text-xs leading-relaxed uppercase tracking-widest">{badge}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
