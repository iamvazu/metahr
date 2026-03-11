import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Settings, ArrowRight, TrendingUp, Briefcase, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollIndicator from '../components/ScrollIndicator';

// Rotating Carousel Gallery to show full images without cropping
const SolutionGallery = ({ images }: { images: { src: string; alt: string }[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="w-full relative group">
            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[3rem] shadow-2xl bg-beige/10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                    >
                        <img 
                            src={images[currentIndex].src} 
                            alt={images[currentIndex].alt} 
                            className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
                        
                        {/* Caption overlay */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-10 left-10 right-10"
                        >
                            <p className="text-white/60 text-[10px] tracking-[0.3em] font-black uppercase mb-2">Project Insight</p>
                            <p className="text-white text-xl font-medium tracking-tight">{images[currentIndex].alt}</p>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="absolute inset-4 flex items-center justify-between pointer-events-none">
                    <button 
                        onClick={(e) => { e.preventDefault(); prev(); }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 pointer-events-auto"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={(e) => { e.preventDefault(); next(); }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 pointer-events-auto"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-6 right-10 flex space-x-2 z-20">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-teal shadow-[0_0_10px_rgba(45,212,191,0.5)]' : 'w-1.5 bg-white/30 hover:bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
            
            {/* Ambient Shadow Effect */}
            <div className="absolute -inset-4 bg-teal/5 blur-3xl -z-10 rounded-full"></div>
        </div>
    );
};


const Solutions = () => {
    useEffect(() => {
        document.title = "HR Solutions & Services | Leadership, Teams, Performance | MetaHR";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", "Explore our premium HR solutions: Leadership Challenge, Five Behaviors of a Team, Executive Coaching, and High-Potential Development programs.");
    }, []);

    const leadershipImages = [
        { src: "/images/solutions/leadership_room.png", alt: "Training Environment" },
        { src: "/images/solutions/leadership_presentation.png", alt: "Leadership Keynote" },
        { src: "/images/solutions/leadership_activity.png", alt: "Experiential Learning Activity" },
        { src: "/images/solutions/leadership_whiteboard.jpg", alt: "Strategy Workshop" }
    ];

    const teamImages = [
        { src: "/images/solutions/team_indoor_activity.png", alt: "Active Team Learning" },
        { src: "/images/solutions/team_workshop.jpg", alt: "Team Synergy Workshop" },
        { src: "/images/solutions/team_construction.jpg", alt: "Collaborative Construction Activity" },
        { src: "/images/solutions/team_beach.jpg", alt: "Outdoor Team Cohesion" },
        { src: "/images/solutions/team_outdoor_strings.jpg", alt: "Precision Team Alignment" }
    ];

    const coachingImages = [
        { src: "/images/solutions/coaching_one_on_one.png", alt: "Executive One-on-One Coaching" },
        { src: "/images/solutions/coaching_cards.png", alt: "Leadership Assessment Discussion" },
        { src: "/images/solutions/coaching_group.png", alt: "Team Strategic Direction" },
        { src: "/images/solutions/coaching_roleplay.png", alt: "Leadership Roleplay Session" }
    ];

    const potentialImages = [
        { src: "/images/solutions/potential_clifton.png", alt: "CliftonStrengths Domain Map" },
        { src: "/images/solutions/potential_hogan.png", alt: "Hogan Assessment Insights" },
        { src: "/images/solutions/potential_pyramid.png", alt: "The Five Behaviors Assessment" },
        { src: "/images/solutions/potential_workshop.png", alt: "Experiential Leadership Workshop" }
    ];

    const orgImages = [
        { src: "/images/solutions/org_blocks.png", alt: "Organizational Alignment Activity" },
        { src: "/images/solutions/org_presentation.png", alt: "Strategic Culture Workshop" },
        { src: "/images/solutions/org_workshop.png", alt: "Leadership Calibration Session" },
        { src: "/org-effectiveness.jpg", alt: "Organizational Transformation Session" },
        { src: "/org-effectiveness-2.jpg", alt: "Strategic Planning Workshop" }
    ];

    return (
        <div className="relative overflow-x-hidden pt-0 bg-white">
            {/* Solutions Hero */}
            <section className="bg-navy relative overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-24">

                {/* Background Video Layer */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <iframe
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-40 scale-110"
                        src="https://www.youtube.com/embed/eOP3vloZYMo?autoplay=1&mute=1&loop=1&playlist=eOP3vloZYMo&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
                        allow="autoplay; encrypted-media"
                        title="Solutions Background Video"
                        frameBorder="0"
                    ></iframe>
                    <div className="absolute inset-0 bg-navy/70 z-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">


                    <motion.h1
                        initial={{ opacity: 0, y: 30, z: -200 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black !text-white mb-8 tracking-tighter leading-[0.85]"
                    >
                        Precision 
                        <motion.span 
                            className="text-skyBlue font-serif italic font-bold drop-shadow-[0_0_10px_rgba(200,217,230,0.8)] inline-block ml-4"
                            animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                        >
                            Solutions.
                        </motion.span><br />
                        Sustainable 
                        <motion.span 
                            className="text-skyBlue font-serif italic font-bold drop-shadow-[0_0_10px_rgba(200,217,230,0.8)] inline-block ml-4"
                            animate={{ scale: [1, 1.05, 1, 1.05, 1] }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.2 }}
                        >
                            Performance.
                        </motion.span>
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

                <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20" color="white" />

                {/* Decorative Laser Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>


            {/* Service Flow - Core Services Redesigned */}
            <div className="bg-white">
                <section className="container mx-auto px-6 py-40">
                    <div className="text-center mb-40">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">Ecosystem.Module // Strategic_Offerings</span>
                        <h2 className="text-5xl md:text-8xl font-black text-navy mb-12 tracking-tighter leading-[0.9]">
                            Our Core <br />
                            <span className="text-skyBlue font-serif italic text-gradient uppercase">Services.</span>
                        </h2>
                        <p className="text-navy/40 text-xl font-light max-w-2xl mx-auto leading-relaxed">Moving beyond standard policies to ground your organizational excellence in behavioral science and strategic alignment.</p>
                    </div>

                    <div className="space-y-40">
                        {/* 1. Leadership Development */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            id="leadership-development" 
                            className="max-w-7xl mx-auto border-l-4 border-teal pl-12 md:pl-20 py-8 relative"
                        >
                            <div className="flex items-center space-x-6 mb-12">
                                <div className="w-20 h-20 rounded-3xl bg-teal flex items-center justify-center text-white shadow-2xl shadow-teal/20 relative z-10">
                                    <Award size={40} />
                                </div>
                                <div>
                                    <span className="text-teal font-black tracking-[0.4em] uppercase text-[10px] block mb-1">PROT_01</span>
                                    <h3 className="text-2xl font-black text-navy uppercase tracking-widest">Leadership Development</h3>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h4 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-none tracking-tighter">
                                        Develop Leaders Who Drive <br />
                                        <span className="text-teal font-serif italic text-gradient uppercase">Strategic Impact.</span>
                                    </h4>
                                    <div className="text-xl text-navy/60 leading-relaxed space-y-8 mb-16 font-light max-w-3xl">
                                        <p>
                                            Grounded in <span className="text-navy font-bold italic">The Leadership Challenge</span>, we develop leaders who model values, inspire a shared vision, challenge the process, enable others to act, and encourage the heart.
                                        </p>
                                        <p className="border-l-2 border-teal/20 pl-8 text-lg font-medium">
                                            Leadership today requires more than inspiration — it requires <span className="underline decoration-teal decoration-2 italic">disciplined execution.</span>
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-20">
                                        {["Everything DiSC Work of Leaders", "MTa Leadership", "MTa Insights Learning"].map((item, i) => (
                                            <span key={i} className="px-6 py-3 bg-beige/30 border border-navy/5 rounded-full text-navy/60 font-bold text-[10px] uppercase tracking-widest">{item}</span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-8">
                                        <Link to="/services/leadership-development" className="inline-flex items-center px-12 py-6 bg-navy text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-teal transition-all group shadow-2xl shadow-navy/20">
                                            Learn about Outcomes <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                        <Link to="/contact" className="inline-flex items-center px-12 py-6 border-2 border-navy/10 text-navy/40 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-beige transition-all group">
                                            Schedule Conversation <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <SolutionGallery images={leadershipImages} />
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Team Development */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            id="team-development" 
                            className="max-w-7xl mx-auto border-l-4 border-navy/10 pl-12 md:pl-20 py-8 relative"
                        >
                            <div className="flex items-center space-x-6 mb-12">
                                <div className="w-20 h-20 rounded-3xl bg-navy flex items-center justify-center text-white shadow-2xl shadow-navy/20 relative z-10">
                                    <Users size={40} />
                                </div>
                                <div>
                                    <span className="text-navy/40 font-black tracking-[0.4em] uppercase text-[10px] block mb-1">PROT_02</span>
                                    <h3 className="text-2xl font-black text-navy uppercase tracking-widest">Team Development</h3>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h4 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-none tracking-tighter">
                                        Build Aligned, <br />
                                        <span className="text-teal font-serif italic text-gradient uppercase">High-Performing Teams.</span>
                                    </h4>
                                    <div className="text-xl text-navy/60 leading-relaxed space-y-8 mb-16 font-light max-w-3xl">
                                        <p>
                                            Using <span className="text-navy font-bold">The Five Behaviors of a Cohesive Team</span> framework, we help teams build deep trust, engage in healthy conflict, and focus relentlessly on collective results.
                                        </p>
                                        <p className="border-l-2 border-navy/10 pl-8 text-lg font-medium italic">
                                            We don’t stop at theory — we build teams that execute strategy with clarity and confidence.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-20">
                                        {["Everything DiSC", "Strengths-based Coaching", "MTa Team work"].map((item, i) => (
                                            <span key={i} className="px-6 py-3 bg-navy/5 border border-navy/5 rounded-full text-navy/40 font-bold text-[10px] uppercase tracking-widest">{item}</span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-8">
                                        <Link to="/services/team-development" className="inline-flex items-center px-12 py-6 bg-teal text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-navy transition-all group shadow-2xl shadow-teal/20">
                                            Learn about Outcomes <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                        <Link to="/contact" className="inline-flex items-center px-12 py-6 border-2 border-navy/10 text-navy/40 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-beige transition-all group">
                                            Schedule Conversation <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <SolutionGallery images={teamImages} />
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Executive Coaching */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            id="coaching" 
                            className="max-w-7xl mx-auto border-l-4 border-teal pl-12 md:pl-20 py-8 relative"
                        >
                            <div className="flex items-center space-x-6 mb-12">
                                <div className="w-20 h-20 rounded-3xl bg-teal flex items-center justify-center text-white shadow-2xl shadow-teal/20 relative z-10">
                                    <Briefcase size={40} />
                                </div>
                                <div>
                                    <span className="text-teal font-black tracking-[0.4em] uppercase text-[10px] block mb-1">PROT_03</span>
                                    <h3 className="text-2xl font-black text-navy uppercase tracking-widest">Executive Coaching</h3>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h4 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-none tracking-tighter">
                                        Unlock Potential <br />
                                        <span className="text-teal font-serif italic text-gradient uppercase">At the Individual Level.</span>
                                    </h4>
                                    <div className="text-xl text-navy/60 leading-relaxed space-y-8 mb-16 font-light max-w-3xl">
                                        <p>
                                            Our executive coaching is data-driven and insight-rich. We integrate strengths-based development powered by <span className="font-bold text-navy">Gallup CliftonStrengths</span> and <span className="font-bold text-navy">Everything DiSC</span> with science-backed insights from <span className="font-bold text-navy">Hogan Assessments</span>.
                                        </p>
                                        <p className="border-l-2 border-teal/20 pl-8 text-lg font-black text-navy uppercase tracking-widest text-[11px]">
                                            Insight alone doesn’t create transformation — application does.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-20">
                                        {["Hogan personality insights", "DiSC 363 for Leaders", "Neuro-Linguistic Programming"].map((item, i) => (
                                            <span key={i} className="px-6 py-3 bg-beige/30 border border-navy/5 rounded-full text-navy/60 font-bold text-[10px] uppercase tracking-widest">{item}</span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-8">
                                        <Link to="/services/executive-coaching" className="inline-flex items-center px-12 py-6 bg-navy text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-teal transition-all group shadow-2xl shadow-navy/20">
                                            Learn about Outcomes <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                        <Link to="/contact" className="inline-flex items-center px-12 py-6 border-2 border-navy/10 text-navy/40 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-beige transition-all group">
                                            Book Consultation <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <SolutionGallery images={coachingImages} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            id="individual-development" 
                            className="max-w-7xl mx-auto border-l-4 border-navy/10 pl-12 md:pl-20 py-8 relative"
                        >
                            <div className="flex items-center space-x-6 mb-12">
                                <div className="w-20 h-20 rounded-3xl bg-navy flex items-center justify-center text-white shadow-2xl shadow-navy/20 relative z-10">
                                    <TrendingUp size={40} />
                                </div>
                                <div>
                                    <span className="text-navy/40 font-black tracking-[0.4em] uppercase text-[10px] block mb-1">PROT_04</span>
                                    <h3 className="text-2xl font-black text-navy uppercase tracking-widest">High-Potential Development</h3>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h4 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-none tracking-tighter">
                                        Build the Leaders <br />
                                        <span className="text-teal font-serif italic text-gradient uppercase">Your Future Demands.</span>
                                    </h4>
                                    <div className="text-xl text-navy/60 leading-relaxed space-y-8 mb-16 font-light max-w-3xl">
                                        <p>
                                            Prepare high-potential professionals for expanded responsibility. We design strengths-based development journeys to ensure your emerging talent is ready for strategic impact.
                                        </p>
                                        <p className="border-l-2 border-navy/10 pl-8 text-lg font-medium italic">
                                            We combine science-backed assessments with immersive experiential learning to create measurable growth.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-20">
                                        {["Strengths-based Journeys", "Hogan Potential Assessments", "Behavioral Adaptability"].map((item, i) => (
                                            <span key={i} className="px-6 py-3 bg-navy/5 border border-navy/5 rounded-full text-navy/40 font-bold text-[10px] uppercase tracking-widest">{item}</span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-8">
                                        <Link to="/services/individual-development" className="inline-flex items-center px-12 py-6 bg-teal text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-navy transition-all group shadow-2xl shadow-teal/20">
                                            Learn about Outcomes <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                        <Link to="/contact" className="inline-flex items-center px-12 py-6 border-2 border-navy/10 text-navy/40 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-beige transition-all group">
                                            Design Your Strategy <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <SolutionGallery images={potentialImages} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            id="organizational-effectiveness" 
                            className="max-w-7xl mx-auto border-l-4 border-teal pl-12 md:pl-20 py-8 relative"
                        >
                            <div className="flex items-center space-x-6 mb-12">
                                <div className="w-20 h-20 rounded-3xl bg-teal flex items-center justify-center text-white shadow-2xl shadow-teal/20 relative z-10">
                                    <Settings size={40} />
                                </div>
                                <div>
                                    <span className="text-teal font-black tracking-[0.4em] uppercase text-[10px] block mb-1">PROT_05</span>
                                    <h3 className="text-2xl font-black text-navy uppercase tracking-widest">Organizational Effectiveness</h3>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h4 className="text-4xl md:text-6xl font-black text-navy mb-8 leading-none tracking-tighter">
                                        Align Strategy. <br />
                                        Activate <span className="text-teal font-serif italic text-gradient uppercase">Culture.</span>
                                    </h4>
                                    <div className="text-xl text-navy/60 leading-relaxed space-y-8 mb-16 font-light max-w-3xl">
                                        <p>
                                            Close the gap between intent and execution by aligning leadership capability, team dynamics, performance systems, and cultural behaviors with strategic priorities.
                                        </p>
                                        <p className="border-l-2 border-teal/20 pl-8 text-xl text-teal font-bold font-serif italic">
                                            Organizational effectiveness is not a workshop. It is an integrated transformation journey.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-20">
                                        {["Strategic Calibration", "Talent & Systems Alignment", "Culture Activation"].map((item, i) => (
                                            <span key={i} className="px-6 py-3 bg-beige/30 border border-navy/5 rounded-full text-navy/60 font-bold text-[10px] uppercase tracking-widest">{item}</span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-8">
                                        <Link to="/services/organizational-effectiveness" className="inline-flex items-center px-12 py-6 bg-navy text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-teal transition-all group shadow-2xl shadow-navy/20">
                                            Learn about Outcomes <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                        <Link to="/contact" className="inline-flex items-center px-12 py-6 border-2 border-navy/10 text-navy/40 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-beige transition-all group">
                                            Book Alignment Session <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <SolutionGallery images={orgImages} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>



            {/* Strategic Footer CTA */}
            <section className="py-40 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div className="inline-block">
                        <h2 className="text-4xl md:text-8xl font-black text-navy mb-16 tracking-tighter leading-none">
                            Ready to <br /><span className="text-teal font-serif italic leading-tight uppercase">elevate</span> your organization?
                        </h2>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 w-full max-w-sm mx-auto sm:max-w-none px-4">
                        <Link
                            to="/contact"
                            className="bg-navy text-white px-8 py-5 md:px-16 md:py-8 rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-teal transition-all shadow-3xl shadow-navy/20 hover:scale-[1.03] active:scale-95 w-full sm:w-auto text-center"
                        >
                            Book Your Alignment Call
                        </Link>
                        <Link
                            to="/contact"
                            className="text-navy font-mono font-bold text-[10px] uppercase tracking-widest border border-navy/10 px-8 py-5 md:px-16 md:py-8 rounded-full hover:bg-beige transition-all hover:scale-[1.03] active:scale-95 w-full sm:w-auto text-center"
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
