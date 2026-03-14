import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Quote, Globe, Users, Target, Zap, CheckCircle, Lightbulb, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import FAQ from '../components/FAQ';

const Home = () => {
    useEffect(() => {
        document.title = "MetaHR | Strategic HR & Leadership Performance Consulting";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", "Moving beyond policies to strategic alignment. Specialized in leadership development, team coaching, and performance analytics for sustainable growth.");
    }, []);

    const [ctaWordIndex, setCtaWordIndex] = useState(0);
    const ctaWords = [
        "Leadership Development",
        "Team Development",
        "Individual Development",
        "Executive Coaching",
        "Organizational Effectiveness"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCtaWordIndex((prev) => (prev + 1) % ctaWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    const heroRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

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

    const credentials = [
        { name: "Leadership Challenge", img: "/leadership_logo.jpg" },
        { name: "Hogan Assessments", img: "/hogan_assessor.png" },
        { name: "Gallup Certified Coach", img: "/gallup_logo.png" },
        { name: "MTa Licensed User", img: "/mta_logo.jpg" },
        { name: "SHRM-SCP", img: "/shrm_scp_logo.png" }
    ];

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
                    {/* Background Video Layer */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <iframe
                            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-40 scale-110"
                            src="https://www.youtube.com/embed/qzDm2ur9iWc?autoplay=1&mute=1&loop=1&playlist=qzDm2ur9iWc&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
                            allow="autoplay; encrypted-media"
                            title="Hero Background Video"
                            frameBorder="0"
                        ></iframe>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/60 to-navy z-10"></div>

                    {/* Perspective Grid/Laser Lines */}
                    <div className="absolute inset-0 opacity-20 z-20"
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

                    <motion.h1
                        initial={{ opacity: 0, y: 30, z: -200 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black !text-white mb-6 tracking-tighter leading-tight"
                    >
                        Maximize Potential. 
                        <motion.span 
                            className="font-serif italic font-bold text-skyBlue drop-shadow-[0_0_10px_rgba(200,217,230,0.8)] leading-tight inline-block"
                            animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        >
                            Elevate Organizations.
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20, z: -50 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        className="text-sm md:text-xl lg:text-2xl !text-beige/60 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        We strengthen leadership capability, build cohesive teams, and align culture with strategy to accelerate measurable business performance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20, z: -30 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 w-full max-w-lg mx-auto sm:max-w-none px-4"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }} 
                            className="relative group w-full sm:w-auto flex justify-center"
                        >
                            <Link 
                                to="/solutions" 
                                className="bg-teal text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold flex items-center justify-center group overflow-hidden relative shadow-2xl shadow-teal/30 transition-all duration-300 w-full sm:w-auto"
                            >
                                <span className="relative z-10 text-[10px] md:text-sm uppercase tracking-widest font-black group-hover:text-navy transition-colors duration-500">Our Solutions</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                <span className="relative z-20 ml-2 md:ml-3 group-hover:text-navy transition-colors duration-500"><ArrowRight size={16} className="md:w-4.5 md:h-4.5" /></span>
                            </Link>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto flex justify-center"
                        >
                            <Link 
                                to="/ee-in" 
                                className="text-white bg-white/10 backdrop-blur-md px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-[10px] md:text-sm uppercase tracking-widest sm:tracking-[0.2em] hover:bg-teal hover:text-white transition-all shadow-2xl border border-white/20 text-center w-full sm:w-auto flex justify-center items-center group/ai"
                            >
                                <motion.span
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex items-center gap-2"
                                >
                                    Launch AI Analysis <Sparkles size={16} className="text-teal group-hover/ai:text-white" />
                                </motion.span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>


                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>



            {/* The Business Reality */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">The Business Reality</span>
                        <h2 className="text-4xl md:text-7xl font-black text-navy tracking-tighter leading-[0.9] mb-8">
                            Strategy alone <br />
                            <span className="text-teal font-serif italic">does not drive results.</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                        {/* Problems Card - Light Theme */}
                        <div className="group relative overflow-hidden bg-slate-50 p-12 md:p-20 rounded-[4rem] shadow-xl border border-navy/5 flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <h3 className="text-navy text-3xl md:text-5xl font-black tracking-tighter mb-16 leading-tight">
                                    Organizations <br />
                                    <span className="text-red-500 italic font-serif">struggle with:</span>
                                </h3>

                                <ul className="space-y-10">
                                    {[
                                        'Leadership misalignment',
                                        'Low accountability',
                                        'Silos across teams',
                                        'Weak succession pipelines'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center group/item transition-transform hover:translate-x-3 duration-500">
                                            <div className="mr-8 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 shadow-sm group-hover/item:bg-red-500 group-hover/item:text-white transition-all">
                                                <XCircle size={20} />
                                            </div>
                                            <span className="text-navy font-black text-2xl md:text-3xl tracking-tighter leading-none">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Solutions Card - Dark Premium Anchor */}
                        <div className="group relative overflow-hidden bg-navy p-12 md:p-20 rounded-[4rem] shadow-2xl text-white border border-white/5 flex flex-col justify-center">
                            <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-1000">
                                <img src="/business_reality_quote_bg.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-navy via-transparent to-teal/10 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-2xl rounded-[2rem] flex items-center justify-center mb-12 border border-white/10 group-hover:bg-teal group-hover:border-teal transition-all duration-700">
                                    <Quote className="text-teal" size={40} />
                                </div>
                                <p className="text-4xl md:text-6xl font-light leading-[1.1] tracking-tighter">
                                    The issue is <span className="text-white/40">not intent.</span> <br />
                                    It is <span className="text-skyBlue font-serif italic font-bold drop-shadow-[0_0_10px_rgba(200,217,230,0.8)]">leadership behavior</span> <br />
                                    and <span className="text-skyBlue font-serif italic font-bold drop-shadow-[0_0_10px_rgba(200,217,230,0.8)]">team dynamics.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-40 bg-navy text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal/10 rounded-full blur-[150px] -mr-96 -mt-96"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12"
                        >
                            We <span className="text-skyBlue font-serif italic text-gradient uppercase">elevate people</span> that <br />
                            <span className="text-skyBlue font-serif italic text-gradient uppercase">impact performance.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/40 text-xl font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Comprehensive solutions designed for strategic impact and senior-level execution across five core areas.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-min">
                        {/* 1. Leadership Development - Featured Large */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 group relative overflow-hidden rounded-[4rem] bg-white/5 border border-white/10 p-12 md:p-16 min-h-[500px] flex flex-col justify-end"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/leadership_development_abstract.png" alt="Leadership" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <span className="text-teal font-black tracking-[0.3em] uppercase text-[10px] block mb-4">PROT_01</span>
                                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Leadership Development</h3>
                                <p className="text-white/60 text-lg font-medium leading-relaxed max-w-xl mb-10">
                                    Developing leaders who model values, inspire shared vision, and drive strategic execution through The Leadership Challenge and DiSC.
                                </p>
                                <Link to="/services/leadership-development" className="inline-flex items-center px-8 py-4 bg-teal text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-navy transition-all group/btn">
                                    Examine Capability <ArrowRight className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* 2. Team Development */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-4 group relative overflow-hidden rounded-[4rem] bg-white/5 border border-white/10 p-12 flex flex-col justify-end"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/team_development_abstract.png" alt="Team" className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-teal transition-colors">
                                    <Users className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight">Team <br />Development</h3>
                                <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">
                                    Building cohesive, high-performing teams using the Five Behaviors model.
                                </p>
                                <Link to="/services/team-development" className="text-teal font-black uppercase tracking-widest text-[9px] flex items-center group-hover:text-white transition-colors">
                                    PROTOCOL_VIEW <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={12} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* 3. Executive Coaching */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-5 group relative overflow-hidden rounded-[4rem] bg-white/5 border border-white/10 p-12 flex flex-col justify-end min-h-[400px]"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/executive_coaching_abstract.png" alt="Coaching" className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"></div>
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-teal transition-colors">
                                    <Target className="text-white" size={24} />
                                </div>
                                <h3 className="text-3xl font-black mb-4 tracking-tight">Executive Coaching</h3>
                                <p className="text-white/60 font-medium leading-relaxed mb-8">
                                    Data-driven coaching to unlock leadership potential at the individual level.
                                </p>
                                <Link to="/services/executive-coaching" className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                                    Schedule Consult <ArrowRight className="ml-2" size={12} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* 4. Individual Development */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-3 group relative overflow-hidden rounded-[4rem] bg-white/5 border border-white/10 p-10 flex flex-col"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/individual_development_abstract.png" alt="Individual" className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                            </div>
                            <div className="relative z-10 flex-grow">
                                <div className="w-14 h-14 bg-teal text-white flex items-center justify-center rounded-2xl mb-8 shadow-xl shadow-teal/20 group-hover:scale-110 transition-transform">
                                    <Zap size={28} />
                                </div>
                                <h4 className="text-2xl font-black mb-4 tracking-tight">High-Potential <br />Development</h4>
                                <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">
                                    Strengthening emerging talent through structured growth paths.
                                </p>
                            </div>
                            <Link to="/services/individual-development" className="relative z-10 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-teal transition-colors flex items-center">
                                VIEW_DETAILS <ArrowRight className="ml-2" size={12} />
                            </Link>
                        </motion.div>

                        {/* 5. Organizational Effectiveness */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-4 group relative overflow-hidden rounded-[4rem] bg-teal p-12 flex flex-col justify-end"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/org_effectiveness_abstract.png" alt="Org" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000 mix-blend-overlay" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
                                    <Globe className="text-teal" size={24} />
                                </div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight text-white leading-tight">Organizational <br />Effectiveness</h3>
                                <p className="text-white/80 text-sm font-medium leading-relaxed mb-8">
                                    Aligning culture and strategy for sustainable performance.
                                </p>
                                <Link to="/services/organizational-effectiveness" className="inline-flex items-center px-6 py-3 bg-white text-navy rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-navy hover:text-white transition-all shadow-xl">
                                    System_Audit <ArrowRight className="ml-2" size={12} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Frameworks - Redesigned to match Business Reality section */}
            <section className="py-32 bg-beige/30 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Left Card - Light Premium */}
                        <div className="group relative overflow-hidden bg-white p-12 md:p-16 rounded-[4rem] shadow-xl border border-navy/5 flex flex-col justify-center">
                            <div className="relative z-10">
                                <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Our Frameworks</span>
                                <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tighter leading-tight">Globally Recognized <br /><span className="text-teal font-serif italic">Methodologies.</span></h2>
                                <p className="text-lg text-navy/60 mb-10 leading-relaxed font-light">We leverage proven methodologies to drive transformational change:</p>
                                <ul className="space-y-6">
                                    {[
                                        'The Leadership Challenge',
                                        'The Five Behaviors of a Cohesive Team',
                                        'Strengths Based Leadership',
                                        'Experiential simulations powered by MTa Learning'
                                    ].map((fw, i) => (
                                        <li key={i} className="flex items-center space-x-6 group/item transition-transform hover:translate-x-3 duration-500">
                                            <div className="w-10 h-10 rounded-xl bg-teal/5 flex items-center justify-center text-teal shadow-sm group-hover/item:bg-teal group-hover/item:text-white transition-all shrink-0 border border-teal/10">
                                                <CheckCircle size={18} />
                                            </div>
                                            <h4 className="font-bold text-navy text-lg tracking-tight leading-tight">{fw}</h4>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Card - Dark Premium Anchor */}
                        <div className="group relative overflow-hidden bg-navy p-12 md:p-16 rounded-[4rem] shadow-2xl text-white border border-white/5 flex flex-col justify-center">
                            <div className="absolute inset-0 z-0 opacity-30 group-hover:scale-105 transition-transform duration-1000">
                                <img src="/frameworks_supported_bg.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                                <Lightbulb size={200} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-teal group-hover:border-teal transition-all duration-700">
                                    <Lightbulb size={32} className="text-teal" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Supported <span className="text-teal font-serif italic">By.</span></h2>
                                <p className="text-xl font-light text-white/60 leading-relaxed mb-10">
                                    Psychometric and behavioral tools including:
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['Gallup Strengths', 'Hogan', 'DiSC', 'NLP Frameworks'].map(tool => (
                                        <span key={tool} className="px-6 py-3 bg-white/5 backdrop-blur-md rounded-full font-bold tracking-wide border border-white/10 cursor-default shadow-lg hover:bg-teal hover:border-teal transition-all duration-300">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Measurable Impact */}
            <section className="py-32 bg-white text-center">
                <div className="container mx-auto px-6">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Measurable Impact</span>
                    <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 tracking-tighter">Development without measurement <br /><span className="text-teal font-serif italic leading-tight block mt-2">is activity — not impact.</span></h2>
                    <p className="text-xl text-navy/60 max-w-4xl mx-auto mb-24 leading-relaxed font-light">
                        We define success metrics upfront and apply ROI methodology to ensure development translates into business outcomes.
                    </p>

                    {/* Process Flow */}
                    <div className="flex flex-nowrap items-center justify-center gap-x-1 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-8 max-w-full mx-auto px-2 overflow-x-auto lg:overflow-x-visible hide-scrollbar pt-8 pb-12">
                        {[
                            { name: 'Diagnose', img: '/diagnose_step_bg.png' },
                            { name: 'Design', img: '/design_step_bg.png' },
                            { name: 'Deliver', img: '/deliver_step_bg.png' },
                            { name: 'Measure', img: '/measure_step_bg.png' },
                            { name: 'Reinforce', img: '/reinforce_step_bg.png' }
                        ].map((step, i) => (
                            <div key={step.name} className="flex items-center gap-x-1 sm:gap-x-3 md:gap-x-4 shrink-0 lg:shrink">
                                <div className="group relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-full overflow-hidden flex flex-col items-center justify-center shadow-2xl border border-navy/10 hover:border-teal/50 transition-all cursor-default hover:scale-110 active:scale-95">
                                    <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0">
                                        <img src={step.img} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute inset-0 bg-beige/80 group-hover:bg-navy/80 transition-colors z-[1]"></div>
                                    <div className="relative z-10 text-center px-2">
                                        <span className="font-mono text-teal/50 group-hover:text-teal/80 text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] mb-1 block font-black uppercase tracking-[0.2em] lg:tracking-[0.3em]">Phase_0{i + 1}</span>
                                        <span className="font-black text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl text-navy group-hover:text-white transition-colors tracking-tight leading-tight">{step.name}</span>
                                    </div>
                                </div>
                                {i < 4 && (
                                    <ArrowRight className="text-teal/20 shrink-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Accreditations */}
            <section className="py-24 bg-white border-t border-navy/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase block mb-4">Benchmarked_Wisdom // CREDENTIALS</span>
                        <h2 className="text-4xl md:text-7xl font-black text-navy tracking-tighter leading-none">Professional <br /><span className="text-teal font-serif italic uppercase">Accreditations.</span></h2>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                        {credentials.map((cred, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group transition-all duration-500 transform hover:scale-110"
                            >
                                <img
                                    src={cred.img}
                                    alt={cred.name}
                                    className="h-16 md:h-20 w-auto object-contain drop-shadow-sm"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* FAQ Section */}
            <FAQ
                className="bg-navy"
                dark={true}
                subtitle="Find answers to common inquiries about our methodologies, delivery systems, and measurable impact models."
                footerLinkText="View All FAQs"
                footerLinkHref="/faq"
                items={[
                    {
                        question: "What makes MetaHR different from other HR consultancies in India?",
                        answer: "MetaHR combines globally recognized methodologies and tools with a deep understanding of Indian corporate culture. Our solutions are highly customizable and designed to deliver Level 3 & 4 impact—focusing on measurable behavior change and tangible business ROI, not just training satisfaction."
                    },
                    {
                        question: "How do you ensure the ROI of your programs?",
                        answer: "We use a multi-phase framework that includes pre-assessment benchmarking, defined KPIs (such as turnover, decision speed, and engagement scores), and 180°/360° and post-intervention assessments to clearly measure 'Level 3 & 4' business impact."
                    },
                    {
                        question: "What tools do you use for leadership assessment?",
                        answer: "We are certified practitioners of CliftonStrengths, Everything DiSC, Leadership Preference Index (LPI) and Hogan Assessments. We select the tool that best aligns with your specific organizational goals."
                    },
                    {
                        question: "Which Industries do you serve?",
                        answer: "MetaHR partners with mid-size organizations and large enterprises across industries where leadership capability and organizational effectiveness are critical to performance. Our experience spans Technology, Manufacturing, Financial Services, Consulting, GCCs, and high-growth organizations."
                    },
                    {
                        question: "Can these programs be delivered virtually?",
                        answer: "Absolutely. We utilize high-engagement digital platforms and virtual simulations to ensure that remote and hybrid teams receive the same high-impact development and behavioral depth as in-person cohorts."
                    }
                ]} />

            {/* Call to Action */}
            <section className="py-20 md:py-32 bg-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-navy mb-8 tracking-tighter leading-[1.1] flex flex-wrap justify-center items-baseline gap-x-4">
                        <span className="relative inline-block text-teal min-w-[300px] text-right">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={ctaWords[ctaWordIndex]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="inline-block"
                                >
                                    {ctaWords[ctaWordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        <span className="text-navy">is a <span className="text-teal font-serif italic">strategic advantage.</span></span>
                    </h2>
                    <p className="text-xl md:text-2xl text-navy/50 mb-16 font-light">Let’s build it intentionally.</p>

                    <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 w-full max-w-sm mx-auto sm:max-w-none px-4">
                        <Link to="/contact" className="bg-teal text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-navy hover:-translate-y-1 transition-all shadow-2xl w-full sm:w-auto text-center">
                            Get Started Today
                        </Link>
                        <Link to="/contact" className="text-navy font-mono font-bold text-sm uppercase tracking-widest border border-navy/20 px-12 py-5 rounded-full hover:bg-navy/5 hover:-translate-y-1 transition-all w-full sm:w-auto text-center">
                            [ Book Call ]
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
