import { motion } from 'framer-motion';
import { Target, Users, Globe, Zap, ShieldCheck, ArrowRight, CheckCircle2, Award, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white">
            {/* 1. About Us (Hero) */}
            <section className="bg-navy pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <span className="px-6 py-2 rounded-full border border-teal/60 text-teal text-[10px] font-mono font-bold tracking-[0.4em] uppercase bg-black/40 backdrop-blur-xl animate-status-beat">
                            INTRODUCTION // ABOUT_US
                        </span>
                    </motion.div>

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

            {/* Extended About Us Text */}
            <section className="py-24 bg-white relative overflow-hidden border-b border-navy/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8 text-lg md:text-xl text-navy/70 font-light leading-relaxed font-medium"
                        >
                            <p>
                                The word <strong>Meta</strong> means <span className="text-teal italic">beyond</span>. And that is exactly how we approach HR. We look beyond policies, processes, and job descriptions to understand what truly drives people. Because at the heart of every successful organization are individuals with untapped potential, unique strengths, and the capacity to achieve greatness when supported effectively.
                            </p>
                            <p>
                                Meta HR is a leadership and organizational effectiveness partner that helps businesses strengthen leadership capability, build cohesive teams, and align culture with strategy to accelerate measurable performance outcomes.
                            </p>
                        </motion.div>
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
                            className="bg-navy rounded-[3rem] p-12 text-white relative shadow-3xl shadow-navy/20"
                        >
                            <h3 className="text-2xl font-bold mb-8 tracking-tight">At MetaHR, we focus on:</h3>
                            <ul className="space-y-6">
                                {[
                                    "Unlocking and developing individual potential",
                                    "Creating engaging and high-performance work environments",
                                    "Aligning people strategy with business objectives",
                                    "Strengthening leadership and team collaboration",
                                    "Building scalable, sustainable HR foundations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="text-teal shrink-0 mt-1 mr-4" size={24} />
                                        <span className="text-lg font-light text-beige/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
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
                            { title: "Startups", desc: "A startup building your HR function from the ground up", icon: <Zap size={32} /> },
                            { title: "Growing Companies", desc: "A growing company refining systems and strengthening culture", icon: <TrendingUp size={32} /> },
                            { title: "Established Orgs", desc: "An established organization scaling your people strategy", icon: <Globe size={32} /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-[3rem] shadow-xl shadow-navy/5 border border-navy/5"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-8">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-navy">Whether you are:</h4>
                                <p className="text-lg text-navy/60 leading-relaxed">{item.desc}</p>
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
                            className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm lg:col-span-1"
                        >
                            <Target className="text-teal mb-8" size={40} />
                            <h3 className="text-3xl font-black mb-6">Purpose</h3>
                            <p className="text-lg text-beige/70 font-light leading-relaxed">
                                To be the partner of choice for organizations—unlocking excellence in their people, inspiring transformation in their operations, and delivering meaningful, measurable outcomes.
                            </p>
                        </motion.div>

                        {/* Direction */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm lg:col-span-2"
                        >
                            <Lightbulb className="text-teal mb-8" size={40} />
                            <h3 className="text-3xl font-black mb-6">Direction</h3>
                            <p className="text-lg text-beige/70 font-light leading-relaxed">
                                We partner with organizations to elevate human potential, streamline operational performance, and deliver data-driven solutions that lead to sustainable success. Through collaboration, innovation, and a deep commitment to impact, we help our clients thrive in a dynamic world.
                            </p>
                        </motion.div>
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
                                className="bg-white border border-navy/10 rounded-[3rem] p-10 md:p-14 hover:shadow-2xl hover:border-teal/30 transition-all duration-500 group"
                            >
                                <div className="grid lg:grid-cols-12 gap-10 items-center">
                                    <div className="lg:col-span-4">
                                        <div className="flex items-center space-x-6 mb-6">
                                            <span className="text-4xl md:text-5xl font-black text-navy/10 group-hover:text-teal transition-colors duration-500">{service.num}</span>
                                            <div className="w-16 h-16 rounded-2xl bg-beige/50 flex items-center justify-center text-teal">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-black text-navy mb-2 tracking-tight">{service.title}</h3>
                                        <p className="text-teal font-medium text-lg">{service.subtitle}</p>
                                    </div>
                                    <div className="lg:col-span-5 space-y-6">
                                        <div>
                                            <h4 className="text-sm font-bold text-navy uppercase tracking-widest mb-2">The Challenge:</h4>
                                            <p className="text-navy/60 font-medium">{service.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-navy uppercase tracking-widest mb-2">Our Approach:</h4>
                                            <p className="text-navy/60 font-medium">{service.approach}</p>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-3 lg:text-right">
                                        <Link
                                            to={service.link}
                                            className="inline-flex items-center justify-center space-x-3 bg-navy text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-teal transition-colors w-full lg:w-auto text-center"
                                        >
                                            <span>{service.btn}</span>
                                            <ArrowRight size={18} />
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
