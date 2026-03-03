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
                        <div className="bg-navy p-12 md:p-16 rounded-[4rem] shadow-2xl relative text-white border border-teal/20">
                            <Quote className="text-teal/40 mb-8" size={60} />
                            <p className="text-3xl md:text-4xl font-light leading-snug tracking-tighter">
                                The issue is not intent. <br />
                                It is <span className="text-teal font-serif italic font-bold">leadership behavior</span> and <span className="text-teal font-serif italic font-bold">team dynamics.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-32 bg-navy text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">What We Do</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">We partner with organizations across <br /><span className="text-teal font-serif italic">five strategic areas:</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Team Development", desc: "Build aligned, high-performing teams", icon: <Users size={32} />, link: "/services/team-development" },
                            { title: "Leadership Development", desc: "Develop leaders who drive strategic impact", icon: <Award size={32} />, link: "/services/leadership-development" },
                            { title: "Executive Coaching", desc: "Unlock leadership potential", icon: <Target size={32} />, link: "/services/executive-coaching" },
                            { title: "Individual Development", desc: "Strengthen emerging & high-potential talent", icon: <Zap size={32} />, link: "/services/individual-development" },
                            { title: "Organizational Effectiveness", desc: "Align culture, strategy & leadership", icon: <Globe size={32} />, link: "/services/organizational-effectiveness" },
                        ].map((area, index) => (
                            <motion.div key={index} whileHover={{ y: -10 }} className="flex flex-col bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group">
                                <div className="flex-grow">
                                    <div className="w-16 h-16 bg-teal text-white flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-teal/20">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 tracking-tight">{area.title}</h3>
                                    <p className="text-white/60 font-medium leading-relaxed mb-10">{area.desc}</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <Link to={area.link} className="inline-flex items-center text-teal font-black uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
                                        Learn More <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
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
                        <div className="bg-teal p-12 md:p-16 rounded-[4rem] shadow-2xl text-white relative overflow-hidden">
                            <div className="absolute -bottom-10 -right-10 opacity-10">
                                <Lightbulb size={200} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-10">
                                    <Lightbulb size={32} className="text-white" />
                                </div>
                                <h3 className="text-3xl font-black mb-6 tracking-tight">Supported By</h3>
                                <p className="text-xl font-light leading-relaxed mb-10">
                                    Psychometric and behavioral tools including:
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['Gallup Strengths', 'Hogan', 'DiSC', 'NLP Frameworks'].map(tool => (
                                        <span key={tool} className="px-6 py-3 bg-white/20 rounded-full font-bold tracking-wide border border-white/30 cursor-default shadow-lg">
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
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 max-w-6xl mx-auto">
                        {['Diagnose', 'Design', 'Deliver', 'Measure', 'Reinforce'].map((step, i) => (
                            <div key={step} className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
                                <div className="bg-beige text-navy w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center shadow-2xl border border-navy/5 hover:bg-navy hover:text-white transition-all group cursor-default">
                                    <span className="font-mono text-teal/50 text-[10px] mb-2">0{i + 1}</span>
                                    <span className="font-black text-lg md:text-xl group-hover:scale-105 transition-transform tracking-tight">{step}</span>
                                </div>
                                {i < 4 && (
                                    <ArrowRight className="text-teal rotate-90 md:rotate-0 my-4 md:my-0" size={24} />
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
