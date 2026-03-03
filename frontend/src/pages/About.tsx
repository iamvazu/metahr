import { motion } from 'framer-motion';
import { Target, Users, Globe, Zap, ArrowRight, CheckCircle2, Award, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white">
            {/* 1. About Us (Hero) */}
            <section className="bg-navy relative overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-24">
                {/* Background Video Layer */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                    <iframe
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 opacity-40 scale-110"
                        src="https://www.youtube.com/embed/xJZpKIgTvL8?autoplay=1&mute=1&loop=1&playlist=xJZpKIgTvL8&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
                        allow="autoplay; encrypted-media"
                        title="About Background Video"
                        frameBorder="0"
                    ></iframe>
                    <div className="absolute inset-0 bg-navy/70 z-10"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black !text-white mb-8 tracking-tighter leading-none"
                    >
                        Maximize Potential. <br />
                        <span className="text-teal font-serif italic">Elevate Organizations.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl !text-beige/60 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        At MetaHR, we believe Human Resources is more than a function — it is the foundation of organizational success.
                    </motion.p>
                </div>
                {/* Decorative Laser Lines */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
            </section>

            {/* Extended About Text */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-navy/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl lg:text-4xl text-navy font-light leading-relaxed tracking-tight mb-16 text-center md:text-left"
                        >
                            The word <strong>Meta</strong> means <span className="text-teal font-serif italic text-3xl md:text-4xl lg:text-5xl">beyond.</span> And that is exactly how we approach HR. We look beyond policies, processes, and job descriptions to understand what truly drives people. Because at the heart of every successful organization are individuals with untapped potential, unique strengths, and the capacity to achieve greatness when supported effectively.
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-xl md:text-2xl text-navy font-medium leading-relaxed mb-8">
                                    Meta HR is a leadership and organizational effectiveness partner focused on strengthening the human systems that drive performance.
                                </p>
                                <p className="text-lg text-navy/60 leading-relaxed font-bold mb-6">
                                    Our work sits at the intersection of:
                                </p>
                                <ul className="space-y-4 text-lg text-navy/80 font-medium pb-8 border-b border-navy/10 md:border-0 md:pb-0">
                                    <li className="flex items-center space-x-4">
                                        <div className="w-2 h-2 rounded-full bg-teal shrink-0"></div>
                                        <span>Behavioral science</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <div className="w-2 h-2 rounded-full bg-teal shrink-0"></div>
                                        <span>Experiential learning</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <div className="w-2 h-2 rounded-full bg-teal shrink-0"></div>
                                        <span>Strategic alignment</span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <div className="w-2 h-2 rounded-full bg-teal shrink-0"></div>
                                        <span>Measurable business outcomes</span>
                                    </li>
                                </ul>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group relative overflow-hidden bg-navy p-10 md:p-14 rounded-[3rem] text-white shadow-2xl border border-teal/20"
                            >
                                <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-105 transition-transform duration-1000">
                                    <img src="/business_reality_quote_bg.png" alt="" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-[80px] -mr-20 -mt-20 transition-all duration-700 group-hover:bg-teal/20"></div>
                                <div className="relative z-10">
                                    <p className="text-2xl md:text-3xl font-black tracking-tight mb-6">We do not deliver generic workshops.</p>
                                    <p className="text-lg text-beige/80 leading-relaxed font-light">
                                        We design leadership interventions that <span className="text-white font-medium">shift behaviors</span>, <span className="text-white font-medium">strengthen alignment</span>, and <span className="text-white font-medium">improve execution capability</span>.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Our Philosophy */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">CORE_BELIEFS // PHILOSOPHY</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none text-navy">
                                Our <span className="text-teal font-serif italic">Philosophy.</span>
                            </h2>
                            <div className="space-y-6 text-xl text-navy/60 font-light leading-relaxed mb-10">
                                <p>
                                    People are the most valuable asset of any company. Yet, performance is not driven by skill alone. It is influenced by purpose, environment, leadership, relationships, systems, and culture.
                                </p>
                                <p>
                                    Every individual brings a unique set of talents. When these talents are recognized, developed, and aligned with business goals, they become strengths that fuel both individual success and organizational growth.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-navy rounded-[3rem] p-12 text-white shadow-3xl shadow-navy/20 border border-white/5"
                        >
                            <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                                <img src="/direction_card_bg.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-8 tracking-tight">At MetaHR, we focus on:</h3>
                                <ul className="space-y-6">
                                    {[
                                        "Unlocking and developing individual potential",
                                        "Creating engaging and high-performance work environments",
                                        "Aligning people strategy with business objectives",
                                        "Strengthening leadership and team collaboration",
                                        "Building scalable, sustainable HR foundations"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start group/li">
                                            <CheckCircle2 className="text-teal shrink-0 mt-1 mr-4 group-hover/li:scale-125 transition-transform" size={24} />
                                            <span className="text-lg font-light text-beige/90 group-hover/li:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. What We Do */}
            <section className="py-32 bg-beige/30 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">SOLUTIONS // WHAT_WE_DO</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-navy">
                            What We <span className="text-teal font-serif italic">Do.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-navy/60 font-light leading-relaxed">
                            We deliver tailored, results-driven HR solutions designed to meet your organization where it is — and take it where it wants to go.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            { title: "Startups", desc: "A startup building your HR function from the ground up", icon: <Zap size={32} />, img: "/value_1_bg.png" },
                            { title: "Growing Companies", desc: "A growing company refining systems and strengthening culture", icon: <TrendingUp size={32} />, img: "/value_2_bg.png" },
                            { title: "Established Orgs", desc: "An established organization scaling your people strategy", icon: <Globe size={32} />, img: "/value_5_bg.png" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative overflow-hidden bg-white p-10 rounded-[3rem] shadow-xl shadow-navy/5 border border-navy/5 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000">
                                    <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-8 group-hover:bg-teal group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 text-navy">Whether you are:</h4>
                                    <p className="text-lg text-navy/60 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-2xl font-bold text-navy leading-relaxed">
                            MetaHR partners with you to design and implement practical, people-centered solutions that create measurable impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Our Commitment & 5. Purpose & 6. Direction */}
            <section className="py-32 bg-navy text-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Our Commitment */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3 mb-10"
                        >
                            <div className="max-w-4xl">
                                <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">PROMISE // OUR_COMMITMENT</span>
                                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                                    Our <span className="text-teal font-serif italic">Commitment.</span>
                                </h2>
                                <div className="space-y-6 text-xl text-beige/70 font-light leading-relaxed">
                                    <p>We don’t believe in one-size-fits-all HR. Every organization is unique. Every team is different. Every individual has their own motivations, strengths, and purpose.</p>
                                    <p>Our approach combines strategic insight with practical execution — ensuring that your people strategy not only supports your business goals but drives them forward.</p>
                                    <p className="text-2xl font-bold text-white italic">Because when people thrive, organizations rise.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Purpose */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm lg:col-span-1"
                        >
                            <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-105 transition-transform duration-1000">
                                <img src="/purpose_card_bg.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <Target className="text-teal mb-8" size={48} />
                                <h3 className="text-3xl font-black mb-6">Purpose</h3>
                                <p className="text-lg text-beige/70 font-light leading-relaxed">
                                    To be the partner of choice for organizations—unlocking excellence in their people, inspiring transformation in their operations, and delivering meaningful, measurable outcomes.
                                </p>
                            </div>
                        </motion.div>

                        {/* Direction */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative overflow-hidden bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm lg:col-span-2"
                        >
                            <div className="absolute inset-0 z-0 opacity-20 group-hover:scale-105 transition-transform duration-1000">
                                <img src="/direction_card_bg.png" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <Lightbulb className="text-teal mb-8" size={48} />
                                <h3 className="text-3xl font-black mb-6">Direction</h3>
                                <p className="text-lg text-beige/70 font-light leading-relaxed">
                                    We partner with organizations to elevate human potential, streamline operational performance, and deliver data-driven solutions that lead to sustainable success. Through collaboration, innovation, and a deep commitment to impact, we help our clients thrive in a dynamic world.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-32 bg-beige/20 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">PRINCIPLES // HOW_WE_WORK</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-navy">
                            Our <span className="text-teal font-serif italic">Values.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {[
                            { title: "We Redefine Performance", num: "01", desc: "We don’t optimize average — we unlock exceptional. We challenge norms, elevate standards, and drive breakthrough results.", img: "/value_1_bg.png" },
                            { title: "Courageous Transformation", num: "02", desc: "We lean into complexity. Real transformation requires bold thinking, decisive action, and the confidence to disrupt what no longer works.", img: "/value_2_bg.png" },
                            { title: "Accountability to Outcomes", num: "03", desc: "Impact isn’t optional. We measure what matters and stand behind the results we deliver to ensure strategic ROI.", img: "/value_3_bg.png" },
                            { title: "Human-Centered Innovation", num: "04", desc: "Technology and data power progress — but people drive it. We design solutions where human potential meets intelligent systems.", img: "/value_4_bg.png" },
                            { title: "Built for What’s Next", num: "05", desc: "The future rewards agility. We help organizations adapt, evolve, and lead with clarity in dynamic environments.", img: "/value_5_bg.png" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={`group relative overflow-hidden rounded-[4rem] p-12 min-h-[400px] flex flex-col justify-end transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-navy/5 ${i === 3 ? 'md:col-span-1 lg:col-span-2' : ''}`}
                            >
                                {/* Background Image with Gradient Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img src={item.img} alt="" className="w-full h-full object-cover opacity-10 group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000 grayscale group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent group-hover:from-white/10 transition-colors duration-700"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="text-sm font-mono font-black text-teal/40 group-hover:text-teal transition-colors tracking-[0.3em]">VAL_PRTL_{item.num}</span>
                                        <span className="text-4xl font-black text-navy/5 group-hover:text-navy/10 transition-colors">{item.num}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-navy mb-6 tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                                    <div className="w-12 h-1 bg-teal/20 mb-8 group-hover:w-24 group-hover:bg-teal transition-all duration-500"></div>
                                    <p className="text-navy/60 group-hover:text-navy text-lg font-medium leading-relaxed max-w-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Core Services - Overview */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase mb-6 block">CAPABILITIES // CORE_SERVICES</span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-navy">
                            Core Services <br /> <span className="text-teal font-serif italic">Overview.</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                num: "01",
                                title: "Team Development",
                                subtitle: "Build Aligned, High-Performing Teams",
                                challenge: "Silos. Misalignment. Low ownership. Conflict without resolution.",
                                approach: "Interactive experiential workshops that reveal team dynamics in real time — followed by structured reflection and strategic alignment conversations.",
                                btn: "Strengthen Your Teams",
                                link: "/services/team-development",
                                icon: <Users size={32} />
                            },
                            {
                                num: "02",
                                title: "Leadership Development",
                                subtitle: "Develop Leaders Who Drive Strategic Impact",
                                challenge: "Technically strong managers who struggle to lead transformation.",
                                approach: "Experiential leadership labs that challenge decision-making, influence, adaptability, and emotional intelligence — not through lectures, but lived experience.",
                                btn: "Develop Stronger Leaders",
                                link: "/services/leadership-development",
                                icon: <Award size={32} />
                            },
                            {
                                num: "03",
                                title: "Executive & Performance Coaching",
                                subtitle: "Unlock Leadership Potential at the Individual Level",
                                challenge: "High-performing leaders plateau without structured reflection and challenge.",
                                approach: "1:1 coaching integrated with experiential diagnostics and behavioral insight tools.",
                                btn: "Explore Coaching",
                                link: "/services/coaching",
                                icon: <Target size={32} />
                            },
                            {
                                num: "04",
                                title: "Individual Development",
                                subtitle: "Strengthen Emerging & High-Potential Talent",
                                challenge: "Talent with capability but lacking confidence, communication, or ownership mindset.",
                                approach: "Immersive learning experiences that surface strengths, blind spots, and growth opportunities in action.",
                                btn: "Develop Talent",
                                link: "/services/individual-development",
                                icon: <TrendingUp size={32} />
                            },
                            {
                                num: "05",
                                title: "Organizational Effectiveness",
                                subtitle: "Align Culture, Strategy & Leadership",
                                challenge: "Great strategy. Poor alignment. Cultural friction.",
                                approach: "System-level experiential interventions that uncover misalignment and create clarity at scale.",
                                btn: "Transform Your Organization",
                                link: "/services/organizational-effectiveness",
                                icon: <Globe size={32} />
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden bg-white border border-navy/10 rounded-[3rem] p-10 md:p-14 hover:shadow-2xl hover:border-teal/30 transition-all duration-700"
                            >
                                {/* Background Image for Core Service List Item */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 scale-105 transition-all duration-1000">
                                    <img
                                        src={
                                            service.title === "Team Development" ? "/team_development_abstract.png" :
                                                service.title === "Leadership Development" ? "/leadership_development_abstract.png" :
                                                    service.title === "Executive & Performance Coaching" ? "/executive_coaching_abstract.png" :
                                                        service.title === "Individual Development" ? "/individual_development_abstract.png" :
                                                            "/org_effectiveness_abstract.png"
                                        }
                                        alt=""
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
                                </div>

                                <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
                                    <div className="lg:col-span-4">
                                        <div className="flex items-center space-x-6 mb-6">
                                            <span className="text-4xl md:text-5xl font-black text-navy/10 group-hover:text-teal transition-colors duration-500">{service.num}</span>
                                            <div className="w-20 h-20 rounded-2xl bg-beige/50 backdrop-blur-sm flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all duration-500">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-black text-navy mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                                        <p className="text-teal font-black text-lg group-hover:text-navy transition-colors">{service.subtitle}</p>
                                    </div>
                                    <div className="lg:col-span-5 space-y-6">
                                        <div className="group/item">
                                            <h4 className="text-xs font-black text-navy uppercase tracking-[0.2em] mb-2">The Challenge:</h4>
                                            <p className="text-navy/60 font-bold group-hover:text-navy/80 transition-colors leading-relaxed">{service.challenge}</p>
                                        </div>
                                        <div className="group/item">
                                            <h4 className="text-xs font-black text-navy uppercase tracking-[0.2em] mb-2">Our Approach:</h4>
                                            <p className="text-navy/60 font-bold group-hover:text-navy/80 transition-colors leading-relaxed">{service.approach}</p>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 lg:text-right">
                                        <Link
                                            to={service.link}
                                            className="inline-flex items-center justify-center space-x-3 bg-navy text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-teal transition-all w-full lg:w-auto text-center group/btn shadow-xl shadow-navy/10"
                                        >
                                            <span>{service.btn}</span>
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Closing Block */}
            <section className="py-32 bg-teal text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000')] mix-blend-overlay opacity-10 object-cover"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                            Real Growth Happens Through <br /> <span className="font-serif italic text-navy">Experience, Not Information.</span>
                        </h2>
                        <p className="text-2xl font-medium mb-12 text-white/90">
                            Our experiential methodologies create insight, accountability, and behavioral change — not just awareness.
                        </p>
                        <p className="text-xl font-bold mb-10 text-navy">
                            Ready to design a high-impact development journey?
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center space-x-4 bg-navy text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-2xl hover:shadow-white/20"
                        >
                            <span>Book a Strategy Conversation</span>
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 9. Credentials */}
            <section className="py-24 bg-beige/20 border-t border-navy/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-teal uppercase block">TRUST // CREDENTIALS</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {[
                            "SHRM-SCP",
                            "Gallup Strengths Certified Coach",
                            "MTa Licensed User",
                            "Hogan Assessor",
                            "The Leadership Challenge"
                        ].map((cred, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-navy/5 px-8 py-4 rounded-2xl shadow-lg shadow-navy/5 flex items-center space-x-3 hover:border-teal/30 hover:shadow-xl transition-all"
                            >
                                <Award className="text-teal" size={20} />
                                <span className="font-bold text-navy/80 text-sm md:text-base tracking-wide">{cred}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
