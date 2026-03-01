import { motion } from 'framer-motion';
import { Target, Users, Settings, ShieldCheck, CheckCircle2, ArrowRight, BarChart3, Globe, Search, FileText, Briefcase, TrendingUp, Lightbulb, Award } from 'lucide-react';
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

            {/* Service Grid - Core Services */}
            <div className="bg-beige/10">
                <section className="container mx-auto px-6 py-40">
                    <div className="text-center mb-32">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Ecosystem.Module // Strategic_Offerings</span>
                        <h2 className="text-4xl md:text-7xl font-black text-navy mb-6 tracking-tighter">Our Core Services.</h2>
                        <p className="text-navy/40 text-xl font-light max-w-2xl mx-auto">Comprehensive solutions designed for sustainable impact and senior-level execution.</p>
                    </div>

                    <div className="space-y-48">
                        {/* 1. Leadership Development */}
                        <div id="leadership-development" className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white shadow-xl shadow-teal/20">
                                        <Award size={32} />
                                    </div>
                                    <div>
                                        <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block">PROT_01</span>
                                        <span className="text-navy font-bold text-sm uppercase tracking-widest">Leadership Development</span>
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight tracking-tighter">
                                    Develop Leaders Who <br />
                                    Drive <span className="text-teal font-serif italic">Strategic Impact.</span>
                                </h3>
                                <p className="text-lg text-navy/60 leading-relaxed mb-6 font-medium">
                                    Grounded in The Leadership Challenge, we develop leaders who model values, inspire a shared vision, challenge the process, enable others to act, and encourage the heart.
                                </p>
                                <p className="text-lg text-navy/60 leading-relaxed mb-8 font-light">
                                    But leadership today requires more than inspiration — it requires <span className="font-bold underline decoration-teal/40 decoration-2 underline-offset-4">execution</span>.
                                </p>
                                <h4 className="text-sm font-black text-navy tracking-widest uppercase mb-4">We integrate:</h4>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start text-navy/60 font-medium">
                                        <CheckCircle2 className="text-teal shrink-0 mr-3 mt-1" size={18} />
                                        <span><strong>Everything DiSC Work of Leaders</strong> to help leaders craft vision, build alignment, and champion execution.</span>
                                    </li>
                                    <li className="flex items-start text-navy/60 font-medium">
                                        <CheckCircle2 className="text-teal shrink-0 mr-3 mt-1" size={18} />
                                        <span><strong>Strengths-Based Leadership</strong> powered by Gallup to amplify natural talent and increase leadership effectiveness.</span>
                                    </li>
                                    <li className="flex items-start text-navy/60 font-medium">
                                        <CheckCircle2 className="text-teal shrink-0 mr-3 mt-1" size={18} />
                                        <span><strong>High-Impact Performance Labs</strong> using experiential learning with MTa Insights to translate insight into real-world behavioral change.</span>
                                    </li>
                                </ul>
                                <p className="text-lg text-navy/60 leading-relaxed mb-10 font-medium italic">
                                    Through immersive workshops, executive dialogue, assessment-driven insight, and structured follow-through, we build leaders who move strategy forward — not just manage tasks.
                                </p>
                                <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-navy text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all group shadow-3xl shadow-navy/20">
                                    Schedule a Leadership Strategy Conversation <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                            <div className="grid grid-cols-1 gap-8 relative">
                                <div className="bg-white p-12 rounded-[4rem] border border-navy/5 shadow-3xl shadow-navy/10 hover:translate-x-4 transition-transform duration-700">
                                    <span className="text-teal font-black text-[10px] tracking-widest block mb-4 uppercase">Expected_Impact</span>
                                    <h4 className="text-2xl font-black text-navy mb-6 tracking-tight">Outcomes You Can Expect:</h4>
                                    <ul className="space-y-4 text-navy/60 font-medium text-sm">
                                        <li className="flex items-center"><CheckCircle2 className="text-teal mr-3" size={16} /> Greater strategic clarity and direction</li>
                                        <li className="flex items-center"><CheckCircle2 className="text-teal mr-3" size={16} /> Stronger alignment across functions</li>
                                        <li className="flex items-center"><CheckCircle2 className="text-teal mr-3" size={16} /> Improved decision-making under pressure</li>
                                        <li className="flex items-center"><CheckCircle2 className="text-teal mr-3" size={16} /> Higher ownership and accountability</li>
                                        <li className="flex items-center"><CheckCircle2 className="text-teal mr-3" size={16} /> Measurable improvement in leadership effectiveness</li>
                                    </ul>
                                </div>
                                <div className="bg-navy p-10 rounded-[3rem] text-white shadow-3xl shadow-navy/30 -rotate-1 hover:rotate-0 transition-transform duration-700">
                                    <p className="text-white/80 leading-relaxed font-light mb-4">
                                        At MetaHR, leadership development isn’t a one-day event. It’s a performance system designed for sustained impact.
                                    </p>
                                    <p className="text-white font-black uppercase text-sm tracking-wide mb-4 text-teal">Leadership Isn’t Optional. High Performance Isn’t Accidental.</p>
                                    <p className="text-white/60 text-sm font-light">If your leaders aren’t aligned, your strategy will stall. Let’s build leadership capability that drives measurable business impact.</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Team Development */}
                        <div id="team-development" className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white shadow-xl shadow-teal/20">
                                            <Users size={32} />
                                        </div>
                                        <div>
                                            <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block">PROT_02</span>
                                            <span className="text-navy font-bold text-sm uppercase tracking-widest">Team Development</span>
                                        </div>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight tracking-tighter">
                                        Build Aligned, <br />
                                        <span className="text-teal font-serif italic">High-Performing Teams.</span>
                                    </h3>
                                    <p className="text-lg text-navy/60 leading-relaxed mb-8 font-medium">
                                        Using <strong>The Five Behaviors of a Cohesive Team</strong> framework, we help teams build deep trust, engage in healthy conflict, commit to clear decisions, hold one another accountable, and focus relentlessly on collective results.
                                    </p>
                                    <p className="text-lg text-navy/60 leading-relaxed mb-6 font-bold">
                                        But we don’t stop at theory.
                                    </p>
                                    <h4 className="text-sm font-black text-navy tracking-widest uppercase mb-4">We integrate:</h4>
                                    <div className="grid gap-6 mb-8">
                                        {[
                                            { title: "DiSC", desc: "To improve communication, reduce friction, and strengthen collaboration." },
                                            { title: "Strengths-based team coaching", desc: "Powered by Gallup insights to help individuals leverage their natural talents for team success." }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white p-6 rounded-[2rem] border border-navy/5 shadow-xl shadow-navy/5 hover:border-teal/30 transition-all flex items-start">
                                                <Target className="text-teal shrink-0 mr-4 mt-1" size={24} />
                                                <div>
                                                    <h4 className="font-black text-navy mb-1 tracking-tight">{item.title}</h4>
                                                    <p className="text-navy/50 text-sm font-medium leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-lg text-navy/60 leading-relaxed mb-10 font-light italic">
                                        Through facilitated dialogue, experiential learning, and structured accountability systems, we transform groups of individuals into aligned, high-performing teams.
                                    </p>
                                    <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-teal text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-navy transition-all group shadow-3xl shadow-teal/20">
                                        Schedule a Strategy Conversation <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>
                            <div className="lg:order-1 relative">
                                <div className="absolute inset-0 bg-teal/10 rounded-[5rem] rotate-3 scale-105"></div>
                                <div className="bg-white p-16 rounded-[4rem] relative z-10 border border-navy/5 shadow-[0_40px_100px_rgba(47,65,86,0.1)]">
                                    <span className="text-[10px] font-mono font-bold text-teal tracking-widest block mb-8 uppercase">Performance_Metrics</span>
                                    <h4 className="text-2xl font-black text-navy mb-8 tracking-tight">Outcomes You Can Expect:</h4>
                                    <div className="space-y-6 mb-10">
                                        {[
                                            "Increased trust and psychological safety",
                                            "Constructive conflict instead of avoidance",
                                            "Clearer decision-making and ownership",
                                            "Stronger cross-functional collaboration",
                                            "Measurable improvement in team performance"
                                        ].map((expected, i) => (
                                            <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl group hover:bg-beige/40 transition-all duration-500 bg-beige/10">
                                                <CheckCircle2 className="text-teal shrink-0" size={20} />
                                                <span className="text-navy font-bold text-sm tracking-wide">{expected}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-navy/10 pt-8 mt-8">
                                        <p className="text-navy/80 font-bold mb-2">At MetaHR, we don’t just improve teamwork —</p>
                                        <p className="text-teal font-medium mb-4">we build teams that execute strategy with clarity and confidence.</p>
                                        <p className="text-navy/60 text-sm italic">Ready to Build a High-Performing Team? If your team isn’t aligned, your strategy won’t execute. Let’s design a team experience that drives trust, accountability, and measurable results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Executive & Performance Coaching */}
                        <div id="coaching" className="grid lg:grid-cols-2 gap-24 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white shadow-xl shadow-teal/20">
                                        <Briefcase size={32} />
                                    </div>
                                    <div>
                                        <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block">PROT_03</span>
                                        <span className="text-navy font-bold text-sm uppercase tracking-widest">Executive Coaching</span>
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight tracking-tighter">
                                    Unlock Leadership Potential <br />
                                    <span className="text-teal font-serif italic leading-tight">at the Individual Level.</span>
                                </h3>
                                <p className="text-lg text-navy/60 leading-relaxed mb-6 font-medium">
                                    Our executive coaching is data-driven, insight-rich, and performance-focused.
                                </p>
                                <p className="text-lg text-navy/60 leading-relaxed mb-6 font-light">
                                    We integrate strengths-based development powered by Gallup with science-backed insights from Hogan Assessments to accelerate leadership growth at both conscious and unconscious levels.
                                </p>
                                <p className="text-lg text-navy/80 leading-relaxed mb-8 font-bold border-l-4 border-teal pl-4">
                                    But insight alone doesn’t create transformation — application does.
                                </p>
                                <h4 className="text-sm font-black text-navy tracking-widest uppercase mb-4">Our coaching methodology includes:</h4>
                                <div className="space-y-4 mb-10">
                                    {[
                                        { title: "Strengths-Based Coaching", desc: "To amplify natural talent and increase confidence under pressure." },
                                        { title: "Hogan personality insights", desc: "To uncover derailers, motivators, and values." },
                                        { title: "DiSC 363 for Leaders", desc: "A multi-rater behavioral feedback tool providing 360° insight into leadership impact and blind spots." },
                                        { title: "Neuro-Linguistic Programming (NLP)", desc: "Techniques to shift mindset, strengthen influence, and improve executive presence." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start p-4 rounded-xl hover:bg-beige/20 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-teal mt-2 mr-4 shrink-0" />
                                            <div>
                                                <span className="font-bold text-navy text-sm block mb-1">{item.title}</span>
                                                <span className="text-navy/60 text-sm font-medium">{item.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/contact" className="inline-flex items-center px-10 py-5 border-2 border-navy text-navy rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-navy hover:text-white transition-all group">
                                    Book an Executive Coaching Consultation <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                            <div className="relative">
                                <div className="bg-skyBlue/10 p-16 rounded-[4rem] border border-white shadow-3xl backdrop-blur-sm">
                                    <span className="text-[10px] font-mono font-bold text-navy/40 tracking-widest block mb-8 uppercase">Velocity // GROWTH_MARKERS</span>
                                    <p className="text-navy/80 font-medium mb-8">Through structured goal-setting, behavioral experimentation, and measurable performance tracking, we help leaders:</p>
                                    <ul className="space-y-6 mb-10">
                                        {[
                                            "Increase strategic clarity",
                                            "Improve decision-making under pressure",
                                            "Strengthen stakeholder influence",
                                            "Enhance executive presence",
                                            "Sustain performance during growth and change"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center space-x-4">
                                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-teal shadow-md">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                                <span className="text-navy font-black text-sm tracking-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-navy/5">
                                        <p className="text-navy/80 font-bold mb-4 italic">"This is not developmental coaching alone — it is performance acceleration aligned to business outcomes."</p>
                                        <p className="text-sm text-navy/60 font-medium">At MetaHR, executive coaching is where self-awareness meets execution. High-performing organizations don’t leave leadership to chance. They invest in measurable growth.</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal/20 rounded-full blur-[80px] -z-10"></div>
                            </div>
                        </div>

                        {/* 4. Individual & High-Potential Development */}
                        <div id="individual-development" className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="lg:order-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white shadow-xl shadow-teal/20">
                                            <TrendingUp size={32} />
                                        </div>
                                        <div>
                                            <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block">PROT_04</span>
                                            <span className="text-navy font-bold text-sm uppercase tracking-widest">High-Potential Development</span>
                                        </div>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight tracking-tighter">
                                        Build the Leaders <br />
                                        <span className="text-teal font-serif italic">Your Future Demands.</span>
                                    </h3>
                                    <p className="text-lg text-navy/60 leading-relaxed mb-6 font-bold">
                                        Today’s emerging talent cannot be developed with yesterday’s training models.
                                    </p>
                                    <p className="text-lg text-navy/60 leading-relaxed mb-6 font-medium">
                                        At MetaHR, we design strengths-based development journeys inspired by Strengths-Based Leadership to prepare high-potential professionals for expanded responsibility, strategic thinking, and enterprise impact.
                                    </p>
                                    <p className="text-lg text-navy/60 leading-relaxed mb-10 font-medium border-l-4 border-teal pl-4">
                                        We combine science-backed assessments with immersive experiential learning to create measurable growth — not just inspiration.
                                    </p>
                                    <h4 className="text-sm font-black text-navy tracking-widest uppercase mb-6">Our Integrated Development Approach Includes:</h4>
                                    <ul className="space-y-4 mb-10">
                                        <li className="flex items-start text-navy/60 font-medium">
                                            <CheckCircle2 className="text-teal shrink-0 mr-3 mt-1" size={18} />
                                            <span><strong>Strengths-based development</strong> grounded in insights from Gallup to amplify natural talent and build confidence.</span>
                                        </li>
                                        <li className="flex items-start text-navy/60 font-medium">
                                            <CheckCircle2 className="text-teal shrink-0 mr-3 mt-1" size={18} />
                                            <span><strong>Behavioral awareness and adaptability</strong> using DiSC frameworks.</span>
                                        </li>
                                        <li className="flex items-start text-navy/60 font-medium">
                                            <CheckCircle2 className="text-teal shrink-0 mr-3 mt-1" size={18} />
                                            <span><strong>Personality and potential insights</strong> from Hogan Assessments to identify motivators, values, and potential derailers.</span>
                                        </li>
                                        <li className="flex items-start text-navy/60 font-medium">
                                            <CheckCircle2 className="text-teal shrink-0 mr-3 mt-1" size={18} />
                                            <span><strong>High-impact experiential learning</strong> simulations powered by MTa Learning to translate insight into behavior.</span>
                                        </li>
                                    </ul>
                                    <Link to="/contact" className="inline-flex items-center px-10 py-5 bg-navy text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all group shadow-3xl shadow-navy/20">
                                        Design Your High-Potential Strategy <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>
                            <div className="lg:order-1 relative">
                                <div className="absolute inset-0 bg-navy/5 rounded-[5rem] rotate-2 scale-105"></div>
                                <div className="bg-white p-16 rounded-[4rem] relative z-10 border border-navy/5 shadow-[0_40px_100px_rgba(47,65,86,0.1)]">
                                    <span className="text-[10px] font-mono font-bold text-teal tracking-widest block mb-8 uppercase">Transformation_Yield</span>
                                    <h4 className="text-3xl font-black text-navy mb-8 tracking-tight">Participants Develop:</h4>
                                    <div className="space-y-5 mb-10">
                                        {[
                                            "Strategic thinking capability",
                                            "Executive communication presence",
                                            "Cross-functional collaboration skills",
                                            "Emotional intelligence & resilience",
                                            "Accountability and performance ownership"
                                        ].map((expected, i) => (
                                            <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl group hover:bg-beige/40 transition-all duration-500 bg-beige/10">
                                                <Target className="text-teal shrink-0" size={20} />
                                                <span className="text-navy font-bold text-sm tracking-wide">{expected}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-navy p-8 rounded-3xl text-white">
                                        <p className="font-bold text-sm mb-2 text-teal uppercase tracking-widest">This is not generic leadership training.</p>
                                        <p className="text-white/80 font-medium text-sm mb-4">It is a structured pipeline strategy to prepare high-potential talent for larger roles — faster and more sustainably.</p>
                                        <p className="text-white/60 text-xs italic mb-4">At MetaHR, we don’t just develop individuals. We future-proof your leadership bench. Your future leaders are already in your organization. The question is — are they being prepared intentionally?</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5. Organizational Effectiveness */}
                        <div id="organizational-effectiveness" className="grid lg:grid-cols-2 gap-24 items-center">
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
                                        <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block">PROT_05</span>
                                        <span className="text-navy font-bold text-sm uppercase tracking-widest">Organizational Effectiveness</span>
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight tracking-tighter">
                                    Align Strategy. <br />
                                    Activate Culture. <span className="text-teal font-serif italic leading-tight">Execute with Discipline.</span>
                                </h3>
                                <p className="text-lg text-navy/80 leading-relaxed mb-6 font-bold">
                                    Strategy fails not because it is wrong — but because leadership behaviors, culture, and systems are misaligned.
                                </p>
                                <p className="text-lg text-navy/60 leading-relaxed mb-8 font-light">
                                    At MetaHR, we help organizations close the gap between intent and execution by aligning leadership capability, team dynamics, performance systems, and cultural behaviors with strategic priorities.
                                </p>
                                <p className="text-xl text-teal leading-relaxed mb-10 font-bold font-serif italic">
                                    Organizational effectiveness is not a workshop. It is an integrated transformation journey.
                                </p>

                                <h4 className="text-sm font-black text-navy tracking-widest uppercase mb-6">Our Approach:</h4>
                                <div className="space-y-8 mb-12">
                                    <div>
                                        <h5 className="font-bold text-navy text-lg mb-2">1️⃣ Strategic Alignment & Leadership Calibration</h5>
                                        <p className="text-sm text-navy/60 mb-2">We work with senior leadership teams to clarify strategic priorities, role clarity, required leadership behaviors, and accountability structures. Grounded in frameworks such as The Leadership Challenge, we translate values into observable leadership behaviors.</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-navy text-lg mb-2">2️⃣ Culture & Team Effectiveness</h5>
                                        <p className="text-sm text-navy/60 mb-2">Culture is shaped by what leaders tolerate, measure, and reward. Using tools such as The Five Behaviors of a Cohesive Team and DiSC, we help organizations build trust, encourage healthy conflict, and reduce silos.</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-navy text-lg mb-2">3️⃣ Talent & Systems Alignment</h5>
                                        <p className="text-sm text-navy/60 mb-2">Execution requires systems that reinforce the right behaviors. We align leadership pipelines, performance systems, and competency models. We integrate psychometric insights from Hogan Assessments to ensure cultural fit.</p>
                                    </div>
                                </div>

                                <Link to="/contact" className="inline-flex items-center px-12 py-6 bg-teal text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-navy transition-all group shadow-3xl shadow-teal/20">
                                    Book a Strategic Alignment Session <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </motion.div>
                            <div className="relative">
                                <div className="bg-skyBlue/10 p-16 rounded-[4rem] border border-white shadow-3xl backdrop-blur-sm">
                                    <span className="text-[10px] font-mono font-bold text-navy/40 tracking-widest block mb-10 uppercase">Registry // OPTIMIZATION_PATH</span>
                                    <h4 className="text-2xl font-black text-navy mb-8 tracking-tight">What Organizations Experience:</h4>
                                    <ul className="space-y-6 mb-12">
                                        {[
                                            "Faster strategic execution",
                                            "Stronger leadership alignment",
                                            "Reduced internal friction",
                                            "Higher engagement and ownership",
                                            "Sustainable performance growth"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center space-x-6">
                                                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-teal shadow-xl shadow-navy/5">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                                <span className="text-navy font-black text-base tracking-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-navy p-8 rounded-3xl text-white text-center">
                                        <p className="font-bold text-lg mb-2 text-teal">Stop managing symptoms.<br />Fix the system.</p>
                                        <p className="text-white/60 font-light text-sm">Organizational effectiveness is not about adding programs. It is about removing misalignment. We help you build an organization where behavior, culture, and systems work in one direction — toward strategic impact.</p>
                                    </div>
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
