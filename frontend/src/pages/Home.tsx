import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Quote, Globe, Award, Users, Target, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import { useProjects } from '../hooks/useProjects';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MethodologyCard = ({ d, i, containerRef }: { d: { step: string, desc: string, accent?: string, scan?: boolean, pulse?: boolean }, i: number, containerRef: React.RefObject<any> }) => {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: [`${i * 0.15} start`, "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.4]);
    const z = useTransform(scrollYProgress, [0, 0.4], [0, -100]);

    return (
        <motion.div
            style={{
                position: 'sticky',
                top: `${140 + (i * 30)}px`,
                zIndex: i,
                scale,
                opacity,
                z,
                perspective: 1000
            }}
            className="bg-navy border border-white/10 p-12 rounded-[4rem] hover:bg-white/10 transition-all cursor-default group origin-top shadow-2xl"
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
    );
};

const Home = () => {
    const { projects, loading } = useProjects();
    const [activeQuote, setActiveQuote] = useState(0);
    const methodologyRef = useRef<HTMLElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

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

    // Mouse Parallax for Tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);

    // Scroll Parallax for Background and Depth
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
    const textZ = useTransform(scrollY, [0, 500], [0, 100]);
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = heroRef.current?.getBoundingClientRect();
        if (rect) {
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        }
    };

    return (
        <div className="relative overflow-x-hidden pt-0 bg-white">
            {/* Hero Section */}
            <section
                ref={heroRef}
                onMouseMove={handleMouseMove}
                className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy"
            >
                {/* Background Depth Layers */}
                <motion.div
                    style={{ y: backgroundY }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-black/90"></div>

                    {/* Perspective Grid/Laser Lines */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(to right, #567C8D 1px, transparent 1px), linear-gradient(to bottom, #567C8D 1px, transparent 1px)',
                            backgroundSize: '100px 100px',
                            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent)'
                        }}
                    ></div>
                </motion.div>

                <motion.div
                    style={{
                        perspective: 1200,
                        rotateX,
                        rotateY,
                        z: textZ,
                        opacity: opacityHero
                    }}
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
                        initial={{ opacity: 0, y: 30, z: -200 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="text-4xl md:text-7xl font-black !text-white mb-4 tracking-tighter leading-tight"
                    >
                        Maximize <br />
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="font-serif italic text-teal leading-tight inline-block"
                        >
                            Potential.
                        </motion.span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30, z: -100 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-2xl md:text-4xl font-serif italic text-white/90 mb-8 tracking-tight group"
                    >
                        Elevate <span className="group-hover:text-teal transition-colors duration-500">Organizations.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20, z: -50 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        className="text-sm md:text-lg !text-beige/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                    >
                        Tailored HR solutions that drive behavioral change and organizational growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20, z: -30 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                            <Link to="/solutions" className="bg-teal text-white px-10 py-4 rounded-full font-bold flex items-center group overflow-hidden relative shadow-2xl shadow-teal/30 transition-all duration-300">
                                <span className="relative z-10 text-base uppercase tracking-widest font-black">Our Solutions</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                <span className="relative z-20 ml-3 group-hover:text-navy transition-colors duration-500"><ArrowRight size={18} /></span>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a href="#methodology" className="text-white/60 font-mono font-bold tracking-widest uppercase text-[10px] border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-navy transition-all backdrop-blur-sm">
                                [ View_Methodology ]
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

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

            {/* Philosophy Manifesto */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <span className="text-teal/40 font-mono font-bold text-xs tracking-[0.3em] uppercase underline decoration-teal/20 underline-offset-8 block mb-8">Philosophy.Manifesto</span>
                        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
                            <div className="lg:col-span-4">
                                <p className="text-navy/60 text-xl font-light leading-relaxed">
                                    Most HR focus on: <br />
                                    <span className="text-navy font-bold line-through decoration-teal/40 decoration-2 italic uppercase tracking-widest text-sm">Policies and Processes.</span>
                                </p>
                            </div>
                            <div className="lg:col-span-8">
                                <h2 className="text-6xl md:text-8xl font-serif italic text-teal tracking-tighter leading-none">Meta means <span className="text-navy">beyond.</span></h2>
                            </div>
                        </div>
                        <p className="text-3xl md:text-5xl text-navy/90 leading-snug tracking-tighter font-light border-t border-navy/5 pt-20">
                            "We look <span className="text-teal font-serif italic font-bold">beyond</span> policies and processes to the <br />
                            <span className="text-teal font-serif italic font-bold">heart</span> of potential. We understand what truly drives people to excel."
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Inventory */}
            <section className="py-32 bg-beige/30 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Experience.Inventory // Global_Reach</span>
                            <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 tracking-tighter leading-none">Global Perspective. <br />Dedicated Precision.</h2>
                            <p className="text-xl text-teal mb-12 leading-relaxed font-light">With over 26 years of industry expertise, we have coached leaders globally.</p>
                            <div className="space-y-10">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-teal shadow-2xl group-hover:bg-navy group-hover:text-white transition-all shadow-navy/5 shrink-0"><Globe size={24} /></div>
                                    <div><h4 className="font-black text-navy text-lg mb-2">International Reach</h4><p className="text-navy/40 font-medium text-sm">Cross-cultural leadership development in diverse markets.</p></div>
                                </div>
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-teal shadow-2xl group-hover:bg-navy group-hover:text-white transition-all shadow-navy/5 shrink-0"><Award size={24} /></div>
                                    <div><h4 className="font-black text-navy text-lg mb-2">Senior Expertise</h4><p className="text-navy/40 font-medium text-sm">Led by experience in Fortune 500 and high-growth startups.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 relative">
                            <div className="space-y-6 pt-12">
                                <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-navy/5 hover:bg-navy group transition-all"><span className="text-5xl font-black text-teal block mb-3 group-hover:text-white transition-colors">26+</span><span className="text-navy/40 font-mono font-bold uppercase tracking-widest text-[10px] group-hover:text-teal transition-colors">Years_Experience</span></div>
                                <div className="bg-navy p-10 rounded-[3rem] shadow-2xl text-white border border-white/10 hover:bg-white group transition-all"><span className="text-5xl font-black text-teal block mb-3">4+</span><span className="text-white/70 font-mono font-bold uppercase tracking-widest text-[10px] group-hover:text-navy transition-colors">Continents</span></div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-teal p-10 rounded-[4rem] shadow-2xl text-white hover:bg-navy group transition-all"><span className="text-5xl font-black text-white block mb-3">500+</span><span className="text-white/70 font-mono font-bold uppercase tracking-widest text-[10px] group-hover:text-teal transition-colors">Leaders_Coached</span></div>
                                <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-navy/5 hover:bg-navy group transition-all"><span className="text-5xl font-black text-teal block mb-3 group-hover:text-white transition-colors">100%</span><span className="text-navy/40 font-mono font-bold uppercase tracking-widest text-[10px] group-hover:text-teal transition-colors">Commitment</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Impact Areas */}
            <section className="py-32 bg-white" id="services">
                <div className="container mx-auto px-6">
                    <div className="mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-4 block">Core_Services // System_Mapping</span>
                        <h3 className="text-4xl md:text-6xl font-black text-navy tracking-tighter">Strategic Impact Areas.</h3>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Team Cohesion */}
                        <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[3rem] p-12 border border-navy/5 shadow-2xl group">
                            <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform"><Users /></div>
                            <h4 className="text-2xl font-black text-navy mb-6 tracking-tight">Team Cohesion</h4>
                            <p className="text-navy/50 leading-relaxed mb-10 min-h-[100px]">Building unified teams through behavioral clarity. We map trust, conflict, and commitment protocols.</p>
                            <Link to="/solutions?type=team" className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy border-b-2 border-teal pb-1 hover:text-teal">Explore_Protocol</Link>
                        </motion.div>
                        {/* Leadership Excellence */}
                        <motion.div whileHover={{ y: -10 }} className="bg-navy rounded-[3rem] p-12 border border-white/5 shadow-2xl group text-white">
                            <div className="w-16 h-16 bg-teal text-white rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform"><Zap /></div>
                            <h4 className="text-2xl font-black text-white mb-6 tracking-tight">Leadership Excellence</h4>
                            <p className="text-white/80 leading-relaxed mb-10 min-h-[100px]">Developing leaders who inspire high performance. Our telemetry platform tracks behavior shift.</p>
                            <Link to="/solutions?type=leadership" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b-2 border-teal pb-1 hover:text-teal">Join_Performance_Lab</Link>
                        </motion.div>
                        {/* HR Strategy */}
                        <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[3rem] p-12 border border-navy/5 shadow-2xl group">
                            <div className="w-16 h-16 bg-skyBlue text-navy rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform"><Target /></div>
                            <h4 className="text-2xl font-black text-navy mb-6 tracking-tight">HR Strategy</h4>
                            <p className="text-navy/50 leading-relaxed mb-10 min-h-[100px]">Scaling human capital systems. Strategic architecture for audits, sourcing, and compliance optimization.</p>
                            <Link to="/solutions?type=strategy" className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy border-b-2 border-teal pb-1 hover:text-teal">Review_Framework</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Methodology: Sticky Stacking Archive */}
            <section ref={methodologyRef} className="py-32 bg-navy text-white overflow-hidden" id="methodology">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-5 sticky top-32">
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Methodology.01 // The_Stack</span>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">The Six <br /><span className="text-teal font-serif italic">Disciplines.</span></h3>
                            <p className="text-white/70 text-xl font-light leading-relaxed max-w-sm mb-12">Breakthrough learning translates into measurable business results.</p>
                            <Link to="/solutions" className="bg-white text-navy px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal hover:text-white transition-all shadow-2xl shadow-white/5 inline-block">[ Learn_More_About_6Ds ]</Link>
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
                                <MethodologyCard key={i} d={d} i={i} containerRef={methodologyRef} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Human Impact Tools */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 text-navy">
                    <div className="mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-4 block">Precision_Science // Assessment_Protocols</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Human Impact Tools.</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Hogan */}
                        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true }} className="p-16 border rounded-[4rem] bg-beige/10 hover:shadow-3xl transition-all group">
                            <h3 className="text-4xl font-black mb-12">Hogan Assessment</h3>
                            <ul className="space-y-6 mb-16">
                                {["Hogan Personality Inventory", "Hogan Development Survey", "Motives, Values, & Preferences"].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4 font-bold text-sm"><div className="w-2 h-2 rounded-full bg-teal" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <Link to="/resources" className="bg-navy text-white px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.3em] inline-block hover:bg-teal">Explore_Hogan</Link>
                        </motion.div>
                        {/* CliftonStrengths */}
                        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true }} className="p-16 border rounded-[4rem] bg-navy text-white hover:shadow-3xl transition-all group">
                            <h3 className="text-4xl font-black mb-12">CliftonStrengths®</h3>
                            <ul className="space-y-6 mb-16">
                                {["Identify Top 5 Core Talent Themes", "Strength-Based Team Workshops", "High-Performance Individual Coaching"].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4 font-bold text-sm"><div className="w-2 h-2 rounded-full bg-teal" /><span>{item}</span></li>
                                ))}
                            </ul>
                            <Link to="/resources" className="text-teal font-black text-[10px] uppercase tracking-[0.3em] flex items-center group">Learn_More_About_Gallup<ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" /></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Engagement Formats */}
            <section className="py-32 bg-beige/50 relative">
                <div className="container mx-auto px-6 text-center text-navy">
                    <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">Engagement Formats.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Virtual Delivery", desc: "Seamless, interactive global sessions via digital platforms.", icon: <Globe size={32} /> },
                            { title: "In-Person Workshops", desc: "Immersion-based learning at your office or chosen location.", icon: <Users size={32} />, active: true },
                            { title: "Offsite Retreats", desc: "Dedicated high-impact sessions for leadership alignment.", icon: <Target size={32} /> }
                        ].map((format, i) => (
                            <motion.div key={i} whileHover={{ y: -10 }} className={`p-12 border rounded-[4rem] transition-all shadow-2xl ${format.active ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-navy hover:text-white'}`}>
                                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 mx-auto ${format.active ? 'bg-white/10' : 'bg-beige group-hover:bg-white/10'}`}>{format.icon}</div>
                                <h4 className="text-2xl font-black mb-6 tracking-tight">{format.title}</h4>
                                <p className="leading-relaxed font-medium opacity-70 italic">{format.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Magnet */}
            <section className="py-32 bg-navy">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-[5rem] p-16 md:p-24 text-center text-navy border border-white/10 shadow-3xl">
                        <FileText className="text-teal mb-12 mx-auto" size={48} />
                        <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Request the <br /><span className="text-teal font-serif italic">Cohesion Snapshot.</span></h2>
                        <form className="max-w-2xl mx-auto mb-12">
                            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-beige/50 rounded-full border border-navy/5">
                                <input type="email" placeholder="Enter_Business_Email" className="flex-grow px-10 py-5 rounded-full bg-transparent border-none outline-none font-mono text-xs font-bold uppercase tracking-widest text-navy" />
                                <button className="bg-navy text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all">Get_Snapshot</button>
                            </div>
                        </form>
                        <span className="text-navy/30 text-[10px] font-mono font-bold uppercase tracking-widest italic">Join 500+ leaders optimizing performance.</span>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-40 bg-white overflow-hidden text-center">
                <div className="max-w-6xl mx-auto bg-navy rounded-[5rem] p-12 md:p-32 text-white relative">
                    <Quote className="text-teal mb-12 mx-auto opacity-40" size={80} />
                    <AnimatePresence mode="wait">
                        <motion.div key={activeQuote} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <p className="text-3xl md:text-5xl font-serif italic mb-16 leading-tight">"{quotes[activeQuote].text}"</p>
                            <span className="text-teal font-black uppercase tracking-[0.3em] text-[10px]">{quotes[activeQuote].author}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-40 bg-beige/30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between mb-24 items-end">
                        <h2 className="text-4xl md:text-7xl font-black text-navy tracking-tighter leading-none">Diagnostic <br /><span className="text-teal font-serif italic">Results.</span></h2>
                        <Link to="/solutions" className="bg-navy text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal mb-4">[ View_All_Artifacts ]</Link>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16">
                        {loading ? [1, 2].map(i => <div key={i} className="aspect-[4/5] bg-navy/5 animate-pulse rounded-[4rem]" />) : projects.slice(0, 2).map((project) => (
                            <motion.div key={project.id} className="bg-white rounded-[4rem] overflow-hidden p-6 border border-navy/5 shadow-2xl flex flex-col h-full group">
                                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-10 relative">
                                    <img src={project.featured_image_url || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute top-10 right-10 px-6 py-2 rounded-full border border-teal text-teal text-[10px] font-mono font-bold uppercase tracking-widest bg-black/40 backdrop-blur-xl animate-status-beat">Outcome // Achieved</div>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-navy group-hover:text-teal mb-6 tracking-tight" dangerouslySetInnerHTML={{ __html: project.title.rendered }} />
                                <div className="text-navy/40 text-lg font-light mb-10 line-clamp-3 flex-grow" dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }} />
                                <div className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-navy group-hover:text-teal">Review_Detailed_Artifact <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" /></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-white text-center">
                <h2 className="text-4xl md:text-7xl font-black text-navy mb-16 tracking-tighter leading-none">Ready to <br /><span className="text-teal font-serif italic leading-tight">elevate</span> your organization?</h2>
                <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-12">
                    <Link to="/contact" className="bg-navy text-white px-16 py-8 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all shadow-3xl hover:scale-[1.03]">Book Your Alignment Call</Link>
                    <Link to="/contact" className="text-navy font-mono font-bold text-[10px] uppercase tracking-widest border border-navy/10 px-16 py-8 rounded-full hover:bg-beige transition-all hover:scale-[1.03]">[ Request_Diagnostic ]</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
