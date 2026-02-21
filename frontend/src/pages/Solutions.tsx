import { motion } from 'framer-motion';
import { Target, Users, Settings, ShieldCheck, CheckCircle2, ArrowRight, BarChart3, Globe, Search, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
    return (
        <div className="bg-white">
            {/* Solutions Hero */}
            <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <span className="px-6 py-2 rounded-full border border-teal/60 text-teal text-[10px] font-mono font-bold tracking-[0.4em] uppercase bg-black/40 backdrop-blur-xl animate-status-beat">
                            SOLUTIONS.INDEX // STRATEGIC_ECOSYSTEM
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black !text-white mb-8 tracking-tighter leading-none"
                    >
                        Precision <span className="text-teal font-serif italic">Solutions.</span><br />
                        Sustainable <span className="text-teal font-serif italic">Performance.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl !text-beige/60 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        Moving beyond standard policies to ground your organizational excellence in behavioral science and strategic alignment.
                    </motion.p>
                </div>
                {/* Decorative Laser Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>

            {/* The Intersection Philosophy */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Our Core Philosophy // THE_THREE_CHORDS</span>
                            <h2 className="text-4xl md:text-6xl font-black text-navy mb-10 tracking-tighter leading-tight">The Three-Chord <br /><span className="text-teal font-serif italic">Tapestry.</span></h2>
                            <p className="text-navy/50 text-xl mb-12 leading-relaxed font-light">
                                Performance isn't siloed. We believe organizational success happens at the intersection of three critical pillars. When these chords are in harmony, excellence becomes sustainable.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { title: "People", desc: "Unlocking individual potential through behavioral science.", icon: <Users size={24} /> },
                                    { title: "Culture", desc: "Creating high-trust environments where people thrive.", icon: <Globe size={24} /> },
                                    { title: "Strategy", desc: "Aligning human capital with business objectives.", icon: <Target size={24} /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start space-x-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center text-teal shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-navy text-xl tracking-tight mb-1">{item.title}</h4>
                                            <p className="text-navy/40 font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            {/* Visual Representation of the Intersection */}
                            <div className="relative w-full aspect-square max-w-md">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-navy/5 rounded-full scale-110"
                                ></motion.div>
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-navy/5 border border-navy/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-navy/40 font-black text-xs tracking-widest -mt-20">PEOPLE</span>
                                </div>
                                <div className="absolute bottom-10 left-0 w-2/3 h-2/3 bg-teal/5 border border-teal/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-teal/40 font-black text-xs tracking-widest -ml-10 mt-10">CULTURE</span>
                                </div>
                                <div className="absolute bottom-10 right-0 w-2/3 h-2/3 bg-skyBlue/10 border border-skyBlue/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-navy/20 font-black text-xs tracking-widest -mr-10 mt-10 uppercase">Strategy</span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-navy p-10 rounded-full shadow-3xl text-white text-center z-10 scale-125 border-4 border-white ring-8 ring-navy/5 transition-transform hover:scale-[1.3] cursor-default">
                                        <span className="font-black tracking-tighter text-base">METAHR</span><br />
                                        <span className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-bold">Excellence</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Grid - Tiered Services */}
            <div className="bg-beige/10">
                <section className="container mx-auto px-6 py-40">
                    <div className="text-center mb-32">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Ecosystem.Module // Strategic_Offerings</span>
                        <h2 className="text-4xl md:text-7xl font-black text-navy mb-6 tracking-tighter">Our Strategic Ecosystem.</h2>
                        <p className="text-navy/40 text-xl font-light">Comprehensive solutions designed for senior-level execution.</p>
                    </div>

                    <div className="space-y-48">
                        {/* A. Cohesive Team Development */}
                        <div id="teams" className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white shadow-xl shadow-teal/20">
                                        <Users size={32} />
                                    </div>
                                    <div>
                                        <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block">PROT_TEAMS</span>
                                        <span className="text-navy font-bold text-sm uppercase tracking-widest">Team Cohesion</span>
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black text-navy mb-10 leading-tight tracking-tighter">
                                    High-Performing <br />
                                    Teams Don’t <span className="text-teal font-serif italic">Drift</span> <br />
                                    Into Cohesion.
                                </h3>
                                <p className="text-xl text-navy/50 leading-relaxed mb-10 font-light">
                                    Grounded in **The Five Behaviors®** framework by Patrick Lencioni, we help intact teams move from silos and politics to clarity and collective ownership.
                                    <span className="block mt-6 font-bold text-navy italic border-l-4 border-teal pl-6">"Cohesion is not about chemistry—it’s about behavior."</span>
                                </p>
                                <div className="space-y-8 mb-12">
                                    <div className="p-8 bg-white border border-navy/5 rounded-3xl shadow-xl shadow-navy/5">
                                        <p className="text-navy/60 leading-relaxed"><span className="font-black text-navy uppercase text-xs tracking-widest block mb-2">The Methodology</span> We combine the Lencioni model with Everything DiSC® or CliftonStrengths to gain behavioral clarity and performance acceleration.</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Trust Building", "Healthy Conflict", "Commitment", "Accountability", "Collective Results"].map(item => (
                                            <div key={item} className="flex items-center space-x-3 text-navy/60 font-bold text-[10px] uppercase tracking-widest">
                                                <div className="w-2 h-2 rounded-full bg-teal" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-navy text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all group shadow-3xl shadow-navy/20">
                                    Request the Cohesion Snapshot <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                            <div className="grid grid-cols-1 gap-8 relative">
                                <div className="bg-white p-12 rounded-[4rem] border border-navy/5 shadow-3xl shadow-navy/10 hover:translate-x-4 transition-transform duration-700">
                                    <h4 className="text-2xl font-black text-navy mb-4 tracking-tight">Five Dysfunctions Diagnostic</h4>
                                    <p className="text-navy/40 leading-relaxed font-medium">Identifying the core barriers to team performance through data-driven behavioral analysis.</p>
                                </div>
                                <div className="bg-navy p-12 rounded-[4rem] text-white shadow-3xl shadow-navy/30 -rotate-2 hover:rotate-0 transition-transform duration-700">
                                    <span className="text-teal font-black text-[10px] tracking-widest block mb-4 uppercase">System_Active</span>
                                    <h4 className="text-2xl font-black mb-4 tracking-tight">Behavioral Acceleration</h4>
                                    <p className="text-white/40 leading-relaxed font-light">Intensive, workshop-led interventions that transform siloes into cross-functional powerhouses.</p>
                                </div>
                            </div>
                        </div>

                        {/* B. Leadership Excellence */}
                        <div id="leadership" className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white shadow-xl shadow-teal/20">
                                            <Target size={32} />
                                        </div>
                                        <div>
                                            <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block">PROT_LEAD</span>
                                            <span className="text-navy font-bold text-sm uppercase tracking-widest">Leadership Performance</span>
                                        </div>
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-black text-navy mb-10 leading-tight tracking-tighter">
                                        Leading by <span className="text-teal font-serif italic leading-tight">Example</span> is <br />
                                        Leading by <span className="text-navy font-serif italic text-gradient">Command.</span>
                                    </h3>
                                    <p className="text-xl text-navy/50 leading-relaxed mb-6 italic font-light">
                                        "Leadership is Everyone's Business."
                                    </p>
                                    <p className="text-lg text-navy/50 leading-relaxed mb-10 font-medium">
                                        We partner with emerging leaders and senior executives to strengthen leadership capability through evidence-based frameworks, specifically **The Five Practices of Exemplary Leadership®**.
                                    </p>
                                    <div className="grid gap-6 mb-12">
                                        {[
                                            { title: "The Work of Leaders", desc: "Crafting Vision, building Alignment, and driving Execution." },
                                            { title: "Leadership Performance Labs", desc: "Experiential learning simulations that translate insight into immediate action." }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white p-8 rounded-[2rem] border border-navy/5 shadow-2xl shadow-navy/5 hover:border-teal/30 transition-all">
                                                <h4 className="font-black text-navy mb-2 tracking-tight uppercase text-sm">{item.title}</h4>
                                                <p className="text-navy/40 text-sm font-medium">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-teal text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-navy transition-all group shadow-3xl shadow-teal/20">
                                        Book Your Alignment Call <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>
                            <div className="lg:order-1 relative">
                                <div className="absolute inset-0 bg-teal/10 rounded-[5rem] rotate-3 scale-105"></div>
                                <div className="bg-white p-16 rounded-[5rem] relative z-10 border border-navy/5 shadow-[0_40px_100px_rgba(47,65,86,0.1)]">
                                    <span className="text-[10px] font-mono font-bold text-teal tracking-widest block mb-8 uppercase">Framework // THE_FIVE_PRACTICES</span>
                                    <div className="space-y-6">
                                        {[
                                            "Model the Way",
                                            "Inspire a Shared Vision",
                                            "Challenge the Process",
                                            "Enable Others to Act",
                                            "Encourage the Heart"
                                        ].map((practice, i) => (
                                            <div key={i} className="flex items-center space-x-6 p-6 rounded-3xl group hover:bg-beige/40 transition-all duration-500">
                                                <span className="text-teal font-black text-2xl group-hover:scale-125 transition-transform">0{i + 1}</span>
                                                <span className="text-navy font-black text-lg tracking-tight uppercase">{practice}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* C. Organizational Effectiveness */}
                        <div id="strategy" className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white shadow-xl shadow-teal/20">
                                        <Settings size={32} />
                                    </div>
                                    <div>
                                        <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block">PROT_STRAT</span>
                                        <span className="text-navy font-bold text-sm uppercase tracking-widest">HR Strategy</span>
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-black text-navy mb-10 leading-tight tracking-tighter">
                                    Aligning People Strategy with <br />
                                    <span className="text-teal font-serif italic leading-tight">Business Growth.</span>
                                </h3>
                                <p className="text-xl text-navy/50 leading-relaxed mb-10 font-light">
                                    We provide proactive consulting to build scalable, sustainable HR foundations that minimize risk and maximize talent ROI.
                                </p>
                                <div className="space-y-6 mb-12">
                                    {[
                                        { title: "Talent Strategy", desc: "Attracting and hiring top-tier talent through employer branding and strategic sourcing.", icon: <Search size={24} /> },
                                        { title: "Performance Management", desc: "Empowering teams through structured coaching frameworks rather than just fixing weaknesses.", icon: <BarChart3 size={24} /> },
                                        { title: "Compliance & Risk", desc: "Ensuring HR processes meet regulatory standards and minimize legal exposure.", icon: <ShieldCheck size={24} /> }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center space-x-6 p-10 rounded-[3rem] bg-white border border-navy/5 hover:border-teal/30 shadow-3xl shadow-navy/5 transition-all group">
                                            <div className="text-teal group-hover:scale-110 transition-transform">{item.icon}</div>
                                            <div>
                                                <h4 className="font-black text-navy tracking-tight uppercase text-sm mb-1">{item.title}</h4>
                                                <p className="text-navy/40 text-sm font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/contact" className="inline-flex items-center px-12 py-6 border-2 border-navy text-navy rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-navy hover:text-white transition-all group">
                                    View Strategic Frameworks <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                            <div className="relative">
                                <div className="bg-skyBlue/10 p-16 rounded-[5rem] border border-white shadow-3xl backdrop-blur-sm">
                                    <span className="text-[10px] font-mono font-bold text-navy/40 tracking-widest block mb-10 uppercase">Registry // OPTIMIZATION_PATH</span>
                                    <ul className="space-y-8">
                                        {[
                                            "Employer Brand Audit",
                                            "Strategic Talent Sourcing",
                                            "Coaching-Centric Performance Reviews",
                                            "Regulatory Compliance Guardrails"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center space-x-6">
                                                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-teal shadow-xl shadow-navy/5">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                                <span className="text-navy font-black text-base tracking-tight uppercase">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal/10 rounded-full blur-[80px]"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Implementation Methodology (The "How") */}
            <section className="py-40 bg-navy text-white overflow-hidden relative" id="methodology">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Proof of Impact // THE_6DS</span>
                            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none">The Six <br /><span className="text-teal font-serif italic">Disciplines.</span></h2>
                            <p className="text-white/40 text-xl font-light leading-relaxed mb-12">Ensuring breakthrough learning translates into actual business results.</p>
                            <Link to="/contact" className="bg-white text-navy px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal hover:text-white transition-all shadow-3xl shadow-white/5 inline-block">
                                [ Request_Implementation_Guide ]
                            </Link>
                        </div>

                        <div className="lg:col-span-7 space-y-12">
                            {[
                                { step: "DEFINE", desc: "Clearly identify the desired business outcomes before the first session starts.", accent: "bg-teal" },
                                { step: "DESIGN", desc: "Crafting a multi-touch, complete experience that engages every learner.", accent: "bg-skyBlue", scan: true },
                                { step: "DELIVER", desc: "Instructional excellence focused on application for real-world scenarios.", pulse: true },
                                { step: "DRIVE", desc: "Systems and support to ensure learning transfer to the actual workplace." },
                                { step: "DEPLOY", desc: "Providing the tools and ongoing performance support needed for long-term shift." },
                                { step: "DOCUMENT", desc: "Analyzing high-level results and demonstrating absolute ROI to stakeholders." }
                            ].map((d, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 border border-white/10 p-16 rounded-[4rem] hover:bg-white/10 transition-all cursor-default group sticky"
                                    style={{ top: `${100 + (i * 40)}px` }}
                                >
                                    <div className="flex justify-between items-start mb-10">
                                        <span className="text-[10px] font-mono font-bold text-teal">PROTOCOL.0{i + 1}</span>
                                        <div className={`w-3 h-3 rounded-full ${d.accent || 'bg-white/40'}`}></div>
                                    </div>
                                    <h4 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter hover:text-teal transition-colors uppercase">{d.step}</h4>
                                    <p className="text-white/40 text-xl leading-relaxed mb-10 font-light">{d.desc}</p>

                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                                        {d.scan && (
                                            <motion.div
                                                animate={{ left: ["-100%", "200%"] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute top-0 bottom-0 w-1/3 bg-teal shadow-[0_0_20px_#567C8D]"
                                            />
                                        )}
                                        {d.pulse && (
                                            <motion.div
                                                animate={{ opacity: [0.2, 1, 0.2] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 bg-teal"
                                            />
                                        )}
                                        {!d.scan && !d.pulse && <div className="absolute inset-0 w-1/4 bg-teal"></div>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Methodology Section */}
            <section className="py-40 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center bg-navy rounded-[5rem] p-16 md:p-32 relative overflow-hidden ring-1 ring-white/10">
                        <div className="relative z-10">
                            <span className="text-[10px] font-mono font-bold text-teal tracking-[0.4em] uppercase mb-10 block">Measurement.Analytics // THE_ROI_LAB</span>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">Measuring <br /><span className="text-teal font-serif italic">Effectiveness.</span></h3>
                            <p className="text-white/40 text-xl mb-12 leading-relaxed font-light">
                                We utilize a <span className="text-white font-bold underline decoration-teal/40 underline-offset-8 decoration-4">10-step ROI Methodology</span> to move beyond "happy sheets" and measure the actual financial return of HR interventions.
                            </p>
                            <div className="space-y-6">
                                {["Reaction & Planned Action", "Learning & Confidence", "Application & Implementation", "Business Impact", "Return on Investment"].map((level, i) => (
                                    <div key={i} className="flex items-center space-x-4 group">
                                        <div className="w-1 h-8 bg-teal/20 group-hover:bg-teal transition-colors"></div>
                                        <span className="font-black text-[10px] text-teal/40 tracking-widest uppercase">LEVEL.0{i + 1}</span>
                                        <span className="text-white/80 font-bold uppercase tracking-tight text-sm">{level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative z-10 flex flex-col items-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-16 rounded-[4rem] text-navy shadow-3xl text-center max-w-sm w-full"
                            >
                                <div className="w-24 h-24 bg-beige rounded-3xl flex items-center justify-center text-teal mb-10 mx-auto">
                                    <FileText size={48} />
                                </div>
                                <h4 className="text-3xl font-black mb-4 tracking-tight">The Whitepaper.</h4>
                                <p className="text-navy/40 mb-10 leading-relaxed font-medium">Download our detailed guide on how we measure behavior-based ROI.</p>
                                <button className="w-full bg-navy text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all shadow-xl shadow-navy/20">
                                    [ Request_PDF ]
                                </button>
                            </motion.div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
                    </div>
                </div>
            </section>

            {/* Strategic Footer CTA */}
            <section className="py-40 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div className="inline-block">
                        <h2 className="text-4xl md:text-8xl font-black text-navy mb-16 tracking-tighter leading-none">
                            Ready to <br /><span className="text-teal font-serif italic leading-tight uppercase">elevate</span> your organization?
                        </h2>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
                        <Link
                            to="/contact"
                            className="bg-navy text-white px-16 py-8 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all shadow-3xl shadow-navy/20 hover:scale-[1.03] active:scale-95"
                        >
                            Book Your Alignment Call
                        </Link>
                        <Link
                            to="/contact"
                            className="text-navy font-mono font-bold text-[10px] uppercase tracking-widest border border-navy/10 px-16 py-8 rounded-full hover:bg-beige transition-all hover:scale-[1.03] active:scale-95"
                        >
                            [ Request_Diagnostic ]
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
