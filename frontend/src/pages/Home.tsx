import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Quote, CheckCircle2, Globe, Award, Users, Target, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useProjects } from '../hooks/useProjects';

const Home = () => {
    const { projects, loading } = useProjects();
    const [activeQuote, setActiveQuote] = useState(0);
    const quotes = [
        {
            text: "Titles are granted, but it’s your behavior that earns you respect.",
            author: "The Leadership Challenge"
        },
        {
            text: "Pit a good performer against a bad system and the system will win almost every time.",
            author: "Geary Rummler"
        },
        {
            text: "We look beyond policies and processes to the heart of potential.",
            author: "MetaHR Philosophy"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveQuote((prev) => (prev + 1) % quotes.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [quotes.length]);

    return (
        <div className="relative overflow-x-hidden pt-0 bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-black/90"></div>
                </div>

                <motion.div
                    style={{ perspective: 1000 }}
                    className="container mx-auto px-6 text-center z-10 flex flex-col items-center justify-center pt-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <span className="px-6 py-2 rounded-full border border-teal/60 text-teal text-[10px] font-mono font-bold tracking-[0.4em] uppercase bg-black/40 backdrop-blur-xl animate-status-beat">
                            Status: Initializing_Potential
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black !text-white mb-4 tracking-tighter leading-tight"
                    >
                        Maximize <br />
                        <span className="font-serif italic text-teal leading-tight">Potential.</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-2xl md:text-4xl font-serif italic text-white/90 mb-8 tracking-tight group"
                    >
                        Elevate <span className="group-hover:text-teal transition-colors duration-500">Organizations.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-sm md:text-lg !text-beige/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                    >
                        Tailored HR solutions that drive behavioral change and organizational growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
                    >
                        <Link
                            to="/solutions"
                            className="bg-teal text-white px-10 py-4 rounded-full font-bold flex items-center group overflow-hidden relative shadow-2xl shadow-teal/30 hover:scale-[1.03] transition-all duration-300"
                        >
                            <span className="relative z-10 text-base uppercase tracking-widest font-black">Our Solutions</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <span className="relative z-20 ml-3 group-hover:text-navy transition-colors duration-500">
                                <ArrowRight size={18} />
                            </span>
                        </Link>
                        <a
                            href="#methodology"
                            className="text-white/60 font-mono font-bold tracking-widest uppercase text-[10px] border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-navy transition-all backdrop-blur-sm hover:scale-[1.03]"
                        >
                            [ View_Methodology ]
                        </a>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>

            {/* Trusted Accreditations Bar */}
            <section className="py-16 bg-beige/30 border-b border-navy/5">
                <div className="container mx-auto px-6">
                    <p className="text-center font-mono text-navy/40 font-bold uppercase tracking-[0.4em] text-[10px] mb-10 overflow-hidden">
                        <span className="inline-block animate-pulse">Trusted_Accreditations // Benchmarked_Expertise</span>
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
                        {['SHRM-SCP', 'Gallup', 'Hogan', 'Five Behaviors', 'Wiley'].map((brand) => (
                            <div key={brand} className="text-3xl font-black text-navy tracking-tighter hover:text-teal transform hover:scale-110 transition-all duration-500">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The "Meta" Definition */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <span className="text-teal/40 font-mono font-bold text-xs tracking-[0.3em] uppercase underline decoration-teal/20 underline-offset-8">Philosophy.Manifesto</span>
                        </motion.div>

                        <div className="grid lg:grid-cols-12 gap-12 items-end">
                            <div className="lg:col-span-4">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-navy/60 text-xl font-light leading-relaxed"
                                >
                                    Most HR focus on: <br />
                                    <span className="text-navy font-bold line-through decoration-teal/40 decoration-2 italic uppercase tracking-widest text-sm">Policies and Processes.</span>
                                </motion.p>
                            </div>
                            <div className="lg:col-span-8">
                                <motion.h2
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="text-6xl md:text-8xl font-serif italic text-teal tracking-tighter leading-none"
                                >
                                    Meta means <span className="text-navy">beyond.</span>
                                </motion.h2>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-20 border-t border-navy/5 pt-20"
                        >
                            <p className="text-3xl md:text-5xl text-navy/90 leading-snug tracking-tighter font-light">
                                "We look <span className="text-teal font-serif italic font-bold">beyond</span> policies and processes to the <br />
                                <span className="text-teal font-serif italic font-bold">heart</span> of potential. We understand what <br />
                                truly drives people to excel."
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="mt-32 max-w-4xl"
                            >
                                <h3 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tighter">Welcome to MetaHR</h3>
                                <div className="space-y-6">
                                    <p className="text-xl text-navy/60 leading-relaxed font-light">
                                        We believe that every individual is capable of greatness—with the right support. As a trusted HR consulting firm, we specialize in delivering tailored, results-driven solutions that empower individuals and align with your business goals and workforce needs.
                                    </p>
                                    <p className="text-xl text-navy/60 leading-relaxed font-light">
                                        Whether you're a startup building your first HR function or an established company looking to scale your people strategy, MetaHR is here to help you drive meaningful, lasting growth—at every stage.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Perspective & Experience */}
            <section className="py-32 bg-beige/30 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Experience.Inventory // Global_Reach</span>
                            <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 tracking-tighter leading-none">Global Perspective. <br />Dedicated Precision.</h2>
                            <p className="text-xl text-teal mb-12 leading-relaxed font-light">
                                With over <span className="font-bold underline decoration-navy/20">26 years of industry expertise</span>, we have coached leaders across the Americas, Europe, MENA, and Asia Pacific.
                            </p>
                            <div className="space-y-10">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-teal shadow-2xl shadow-navy/5 shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-navy text-lg mb-2">International Reach</h4>
                                        <p className="text-navy/40 font-medium">Cross-cultural leadership development in diverse markets.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-teal shadow-2xl shadow-navy/5 shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-navy text-lg mb-2">Senior Expertise</h4>
                                        <p className="text-navy/40 font-medium">Led by experience in Fortune 500 and high-growth startups.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6 pt-12">
                                    <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-navy/5 border border-navy/5 group hover:bg-navy transition-all duration-500">
                                        <span className="text-5xl font-black text-teal block mb-3 group-hover:text-white transition-colors">26+</span>
                                        <span className="text-navy/40 font-mono font-bold uppercase tracking-widest text-[10px] group-hover:text-teal transition-colors">Years_Experience</span>
                                    </div>
                                    <div className="bg-navy p-10 rounded-[3rem] shadow-2xl shadow-navy/20 text-white border border-white/10 group hover:bg-white transition-all duration-500">
                                        <span className="text-5xl font-black text-teal block mb-3">4+</span>
                                        <span className="text-white/70 font-mono font-bold uppercase tracking-widest text-[10px] group-hover:text-navy transition-colors">Continents</span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-teal p-10 rounded-[3rem] shadow-2xl shadow-teal/20 text-white border border-white/10 group hover:bg-navy transition-all duration-500">
                                        <span className="text-5xl font-black text-white block mb-3">500+</span>
                                        <span className="text-white/70 font-mono font-bold uppercase tracking-widest text-[10px] group-hover:text-teal transition-colors">Leaders_Coached</span>
                                    </div>
                                    <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-navy/5 border border-navy/5 group hover:bg-navy transition-all duration-500">
                                        <span className="text-5xl font-black text-teal block mb-3 group-hover:text-white transition-colors">100%</span>
                                        <span className="text-navy/40 font-mono font-bold uppercase tracking-widest text-[10px] group-hover:text-teal transition-colors">Commitment</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Inspiring Growth Section (New from Screenshot) */}
            <section className="py-32 bg-white overflow-hidden relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-black text-navy mb-12 tracking-tighter leading-none">
                                Inspiring Growth. <br />
                                <span className="text-teal">Delivering Impact.</span>
                            </h2>

                            <div className="space-y-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-10 border-l-4 border-teal bg-beige/10 rounded-r-[3rem] shadow-xl shadow-navy/5"
                                >
                                    <h4 className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-4 block">Purpose</h4>
                                    <p className="text-xl text-navy/70 leading-relaxed font-light italic">
                                        To be the partner of choice for organizations—unlocking excellence in their people, inspiring transformation in their operations, and delivering meaningful, measurable outcomes.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="px-4"
                                >
                                    <h4 className="text-[10px] font-mono font-bold tracking-[0.4em] text-navy/40 uppercase block mb-4">Direction</h4>
                                    <p className="text-lg text-navy/60 leading-relaxed font-light">
                                        We partner with organizations to elevate human potential, streamline operational performance, and deliver data-driven solutions that lead to sustainable success. Through collaboration, innovation, and a deep commitment to impact, we help our clients thrive in a dynamic world.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl shadow-navy/20 relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                    alt="MetaHR Strategic Impact"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-700"></div>

                                {/* Floating Badge */}
                                <div className="absolute top-10 right-10 z-20">
                                    <div className="bg-white/90 backdrop-blur-xl p-8 rounded-full shadow-2xl border border-white/20 hover:scale-110 transition-transform duration-500">
                                        <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white">
                                            <Target size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background circle */}
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal/10 rounded-full blur-[100px] -z-10"></div>
                            <div className="absolute -top-20 -left-20 w-80 h-80 bg-navy/5 rounded-full blur-[100px] -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="py-32 bg-beige/30" id="services">
                <div className="container mx-auto px-6">
                    <div className="mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-4 block">Core_Services // System_Mapping</span>
                        <h3 className="text-4xl md:text-6xl font-black text-navy tracking-tighter">Strategic Impact Areas.</h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* 1. Team Cohesion: Diagnostic Shuffler */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[3rem] p-12 border border-navy/5 shadow-2xl shadow-navy/5 relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                    <Users />
                                </div>
                                <h4 className="text-2xl font-black text-navy mb-6 tracking-tight">Team Cohesion</h4>
                                <p className="text-navy/50 leading-relaxed mb-10 min-h-[100px]">
                                    Building unified teams through behavioral clarity. We map trust, conflict, and commitment protocols to unlock collective ownership.
                                </p>

                                <div className="relative h-24 mb-10 overflow-hidden rounded-2xl bg-beige/50 border border-navy/5 p-4">
                                    <motion.div
                                        animate={{ y: ["0%", "-33.33%", "-66.66%", "0%"] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="space-y-4"
                                    >
                                        {["[ PROTOCOL: TRUST ]", "[ PROTOCOL: CONFLICT ]", "[ PROTOCOL: COMMITMENT ]"].map((p) => (
                                            <div key={p} className="text-[10px] font-mono font-bold text-teal text-center h-12 flex items-center justify-center text-xs">
                                                {p}
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                <Link to="/solutions?type=team" className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy border-b-2 border-teal pb-1 hover:text-teal transition-colors">
                                    Explore_Protocol
                                </Link>
                            </div>
                        </motion.div>

                        {/* 2. Leadership: Telemetry Typewriter */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-navy rounded-[3rem] p-12 border border-white/5 shadow-2xl shadow-navy/20 relative overflow-hidden group text-white"
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-teal text-white rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-teal/20">
                                    <Zap />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-6 tracking-tight">Leadership Excellence</h4>
                                <p className="text-white/70 leading-relaxed mb-10 min-h-[100px]">
                                    Developing leaders who inspire high performance. Our telemetry platform tracks behavior shift across five exemplary practices.
                                </p>

                                <div className="mb-10 p-4 bg-black/40 rounded-2xl border border-white/10 min-h-[80px] flex items-center justify-center">
                                    <span className="text-[10px] font-mono font-bold text-teal animate-pulse text-center leading-relaxed">
                                        "TITLE_GRANTED // <br />BEHAVIOR_EARNS_RESPECT"
                                    </span>
                                </div>

                                <Link to="/solutions?type=leadership" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b-2 border-teal pb-1 hover:text-teal transition-colors">
                                    Join_Performance_Lab
                                </Link>
                            </div>
                        </motion.div>

                        {/* 3. HR Strategy: Protocol Scheduler */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[3rem] p-12 border border-navy/5 shadow-2xl shadow-navy/5 relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-skyBlue text-navy rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                    <Target />
                                </div>
                                <h4 className="text-2xl font-black text-navy mb-6 tracking-tight">HR Strategy</h4>
                                <p className="text-navy/50 leading-relaxed mb-10 min-h-[100px]">
                                    Scaling human capital systems. We provide the strategic architecture for audits, sourcing, and compliance optimization.
                                </p>

                                <div className="grid grid-cols-4 gap-2 mb-10 h-24">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className={`rounded-lg border border-navy/5 ${i === 2 || i === 5 ? 'bg-teal animate-pulse' : 'bg-beige/40'}`}></div>
                                    ))}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                        <ArrowRight size={16} className="text-navy/20 rotate-45" />
                                    </div>
                                </div>

                                <Link to="/solutions?type=strategy" className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy border-b-2 border-teal pb-1 hover:text-teal transition-colors">
                                    Review_Framework
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Methodology: Sticky Stacking Archive */}
            <section className="py-32 bg-navy text-white overflow-hidden" id="methodology">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-5 sticky top-32">
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Methodology.01 // The_Stack</span>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">The Six <br /><span className="text-teal font-serif italic">Disciplines.</span></h3>
                            <p className="text-white/70 text-xl font-light leading-relaxed max-w-sm mb-12">
                                Breakthrough learning only counts when it translates into measurable business results.
                            </p>
                            <Link to="/solutions" className="bg-white text-navy px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal hover:text-white transition-all shadow-2xl shadow-white/5 inline-block">
                                [ Learn_More_About_6Ds ]
                            </Link>
                        </div>

                        <div className="lg:col-span-7 space-y-8">
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
                                    className="bg-navy border border-white/10 p-12 rounded-[4rem] hover:bg-white/10 transition-all cursor-default group sticky"
                                    style={{ top: `${120 + (i * 40)}px` }}
                                >
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="text-[10px] font-mono font-bold text-teal">0{i + 1} // PROTOCOL</span>
                                        <div className={`w-3 h-3 rounded-full ${d.accent || 'bg-white/40'}`}></div>
                                    </div>
                                    <h4 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">{d.step}</h4>
                                    <p className="text-white/70 text-lg font-light leading-relaxed mb-6">{d.desc}</p>

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

            {/* Assessment Descriptions (Precision Science) */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-4 block">Precision_Science // Assessment_Protocols</span>
                        <h2 className="text-4xl md:text-6xl font-black text-navy tracking-tighter">Human Impact Tools.</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-16 border border-navy/5 bg-beige/10 rounded-[4rem] hover:border-teal/30 hover:shadow-3xl transition-all duration-700 group"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <h3 className="text-4xl font-black text-navy tracking-tight">Hogan Assessment</h3>
                                <div className="w-4 h-4 rounded-full bg-navy animate-pulse"></div>
                            </div>
                            <p className="text-navy/60 text-xl font-light mb-12 leading-relaxed">
                                Understanding the "Bright Side" (strengths) and the "Dark Side" (derailers) of personality that emerge under pressure.
                            </p>
                            <ul className="space-y-6 mb-16">
                                {[
                                    "Hogan Personality Inventory (HPI)",
                                    "Hogan Development Survey (HDS)",
                                    "Motives, Values, & Preferences (MVPI)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4 text-navy font-bold text-sm tracking-tight">
                                        <div className="w-2 h-2 rounded-full bg-teal"></div>
                                        <span className="uppercase tracking-widest">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/resources" className="bg-navy text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] inline-block hover:bg-teal transition-all shadow-xl hover:shadow-teal/20">
                                [ Explore_Hogan ]
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-16 border border-navy/5 bg-navy rounded-[4rem] text-white hover:shadow-3xl transition-all duration-700 group"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <h3 className="text-4xl font-black text-white tracking-tight">CliftonStrengths®</h3>
                                <div className="w-4 h-4 rounded-full bg-teal shadow-[0_0_15px_#567C8D]"></div>
                            </div>
                            <p className="text-white/70 text-xl font-light mb-12 leading-relaxed">
                                Moving from a "fix-it" mentality to a strengths-based approach. Unlocking what you do best.
                            </p>
                            <ul className="space-y-6 mb-16">
                                {[
                                    "Identify Top 5 Core Talent Themes",
                                    "Strength-Based Team Workshops",
                                    "High-Performance Individual Coaching"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4 text-white font-bold text-sm tracking-tight">
                                        <div className="w-2 h-2 rounded-full bg-teal"></div>
                                        <span className="uppercase tracking-widest">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/resources" className="text-teal font-black text-[10px] uppercase tracking-[0.3em] flex items-center group">
                                Learn_More_About_Gallup <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Engagement Formats (How We Work) */}
            <section className="py-32 bg-beige/30 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <div className="mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-4 block">Delivery.Systems // How_We_Operate</span>
                        <h2 className="text-4xl md:text-6xl font-black text-navy tracking-tighter">Engagement Formats.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Virtual Delivery", desc: "Seamless, interactive global sessions via digital platforms.", icon: <Globe size={32} /> },
                            { title: "In-Person Workshops", desc: "Immersion-based learning at your office or chosen location.", icon: <Users size={32} /> },
                            { title: "Offsite Retreats", desc: "Dedicated high-impact sessions for leadership alignment.", icon: <Target size={32} /> }
                        ].map((format, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-12 border border-navy/5 rounded-[4rem] bg-white hover:bg-navy hover:text-white transition-all duration-500 group relative overflow-hidden shadow-2xl shadow-navy/5"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-full -mr-12 -mt-12 group-hover:bg-teal/20 transition-all duration-700"></div>
                                <div className="w-20 h-20 rounded-3xl bg-beige flex items-center justify-center text-teal mb-10 mx-auto group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
                                    {format.icon}
                                </div>
                                <h4 className="text-2xl font-black mb-6 tracking-tight group-hover:text-white transition-colors">{format.title}</h4>
                                <p className="text-navy/40 group-hover:text-white/70 leading-relaxed font-medium transition-colors">{format.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Magnet: Cohesion Snapshot */}
            <section className="py-32 bg-navy relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-[5rem] p-16 md:p-24 shadow-3xl flex flex-col items-center text-center relative z-10 border border-white/10">
                        <div className="w-24 h-24 bg-teal/10 rounded-3xl flex items-center justify-center mb-12 animate-pulse-slow">
                            <FileText className="text-teal" size={48} />
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black text-navy mb-8 tracking-tighter leading-none">Request the <br /><span className="text-teal font-serif italic">Cohesion Snapshot.</span></h2>
                        <p className="text-navy/50 text-xl max-w-3xl mb-16 font-light leading-relaxed">
                            Take the first step toward high-performance. Our Cohesion Snapshot provides an immediate benchmark of your team's alignment.
                        </p>
                        <form className="w-full max-w-2xl mb-12">
                            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-beige/50 rounded-full border border-navy/5 focus-within:border-teal/50 transition-all">
                                <input
                                    type="email"
                                    placeholder="Enter_Business_Email"
                                    className="flex-grow px-10 py-5 rounded-full bg-transparent border-none outline-none font-mono text-xs font-bold uppercase tracking-widest text-navy placeholder:text-navy/30"
                                />
                                <button className="bg-navy text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all shadow-xl hover:scale-[1.03] active:scale-95">
                                    Get_Snapshot
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                            <span className="text-navy/30 text-[10px] font-mono font-bold uppercase tracking-widest italic">Join 500+ leaders optimizing their team performance.</span>
                        </div>
                    </div>
                </div>
                {/* Decorative Laser Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>

            {/* Testimonials / Experience Slider */}
            <section className="py-40 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto bg-navy rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden ring-1 ring-navy/10">
                        <Quote className="text-teal mb-12 mx-auto opacity-40" size={80} />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeQuote}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-3xl md:text-5xl font-serif italic text-white mb-16 leading-tight tracking-tight">
                                    "{quotes[activeQuote].text}"
                                </p>
                                <div className="space-y-2">
                                    <p className="text-teal font-black uppercase tracking-[0.3em] text-[10px]">{quotes[activeQuote].author}</p>
                                    <p className="text-white/20 font-mono text-[10px] tracking-widest uppercase">Benchmarked_Wisdom</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-center space-x-2 mt-16">
                            {quotes.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveQuote(i)}
                                    className={`h-1 transition-all duration-500 rounded-full ${activeQuote === i ? 'bg-teal w-12' : 'bg-white/10 w-4'}`}
                                />
                            ))}
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal/5 rounded-full blur-[100px]"></div>
                    </div>
                </div>
            </section>

            {/* Projects Section: Outcome Achieved Artifacts */}
            <section className="py-40 bg-beige/30 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Artifact.Library // Case_Studies</span>
                            <h2 className="text-4xl md:text-7xl font-black text-navy tracking-tighter leading-none">Diagnostic <br /><span className="text-teal font-serif italic">Results.</span></h2>
                        </div>
                        <Link to="/solutions" className="bg-navy text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all mb-4">
                            [ View_All_Artifacts ]
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {loading ? (
                            [...Array(2)].map((_, i) => (
                                <div key={i} className="aspect-[4/5] bg-navy/5 animate-pulse rounded-[4rem]" />
                            ))
                        ) : (
                            projects.slice(0, 2).map((project, i) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer bg-white rounded-[4rem] overflow-hidden p-6 shadow-3xl shadow-navy/5 border border-navy/5 flex flex-col h-full"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-10">
                                        <img
                                            src={project.featured_image_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'}
                                            alt={project.title.rendered}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-700"></div>
                                        <div className="absolute top-10 right-10">
                                            <span className="px-6 py-2 rounded-full border border-teal/60 text-teal text-[10px] font-mono font-bold uppercase tracking-widest bg-black/40 backdrop-blur-xl animate-status-beat">
                                                Outcome // Achieved
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6 flex flex-col flex-grow">
                                        <h3 className="text-3xl md:text-4xl font-black text-navy group-hover:text-teal transition-colors mb-6 tracking-tight" dangerouslySetInnerHTML={{ __html: project.title.rendered }} />
                                        <div
                                            className="text-navy/40 text-lg font-light leading-relaxed mb-10 line-clamp-3 flex-grow"
                                            dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
                                        />
                                        <div className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-navy group-hover:text-teal transition-colors">
                                            Review_Detailed_Artifact <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Strategic Footer CTA */}
            <section className="py-40 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-7xl font-black text-navy mb-16 tracking-tighter leading-none">
                            Ready to <br /><span className="text-teal font-serif italic leading-tight">elevate</span> your organization?
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

export default Home;

