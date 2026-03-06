import { motion } from 'framer-motion';
import { Target, Users, Globe, Zap, ArrowRight, Award, Lightbulb, TrendingUp, ShieldCheck, Heart, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollIndicator from '../components/ScrollIndicator';

const About = () => {
    return (
        <div className="bg-white">
            {/* 1. About Us (Hero) */}
            <section className="bg-navy relative overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-24">
                {/* Background Video Layer */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <iframe
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-30 scale-110"
                        src="https://www.youtube.com/embed/xJZpKIgTvL8?autoplay=1&mute=1&loop=1&playlist=xJZpKIgTvL8&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
                        allow="autoplay; encrypted-media"
                        title="About Background Video"
                        frameBorder="0"
                    ></iframe>
                    <div className="absolute inset-0 bg-navy/60 z-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black !text-white mb-8 tracking-tighter leading-none"
                    >
                        Maximize Potential. <br />
                        <span className="text-teal font-serif italic">Elevate Organizations.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl !text-beige/70 font-light max-w-4xl mx-auto leading-relaxed"
                    >
                        At MetaHR, we believe Human Resources is more than a function — it is the foundation of organizational success.
                    </motion.p>
                </div>

                <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20" color="white" />

                {/* Decorative Laser Lines */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>

            {/* Introduction & Philosophy Section */}
            <section className="py-24 md:py-40 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-6xl font-black text-navy mb-10 tracking-tighter leading-none">
                                    What does <br /><span className="text-teal font-serif italic">Meta</span> mean?
                                </h2>
                                <p className="text-2xl md:text-3xl text-navy/80 font-light leading-relaxed mb-8">
                                    Meta means <span className="text-teal font-bold underline decoration-teal/20 underline-offset-8">above</span>, <span className="text-teal font-bold underline decoration-teal/20 underline-offset-8">beyond</span>, and <span className="text-teal font-bold underline decoration-teal/20 underline-offset-8">higher level</span>.
                                </p>
                                <p className="text-xl text-navy/60 leading-relaxed font-medium italic">
                                    That is exactly how we approach HR.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-slate-50 p-12 lg:p-16 rounded-[4rem] border border-navy/5 shadow-2xl"
                            >
                                <p className="text-xl md:text-2xl text-navy leading-relaxed font-light mb-8">
                                    At MetaHR, we believe people are capable of far more than they realize. Within every individual and every organization lies untapped potential — strengths waiting to be activated, capabilities ready to be refined, and excellence ready to be expressed.
                                </p>
                                <p className="text-xl md:text-2xl font-bold text-navy italic">
                                    Our objective is simple yet powerful: to help people and organizations go beyond the normal.
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <p className="text-xl text-navy/70 leading-relaxed">
                                    We don’t stop at policies, processes, or job descriptions. While those matter, true performance is driven by something deeper — clarity of purpose, aligned strengths, trust, leadership maturity, and an environment that enables people to thrive.
                                </p>
                                <p className="text-xl text-navy/70 leading-relaxed">
                                    At the heart of every organization are individuals with hidden treasures of potential. When supported intentionally and developed strategically, they don’t just perform — they excel.
                                </p>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-navy p-12 md:p-16 rounded-[4rem] text-white shadow-3xl border border-white/5 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                                <h3 className="text-2xl font-black mb-10 tracking-tight text-teal">MetaHR exists to:</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Unlock individual greatness",
                                        "Elevate leadership capability",
                                        "Strengthen teams",
                                        "Align culture with performance",
                                        "Build organizations that operate at a higher level"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center space-x-4 group">
                                            <div className="w-2 h-2 rounded-full bg-teal group-hover:scale-150 transition-transform"></div>
                                            <span className="text-xl font-light text-beige/80 group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Deep Dive - REFINED */}
            <section className="py-32 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/business_reality_quote_bg.png" alt="" className="w-full h-full object-cover opacity-10 grayscale scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy text-white"></div>
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[11px] font-mono font-bold tracking-[0.5em] text-teal uppercase mb-6 block">
                                OUR_CORE_PHILOSOPHY
                            </span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-none"
                        >
                            <span className="text-white drop-shadow-2xl">Our </span>
                            <span className="text-teal font-serif italic block md:inline">Philosophy.</span>
                        </motion.h2>
                        <div className="w-24 h-1 bg-teal mx-auto rounded-full opacity-50"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group bg-white/5 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/philosophy_asset_bg.png" alt="" className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-navy/40"></div>
                            </div>
                            <div className="relative z-10 text-2xl text-beige/80 font-light leading-relaxed group-hover:text-white transition-colors">
                                People are the most valuable asset of any company. Yet, performance is not driven by skill alone. It is influenced by purpose, environment, leadership, relationships, systems, and culture.
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group bg-white/5 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 z-0">
                                <img src="/philosophy_talent_bg.png" alt="" className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-navy/40"></div>
                            </div>
                            <div className="relative z-10 text-2xl text-beige/80 font-light leading-relaxed group-hover:text-white transition-colors">
                                Every individual brings a unique set of talents. When these talents are recognized, developed, and aligned with business goals, they become strengths that fuel both individual success and organizational growth.
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-24 pt-20 border-t border-white/10 text-center">
                        <motion.blockquote 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black text-white tracking-tight max-w-5xl mx-auto leading-tight italic"
                        >
                            "We look beyond HR as being primarily administration or operational. HR is a key part of strategy and transformation to organizations."
                        </motion.blockquote>
                    </div>
                </div>
            </section>

            {/* 3. What We Do - Whether you are Section - RESTRUCTURED */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">TAILORED_SOLUTIONS // WHAT_WE_DO</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-navy uppercase">
                            What We <span className="text-teal font-serif italic lowercase tracking-normal">Do.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-navy/60 font-light leading-relaxed mb-16">
                            We deliver tailored, results-driven HR solutions designed to meet your organization where it is — and take it where it wants to go.
                        </p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group max-w-7xl mx-auto bg-white rounded-[4rem] border border-navy/5 shadow-2xl p-12 md:p-20 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 z-0">
                            <img src="/tailored_solutions_bg.png" alt="" className="w-full h-full object-cover opacity-[0.07] group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-white/30"></div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal via-navy to-teal z-10"></div>
                        
                        <div className="grid lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-4">
                                <h3 className="text-4xl md:text-5xl font-black text-navy leading-none mb-10 tracking-tighter">
                                    Whether <br />
                                    you are:
                                </h3>
                                <div className="w-20 h-1 bg-teal rounded-full"></div>
                            </div>
                            
                            <div className="lg:col-span-8 grid md:grid-cols-3 gap-10">
                                {[
                                    { icon: <Zap size={28} />, desc: "A startup building your HR function from the ground up" },
                                    { icon: <TrendingUp size={28} />, desc: "A growing company refining systems and strengthening culture" },
                                    { icon: <Globe size={28} />, desc: "An established organization scaling your people strategy" }
                                ].map((item, i) => (
                                    <div key={i} className="group">
                                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-teal mb-8 group-hover:bg-teal group-hover:text-white transition-all duration-500 shadow-sm">
                                            {item.icon}
                                        </div>
                                        <p className="text-xl text-navy/70 leading-relaxed font-medium group-hover:text-navy transition-colors">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="text-center max-w-5xl mx-auto mt-24">
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold text-navy leading-tight tracking-tight px-10"
                        >
                            MetaHR <span className="text-teal">partners with you</span> to design and implement practical, people-centered solutions that create <span className="text-teal italic font-serif">measurable impact.</span>
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Our Commitment & Purpose & Direction - Keep as is */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Our Commitment */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-12 mb-20"
                        >
                            <div className="max-w-5xl">
                                <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block underline decoration-teal/20 underline-offset-8">PROMISE // OUR_COMMITMENT</span>
                                <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter text-navy uppercase">
                                    Our <span className="text-teal font-serif italic lowercase tracking-normal">Commitment.</span>
                                </h2>
                                <div className="space-y-10 text-2xl text-navy/60 font-light leading-relaxed">
                                    <p>We don’t believe in one-size-fits-all HR. Every organization is unique. Every team is different. Every individual has their own motivations, strengths, and purpose.</p>
                                    <p>Our approach combines strategic insight with practical execution — ensuring that your people strategy not only supports your business goals but drives them forward.</p>
                                    <p className="text-3xl font-black text-navy italic">Because when people thrive, organizations rise.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-4 h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group h-full flex flex-col justify-center bg-navy p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 z-0">
                                    <img src="/mission_vision_bg.png" alt="" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-navy/50"></div>
                                </div>
                                <div className="relative z-10">
                                    <Target className="text-teal mb-10" size={56} />
                                    <h3 className="text-4xl font-black mb-6 tracking-tighter uppercase">Purpose</h3>
                                    <p className="text-xl text-beige/70 font-light leading-relaxed">
                                        To be the partner of choice for organizations—unlocking excellence in their people, inspiring transformation in their operations, and delivering meaningful, measurable outcomes.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-8 h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group h-full flex flex-col justify-center bg-slate-50 p-16 rounded-[4rem] border border-navy/5 shadow-xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 z-0">
                                    <img src="/mission_vision_bg.png" alt="" className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-slate-50/70"></div>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center space-x-6 mb-10">
                                        <div className="w-16 h-16 rounded-2xl bg-teal flex items-center justify-center text-white">
                                            <Lightbulb size={32} />
                                        </div>
                                        <h3 className="text-4xl font-black text-navy tracking-tighter uppercase">Direction</h3>
                                    </div>
                                    <p className="text-2xl text-navy/70 font-light leading-loose">
                                        We partner with organizations to elevate human potential, streamline operational performance, and deliver data-driven solutions that lead to sustainable success. Through collaboration, innovation, and a deep commitment to impact, we help our clients thrive in a dynamic world.
                                    </p>
                                </div>
                                </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section - BENTO BOX STYLE */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">PRINCIPLES // HOW_WE_WORK</span>
                        <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter text-navy uppercase">
                            Our <span className="text-teal font-serif italic lowercase tracking-normal">Values.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
                        {[
                            { 
                                title: "We Redefine Performance", 
                                num: "01", 
                                desc: "We don’t optimize average — we unlock exceptional. We challenge norms, elevate standards, and drive breakthrough results.",
                                icon: <Rocket size={24} />,
                                span: "md:col-span-4",
                                bg: "/value_performance_bg.png"
                            },
                            { 
                                title: "Courageous Transformation", 
                                num: "02", 
                                desc: "We lean into complexity. Real change requires bold thinking and decisive action.",
                                icon: <ShieldCheck size={24} />,
                                span: "md:col-span-2",
                                bg: "/value_transformation_bg.png"
                            },
                            { 
                                title: "Accountability to Outcomes", 
                                num: "03", 
                                desc: "Impact isn’t optional. We measure what matters and stand behind the results.",
                                icon: <Target size={24} />,
                                span: "md:col-span-2",
                                bg: "/value_accountability_bg.png"
                            },
                            { 
                                title: "Human-Centered Innovation", 
                                num: "04", 
                                desc: "Technology and data power progress — but people drive it. We design solutions where human potential meets intelligent systems.",
                                icon: <Heart size={24} />,
                                span: "md:col-span-4",
                                bg: "/value_innovation_bg.png"
                            },
                            { 
                                title: "Built for What’s Next", 
                                num: "05", 
                                desc: "The future rewards agility. We help organizations adapt, evolve, and lead in dynamic environments.",
                                icon: <Sparkles size={24} />,
                                span: "md:col-span-6",
                                bg: "/value_future_bg.png"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group relative overflow-hidden bg-white p-12 md:p-16 rounded-[3rem] border border-navy/5 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${item.span} flex flex-col justify-between`}
                            >
                                <div className="absolute inset-0 z-0">
                                    <img src={item.bg} alt="" className="w-full h-full object-cover opacity-[0.15] group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-white/60"></div>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all shadow-sm">
                                            {item.icon}
                                        </div>
                                        <span className="text-3xl font-black text-navy/5 group-hover:text-teal/10 transition-colors uppercase tracking-[0.2em]">{item.num}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-navy mb-6 tracking-tight group-hover:translate-x-2 transition-transform">{item.title}</h3>
                                    <p className="text-lg text-navy/50 leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services - Overview updated with NEW script */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">CORE_OFFERINGS // CAPABILITIES</span>
                        <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter text-navy uppercase">
                            Core Services <br /> <span className="text-teal font-serif italic lowercase tracking-normal">Overview.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                num: "01",
                                title: "Team Development",
                                subtitle: "Build Aligned, High-Performing Teams",
                                challenge: "Silos. Misalignment. Low ownership. Conflict without resolution.",
                                approach: "Interactive experiential workshops that reveal team dynamics in real time — followed by structured reflection and strategic alignment conversations.",
                                btn: "Strengthen Your Teams",
                                link: "/services/team-development",
                                icon: <Users size={32} />,
                                bg: "/team_development_abstract.png"
                            },
                            {
                                num: "02",
                                title: "Leadership Development",
                                subtitle: "Develop Leaders Who Drive Strategic Impact",
                                challenge: "Technically strong managers who struggle to lead transformation.",
                                approach: "Experiential leadership labs that challenge decision-making, influence, adaptability, and emotional intelligence — not through lectures, but lived experience.",
                                btn: "Develop Stronger Leaders",
                                link: "/services/leadership-development",
                                icon: <Award size={32} />,
                                bg: "/leadership_development_abstract.png"
                            },
                            {
                                num: "03",
                                title: "Executive & Performance Coaching",
                                subtitle: "Unlock Leadership Potential at the Individual Level",
                                challenge: "High-performing leaders plateau without structured reflection and challenge.",
                                approach: "1:1 coaching integrated with experiential diagnostics and behavioral insight tools.",
                                btn: "Explore Coaching",
                                link: "/services/executive-coaching",
                                icon: <Target size={32} />,
                                bg: "/executive_coaching_abstract.png"
                            },
                            {
                                num: "04",
                                title: "Individual Development",
                                subtitle: "Strengthen Emerging & High-Potential Talent",
                                challenge: "Talent with capability but lacking confidence, communication, or ownership mindset.",
                                approach: "Immersive learning experiences that surface strengths, blind spots, and growth opportunities in action.",
                                btn: "Develop Talent",
                                link: "/services/individual-development",
                                icon: <Zap size={32} />,
                                bg: "/individual_development_abstract.png"
                            },
                            {
                                num: "05",
                                title: "Organizational Effectiveness",
                                subtitle: "Align Culture, Strategy & Leadership",
                                challenge: "Great strategy. Poor alignment. Cultural friction.",
                                approach: "System-level experiential interventions that uncover misalignment and create clarity at scale.",
                                btn: "Transform Your Organization",
                                link: "/services/organizational-effectiveness",
                                icon: <Globe size={32} />,
                                bg: "/org_effectiveness_abstract.png"
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group relative overflow-hidden bg-slate-50 p-12 lg:p-16 rounded-[4rem] border border-navy/5 hover:border-teal/30 hover:shadow-2xl transition-all duration-700 flex flex-col justify-between ${i === 4 ? 'md:col-span-2' : ''}`}
                            >
                                <div className="absolute inset-0 z-0">
                                    <img src={service.bg} alt="" className="w-full h-full object-cover opacity-[0.12] group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-slate-50/60"></div>
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="w-20 h-20 rounded-2xl bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all">
                                            {service.icon}
                                        </div>
                                        <span className="text-5xl font-black text-navy/5">{service.num}</span>
                                    </div>
                                    <h4 className="text-3xl font-black text-navy mb-4 tracking-tighter uppercase">{service.title}</h4>
                                    <p className="text-xl text-teal font-black mb-10 tracking-tight">{service.subtitle}</p>
                                    
                                    <div className="space-y-8 mb-16">
                                        <div className="p-8 bg-white/60 rounded-[2rem] border border-navy/5">
                                            <h4 className="text-xs font-black text-navy uppercase tracking-[0.2em] mb-3">The Challenge:</h4>
                                            <p className="text-lg text-navy/60 font-bold leading-relaxed">{service.challenge}</p>
                                        </div>
                                        <div className="p-8 bg-white/60 rounded-[2rem] border border-navy/5">
                                            <h4 className="text-xs font-black text-navy uppercase tracking-[0.2em] mb-3">Our Approach:</h4>
                                            <p className="text-lg text-navy/60 font-bold leading-relaxed">{service.approach}</p>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to={service.link}
                                    className="inline-flex items-center justify-center space-x-3 bg-navy text-white px-10 py-6 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-teal transition-all shadow-xl"
                                >
                                    <span>{service.btn}</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Block updated */}
            <section className="py-40 bg-teal text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[url('/business_reality_quote_bg.png')] mix-blend-overlay opacity-10 object-cover scale-150 grayscale rotate-12"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none uppercase">
                            Real Growth Happens Through <br /> <span className="font-serif italic text-navy lowercase tracking-normal">Experience, Not Information.</span>
                        </h2>
                        <p className="text-2xl md:text-3xl font-medium mb-16 text-white/90 leading-relaxed max-w-4xl mx-auto">
                            Our experiential methodologies create insight, accountability, and behavioral change — not just awareness.
                        </p>
                        <div className="bg-navy/20 backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] border border-white/10 mb-16">
                            <p className="text-3xl md:text-4xl font-black mb-12 text-white tracking-tight">
                                Ready to design a high-impact development journey?
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center space-x-6 bg-white text-navy px-16 py-8 rounded-full font-black text-sm uppercase tracking-widest hover:bg-navy hover:text-white transition-all shadow-2xl"
                            >
                                <span>Book a Strategy Conversation</span>
                                <ArrowRight size={24} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 9. Credentials - Keep as is */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase block">TRUST // CERTIFIED_PARTNERS_AND_CREDENTIALS</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
                        {[
                            { name: "Leadership Challenge", img: "/leadership_logo.jpg" },
                            { name: "Hogan Assessments", img: "/hogan_logo.png" },
                            { name: "Gallup Certified Coach", img: "/gallup_logo.png" },
                            { name: "MTa Licensed User", img: "/mta_logo.jpg" },
                            { name: "SHRM-CP", img: "/shrm_logo.png" }
                        ].map((cred, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            >
                                <img
                                    src={cred.img}
                                    alt={cred.name}
                                    className="h-20 md:h-24 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
