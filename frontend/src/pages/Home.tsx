import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Quote, Globe, Award, Users, Target, Zap, CheckCircle, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Home = () => {
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
                        Maximize Potential. <span className="font-serif italic text-teal leading-tight inline-block">Elevate Organizations.</span>
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
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                            <Link to="/solutions" className="bg-teal text-white px-10 py-5 rounded-full font-bold flex items-center group overflow-hidden relative shadow-2xl shadow-teal/30 transition-all duration-300">
                                <span className="relative z-10 text-sm uppercase tracking-widest font-black group-hover:text-navy transition-colors duration-500">Our Solutions</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                <span className="relative z-20 ml-3 group-hover:text-navy transition-colors duration-500"><ArrowRight size={18} /></span>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/contact" className="text-white/60 font-mono font-bold tracking-widest uppercase text-xs border border-white/10 px-8 py-5 rounded-full hover:bg-white hover:text-navy transition-all backdrop-blur-sm">
                                [ Contact Us ]
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>



            {/* The Business Reality */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">The Business Reality</span>
                            <h2 className="text-4xl md:text-6xl font-black text-navy tracking-tighter leading-tight mb-8">Strategy alone <br /><span className="text-teal font-serif italic">does not drive results.</span></h2>
                            <p className="text-navy/60 text-xl font-medium leading-relaxed mb-10">
                                Organizations struggle with:
                            </p>
                            <ul className="space-y-4 mb-10">
                                {['Leadership misalignment', 'Low accountability', 'Silos across teams', 'Weak succession pipelines'].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-4">
                                        <div className="w-2 h-2 bg-teal rounded-full" />
                                        <span className="text-navy font-bold text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="group relative overflow-hidden bg-navy p-12 md:p-16 rounded-[4rem] shadow-2xl text-white border border-teal/20">
                            <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-1000">
                                <img src="/business_reality_quote_bg.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <Quote className="text-teal/40 mb-8" size={60} />
                                <p className="text-3xl md:text-4xl font-light leading-snug tracking-tighter">
                                    The issue is not intent. <br />
                                    It is <span className="text-teal font-serif italic font-bold">leadership behavior</span> and <span className="text-teal font-serif italic font-bold">team dynamics.</span>
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
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-mono font-bold tracking-[0.5em] text-teal uppercase mb-8 block"
                        >
                            Strategic_Ecosystem
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12"
                        >
                            We build systems that <br />
                            <span className="text-teal font-serif italic">elevate performance.</span>
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

            {/* Our Frameworks */}
            <section className="py-32 bg-beige/30 relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Our Frameworks</span>
                            <h2 className="text-4xl md:text-6xl font-black text-navy mb-8 tracking-tighter leading-none">Globally Recognized <br /><span className="text-teal font-serif italic">Methodologies.</span></h2>
                            <p className="text-xl text-navy/60 mb-12 leading-relaxed font-light">We leverage proven methodologies to drive transformational change:</p>
                            <ul className="space-y-6">
                                {[
                                    'The Leadership Challenge',
                                    'The Five Behaviors of a Cohesive Team',
                                    'Strengths Based Leadership',
                                    'Experiential simulations powered by MTa Learning'
                                ].map((fw, i) => (
                                    <li key={i} className="flex items-center space-x-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-teal shadow-xl group-hover:bg-navy group-hover:text-white transition-all shadow-navy/5 shrink-0 border border-navy/5">
                                            <CheckCircle size={20} />
                                        </div>
                                        <h4 className="font-bold text-navy text-xl tracking-tight">{fw}</h4>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="group relative overflow-hidden bg-teal p-12 md:p-16 rounded-[4rem] shadow-2xl text-white border border-white/10">
                            <div className="absolute inset-0 z-0 opacity-30 group-hover:scale-105 transition-transform duration-1000">
                                <img src="/frameworks_supported_bg.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                                <Lightbulb size={200} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-md">
                                    <Lightbulb size={32} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-black mb-6 tracking-tight">Supported By</h3>
                                <p className="text-xl font-light leading-relaxed mb-10">
                                    Psychometric and behavioral tools including:
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['Gallup Strengths', 'Hogan', 'DiSC', 'NLP Frameworks'].map(tool => (
                                        <span key={tool} className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full font-bold tracking-wide border border-white/30 cursor-default shadow-lg hover:bg-white/30 transition-colors">
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
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 max-w-7xl mx-auto">
                        {[
                            { name: 'Diagnose', img: '/diagnose_step_bg.png' },
                            { name: 'Design', img: '/design_step_bg.png' },
                            { name: 'Deliver', img: '/deliver_step_bg.png' },
                            { name: 'Measure', img: '/measure_step_bg.png' },
                            { name: 'Reinforce', img: '/reinforce_step_bg.png' }
                        ].map((step, i) => (
                            <div key={step.name} className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                <div className="group relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden flex flex-col items-center justify-center shadow-2xl border border-navy/10 hover:border-teal/50 transition-all cursor-default">
                                    <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0">
                                        <img src={step.img} alt="" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute inset-0 bg-beige/80 group-hover:bg-navy/80 transition-colors z-[1]"></div>
                                    <div className="relative z-10 text-center">
                                        <span className="font-mono text-teal/50 group-hover:text-teal/80 text-[10px] mb-2 block font-black uppercase tracking-[0.3em]">Phase_0{i + 1}</span>
                                        <span className="font-black text-xl md:text-2xl text-navy group-hover:text-white transition-colors tracking-tight">{step.name}</span>
                                    </div>
                                </div>
                                {i < 4 && (
                                    <ArrowRight className="text-teal/30 rotate-90 md:rotate-0 my-4 md:my-0" size={24} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 md:py-32 bg-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-6 tracking-tighter leading-none">
                        Leadership is a <br /><span className="text-teal font-serif italic block mt-4">strategic advantage.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-navy/50 mb-12 font-light">Let’s build it intentionally.</p>

                    <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                        <Link to="/contact" className="bg-teal text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-navy hover:-translate-y-1 transition-all shadow-2xl">
                            Get Started Today
                        </Link>
                        <Link to="/contact" className="text-navy font-mono font-bold text-sm uppercase tracking-widest border border-navy/20 px-12 py-5 rounded-full hover:bg-navy/5 hover:-translate-y-1 transition-all">
                            [ Book Call ]
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
